import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerComponent } from '../player/player.component';
import { Player } from '../player';
import { PlayerDataService } from '../player-data.service';
import { HomeComponent } from '../home/home.component';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-player-details',
  standalone: true,
  imports: [PlayerComponent, HomeComponent, MatTableModule],
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.css'
})
export class PlayerDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  playerDataService: PlayerDataService = inject(PlayerDataService);
  player: Player | undefined;

  constructor() {
    const id = parseInt(this.route.snapshot.params['playerId'], 10);
    this.player = this.playerDataService.getPlayerById(id);
  }
}
