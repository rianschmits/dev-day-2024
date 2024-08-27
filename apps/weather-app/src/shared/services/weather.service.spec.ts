import { WeatherService } from './weather.service';
import { TestBed } from '@angular/core/testing';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return weather data', () => {
    service.getWeather('London').subscribe((data) => {
      console.log(data);
      expect(data).toBeDefined();
    });
  });

  it('should return weather data for London', () => {
    service.getWeather('London').subscribe((data) => {
      expect(data.name).toBe('London');
    });
  });
});
