import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiPlayer } from './apiPlayer';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://rest.nbaapi.com';
  private playersSubject = new BehaviorSubject<ApiPlayer[]>([]); // Initial empty array
  players$ = this.playersSubject.asObservable(); // Observable to share player data

  constructor(private http: HttpClient) {}

  // Method to fetch data for multiple players
  loadPlayersData(playerNames: string[]): void {
    const players: ApiPlayer[] = [];
    playerNames.forEach((name) => {
      this.getPlayerData(name).subscribe({
        next: (data) => {
          players.push(...data);
          this.playersSubject.next(players); // Update the shared players data
        },
        error: (error) => {
          console.error(`Error fetching data for ${name}:`, error);
        }
      });
    });
  }

  // Fetch data for a single player
  private getPlayerData(playerName: string): Observable<ApiPlayer[]> {
    return this.http.get<ApiPlayer[]>(`${this.apiUrl}/api/PlayerDataTotals/name/${playerName}`);
  }
}
