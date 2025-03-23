import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule, Color, LegendPosition } from '@swimlane/ngx-charts';
import { getResponsiveView } from 'src/app/utilis/utils';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  @Input() single: any[] = []; 
  @Output() itemClicked = new EventEmitter<string>();
  view: [number, number] = [700, 400];

  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  selectedCountry: string = "";
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;

  colorScheme: Color = { domain: ['#bbd4eb ', '#89a1da ', '#793d52 ', '#956066 ', '#9881a0 ', '#81a1d9'] } as Color;

  constructor(private router: Router, private route: ActivatedRoute)
   {
    this.view = getResponsiveView()
  }
  
  @HostListener('window:resize')
  onResize() {
    this.view = getResponsiveView();
  }

  tooltipText({ data }: { data: any }): string {
    return `<div class="custom-tooltip" style="background-color: #00797c;">
      ${data.name} <br>  🏅 ${data.value}
    </div>`;
  }

  onSelect(data: any): void {
    console.log(data.name);
    this.itemClicked.emit(data.name);
    this.selectedCountry = data.name;
    this.router.navigate(['/details', data.name]); 


  }
  
  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
