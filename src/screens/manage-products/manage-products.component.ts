import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { CommonModule } from "@angular/common";
import { MatSelectModule, MatSelectChange } from "@angular/material/select";
import { MatListModule } from "@angular/material/list";
import { CategoryService } from "../../services/category/category.service";
import { ProductService } from "../../services/product/product.service";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-manage-products",
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    MatListModule,
    MatSelectModule,
    MatIconModule,
  ],
  templateUrl: "./manage-products.component.html",
  styleUrl: "./manage-products.component.scss",
})
export class ManageProductsComponent {
  products: Product[] = [];
  categories: Category[] = [];
  productForm: FormGroup;
  selectedCategory: Category = {
    id: "",
    name: "",
    description: "",
    categoryId: "",
  };

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.productForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      price: ["", Validators.required],
      categoryName: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
      console.log(data);
    });
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      console.log(data);
    });
  }

  onSubmit() {
    let newProduct = {
      ...this.productForm.value,
      categoryName: this.selectedCategory.name,
      categoryId: this.selectedCategory.categoryId,
    };
    console.log(newProduct);
  }

  onCategorySelectionChange(event: MatSelectChange) {
    this.selectedCategory = event.value;
  }
}
