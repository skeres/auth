import { Component } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule }   from '@angular/forms'; 
 
@Component({ 
  selector: 'app-auth', 
  templateUrl: './auth.component.html', 
  styleUrls: ['./auth.component.css'] 
}) 
export class AuthComponent { 
  private login: string; 
  private pass: string; 
  private isLoggedIn: boolean = false; 
 
  onSubmit() { 
    // Pas de vérification... 
    this.isLoggedIn = true; 
  } 
 
  logout() { 
    this.isLoggedIn = false; 
  } 
}