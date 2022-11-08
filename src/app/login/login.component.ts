import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({ selector: 'app-login', templateUrl: './login.component.html' })
export class LoginComponent implements OnInit {
    ContactUsForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.ContactUsForm = this.formBuilder.group({
            Name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            Phone: ['', Validators.required],
            Subject: ['', Validators.required],
            Body: ['', Validators.required],
            Attachement: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.ContactUsForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.ContactUsForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.ContactUsForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.ContactUsForm.reset();
    }
}
