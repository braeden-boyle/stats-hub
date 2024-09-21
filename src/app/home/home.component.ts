import { Component, inject } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { CommonModule } from '@angular/common';
import { PlayerDataService } from '../player-data.service';
import { Player } from '../player';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlayerComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  playerDataService: PlayerDataService = inject(PlayerDataService);
  playerList: Player[] = [];
  filteredPlayerList: Player[] = [];

  constructor() {
    this.playerList = this.playerDataService.getAllPlayers();
    this.filteredPlayerList = this.playerList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredPlayerList = this.playerList;
      return;
    }

    this.filteredPlayerList = this.playerList.filter((player) => 
      player?.name.toLowerCase().includes(text.toLowerCase())
    )
  }
}
