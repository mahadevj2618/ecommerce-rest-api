# ecommerce-rest-api
# 🛒 E-commerce RESTful API

This is a full-featured backend REST API for an e-commerce platform, built using **Node.js** and **Express.js**. It supports complete CRUD operations for **Users**, **Products**, **Orders**, and **Carts**, with secure **authentication**, **authorization**, **input validation**, and **robust error handling**.

---

---

## ✅ Features

### 1. 🔐 User API

- **Registration & Login**
  - Password hashing using `bcrypt`
  - JWT-based authentication
- **Role-based Access Control**
  - Supports `user` and `admin` roles via JWT tokens
- **User Operations**
  - Update/view own profile
  - Admins can view all users and delete any user

### 2. 🛍️ Product API

- Admins can:
  - Add, update, delete products
- Users can:
  - View product list and individual product details
- Input validation via middleware

### 3. 📦 Order API

- Users can:
  - Create, update, delete their own orders
- Admins can:
  - View all orders across the platform
- Orders are linked to user accounts via foreign key references

### 4. 🛒 Cart API

- Users can:
  - Create, update, delete their cart
  - Add/remove items with quantity and dynamic total price calculations
- Admins can:
  - View all user carts and their contents

---

## 🔐 Authentication & Authorization

- **JWT-based Authentication**
  - Middleware `userAuth.js` to verify token
  - Extracts user role for protected route access
- **Access Control**
  - `Users`: Manage own profile, orders, and cart
  - `Admins`: Full access to manage users, products, orders, and view carts

---

## 🛡️ Validation & Error Handling

- **Validation**
  - User inputs via `userValidation.js`
  - Product inputs via `productValidation.js`
- **Centralized Error Handler**
  - `errorHandler.js` middleware returns consistent, meaningful error messages with proper HTTP status codes

---

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **SQL DB**
- **JWT for auth**
- **bcrypt for password hashing**
- **Express Validator / Custom validation**
- **Dotenv for environment configs**

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 14
- MongoDB running locally or Atlas instance

### Installation

```bash
git clone [https://github.com/mahadevj2618/ecommerce-rest-api.git]
cd ecommerce-rest-api
npm install


