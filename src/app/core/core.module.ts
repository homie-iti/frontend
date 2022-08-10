import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, AppRoutingModule, FontAwesomeModule, UserModule],
  exports: [NavbarComponent, FooterComponent],
})
export class CoreModule {}
