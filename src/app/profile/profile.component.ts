import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  hobbiesRepo : any[] = [
    { 'value': 'opcion', 'option': 'opcion'},
    { 'value': 'otro 2', 'option': 'opcion 2'},
    { 'value': 'valor 3', 'option': 'opcion 3'},
    { 'value': 'radio 4', 'option': 'opcion 4'},
    { 'value': 'raton 5', 'option': 'opcion 5'},
    { 'value': 'pared 6', 'option': 'opcion 6'},
  ]

  hobbiesOptions : any = []

  separatorKeysCodes: number[] = [ENTER, COMMA];
  hobbies: any[] = [];
  hobbyMenuState: boolean = false
  isInMenu: boolean = false

  loadingState: boolean = true

  @ViewChild('hobbyInput') hobbyInput: ElementRef = {} as ElementRef;

  constructor() { }

  ngOnInit(): void {}


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.hobbies.push(value);
    }
    event.chipInput!.clear();

  }

  editHobbies() {
    console.log("editHobbies");
    this.hobbyInput.nativeElement.focus()
  }

  selectItemList(hobbyItem: string){

    const value = (hobbyItem || '').trim();

    if (value) {
      this.hobbies.push(value);
    }

    this.hobbyMenuState = false
    this.hobbyInput.nativeElement.value = ""

  }

  searchItems(event: any = '') {
    this.hobbyMenuState = true
    const hobbyTxt = this.hobbyInput.nativeElement.value

    this.hobbiesOptions = this.hobbiesRepo.filter(el => el.value.includes(hobbyTxt))

    console.log(hobbyTxt);
  }

  remove(hobby: string): void {
    const index = this.hobbies.indexOf(hobby);

    if (index >= 0) {
      this.hobbies.splice(index, 1);
    }
  }

  focusOutHobby() {
    if(!this.hobbyMenuState) {
      this.hobbyMenuState = false
    }
  }

}
