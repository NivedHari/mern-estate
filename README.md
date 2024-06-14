
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
