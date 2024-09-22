import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {

  constructor() {}

  playerList: Player[] = [
    {
      playerId: 1,
      name: "LeBron James",
      team: "Los Angeles Lakers",
      jersey_num: 23,
      birthday: "12/30/1984",
      hometown: "Akron, OH",
      photo: `https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254`
    },
    {
      playerId: 2,
      name: "Scottie Barnes",
      team: "Toronto Raptors",
      jersey_num: 4,
      birthday: "08/01/2001",
      hometown: "West Palm Beach, FL",
      photo: `https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4433134.png&w=350&h=254`
    }
  ]

  private baseUrl = "";

  getAllPlayers(): Player[] {
    return this.playerList;
  }

  getPlayerById(id: number): Player | undefined {
    return this.playerList.find((player) => player.playerId === id);
  }

  getPlayerByName(name: string): Player | undefined {
    return this.playerList.find((player) => player.name.toLowerCase() === name.toLowerCase())
  }
}
