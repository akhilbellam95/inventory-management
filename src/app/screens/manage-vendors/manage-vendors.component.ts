import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendor-form',
  templateUrl: './manage-vendors.component.html',
  styleUrls: ['./manage-vendors.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class ManageVendorsComponent {
  vendorForm: FormGroup;
  vendors = [
    { vendorName: 'ABC Corp', email: 'abc@example.com', contactNumber: '1234567890', address: '123 St, City' },
    { vendorName: 'XYZ Inc', email: 'xyz@example.com', contactNumber: '9876543210', address: '456 St, City' }
  ];
  editingIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    this.vendorForm = this.fb.group({
      vendorName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['']
    });
  }

  onSubmit() {
    if (this.vendorForm.valid) {
      if (this.editingIndex !== null) {
        // Update existing vendor
        this.vendors[this.editingIndex] = this.vendorForm.value;
        this.editingIndex = null;
      } else {
        // Add new vendor
        this.vendors.push(this.vendorForm.value);
      }
      this.vendorForm.reset();
    }
  }

  editVendor(index: number) {
    const vendor = this.vendors[index];
    this.vendorForm.patchValue(vendor);
    this.editingIndex = index;
    console.log(vendor);
  }

  deleteVendor(index: number) {
    this.vendors.splice(index, 1);
    if (this.editingIndex === index) {
      this.vendorForm.reset();
      this.editingIndex = null;
    }
  }
}
