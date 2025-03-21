import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule, Color, colorSets, LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  // Données codées en dur
  single = [
    { name: "Germany", value: 40632 },
    { name: "USA", value: 50000 },
    { name: "France", value: 36745 },
    { name: "UK", value: 36240 }
  ];
  
  view: [number, number] = [700, 400]; // ✅ Corrigé

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below; // ✅ Corrigé

  colorScheme: Color = { domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'] } as Color; // ✅ Corrigé

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
