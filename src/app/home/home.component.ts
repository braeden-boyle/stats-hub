import { Component } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { Player } from '../player';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlayerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  player: Player = {
    name: "LeBron James",
    team: "Los Angeles Lakers",
    jersey_num: 23,
    age: 39,
    hometown: "Akron, OH",
    photo: `https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254`
  }
}
