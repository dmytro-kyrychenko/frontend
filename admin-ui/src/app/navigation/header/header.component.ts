import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/others/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Output() public sidenavToggle = new EventEmitter();

    constructor(readonly authService: AuthService) {}

    onToggleSidenav = () => {
        this.sidenavToggle.emit();
    };

    onLogOutClick() {
        this.authService.logOut();
    }
}
