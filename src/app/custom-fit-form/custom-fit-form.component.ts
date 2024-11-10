import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-fit-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './custom-fit-form.component.html',
  styleUrl: './custom-fit-form.component.scss'
})
export class CustomFitFormComponent implements OnInit {
  customizeFitForm: FormGroup;

  bustOpen: boolean = false;
  armLengthOpen: boolean = false;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {
    // Initialize the form using FormBuilder
    this.customizeFitForm = this.fb.group({
      measurementUnit: ['IN', Validators.required], // Default to "IN"
      bust: ['', [Validators.required, Validators.min(0)]],
      armLength: ['', [Validators.required, Validators.min(0)]],
      additionalNotes: ['']
    });
  }

  ngOnInit(): void {
    this.loadFormData();
  }

  loadFormData() {
    const savedData = localStorage.getItem('customFitData');
    if (savedData) {
      this.customizeFitForm.patchValue(JSON.parse(savedData));
    }
  }
  
  onSubmit() {
    if (this.customizeFitForm.valid) {
      const formData = this.customizeFitForm.value;
      localStorage.setItem('customFitData', JSON.stringify(formData));
      this.modalService.dismissAll();
      location.reload();
    } else {
      console.error('Form is invalid');
    }
  }

  toggleSection(section: string) {
    if (section === 'bust') {
      this.bustOpen = !this.bustOpen;
    } else if (section === 'armLength') {
      this.armLengthOpen = !this.armLengthOpen;
    }
  }

}
