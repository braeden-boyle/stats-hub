import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiPlayer } from './apiPlayer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://rest.nbaapi.com';

  constructor(private http: HttpClient) {}

  getPlayerData(playerName: string): Observable<ApiPlayer[]> {
    return this.http.get<ApiPlayer[]>(`${this.apiUrl}/api/PlayerDataTotals/name/${playerName}`);
  }
}
