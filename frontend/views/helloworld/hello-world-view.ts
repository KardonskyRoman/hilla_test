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
  GridDataProviderCallback,
  GridDataProviderParams,
} from "@vaadin/grid";
import { customElement, query, state } from "lit/decorators.js";

import { DirectiveResult } from "lit/directive.js";
import ProjectModel from "Frontend/generated/com/example/application/model/ProjectModel.js";
import { View } from "../../views/view.js";
import { columnBodyRenderer } from "@vaadin/grid/lit.js";
import { html } from "lit";

@customElement("hello-world-view")
export class HelloWorldView extends View {

  @state()
  private items: Array<{ name: string; status: boolean }> = [
    {
      name: "John",
      status: true,
    },
    {
      name: "Mike",
      status: true,
    },
  ];

  @query("#grid")
  private grid!: Grid;

  private gridDataProvider = this.dataProvider.bind(this);

  render() {
    return html`
      <vaadin-grid id="grid" .dataProvider="${this.gridDataProvider}">
        <vaadin-grid-column path="name"></vaadin-grid-column>
        <vaadin-grid-column path="status"></vaadin-grid-column>
        <vaadin-grid-column
          header="Status"
          ${columnBodyRenderer<Record<string, string | boolean>>(
            (item) => html`
              <vaadin-checkbox
                .checked=${Boolean(item.status)}
                @click=${async (e: MouseEvent) => {
                  item.status = (e.target as HTMLInputElement).checked;
                  this.grid.clearCache();
                }}
              >
              </vaadin-checkbox>
            `,
            []
          ) as DirectiveResult}
        ></vaadin-grid-column>
      </vaadin-grid>
    `;
  }

  async dataProvider(
    params: GridDataProviderParams<any>,
    callback: GridDataProviderCallback<any>
  ) {
    const result = this.items?.filter((item) => {
      return item.status == true;
    });
    console.log({ result, grid: this.grid });
    callback(result ?? [], result?.length);
  }
}
