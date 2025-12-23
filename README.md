# Expense Tracker
A full-stack web application to manage your expenses/income. You can insert your income and expenses, see where your money is going through charts, and even export your data (Excel Format).
## Features
- **Auth**: Secure login and registration with JWT.
- **Dashboard**: Includes overview of your total balance, income, and expenses.
- **Visuals**: Charts to help you visualize your spending habits.
- **Transactions**: Add, edit, and delete your income and expense records.
- **Excel Export**: Download all your data in `.xlsx` format.
- **Profile**: Upload your own profile picture and manage your account details.
## Tech 
- **Frontend**: React (Vite), Tailwind CSS, Recharts.
- **Backend**: Node.js, Express, MongoDB (Mongoose).
- **Other**: JWT for auth, Multer for file uploads, SheetJS (xlsx) for exports.
## How to Set Up
### 1. Clone the repo
```bash
git clone <your-repo-url>
cd expense-tracker
```
### 2. Backend Setup
1. Go into the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` folder and add:
   ```env
   PORT=8000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   CLIENT_URL=http://localhost:5173
   ```
4. Start the server:
   ```bash
   npm run dev
   ```
### 3. Frontend Setup
1. Go into the frontend folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the app:
   ```bash
   npm run dev
   ```
## Folder Structure
- `/backend`: Express API, database models, and routes.
- `/frontend`: React app with styling and components.
