import {
  Component,
  AfterViewInit,
  inject,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { WeatherService } from '../../shared/services';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  standalone: true,
  styles: [
    `
      .weather-input-container {
        text-align: center;
        margin-bottom: 20px;
      }
      input[type='text'] {
        padding: 8px;
        font-size: 1em;
        width: 200px;
        margin-right: 10px;
      }
      button {
        padding: 8px 12px;
        font-size: 1em;
        cursor: pointer;
      }
      .error-message {
        color: red;
        margin-top: 10px;
        text-align: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.Default,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, ReactiveFormsModule],
})
export class WeatherDisplayComponent implements OnInit {
  readonly #weatherService: WeatherService = inject(WeatherService);

  fb: FormBuilder = inject(FormBuilder);

  weatherForm: FormGroup = this.fb.group({
    city: ['London', Validators.required],
  });

  city = '';

  temperature = 0;

  description = '';

  icon = '';

  errorMessage = '';

  ngOnInit() {
    this.fetchWeather();
  }

  fetchWeather() {
    if (this.weatherForm.valid) {
      const city = this.weatherForm.get('city')?.value;
      this.#weatherService.getWeather(city).subscribe({
        next: (data) => {
          this.errorMessage = '';

          this.city = data.name;
          this.temperature = Math.round(data.main.temp);
          this.description = data.weather[0].description;
          this.icon = data.weather[0].icon;
        },
        error: (err) => {
          this.errorMessage = err.message; // Set the error message
        },
      });
    }
  }
}
