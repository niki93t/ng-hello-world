import { AppErrorHandler } from "./common/app-error-handler";
import { PostService } from "./services/post.service";
import { AuthorsService } from "./authors.service";
import { CoursesService } from "./courses.service";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule, ErrorHandler } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component";
import { CourseComponent } from "./course/course.component";
import { AuthorsComponent } from "./authors/authors.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { NewCourseFormComponent } from "./new-course-form/new-course-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { PostsComponent } from "./posts/posts.component";
import { GithubFollowersComponent } from "./github-followers/github-followers.component";
import { GithubFollowersService } from "./github-followers.service";

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [
    CoursesService,
    AuthorsService,
    PostService,
    GithubFollowersService,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
