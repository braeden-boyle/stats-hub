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
      league: "nba",
      name: "LeBron James",
      team: "Los Angeles Lakers",
      jersey_num: 23,
      birthday: "12/30/1984",
      hometown: "Akron, OH",
      photo: `https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254`
    },
    {
      playerId: 2,
      league: "nba",
      name: "Scottie Barnes",
      team: "Toronto Raptors",
      jersey_num: 4,
      birthday: "08/01/2001",
      hometown: "West Palm Beach, FL",
      photo: `https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4433134.png&w=350&h=254`
    },
    {
      playerId: 3,
      league: "nfl",
      name: "CeeDee Lamb",
      team: "Dallas Cowboys",
      jersey_num: 88,
      birthday: "04/08/1999",
      hometown: "Richmond, TX",
      photo: `https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4241389.png&w=350&h=254`
    },
    {
      playerId: 4,
      league: "nhl",
      name: "Sidney Crosby",
      team: "Pittsburgh Penguins",
      jersey_num: 87,
      birthday: "08/07/1987",
      hometown: "Cole Harbour, NS",
      photo: `https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3114.png&w=350&h=254`
    }


  ]

  getAllPlayers(): Player[] {
    return this.playerList;
  }

  getPlayerById(id: number): Player | undefined {
    return this.playerList.find((player) => player.playerId === id);
  }

  getPlayerByName(name: string): Player | undefined {
    return this.playerList.find((player) => player.name.toLowerCase() === name.toLowerCase())
  }

  getAllPlayersFromLeague(targetLeague: string): Player[] {
    return this.playerList.filter(player => player.league == targetLeague);
  }
}
