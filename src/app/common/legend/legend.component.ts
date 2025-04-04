import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-legend',
  standalone: true,
  imports: [],
  templateUrl: './legend.component.html',
  styleUrl: './legend.component.scss'
})
export class LegendComponent  {
  @Input() text!: string;
  @Input() data!: number;
}
