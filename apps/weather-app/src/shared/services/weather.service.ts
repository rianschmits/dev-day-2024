import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  private apiKey = '04422371861aad5e09c1f81f0695cdcf';

  readonly #http: HttpClient = inject(HttpClient);

  getWeather(city: string): Observable<any> {
    return this.#http
      .get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`)
      .pipe(
        catchError((error) => {
          console.error('Error fetching weather data:', error);
          return throwError(
            () => new Error('Failed to fetch weather data. Please try again.'),
          );
        }),
      );
  }
}
