import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Authenticate } from '../../user.model';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  @Input() mode: string;
  @Input() formLoading: boolean;
  @Output() submitted = new EventEmitter<{mode: string, formValue: Authenticate}>();

  public authForm: FormGroup;

  constructor(public fb: FormBuilder) { }
  ngOnInit() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(6)] ]
    });
  }


  submitAuthForm() {
    if (this.authForm.valid) {
      this.submitted.emit({
        mode: this.mode,
        formValue: this.authForm.value
      })
    }
  }


  forgotPassword() {
    debugger;
    // e.preventDefault();
  }

}
