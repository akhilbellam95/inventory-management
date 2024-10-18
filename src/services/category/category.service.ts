import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { API_URL, API_ROUTE_CONSTANTS } from "../../constants/api";
import { defaultHeaders } from "../../utils/api";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http
      .get<{ categories: Category[] }>(API_ROUTE_CONSTANTS.CATEGORIES)
      .pipe(map((response) => response.categories));
  }

  addCategory(category: Category): Observable<any> {
    return this.http
      .post<any>(
        API_ROUTE_CONSTANTS.CATEGORIES,
        { ...category },
        { headers: defaultHeaders }
      )
      .pipe(map((response) => response.categories));
  }
}
