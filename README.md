# Estate Application V2

This Real Estate Application is a simple full-stack project that allows users to browse properties, view property details, and add new properties.

## Features

- Browse a list of properties
- View details of a specific property
- Add new properties with an image, address, price, and description
- Responsive design with a mobile-friendly navbar

## Technologies

- Frontend: React, React Router, CSS
- Backend: Node.js, Express, MongoDB, Mongoose
- Image storage: Cloudinary

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

git clone https://github.com/nrodriguez04/EstateMERN.git

2. Change to the project directory:

cd Estate

3. Install the required dependencies:

npm install


4. Create a `.env` file in the root directory with the following variables:

MONGO_URI=<your_mongodb_uri>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>

5. Start the development server:

npm run dev

Your application should now be running on `http://localhost:3000`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

