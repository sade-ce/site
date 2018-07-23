import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MyPagePage } from './my-page.page';

const routes: Routes = [
  { path: '', component: MyPagePage }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    MyPagePage
  ],
  entryComponents: [
    MyPagePage
  ],
  bootstrap: [MyPagePage],
  schemas: []
})
export class MyPagePageModule { }