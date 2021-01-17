import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { TodosComponent } from './todos/todos.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { HighlighterDirective } from './highlighter.directive';

@NgModule({
  declarations: [AppComponent, DemoComponent, TodosComponent, DirectiveDemoComponent, HighlighterDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
