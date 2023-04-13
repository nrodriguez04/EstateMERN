# Estate Application V2

Introduction
EState is a web application built using the MERN stack (MongoDB, Express, React, Node.js). The application features user authentication, user roles, property search and filter, property map view, image gallery, responsive design, pagination, ratings and reviews, messaging system, admin dashboard, and analytics.

## Features

-User Authentication
EState provides a registration and login system to allow users to create accounts and manage their listings. Users can register with their email address and password, and then use the login form to access their account.

-User Roles
EState has different user roles such as buyers, sellers, and administrators, with varying levels of access and permissions. Buyers can search for properties, save their favorite properties, and leave ratings and reviews. Sellers can create and manage their property listings. Administrators have full control over the application, including managing users, properties, and other aspects of the application.

-Property Search and Filter
EState implements a search functionality that allows users to search for properties based on criteria like location, price, number of bedrooms, and more. The search results can be filtered and sorted to make it easier for users to find their ideal property.

-Property Map View
EState integrates a map view, such as Google Maps, to display properties on a map and enable users to explore listings in a specific area. Users can view properties on the map, filter them, and click on a marker to view more details about the property.

-Image Gallery
EState supports multiple property images and creates an image gallery for each listing. Users can view the images by clicking on the gallery button on the property details page.

-Responsive Design
EState is designed to be responsive and works well on various devices, including mobile phones, tablets, and desktop computers. The user interface is optimized for different screen sizes to provide the best possible user experience.

-Pagination
EState implements pagination for the property listings, especially if you expect a large number of properties in the database. Users can browse through the listings by clicking on the pagination links at the bottom of the page.

-Ratings and Reviews
EState allows users to leave ratings and reviews for properties, and displays them on the property details page. Users can rate a property on a scale of 1 to 5 stars and leave a comment about their experience.

-Messaging System
EState creates a messaging system for users to communicate with property owners or agents directly through the platform. Users can send and receive messages about a property listing to get more information or schedule a viewing.

-Admin Dashboard
EState provides an admin dashboard for managing users, properties, and other aspects of the application. Administrators can view and edit user profiles, approve or reject property listings, and access analytics data.

-Analytics
EState integrates analytics to track user engagement, popular properties, and other key metrics to help you make data-driven decisions for future improvements. You can view the analytics data in the admin dashboard to see how your application is performing.

-Conclusion
EState is a powerful real estate web application built with MERN stack, RESTful API, and Cloudinary. It features user authentication, user roles, property search and filter, property map view, image gallery, responsive design, pagination, ratings and reviews, messaging system, admin dashboard, and analytics. With EState, users can easily search for properties, communicate with property owners or agents, and leave feedback about their experience.

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

