import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { CommonModule } from "@angular/common";
import { MatListModule } from "@angular/material/list";
import { CategoryService } from "../../services/category/category.service";

@Component({
  selector: "app-manage-categories",
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    ReactiveFormsModule,
    MatListModule,
  ],
  templateUrl: "./manage-categories.component.html",
  styleUrls: ["./manage-categories.component.scss"],
})
export class ManageCategoriesComponent {
  categories: Category[] = [];
  categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) {
    // Initialize the form group with controls and validation
    this.categoryForm = this.fb.group({
      name: ["", Validators.required], // Required category name field
      description: [""], // Optional description field
    });
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      const newCategory = this.categoryForm.value;
      this.categoryService
        .addCategory(newCategory)
        .subscribe((data) => (this.categories = data));

      this.categoryForm.reset();
    }
  }
}
