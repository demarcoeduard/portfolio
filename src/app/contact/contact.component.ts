import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs  from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    scrollTo(0, 0);
  }

  async onSubmit() {
    emailjs.init('lrNLjX_1GADlejMlY');
    let response = await emailjs.send("service_7rd7yfc","template_pm7o5e8",{
      from_name: this.form.value.name,
      from_email: this.form.value.email,
      message: this.form.value.message,
    });
    
    alert('Email has been sent!');
    this.form.reset();
  }
}