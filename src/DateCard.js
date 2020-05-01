import { LitElement, html, css } from 'lit-element/lit-element.js';
//import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";

export class DateCard extends LitElement {

  static get tag() {
    return 'date-card';
  }

  static get properties() {
    return {
      month: { type: String },
      date: { type: Number },
      day: { type: String },
      uniformPadding: { type: String, attribute: 'uniform-padding' },
    };
  }

  constructor() {
    super();
    this.month = "May";
    this.date = 1;
    this.day = "Friday";
    this.uniformPadding = '2';
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        width: var(--date-card-card-width, 100px);
      }
      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }
      .container {
        height: 95%;
        width: 95%;
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <div class="container">
          <div class="monthSection">
            <h3 class="month"><b>${this.month}</b></h3>
          </div>
          <div class="dateSection">
            <h3 class="dateNumber">${this.date}</h3>
            <p class="dayName">${this.day}</p>
          </div>
        </div>
      </div>
    `;
  }
}

export default { DateCard };
window.customElements.define(DateCard.tag, DateCard);