import { Component, inject, OnInit } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { CommonModule, NgFor } from '@angular/common';
import { PlayerDataService } from '../player-data.service';
import { Player } from '../player';
import { MatIcon } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ApiService } from '../api.service';
import { ApiPlayer } from '../apiPlayer';
import { error } from 'console';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlayerComponent, CommonModule, MatIcon, MatTabsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  playerNames = ['LeBron James', 'Stephen Curry', 'Kevin Durant'];
  players: ApiPlayer[] = [];
  playerDataService: PlayerDataService = inject(PlayerDataService);
  playerList: Player[] = [];
  filteredPlayerList: Player[] = [];
  selectedLeague: string = 'nba';

  leagues: { index: number, league: string }[] = [
    { index: 0, league: 'nba' },
    { index: 1, league: 'nfl' },
    { index: 2, league: 'nhl' },
    { index: 3, league: 'mlb' },
  ];

  constructor(private apiService: ApiService) {
    this.playerList = this.playerDataService.getAllPlayers();
    this.filteredPlayerList = this.playerDataService.getAllPlayersFromLeague("nba");
  }

  ngOnInit(): void {
    this.loadPlayerData();
  }

  loadPlayerData(): void {
    this.playerNames.forEach((name) => {
      this.apiService.getPlayerData(name).subscribe({
        next: (data) => {
          this.players = [...this.players, ...data];
        },
        error: (error) => {
          console.error(`Error fetching data for ${name}:`, error);
        }
      });
    });

    this.downloadPlayerData();
  }
  
  downloadPlayerData() {
    // Convert players array to JSON string
    const dataStr = JSON.stringify(this.players, null, 2); // Pretty print with 2 spaces
  
    // Create a Blob with the data
    const blob = new Blob([dataStr], { type: 'application/json' });
  
    // Create a link element to trigger download
    const link = document.createElement('a');
    
    // Create a URL for the Blob
    const url = window.URL.createObjectURL(blob);
    
    // Set the download filename
    link.href = url;
    link.download = 'players-data.json'; // Set the desired file name
    
    // Trigger the download
    link.click();
    
    // Clean up: revoke the Object URL after download to avoid memory leaks
    window.URL.revokeObjectURL(url);
  }

  filterResults(text: string, event: any) {
    const league = this.leagues.find(l => l.index === event.index)?.league;
    if (league) {
      if (!text) {
        this.filteredPlayerList = this.playerDataService.getAllPlayersFromLeague(league);
        return;
      }
    }

    this.filteredPlayerList = this.playerList.filter((player) => 
      player?.name.toLowerCase().includes(text.toLowerCase()) &&
      player?.league == this.selectedLeague
    );
  }

  filterByLeague(target: string) {
    this.selectedLeague = target;
    this.filteredPlayerList = this.playerDataService.getAllPlayersFromLeague(target);
    console.log('Filtered by league:', target, this.filteredPlayerList);
  }

  onTabChange(event: any) {
    const league = this.leagues.find(l => l.index === event.index)?.league;
    if (league) {
      this.filterByLeague(league);
    }
  }
}
