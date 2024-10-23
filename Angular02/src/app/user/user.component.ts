import { Component, EventEmitter, Input, Output, output } from '@angular/core';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  @Input ({required:true}) id!: string;
  @Input({required:true}) avatar!: string;
  @Input({required:true}) name!: string ;
  @Output () select = new EventEmitter();   //<any data type>..... eg <string > etc 


  // select = output<string>();





get imagePath (){
  return 'assets/users/' + this.avatar
}


  onSelectUser(){
    this.select.emit(this.id);
  }
}


