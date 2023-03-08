import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import { AlbumdetailComponent } from './albumdetail/albumdetail.component';

const routes: Routes = [
  {path:'home', component:HomeComponent },
  {path:'about', component:AboutComponent},
  {path: 'albums', component:AlbumComponent},
  {path:'albums/:id', component: AlbumdetailComponent},
  {path: 'albums/:id/photos', component: AlbumPhotosComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
