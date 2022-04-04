import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import { CommunicationService } from '../services/communication/communication.service';
import { DataInfo } from './dataInfo.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  hobbiesRepo : any[] = [
    { 'value': 'Ver TV', 'option': 'Ver TV'},
    { 'value': 'Ejercicio', 'option': 'Ejercicio'},
    { 'value': 'Correr', 'option': 'Correr'},
    { 'value': 'Monedas', 'option': 'Monedas'},
    { 'value': 'Pintar', 'option': 'Pintar'},
    { 'value': 'Manejar', 'option': 'Manejar'},
  ]

  infoForm: FormGroup;

  hobbiesOptions : any = []

  separatorKeysCodes: number[] = [ENTER, COMMA];
  hobbies: any[] = [];
  hobbyMenuState: boolean = false
  isInMenu: boolean = false
  profileImg:String = ""
  loadingState: boolean = true

  @Output() changeViewEvent = new EventEmitter<String>();
  @Output() sendDataEvent = new EventEmitter<DataInfo>();

  @ViewChild('hobbyInput') hobbyInput: ElementRef = {} as ElementRef;
  @ViewChild('imageInput') imageInput: ElementRef = {} as ElementRef;

  constructor(fb: FormBuilder) {
    this.infoForm = fb.group({
      'personName': ['',
      Validators.compose([Validators.required])],
      'birthday': ['',
      Validators.compose([Validators.required])],
      'documentIdent': ['',
      Validators.compose([Validators.required])]
    })
  }

  ngOnInit(): void { }

  onSubmit() {
    console.log(this.hobbies);
    console.log(this.infoForm.value);

    const years =  new Date().getFullYear() - new Date(this.infoForm.get("birthday")?.value).getFullYear();

    this.infoForm.patchValue({'birthday':years})

    this.sendDataEvent.emit(new DataInfo(this.infoForm,this.hobbies))
    this.changeViewEvent.emit('team');
  }


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

  addImage() {
    this.imageInput.nativeElement.click()
  }

  onFileSelected(event:any) {
    const file:File = event.target.files[0];
    if (file) {
      this.profileImg = file.name;

      const formData = new FormData();
      formData.append("profileImg", file);

      console.log(file);

    }
  }

}
