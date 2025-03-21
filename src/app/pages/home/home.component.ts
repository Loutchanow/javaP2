import { Component, OnInit } from '@angular/core';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics: any = null; 

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympicService.getOlympics().subscribe({
      next: (data) => {
        console.log('Données des JO:', data); 
        this.olympics = data;
      },
      error: (err) => console.error('Erreur lors du chargement des JO:', err),
    });
  }
}
