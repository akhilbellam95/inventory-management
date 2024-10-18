import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Chart, registerables } from "chart.js";
import { BaseChartDirective } from "ng2-charts";

const monthLabels = ["January", "February", "March", "April", "May", "June"];
const quantities = [5, 59, 80, 81, 56, 55];

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [BaseChartDirective, CommonModule],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.scss",
})
export class DashboardComponent {
  selectedMonth: string = "";
  consumedQuantity: number = -1;

  ngOnInit(): void {
    Chart.register(...registerables);

    const canvas = <HTMLCanvasElement>document.getElementById("myChart");
    const ctx = canvas.getContext("2d");

    if (ctx) {
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: monthLabels,
          datasets: [
            {
              label: "Uncategorized Transactions",
              data: quantities,
              backgroundColor: [
                "#F1A9A0",
                "#1ABC9C",
                "#E26A6A",
                "#3498DB",
                "#9B59B6",
                "#F39C12",
              ],
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          onClick: (event, elements) => {
            this.selectedMonth = monthLabels[elements[0].index];
            this.consumedQuantity = quantities[elements[0].index];
          },
        },
      });
    }
  }
}
