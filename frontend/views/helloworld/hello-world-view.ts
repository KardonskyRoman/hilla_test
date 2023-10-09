import "@vaadin/button";
import "@vaadin/notification";
import "@vaadin/text-field";
import "@vaadin/text-field";

import { Binder, field } from "@hilla/form";

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
            (cadastralNumber) => html` <vaadin-vertical-layout>
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
    `;
  }
}
