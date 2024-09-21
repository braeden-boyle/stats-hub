import { Component, Input } from '@angular/core';
import { Player } from '../player';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  @Input() player!: Player;
}
