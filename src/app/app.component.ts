import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsdocumentationComponent } from "./components/jsdocumentation/jsdocumentation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsdocumentationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JSDocumentation';
}
