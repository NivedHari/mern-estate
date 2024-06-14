
# PrimeEstate

PrimeEstate is a real estate web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. This project allows users to browse, search, and manage real estate listings. It includes features for user authentication, property management, and responsive design.



## Features

- User Authentication (Login, Register)
- Property listings with details
- Search functionality for properties
- Create, Read, Update, and Delete (CRUD) operations for property management
- Responsive design for various devices
- Light/dark mode toggle


## Tech Stack

**Frontend:**
  - React
  - Redux (for state management)
  - Tailwind CSS (for styling)


**Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose for object modeling)
  - JWT (JSON Web Tokens for authentication)
  - bcrypt (for password hashing)


## Installation

To get a local copy up and running, follow these simple steps:

**Prerequisites**

- Node.js and npm installed
- MongoDB installed and running

1. Clone the repository

```sh
git clone https://github.com/NivedHari/mern-estate.git
cd mern-estate
```
    
2. Install backend dependencies
```sh
npm install
```

3. Create a .env file in the root directory and add the following:
```sh
mongo=your_mongodb_connection_string
jwt_secret=your_jwt_secret
```
4.Start the backend server
```sh
npm run dev
```

**Frontend Setup**

1. Navigate to the frontend directory
```sh
cd client
```

2. Install frontend dependencies
```sh
npm install
```
3. Create a .env file in the client directory and add the following:
```sh
VITE_FIREBASE_API_KEY="your_firebase_Api_Key"
```
4.Start the frontend server
```sh
npm run dev
```

The application should now be running at http://localhost:5173/

## Contributing

Contributions are always welcome!

1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a pull request



