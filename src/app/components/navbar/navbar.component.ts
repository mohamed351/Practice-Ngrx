import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'component-navbar',
    standalone:true,
    imports: [RouterModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
