import { customElement } from 'lit/decorators.js';
import { html, LitElement } from 'lit';

@customElement('challenge-2')
export class Challenge2Component extends LitElement {
  override render() {
    return html`<h1><slot name="title">Challenge 2</slot></h1>
      <div><slot>Nothing fancy here, just a simple alert.</slot></div>`;
  }
}
