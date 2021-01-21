import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    role : new FormControl(''),
    name : new FormControl(''),
    email : new FormControl('')
  });
  openSnackBar() {
    this._snackBar.open("Done!", "User successfully registered", {
      duration: 2000,
    });
  }
 
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

}
