import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('weather-widget')
export class WeatherWidgetComponent extends LitElement {
  static override styles = css`
    .widget {
      padding: 20px;
      border-radius: 10px;
      background-color: #f0f0f0;
      text-align: center;
      width: 200px;
      font-family: Arial, sans-serif;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      margin: 20px auto;
    }
    .city {
      font-size: 1.5em;
      font-weight: bold;
      color: #333;
      margin-bottom: 10px;
    }
    .temperature {
      font-size: 3em;
      font-weight: bold;
      color: #007bff;
      margin-bottom: 10px;
    }
    .description {
      font-size: 1.2em;
      text-transform: capitalize;
      color: #666;
    }
    img {
      background-color: #fff;
    }
  `;

  @property({ type: String }) city = 'London';

  @property({ type: Number }) temperature = 0;

  @property({ type: String }) description = '';

  @property({ type: String }) icon = '';

  override render() {
    return html`
      <div class="widget">
        <h2>${this.city}</h2>
        <div class="temperature">${this.temperature}°C</div>
        <img
          src="http://openweathermap.org/img/wn/${this.icon}.png"
          alt="weather icon"
        />
        <div class="description">${this.description}</div>
      </div>
    `;
  }
}
