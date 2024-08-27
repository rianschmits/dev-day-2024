import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';
import { WeatherDisplayComponent } from '../features/weather-display/weather-display.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [RouterModule, WeatherDisplayComponent, HttpClientModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WeatherService, HttpClientModule],
})
export class AppComponent {
  readonly #weatherService = inject(WeatherService);
}
