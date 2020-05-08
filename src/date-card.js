import { LitElement, html, css } from 'lit-element/lit-element.js';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';
//import { HAXWiring } from "@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js";


const nth = function(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}

export class DateCard extends LitElement {

    static get tag() {
        return 'date-card';
    }

    static get properties() {
        return {
            month: { type: String },
            date: { type: String },
            day: { type: String },
            title: { type: String },
            startTime: { type: String },
            endTime: { type: String },
            location: { type: String },
            borderSpacing: { type: Number }
        };
    }

    constructor() {
        super();
        this.month = 'specify month=';
        this.date = 'specify date=';
        this.day = "specify day=";
        this.borderSpacing = 5;
    }



    static get styles() {
        return css `
      :host {
        display: inline-flex;
      }
      .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        width: var(--date-card-card-width, 100px);
        border-radius: 10px;

      }
      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        border-radius: 10px;
      }
      .month, .dateNumber, .dayName {
        text-align: center;
        vertical-align: middle;
        font-family: roboto;
        line-height: 16px;
        margin-bottom: 8px;
        margin-top: 15px;
        margin-bottom: 15px;
      }
      .month {
        color: white;
        font-weight: 400;
        font-size: 1em;
        text-transform: uppercase;
      }
      .dateNumber {
        font-size: 20px
      }
      .dayName {
        text-transform: uppercase;
      }
      .monthSection {
        background-color: var(--simple-colors-default-theme-blue-5);
        border: 1px solid var(--simple-colors-default-theme-blue-2);
        border-radius: 10px 10px 0px 0px;
      }
      .details {
          border-layout: square;
          border: 2px solid var(--simple-colors-default-theme-blue-2);
          padding: 4px;
      }
      .title, .time, .location {
        vertical-align: middle;
        font-family: roboto;
        line-height: 16px;
        margin-bottom: 8px;
      }
      .title {
          font-size: 22px;
          color: var(--simple-colors-default-theme-blue-5);
      }
      .time {
          font-size: 18px;
          color: var(--simple-colors-default-theme-grey-7);
      }
      .location {
          font-size: 18px;
          color: var(--simple-colors-default-theme-grey-8);
      }
    `;
    }

    render() {
            return html `
      <div class="card" style="margin:${this.borderSpacing}px;">
        <simple-colors dark>
          <div class="monthSection">
            <p class="month"><b>${this.month}</b></p>
          </div>
          <div class="dateSection">
            <p class="dateNumber">${this.date}<sup>${nth(this.date)}</sup></p>
            <p class="dayName">${this.day}</p>
          </div>
        </simple-colors>
      </div>${this.title ? html`
        <span class="details" style="margin:${this.borderSpacing}px;">
          <p class="title">${this.title}</p>
          <p class="time">${this.day}, ${this.month} ${this.date}${nth(this.date)} ${this.startTime ? html`${this.endTime ? html`from ${this.startTime} - ${this.endTime}</p>`: html`at ${this.startTime}</p>`}` : html`</p>`}
          ${this.location ? html`<p class="location">${this.location}</p></span>`: html`</span>`}` : html``}`;
    }
}
export default { DateCard };
window.customElements.define(DateCard.tag, DateCard);