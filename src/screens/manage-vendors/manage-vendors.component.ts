import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { VendorService } from "../../services/vendor/vendor.service";

@Component({
  selector: "app-vendor-form",
  templateUrl: "./manage-vendors.component.html",
  styleUrls: ["./manage-vendors.component.scss"],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  providers: [VendorService],
})
export class ManageVendorsComponent {
  vendorForm: FormGroup;
  vendors: Vendor[] = [];
  editingIndex: number | null = null;

  constructor(private fb: FormBuilder, private vendorService: VendorService) {
    this.vendorForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      address: [""],
    });
  }

  ngOnInit(): void {
    this.vendorService.getVendors().subscribe((data: any) => {
      this.vendors = data;
    });
  }

  onSubmit() {
    if (this.vendorForm.valid) {
      if (this.editingIndex !== null) {
        // Update existing vendor
        this.vendors[this.editingIndex] = this.vendorForm.value;
        this.editingIndex = null;
        // this.vendorService.addVendor
      } else {
        // Add new vendor
        // this.vendors.push(this.vendorForm.value);
        this.vendorService
          .addVendor(this.vendorForm.value)
          .subscribe((data) => (this.vendors = data));
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

  updateVendor() {}

  deleteVendor(index: number) {
    this.vendors.splice(index, 1);
    if (this.editingIndex === index) {
      this.vendorForm.reset();
      this.editingIndex = null;
    }
  }
}
