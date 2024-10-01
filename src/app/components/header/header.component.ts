import { Component } from '@angular/core';
import { SidePanelComponent } from '../side-panel/side-panel.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SidePanelComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isSidePanelOpen = false;

  toggleSidePanel() {
    this.isSidePanelOpen = !this.isSidePanelOpen;
  }
}
