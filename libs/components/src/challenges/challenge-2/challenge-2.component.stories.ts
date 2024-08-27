import { Challenge2Component } from './challenge2.component';
import { html } from 'lit';

const component = new Challenge2Component();

export default {
  title: 'Challenges/Challenge 2',
  component: component.tagName,
  parameters: {
    docs: {
      description: {
        component:
          'This is a simple challenge component that displays an alert.',
      },
    },
  },
};

export const Default = () => component;

export const WithTitle = {
  render: () =>
    html`<challenge-2><div slot="title">Alternative title</div></challenge-2>`,
};

export const WithContent = {
  render: () =>
    html`<challenge-2><div slot>Alternative content</div></challenge-2>`,
};

export const WithTitleAndContent = {
  render: () =>
    html`<challenge-2>
      <div slot="title">Alternative title</div>
      <div slot>Alternative content</div>
    </challenge-2>`,
};
