import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { API_URL, API_ROUTE_CONSTANTS } from "../../constants/api";
import { defaultHeaders } from "../../utils/api";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<{ products: Product[] }>(API_ROUTE_CONSTANTS.PRODUCTS)
      .pipe(map((response) => response.products));
  }

  addProduct(product: Product): Observable<Product> {
    return this.http
      .post<Product>(
        API_ROUTE_CONSTANTS.PRODUCTS,
        { ...product },
        { headers: defaultHeaders }
      )
      .pipe(map((response) => response));
  }
}
