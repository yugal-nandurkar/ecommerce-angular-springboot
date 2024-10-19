import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service'; // Path to AuthService
import { User } from '../../models/user.model';      // Path to User model

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = {
    id: 0,
    username: '',
    email: '',
    password: '',         // Assuming you want to include a password field
    fullName: '',        // Assuming this should exist in the User interface
    // Add any other fields from User interface here
  };
  editMode = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile() {
    this.authService.getUserProfile().subscribe((data: User) => {
      this.user = data;
    });
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  updateProfile() {
    this.authService.updateUserProfile(this.user).subscribe(response => {
      if (response.success) {
        alert('Profile updated successfully!');
        this.editMode = false;
      } else {
        alert('Profile update failed.');
      }
    });
  }
}
