import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {
  
 myText: string = '';
  

}
