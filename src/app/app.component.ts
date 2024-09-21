import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, MatIconModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: 'app.component.css'
})

export class AppComponent {
  title = 'stats-hub';
}
