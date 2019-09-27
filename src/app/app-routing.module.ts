import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './comps/content/content.component';


const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: "",
    component:ContentComponent,
    children:[{
      path: "",
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    }, {
      path: "group",
      loadChildren: () => import('./group/group.module').then(m => m.GroupModule)
    },
    {
      path: "sequence",
      loadChildren: () => import('./sequence/sequence.module').then(m => m.SequenceModule)
    }, {
      path: "device",
      loadChildren: () => import('./device/device.module').then(m => m.DeviceModule)
    }]
  }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
