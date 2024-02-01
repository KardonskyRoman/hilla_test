import "@vaadin/button";
import "@vaadin/notification";
import "@vaadin/text-field";
import "@vaadin/text-field";
import "@vaadin/date-picker";
import "@vaadin/grid";
import "@vaadin/checkbox";

import { Binder, field } from "@hilla/form";
import {
  Grid,
  GridDataProvider,
  GridDataProviderCallback,
  GridDataProviderParams,
} from "@vaadin/grid";
import { customElement, query, state } from "lit/decorators.js";

import { DirectiveResult } from "lit/directive.js";
import { HelloWorldService } from "Frontend/generated/endpoints.js";
import Project from "Frontend/generated/com/example/application/model/Project.js";
import { View } from "../../views/view.js";
import { columnBodyRenderer } from "@vaadin/grid/lit.js";
import { html } from "lit";

@customElement("hello-world-view")
export class HelloWorldView extends View {
  @state()
  private items!: Project[];

  @query("#grid")
  private grid!: Grid;

  private gridDataProvider = this.dataProvider.bind(this);

  render() {
    return html`
      <vaadin-grid
        id="grid"
        .dataProvider="${this.gridDataProvider as GridDataProvider<any>}"
      >
        <vaadin-grid-column path="name"></vaadin-grid-column>
        <vaadin-grid-column path="status"></vaadin-grid-column>
        <vaadin-grid-column
          header="Status"
          ${columnBodyRenderer<Record<string, string | boolean>>(
            (item) => html`
              <vaadin-checkbox
                .checked=${Boolean(item.status)}
                @click=${async (e: MouseEvent) => {
                  await this.setItem(
                    String(item.name),
                    (e.target as HTMLInputElement).checked
                  );
                }}
              >
              </vaadin-checkbox>
            `,
            []
          ) as DirectiveResult}
        ></vaadin-grid-column>
      </vaadin-grid>
      <vaadin-button
        @click="${() => {
          this.grid.requestContentUpdate();
          this.grid.clearCache();
        }}"
        >Update</vaadin-button
      >
    `;
  }

  async setItem(name: string, status: boolean) {
    const index = this.items.findIndex((item) => item.name === name);
    await HelloWorldService.setProjectStatus(index, status);
  }

  async getItems() {
    this.items = await HelloWorldService.getProjects();
  }

  async dataProvider(
    params: GridDataProviderParams<any>,
    callback: GridDataProviderCallback<any>
  ) {
    await this.getItems();
    const result = this.items.filter((item) => {
      return item.status == true;
    });

    callback(result ?? [], result.length);
  }
}
