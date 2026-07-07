import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formpage',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './formpage.html',
  styleUrl: './formpage.css',
})
export class Formpage {
  private fb = inject(FormBuilder);
  imagePreview = signal<any>('');
  selectedFile = signal<File | null>(null);

  reactiveForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[69]\d{9}$/)]],
  });

  inValid(field: string): boolean {
    const ctr = this.reactiveForm.get(field);
    return !!(ctr && ctr.invalid && (ctr.dirty || ctr.touched));
  }

  get f() {
    return this.reactiveForm.controls;
  }

  onFileSelect(Event: any) {
    const input = Event.target as HTMLInputElement;
    const file = input.files?.[0];

    console.log('Selected file:', file);

    if (!file?.type.startsWith('image/')) {
      console.log('File is not an image');
      return;
    }

    this.selectedFile.set(file);

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview.set(reader.result);
    };

    reader.readAsDataURL(file);
  }

  ngOnInit() {
    console.log(this.reactiveForm);
  }
}
