import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { API_URL, API_ROUTE_CONSTANTS } from "../../constants/api";
import { defaultHeaders } from "../../utils/api";

@Injectable({
  providedIn: "root",
})
export class VendorService {
  constructor(private http: HttpClient) {}

  getVendors(): Observable<Vendor[]> {
    return this.http
      .get<{ vendors: Vendor[] }>(API_ROUTE_CONSTANTS.VENDORS)
      .pipe(map((response) => response.vendors));
  }

  addVendor(vendor: Vendor): Observable<any> {
    return this.http
      .post<Vendor>(
        API_ROUTE_CONSTANTS.VENDORS,
        { ...vendor },
        { headers: defaultHeaders }
      )
      .pipe(map((response) => response));
  }
}
