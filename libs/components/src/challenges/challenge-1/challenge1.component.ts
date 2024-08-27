import { customElement } from 'lit/decorators.js';
import { html, LitElement } from 'lit';

@customElement('challenge-1')
export class Challenge1Component extends LitElement {
  override render() {
    return html`<div>Nothing fancy here, just a simple alert.</div>`;
  }
}
