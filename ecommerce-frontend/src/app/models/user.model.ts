export interface User {
    id: number;                   // Unique identifier for the user
    username: string;            // User's login name
    email: string;               // User's email address
    password?: string;           // User's password (optional for some operations)
    fullName?: string;           // Full name of the user (optional)
    phoneNumber?: string;        // User's contact number (optional)
    address?: string;            // User's address (optional)
    role?: string;               // User's role (e.g., admin, user)
    createdAt?: Date;            // Date when the user was created (optional)
    updatedAt?: Date;            // Date when the user was last updated (optional)
  }
  