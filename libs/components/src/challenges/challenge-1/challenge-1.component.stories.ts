import { Challenge1Component } from './challenge1.component';

const component = new Challenge1Component();

export default {
  title: 'Challenges/Challenge 1',
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
