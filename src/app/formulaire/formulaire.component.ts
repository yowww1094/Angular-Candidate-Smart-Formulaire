// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-formulaire',
//   standalone: true,
//   imports: [FormsModule,CommonModule],
//   templateUrl: './formulaire.component.html',
//   styleUrls: ['./formulaire.component.css']
// })
// export class FormulaireComponent {
//   submitedUser = {
//     name: '',
//     email: '',
//     selectedPost: '',
//     bio: '',
//      preferences:{
//       contract:"CDI",
//       avaible:false
//     }
//   };
//   isSubmited: boolean = false;
  
//   user = {
//     name: '',
//     email: '',
//     selectedPost: '',
//     bio: '',
//      preferences:{
//       contract:"CDI",
//       avaible:false
//     }
//   };

//   posts = [
//     { value: '1', label: 'Junior' },
//     { value: '2', label: 'Confirmé' },
//     { value: '3', label: 'Senior' },
//     { value: '4', label: 'Lead' }
//   ];
 
  
//   onSubmit(form:any){
//     console.log(form.value);
//     if (form.valid) {
//       this.isSubmited = true;
//       this.user = {
//         name: '',
//         email: '',
//         selectedPost: '',
//         bio: '',
//         preferences:{
//           contract:"CDI",
//           avaible:false
//         }
//       };
//       this.submitedUser = {
//         name: form.name,
//         email: form.email,
//         selectedPost: form.selectedPost,
//         bio: form.bio,
//         preferences:{
//           contract: form.preferences.contract,
//           avaible: form.preferences.avaible
//         }
//       }
//     }
//   }
// }


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidate-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {

  candidate = this.initCandidate();

  submittedCandidate: any = null;

  posts = [
    { value: '1', label: 'Junior' },
    { value: '2', label: 'Confirmé' },
    { value: '3', label: 'Senior' },
    { value: '4', label: 'Lead' }
  ];

  initCandidate() {
    return {
      name: '',
      email: '',
      level: '',
      bio: '',
      preferences: {
        contract: 'CDI',
        available: false
      }
    };
  }

  submit(form: any) {
    if (form.valid) {
      // keep data in card
      this.submittedCandidate = { ...this.candidate, preferences: { ...this.candidate.preferences } };

      // reset form but keep defaults
      this.candidate = this.initCandidate();
      form.resetForm(this.candidate);
    }
  }
}
