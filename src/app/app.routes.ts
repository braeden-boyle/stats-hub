import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'player/:playerId',
        component: PlayerDetailsComponent,
        title: 'Player Details'
    }
];
