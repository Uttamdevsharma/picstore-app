# PicStore App

This is a simple MERN stack application that allows users to upload images. The application consists of a React frontend and a Node.js/Express backend. Images are uploaded to Cloudinary for storage.


## Features

-   Image upload functionality
-   Frontend built with React
-   Backend built with Node.js and Express
-   Image storage using Cloudinary
-   File handling with Multer

## Getting Started

### Prerequisites

-   Node.js and npm installed
-   A Cloudinary account

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Uttamdevsharma/picstore-app.git
    cd picstore-app
    ```

2.  **Install backend dependencies:**

    ```bash
    cd server
    npm install
    ```

3.  **Install frontend dependencies:**

    ```bash
    cd ../client
    npm install
    ```

4.  **Set up environment variables:**

    Create a `.env` file in the `server` directory and add your Cloudinary credentials:

    ```
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    ```

### Running the Application

1.  **Start the backend server:**

    ```bash
    cd server
    npm run start:dev
    ```

    The server will start on `http://localhost:3000`.

2.  **Start the frontend development server:**

    ```bash
    cd client
    npm run dev
    ```

    The React app will open in your browser at `http://localhost:5173`.

## How It Works

1.  The user selects an image to upload using the file input on the frontend.
2.  The `handleUpload` function in `UploadImage.jsx` sends the image file to the backend using a `POST` request to `http://localhost:3000/upload`.
3.  The backend receives the request, and the Multer middleware saves the file to the `uploads/` directory.
4.  The `cloudinary.uploader.upload` function uploads the image from the `uploads/` directory to your Cloudinary account.
5.  After a successful upload, the local file is deleted from the `uploads/` directory.
6.  The backend sends a response to the frontend with the secure URL of the uploaded image.
7.  The frontend displays the uploaded image.
