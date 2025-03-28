# Angular Olympic Dashboard

## Description
This Angular application provides a dashboard displaying Olympic game results by country. The main features include:

- A **Pie Chart** representing game results by country.
- Clicking on a slice of the pie chart navigates to a **detail page**.
- The detail page shows the selected country’s information along with a **Line Chart** for additional statistics.

## Project Structure
The project is organized into the following main directories:

- **pages/**: Contains the navigation pages (Dashboard, Detail Page, etc.).
- **core/**: Includes core services used throughout the application.
- **charts/**: Contains the chart components.
- **components/**: Houses other UI components used in the application.

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd angular-olympic-dashboard
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the application:
   ```sh
   ng serve
   ```
   The app will be available at `http://localhost:4200/`.

## Technologies Used
- **Angular** (Framework)
- **Ngx-Charts** (For visualization)
- **Angular Router** (For navigation)
- **TypeScript, HTML, CSS**

## License
This project is licensed under the MIT License.

