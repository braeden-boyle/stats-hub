import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerComponent } from '../player/player.component';
import { Player } from '../player';

@Component({
  selector: 'app-player-details',
  standalone: true,
  imports: [PlayerComponent, ],
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.css'
})
export class PlayerDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
}
