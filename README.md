# 🐾 Pet Care Shop (Demo)
#### Developed by Saad Ferozee

A modern, responsive, and fully functional demo web application for exploring pet-care services.
Built with React, Firebase Authentication, TailwindCSS, and Vite, this project demonstrates user authentication, protected routes, JSON-based services, dynamic pages, and a clean user-focused UI.

## 🔗 Live Demo

Netlify Deployment:
https://petcareshop-by-saadferozee.netlify.app/

---
# 🎯 Purpose

The purpose of this project is to create a fully responsive Pet Care Service website where users can:

- Explore different pet-care services

- View detailed information about each service

- Book services after logging in

- Manage their user profile

- Experience protected route navigation

- Interact with a clean and intuitive UI

###### The application serves as a practice project to strengthen skills in React, Firebase authentication, routing, environment variables, JSON data handling, and modern UI/UX design.

---
# ⭐ Key Features
#### 🔹 Layout & Structure

- Global Navbar and Footer across all pages (except 404/Error page)

- Responsive design for Mobile, Tablet, and Desktop

- Unique and clean visual design

- Dynamic page titles for every route

#### 🔹 Authentication

- Email/password registration

- Email/password login

- Google Authentication

- Password validation

- Login redirection (returns to the protected page after login)

- Auth state persistence using onAuthStateChanged

- Forget Password page with redirect to Gmail

#### 🔹 Home Page

- Slider section using Swiper/DaisyUI

- Popular Winter Care Services section

- Service cards showing:

- Image

- Name

- Rating

- Price

- View Details button

#### 🔹 Service Details Page (Protected)

- Accessible only when logged in

- Redirects to login if unauthenticated

- Displays full service information

- Booking form with:

- Name

- Email

- “Book Now” action

- Success toast after booking

#### 🔹 Profile Page (Protected)

- Displays user name, email, and photo

- “Update Profile” functionality with real-time updates

#### 🔹 Extra Features

- JSON data with at least 6 service objects

- Image hosting via PostImages

- Custom Loader for auth states

- Fully working 404 page

---
## 📦 Technologies & NPM Packages Used
### Core Dependencies

- react

- react-dom

- react-router

- firebase

- tailwindcss

- @tailwindcss/vite

- react-loader-spinner

### UI & Animation

- daisyui

- swiper

- AOS (Animate On Scroll)

- Dev Dependencies

- vite

- @vitejs/plugin-react

- eslint and related plugins

- @types/react, @types/react-dom

### 🔐 Environment Variables

###### Sensitive credentials are stored using .env to keep Firebase configuration secure.

---
## 🚀 Hosting

The application is deployed on Netlify with proper SPA configuration to avoid route reload errors.
Firebase authorized domains are correctly configured.

---
# 📁 What’s Included

- Complete codebase following the assignment requirements

- Persistent user authentication

- Fully responsive UI

- Custom JSON data

- Protected routes

- Service booking flow

- Profile management

---
###### © saadferozee 