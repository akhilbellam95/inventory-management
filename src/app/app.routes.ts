import { Routes } from "@angular/router";
import { ManageServicesComponent } from "./screens/manage-services/manage-services.component";
import { ManageVendorsComponent } from "./screens/manage-vendors/manage-vendors.component";
import { DashboardComponent } from "./screens/dashboard/dashboard.component";

export const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "manage-services", component: ManageServicesComponent },
  { path: "manage-vendors", component: ManageVendorsComponent },
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
];
