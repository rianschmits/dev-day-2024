import { WeatherWidgetComponent } from './weather-widget.component';
import { html } from 'lit';

const component = new WeatherWidgetComponent();

export default {
  title: 'Weather Widget',
  component: component.tagName,
  parameters: {
    docs: {
      description: {
        component:
          'This is a simple weather widget component that displays the weather information for a city.',
      },
    },
  },
};

export const Default = () => component;

export const WithCity = {
  render: () => html`<weather-widget city="Enschede"></weather-widget>`,
};

export const WithTemperature = {
  render: () => html`<weather-widget temperature="20"></weather-widget>`,
};

export const WithDescription = {
  render: () => html`<weather-widget description="clear sky"></weather-widget>`,
};

export const WithCityTemperatureAndDescription = {
  render: () =>
    html`<weather-widget
      city="Enschede"
      temperature="20"
      description="clear sky"
    ></weather-widget>`,
};
