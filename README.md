# Roxiler_Assessment

# Product Transactions Dashboard

A web application to display product transaction details, statistics, and visualizations using the MERN stack (MongoDB, Express, React, Node.js). This dashboard fetches transaction data from an API and provides features like transaction listing, statistics, price range distribution, and a pie chart for category distribution.

## Features

- **Transaction List**: Displays transactions for a selected month, with search and pagination functionality.
- **Statistics**: Shows the total sale amount, number of sold items, and number of unsold items for the selected month.
- **Bar Chart**: Visualizes the distribution of items in different price ranges for the selected month.
- **Pie Chart**: Shows the distribution of items across different categories for the selected month.
- **Responsive UI**: Built with React and Bootstrap for a clean and responsive user interface.

## Technologies Used

- **Frontend**: React.js, Bootstrap, Axios, react-chartjs-2, Chart.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API**: Third-party JSON data source (https://s3.amazonaws.com/roxiler.com/product_transaction.json)

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version)
- [MongoDB](https://www.mongodb.com/) (for local development) or a cloud-based MongoDB service (like MongoDB Atlas)

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/khushaldalavi/Roxiler_Assessment.git
cd product-transactions-dashboard
##Backend Setup
cd backend
npm install
npm start

##Frontend Setup
cd frontend
npm install
npm start


### Explanation of Sections:
- **Project Overview**: Briefly describes what the project does.
- **Features**: Lists the key features of the project.
- **Technologies Used**: Specifies the main technologies and tools used in both frontend and backend.
- **Installation**: Provides step-by-step instructions for setting up the project locally.
- **Usage**: Explains how to use the application after it's set up.
- **API Endpoints**: Lists the available API endpoints with brief descriptions.
- **Contributing**: Encourages others to contribute to the project.
- **License**: Provides the licensing information for the project.
- **Acknowledgments**: Thanks libraries and tools that helped in building the project.

You can personalize the repository URL and make adjustments according to your needs.


