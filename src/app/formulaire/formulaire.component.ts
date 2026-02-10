import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() userChange = new EventEmitter<any>();

  user = {
    name: '',
    email: '',
    selectedPost: '',
    type: '',
    disponibilite: '',
    bio: ''
  };

  posts = [
    { value: '1', label: 'Junior' },
    { value: '2', label: 'Confirmé' },
    { value: '3', label: 'Senior' },
    { value: '4', label: 'Lead' }
  ];
  condidadte = {
    name:"",
    email:"",
    level:"",
    bio:"",
    references:{
      contract:"CDI",
      avaible:false
    }
  }
  
  onSubmit(form:any){
    console.log(form.value);
    if(form.valid){
      console.log(this.condidadte)
      form.resetForm({
        preferences:{
          contract:"CDI",
          avaible:false
        }
      })
    }
  }
}
