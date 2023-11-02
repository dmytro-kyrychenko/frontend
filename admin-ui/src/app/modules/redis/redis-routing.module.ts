import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedisComponent } from './pages/redis/redis.component';

const routes: Routes = [
  {
      path: '',
      component: RedisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedisRoutingModule { }
