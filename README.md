# QuickPick

**Find the best deals effortlessly with QuickPick – A price comparator website!**

[See website from here](#)

## Features

- **User-Friendly Search**: Quickly search for products across multiple platforms.
- **Category-Based Browsing**: Explore products by categories like food, electronics, and more.
- **Price Comparison**: View and compare prices from platforms like Amazon, Flipkart, etc.
- **Responsive UI**: Sleek, mobile-friendly interface built with React and TailwindCSS.

## Tech Stack

- **Frontend:** React.js with Axios for API communication and TailwindCSS.
- **Backend:** Spring Boot for handling business logic.
- **Database:** MongoDB for storing product details and prices.
- **API Communication:** RESTful APIs for fetching product data.

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/vrajmodi2004/QuickPick.git
   cd QuickPick
   ```

2. **Backend Setup**
   ```bash
   cd backend
   mvn install
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Database Configuration**
   Update the `application.properties` file:
   ```properties
   spring.data.mongodb.uri=mongodb://localhost:27017/quickpick
   ```

## API Endpoints

### Products
- `GET /api/products` - Fetch all available products
- `GET /api/products/{category}` - Fetch products by category
- `GET /api/products/search/{name}` - Search for a product

### Prices
- `GET /api/prices/{productId}` - Fetch price details for a product from various platforms

## Usage Guide

1. **Search for a Product**: Enter the product name in the search bar.
2. **Compare Prices**: View price differences across multiple platforms.
3. **Filter by Category**: Browse specific product categories for easy selection.

## Contributors
- **Vraj Modi**
- **Namra Vora**
- **Parth Trivedi**

---
*Find the best deals effortlessly with QuickPick and make informed purchase decisions!*

