import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent} from './signup/signup.component';
import { LogoutComponent } from './component/logout/logout.component';
import { MyinfoComponent } from './component/myinfo/myinfo.component';
import { BoardComponent } from './component/board/board.component';
import { PostComponent } from './component/board/post.component';
import { PostViewComponent } from './component/board/post-view.component';
import { PostModifyComponent } from './component/board/post-modify.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'myinfo', component: MyinfoComponent},
  {path: 'board/:boardName', component: BoardComponent},
  {path: 'board/:boardName/post', component: PostComponent},
  {path: 'board/:boardName/post/:postId', component: PostViewComponent},
  {path: 'board/:boardName/post/:postId/modify', component: PostModifyComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }