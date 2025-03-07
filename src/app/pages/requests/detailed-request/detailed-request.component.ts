import { Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-detailed-email',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, RouterLink, ReactiveFormsModule, MatButton],
  templateUrl: './detailed-request.component.html',
  styleUrl: './detailed-request.component.scss'
})
export class DetailedRequestComponent implements OnInit {
  private readonly AR = inject(ActivatedRoute);
  public emailId: string = '';

  profileForm = new FormGroup({
    senderName: new FormControl('test'),
    recName: new FormControl('rec 22'),
    amount: new FormControl(900),
    amountUSD: new FormControl(0),
    purposePayment: new FormControl(''),
    date: new FormControl(new Date()),
    category: new FormControl(''),
  });

  ngOnInit(): void {
    this.emailId = this.AR.snapshot.params['id'] as string;
  }

  approve() {
    this.profileForm.getRawValue();
    // todo send data
  }
}
