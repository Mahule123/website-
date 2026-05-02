# Electric Repair Components Inventory

A web application for managing electric repair components inventory with login, home page, and description features.

## Features

- Login page to access the application
- Home page with "Electric Repair" heading and component cards
- Predefined list of common electric repair components with placeholder images
- Click on component image to add/edit description
- Edit the amount for each component
- Data persists in browser's local storage

## How to Run

Copy these files to your nginx HTML directory (usually `/usr/share/nginx/html`) in your container.

For example, if running nginx in Docker:

```bash
docker cp index.html <container_id>:/usr/share/nginx/html/
docker cp home.html <container_id>:/usr/share/nginx/html/
docker cp styles.css <container_id>:/usr/share/nginx/html/
docker cp script.js <container_id>:/usr/share/nginx/html/
docker cp login.js <container_id>:/usr/share/nginx/html/
```

Then access the site at your nginx server's URL (starts at login page).

## Testing in VS Code

Install the Live Server extension and right-click `index.html` to open with Live Server.

## Files

- `index.html`: Login page
- `home.html`: Home page with components
- `styles.css`: Styling for pages and modal
- `script.js`: JavaScript for home page functionality
- `login.js`: JavaScript for login (unused in the current single-page flow)
- `db/db.js`: Database helper to collect user login data
- `db/users.json`: Separate JSON user database file
- `images/`: Local JPG images used by the appliance cards