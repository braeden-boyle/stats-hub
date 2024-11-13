import { Component, inject, OnInit } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { CommonModule, NgFor } from '@angular/common';
import { PlayerDataService } from '../player-data.service';
import { Player } from '../player';
import { MatIcon } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ApiService } from '../api.service';
import { ApiPlayer } from '../apiPlayer';

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
    this.apiService.players$.subscribe((players) => {
      this.players = players;
    });
    this.apiService.loadPlayersData(this.playerNames);

    this.downloadPlayerData();
  }
  
  downloadPlayerData() {
    const dataStr = JSON.stringify(this.players, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const link = document.createElement('a');
    const url = window.URL.createObjectURL(blob);
    
    link.href = url;
    link.download = 'players-data.json';
    link.click();
    
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
