import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SidePanelComponent } from "../components/side-panel/side-panel.component";
import { HeaderComponent } from "../components/header/header.component";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, SidePanelComponent, HeaderComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "inventory-management";

  isSidePanelOpen = false;

  toggleSidePanel() {
    this.isSidePanelOpen = !this.isSidePanelOpen;
  }
}
