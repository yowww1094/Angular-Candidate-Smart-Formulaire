import { Component } from '@angular/core';
import { FormulaireComponent } from './formulaire/formulaire.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormulaireComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Candidate-Smart-Form';
}
