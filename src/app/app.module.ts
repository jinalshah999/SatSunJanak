import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { routingarr } from './app.routing';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { TodosComponent } from './todos/todos.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { HighlighterDirective } from './highlighter.directive';
import { CreditcardDirective } from './creditcard.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { ProductsComponent } from './products/products.component';
import { SidebarComponent } from './products/sidebar/sidebar.component';
import { PagenotfountComponent } from './pagenotfount/pagenotfount.component';
import { HeaderComponent } from './header/header.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { EdittodosComponent } from './todos/edittodos/edittodos.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TodosComponent,
    DirectiveDemoComponent,
    HighlighterDirective,
    CreditcardDirective,
    ParentComponent,
    ChildComponent,
    ProductsComponent,
    SidebarComponent,
    PagenotfountComponent,
    HeaderComponent,
    UserSignupComponent,
    EdittodosComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routingarr,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
