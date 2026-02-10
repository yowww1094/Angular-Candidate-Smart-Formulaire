import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {

  user = {
    name: '',
    email: ''
  };

  selectedPost = '';

  posts = [
    { value: '1', label: 'Junior' },
    { value: '2', label: 'Confirmé' },
    { value: '3', label: 'Senior' },
    { value: '4', label: 'Lead' }
  ];

  onSubmit(form:any){
    console.log(form.value);
  }
}
