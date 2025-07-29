SWMS
Smart Waste Management System

Overview
The Smart Waste Management System (SWMS) is a full-stack application for monitoring and managing waste collection using IoT devices, real-time data, and predictive analytics.

Prerequisites
Node.js (v16 or later)

MySQL (for the backend database)

VS Code

Installing Dependencies
Open VS Code, then open the integrated terminal and run the following commands:

powershell **** Make sure to have your project stucture created correctly and ONLY install these packages in the right directories. 
Copy code
# Install frontend dependencies
cd frontend  -------> Make sure you are in the this directory. 
npm install

# Install backend dependencies
cd ../backend ---------> Make sure you are in this directory. 
npm install

----------------------> Okay now I am telling you how to start servers within VSCode 
Running the Application in VS Code
Open the project in VS Code.

Open two terminals (Terminal > New Terminal).

Terminal 1 – Start the Backend Server
powershell
Copy code
cd backend
npm run dev
This starts the backend API server (default: http://localhost:5000).

Terminal 2 – Start the Frontend (React)
powershell
Copy code
cd frontend
npm start
This starts the React development server (default: http://localhost:3000).

Access the Application
Once both servers are running:
Open a browser and go to http://localhost:3000

