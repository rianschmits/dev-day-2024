import { customElement, property } from 'lit/decorators.js';
import { css, html, LitElement } from 'lit';

class Variant {
  static readonly PRIMARY = 'primary';

  static readonly SUCCESS = 'success';

  static readonly NEUTRAL = 'neutral';

  static readonly WARNING = 'warning';

  static readonly DANGER = 'danger';
}

@customElement('challenge-3')
export class Challenge3Component extends LitElement {
  @property({ type: Variant }) variant: Variant = 'neutral';

  static override styles = css`
    :host {
      display: block;
      border: 1px solid #ddd;
      padding: 16px;
      border-radius: 8px;
      margin: 10px 0;
      position: relative;
    }

    :host([variant='primary']) {
      border-top: 4px solid blue;
    }

    :host([variant='success']) {
      border-top: 4px solid green;
    }

    :host([variant='neutral']) {
      border-top: 4px solid gray;
    }

    :host([variant='warning']) {
      border-top: 4px solid orange;
    }

    :host([variant='danger']) {
      border-top: 4px solid red;
    }

    .title {
      font-weight: bold;
      margin-bottom: 8px;
    }
  `;

  override render() {
    return html`<h1><slot name="title">Challenge 2</slot></h1>
      <div><slot>Nothing fancy here, just a simple alert.</slot></div>`;
  }
}
