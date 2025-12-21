# React `useReducer` Training Patterns ⚛️

Welcome to the **Training-useReducer** repository! This project is a collection of practical examples and mini-applications designed to master state management in React using the `useReducer` hook.

The goal is to move away from complex `useState` logic and implement cleaner, more predictable state transitions using Reducers.

## 📂 Project Structure & Features

The repository includes several distinct components, each demonstrating different use cases for `useReducer`:

### 1. 🏦 Bank Account Manager
* **Files:** `BankAccount.jsx`
* **Description:** A simulation of bank account operations.
* **Key Concepts:** Handling numeric state updates (Deposit/Withdraw) and enforcing business logic constraints (e.g., preventing negative balance).

### 2. 🔐 Login Authentication Form
* **Files:** `LoginForm.jsx`, `LoginReducer.jsx`
* **Description:** A structured login form handling user credentials.
* **Key Concepts:** Managing complex object state. It handles multiple related state variables simultaneously: `username`, `password`, `isLoading`, `error`, and `isLoggedIn`.

### 3. 🏥 Patient Manager System
* **Files:** `PatientManager.jsx`, `PatientManagerReducer.jsx`
* **Description:** A CRUD-like interface for managing a list of patients.
* **Key Concepts:** Handling **Array** state manipulation (Adding, Removing, and Updating items in a list) through a reducer.

### 4. 💰 Digital Wallet
* **Files:** `Wallet.jsx`, `WalletUseReducer.jsx`
* **Description:** A personal wallet tracker.
* **Key Concepts:** separating logic from UI to keep components clean.

---

## 🚀 Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites
Make sure you have **Node.js** installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/abdullahsawan19/Training-useReducer.git](https://github.com/abdullahsawan19/Training-useReducer.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Training-useReducer
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the application:**
    ```bash
    npm start
    ```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🛠️ Tech Stack

* **React.js** (Hooks: `useReducer`, `useState`)
* **CSS** (App.css, index.css)
* **JavaScript** (ES6+)
