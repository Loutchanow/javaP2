import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule, Color, LegendPosition } from '@swimlane/ngx-charts';
import { getResponsiveView } from 'src/app/utilis/utils';
import { PieChartData } from 'src/app/core/models/Olympic';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  @Input() single: PieChartData[] = []; 
  @Output() itemClicked = new EventEmitter<string>();
  view: [number, number] = [700, 400];

  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  selectedCountry: string = "";
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;

  colorScheme: Color = { domain: ['#bbd4eb ', '#89a1da ', '#793d52 ', '#956066 ', '#9881a0 ', '#81a1d9'] } as Color;

  constructor()
   {
    this.view = getResponsiveView()
  }
  
  @HostListener('window:resize')
  onResize() {
    this.view = getResponsiveView();
  }

  tooltipText({ data }: { data: PieChartData }): string {
    return `<div class="custom-tooltip">
      ${data.name} <br>  🏅 ${data.value}
    </div>`;
  }

  onSelect(data: PieChartData): void {
    console.log(data.name);
    this.itemClicked.emit(data.name);
    this.selectedCountry = data.name;
  }
}
