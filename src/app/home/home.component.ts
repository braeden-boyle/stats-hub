import { Component, inject } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { CommonModule, NgFor } from '@angular/common';
import { PlayerDataService } from '../player-data.service';
import { Player } from '../player';
import { MatIcon } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlayerComponent, CommonModule, MatIcon, MatTabsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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

  constructor() {
    this.playerList = this.playerDataService.getAllPlayers();
    this.filteredPlayerList = this.playerDataService.getAllPlayersFromLeague("nba");
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
