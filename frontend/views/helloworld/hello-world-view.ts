import "@vaadin/button";
import "@vaadin/notification";
import "@vaadin/text-field";
import "@vaadin/text-field";
import "@vaadin/date-picker";

import { Binder, field } from "@hilla/form";

import PreviousConclusionsModel from "Frontend/generated/com/example/application/model/PreviousConclusionsModel.js";
import PreviousSimpleConclusionsModel from "Frontend/generated/com/example/application/model/PreviousSimpleConclusionsModel.js";
import Project from "Frontend/generated/com/example/application/model/Project.js";
import ProjectModel from "Frontend/generated/com/example/application/model/ProjectModel.js";
import { View } from "../../views/view.js";
import { customElement } from "lit/decorators.js";
import { html } from "lit";
import { repeat } from "lit/directives/repeat.js";

@customElement("hello-world-view")
export class HelloWorldView extends View {
  private binder = new Binder<Project, ProjectModel>(this, ProjectModel);

  constructor() {
    super();
    this.clearForm();
  }

  private clearForm() {
    this.binder.clear();
    const project = ProjectModel.createEmptyValue();
    this.binder.read(project);
  }

  connectedCallback() {
    super.connectedCallback();
    this.classList.add("flex", "p-m", "gap-m", "items-end");
  }

  render() {
    return html`
      ${this.binder.value?.declarants
        ? repeat(
            this.binder.model.declarants,
            (declarant) => html`
              <vaadin-text-field
                class="w-full"
                label="Country"
                ...=${field(declarant.model.organization.address.country)}
              ></vaadin-text-field>
            `
          )
        : ""}
      <vaadin-button
        @click=${() => {
          if (!this.binder.value.declarants) {
            this.binder.value.declarants = [];
          }
          this.binder.for(this.binder.model.declarants).appendItem();
          this.requestUpdate();
        }}
      >
        Add declarant
      </vaadin-button>
      ${this.binder.value.cadastralNumber
        ? repeat(
            this.binder.model.cadastralNumber,
            (cadastralNumber) => html`
              <vaadin-vertical-layout>
                <vaadin-text-field
                  class="w-full"
                  required
                  label="Number"
                  ...=${field(cadastralNumber.model)}
                ></vaadin-text-field>
              </vaadin-vertical-layout>
            `
          )
        : ""}
      <vaadin-button
        @click=${() => {
          if (!this.binder.value.cadastralNumber) {
            this.binder.value.cadastralNumber = [];
          }
          this.binder.for(this.binder.model.cadastralNumber).appendItem();
          this.requestUpdate();
        }}
      >
        Add number
      </vaadin-button>

      ${this.binder.value.previousConclusions?.previousConclusion
        ? repeat(
            this.binder.model.previousConclusions.previousConclusion,
            (previousConclusion) => html` <vaadin-vertical-layout>
              <vaadin-date-picker
                required
                label="Date 1"
                ${field(previousConclusion.model.date)}
              ></vaadin-date-picker>
            </vaadin-vertical-layout>`
          )
        : ""}
      <vaadin-button
        @click=${() => {
          if (!this.binder.value.previousConclusions) {
            this.binder.value.previousConclusions =
              PreviousConclusionsModel.createEmptyValue();
            this.binder.value.previousConclusions.previousConclusion = [];
          }
          this.binder
            .for(this.binder.model.previousConclusions.previousConclusion)
            .appendItem();

          this.requestUpdate();
        }}
      >
        Add 1
      </vaadin-button>

      ${this.binder.value.previousSimpleConclusions?.previousSimpleConclusion
        ? repeat(
            this.binder.model.previousSimpleConclusions
              .previousSimpleConclusion,
            (previousSimpleConclusion) => html`
              <vaadin-vertical-layout>
                <vaadin-date-picker
                  required
                  label="Date 2"
                  ${field(previousSimpleConclusion.model.date)}
                ></vaadin-date-picker>
              </vaadin-vertical-layout>
            `
          )
        : ""}
      <vaadin-button
        @click=${() => {
          if (!this.binder.value.previousSimpleConclusions) {
            this.binder.value.previousSimpleConclusions =
              PreviousSimpleConclusionsModel.createEmptyValue();
            this.binder.value.previousSimpleConclusions.previousSimpleConclusion =
              [];
          }
          this.binder
            .for(
              this.binder.model.previousSimpleConclusions
                .previousSimpleConclusion
            )
            .appendItem();

          this.requestUpdate();
        }}
      >
        Add 2
      </vaadin-button>
    `;
  }
}
