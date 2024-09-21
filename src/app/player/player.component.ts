import { Component, Input } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  @Input() player!: Player;
}