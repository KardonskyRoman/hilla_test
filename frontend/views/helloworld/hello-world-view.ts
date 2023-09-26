import "@vaadin/button";
import "@vaadin/notification";
import "@vaadin/text-field";
import "@vaadin/text-field";

import { Binder, field } from "@hilla/form";

import AddressModel from "Frontend/generated/com/example/application/model/AddressModel.js";
import DeclarantModel from "Frontend/generated/com/example/application/model/DeclarantModel.js";
import OrganizationModel from "Frontend/generated/com/example/application/model/OrganizationModel.js";
import Project from "Frontend/generated/com/example/application/model/Project.js";
import ProjectModel from "Frontend/generated/com/example/application/model/ProjectModel.js";
import { View } from "../../views/view.js";
import { customElement } from "lit/decorators.js";
import { html } from "lit";
import { repeat } from "lit/directives/repeat.js";

@customElement("hello-world-view")
export class HelloWorldView extends View {
  private binder = new Binder<Project, ProjectModel>(
    this,
    ProjectModel
  );

  constructor() {
    super();
    this.clearForm();
  }

  private clearForm() {
    this.binder.clear();
    const project = ProjectModel.createEmptyValue();
    const declarant = DeclarantModel.createEmptyValue();
    declarant.organization = OrganizationModel.createEmptyValue();
    declarant.organization.address = AddressModel.createEmptyValue();
    declarant.organization.address.country = "";
    project.declarants = [declarant];
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
                label="Страна"
                ...=${field(declarant.model.organization.address.country)}
              ></vaadin-text-field>
            `
          )
        : ""}
    `;
  }
}
