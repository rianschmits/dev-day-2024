import { Challenge3Component } from './challenge3.component';
import { html } from 'lit';

const component = new Challenge3Component();

export default {
  title: 'Challenges/Challenge 3',
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

export const Primary = {
  render: () => html`<challenge-3 variant="primary"></challenge-3>`,
};

export const Success = {
  render: () => html`<challenge-3 variant="success"></challenge-3>`,
};

export const Neutral = {
  render: () => html`<challenge-3 variant="neutral"></challenge-3>`,
};

export const Warning = {
  render: () => html`<challenge-3 variant="warning"></challenge-3>`,
};

export const Danger = {
  render: () => html`<challenge-3 variant="danger"></challenge-3>`,
};
