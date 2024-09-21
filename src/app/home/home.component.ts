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
  playerList: Player[] = [];
  playerDataService: PlayerDataService = inject(PlayerDataService);

  constructor() {
    this.playerList = this.playerDataService.getAllPlayers();
  }
}
