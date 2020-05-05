import { LitElement, html, css } from 'lit-element/lit-element.js';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class DateCardDetails extends LitElement {

    static get tag() {
        return 'date-card-details';
    }

    static get properties() {
        return {
            month: { type: String },
            date: { type: Number },
            day: { type: String },
            title: { type: String },
            startTime: { type: String },
            endTime: { type: String },
            location: { type: String },
            uniformPadding: { type: String, attribute: 'uniform-padding' },
        };
    }

    constructor() {
        super();
        this.month = "May";
        this.date = 1;
        this.day = "Friday";
        this.title = ""
        this.startTime = "4 PM";
        this.endTime = "5 PM";
        this.location = "Cafe, Room 210 West";
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
        text-transform: uppercase;
        font-family: roboto;
        line-height: 16px;
        margin-bottom: 8px !important;
      }
      .month {
        color: white;
        font-weight: 400;
        font-size: 1em;
      }
      .dateNumber {
        font-size: 20px
      }
      .monthSection {
        background-color: var(--simple-colors-default-theme-blue-5);
        border: 1px solid var(--simple-colors-default-theme-blue-2);
        border-radius: 10px 10px 0px 0px;
      }
    `;
    }

    render() {
        return html `
      <div class="card">
        <simple-colors dark>
          <div class="monthSection">
            <p class="month"><b>${this.month}</b></p>
          </div>
          <div class="dateSection">
            <p class="dateNumber">${this.date}</p>
            <p class="dayName">${this.day}</p>
          </div>
        </simple-colors>
      </div><span class="title">Things and stuff</span>
    `;
    }
}
export default { DateCardDetails };
window.customElements.define(DateCardDetails.tag, DateCardDetails);