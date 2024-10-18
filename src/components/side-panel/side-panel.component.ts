// side-panel.component.ts
import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-side-panel",
  standalone: true,
  templateUrl: "./side-panel.component.html",
  styleUrls: ["./side-panel.component.scss"],
  imports: [CommonModule, RouterLink],
})
export class SidePanelComponent {
  @Input() isOpen = false;

  togglePanel() {
    this.isOpen = !this.isOpen;
  }
}
