# UWBC Hackathon Vite Project

## Description
This project is part of the UWBC (United Way of Big City) Hackathon competition. It is aimed at creating a web application that facilitates logistics planning and coordination for UWBC volunteers. The application allows users to find suppliers and demanders, create new suppliers and demanders, update product quantities, and fetch yearly summaries of product data.

## Features
- Find all suppliers and demanders.
- Create new suppliers and demanders.
- Update product quantities for suppliers and demanders.
- Fetch yearly summaries of product data.
- Integrates with the Mapbox API for geocoding.

## Technologies Used
- Vite
- Express.js
- Prisma ORM
- Mapbox API
- React.js (Frontend)

## Installation
1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`

## Usage
1. Start the development server: `npm run dev`
2. Access the development server at `http://localhost:3000`

## API Endpoints
1. `GET /suppliers` - Get all suppliers with coordinates.
2. `POST /supplier` - Create a new supplier.
3. `GET /demanders` - Get all demanders with coordinates.
4. `POST /demander` - Create a new demander.
5. `GET /supplier/:email` - Find a supplier by email.
6. `GET /demander/:email` - Find a demander by email.
7. `GET /sproduct/:id` - Get supplierProduct by ID.
8. `PUT /sproduct/:id` - Update the quantity of supplierProduct.
9. `GET /dproduct/:id` - Get demanderProduct by ID.
10. `PUT /dproduct/:id` - Update the quantity of demanderProduct.
11. `GET /supplier-products/yearly-summary` - Fetch supplier's annual data.
12. `GET /demander-products/yearly-summary` - Fetch demander's annual data.

## Frontend
The frontend of this project is built using React.js and Vite. You can find the frontend code in the `/client` directory.

## Contributing
Contributions to this project are welcome! If you have any ideas or improvements, feel free to submit a pull request.

---

Made with ❤️ during the UWBC Hackathon.
