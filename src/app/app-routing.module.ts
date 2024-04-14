import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from "@nebular/auth";
import { AuthGuard } from "./pages/shared/guards/auth.guard";

export const routes: Routes = [
  {
    path: "pages",
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
    canLoad: [AuthGuard],
  },
  {
    path: "account",
    loadChildren: () =>
      import("./account/account.module").then((a) => a.AccountModule),
  },
  // {
  //   path: "auth",
  //   component: NbAuthComponent,
  //   children: [
  //     { path: "", redirectTo: "login", pathMatch: "full" },
  //     {
  //       path: "login",
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: "register",
  //       component: NbRegisterComponent,
  //     },
  //     {
  //       path: "logout",
  //       component: NbLogoutComponent,
  //     },
  //     {
  //       path: "request-password",
  //       component: NbRequestPasswordComponent,
  //     },
  //     {
  //       path: "reset-password",
  //       component: NbResetPasswordComponent,
  //     },
  //   ],
  // },
  { path: "", redirectTo: "pages", pathMatch: "full" },
  { path: "**", redirectTo: "login" },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
