# React useReducer Training Patterns ⚛️

Welcome to the **Training-useReducer** repository!

This project is a collection of practical examples and mini-applications designed to help you master state management in React using the `useReducer` hook.

The main goal of this repository is to move away from complex `useState` logic and implement cleaner, more predictable state transitions using reducers.

---

## 📂 Project Structure & Features

This repository contains several independent components, each focused on a specific real-world use case for `useReducer`:

### 1. 🏦 Bank Account Manager
* **File:** `BankAccount.jsx`
* **Description:** A simple simulation of bank account operations such as deposits and withdrawals.
* **Key Concepts:**
    * Numeric state management.
    * Using reducer actions (`deposit`, `withdraw`).
    * Enforcing business rules (e.g., preventing negative balance).

### 2. 🔐 Login Authentication Form
* **Files:** `LoginForm.jsx`, `LoginReducer.jsx`
* **Description:** A structured login form that handles user authentication flow.
* **Key Concepts:**
    * Managing complex object state.
    * Handling multiple related states together (`username`, `password`, `isLoading`, `error`, `isLoggedIn`).
    * Separating reducer logic from UI.

### 3. 🏥 Patient Manager System
* **Files:** `PatientManager.jsx`, `PatientManagerReducer.jsx`
* **Description:** A CRUD-like interface for managing a list of patients.
* **Key Concepts:**
    * Working with array state inside a reducer.
    * Adding, removing, and updating items immutably.
    * Using action payloads effectively.

### 4. 💰 Digital Wallet
* **Files:** `Wallet.jsx`, `WalletUseReducer.jsx`
* **Description:** A personal wallet tracker to manage balance and transactions.
* **Key Concepts:**
    * Clear separation of business logic and UI.
    * Cleaner component structure.
    * Scalable reducer design.

---

## 🛠️ Tech Stack

* **React.js**
* **Hooks:** `useReducer`, `useState`
* **JavaScript (ES6+)**
* **CSS:** `App.css`
* **Tooling:** Create React App

---

## 🚀 Getting Started

Follow the steps below to run the project locally:

### Prerequisites
* **Node.js** (v14 or higher recommended)
* **npm** or **yarn**

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/abdullahsawan19/Training-useReducer.git](https://github.com/abdullahsawan19/Training-useReducer.git)
    ```

2.  **Navigate to the project directory**
    ```bash
    cd Training-useReducer
    ```

3.  **Install dependencies**
    ```bash
    npm install
    ```

4.  **Run the application**
    ```bash
    npm start
    ```

5.  **Open your browser and visit:**
    👉 http://localhost:3000

---

## 🎯 Learning Outcomes

By exploring this repository, you will learn how to:
* ✅ Decide when to use `useReducer` instead of `useState`.
* ✅ Design predictable state transitions.
* ✅ Write cleaner and more maintainable React components.
* ✅ Scale state logic in medium-sized applications.
