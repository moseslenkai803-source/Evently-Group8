# Evently

Evently is a front-end event-discovery application focused on events in Nairobi. It helps visitors browse a curated catalogue of events, narrow results by category or keyword, and open a page with each event's details. The project also includes a form UI for hosting an event.

## Features

- Browse event cards with category, price, date, time, location, and description.
- View featured and trending event selections on the home page.
- Filter events by category on the home and Explore pages.
- Search the Explore page by event title, location, or description.
- Open a dedicated event-details page with host information and a registration call to action.
- Use client-side routes for Home, Explore, Create Event, and individual event details.
- Complete a required-fields-validated event form.
- Use a responsive interface with a shared navigation bar and footer.

## How the application works

Evently is a client-side React application. Its event catalogue is currently stored in `src/data.js` as sample data, so no server or database is required to run it.

1. The **Home** page displays the first matching events as “Upcoming events” and the next matching events as “Trending now.” Choosing a category updates both sections.
2. The **Explore** page displays the full sample catalogue. A visitor can select a category and/or enter a search term; both filters are applied together.
3. Selecting **View details** opens `/event/:id`, which shows the event image, category, price, date and time, location, host, and description.
4. The **Create** page collects event information and checks that the title, date, time, location, and category are supplied. On success it shows a confirmation alert and returns to the home page.

### Current front-end limitations

- Creating an event does **not** yet save it to the catalogue or a backend; it only validates the form, shows a success message, and navigates home.
- The **Register Now** button is presentational and does not yet complete registration.
- `EventContext` contains local-storage persistence scaffolding, but it is not mounted in `main.jsx` and is not used by the pages. The visible catalogue therefore comes from the static sample data.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home page with featured and trending events |
| `/explore` | Searchable and category-filterable event catalogue |
| `/event/:id` | Details for a selected event |
| `/create` | Event-creation form |

## Tech stack

- React 19
- React Router DOM 7
- Vite 8
- CSS custom properties and global CSS
- ESLint

Event images are loaded from Unsplash URLs in the sample data.

## Getting started

### Prerequisites

- Node.js 20.19+ or 22.12+ (compatible with the Vite version used by this project)
- npm

### Installation and development

```bash
git clone <repository-url>
cd Evently
npm install
npm run dev
```

Vite prints the local development URL in the terminal (normally `http://localhost:5173`).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project structure

```text
src/
├── components/       # Reusable UI: filters, navigation, footer, buttons, badges
├── context/          # Event context and local-storage persistence scaffold
├── pages/            # Home, Explore, Create Event, and Event Details routes
├── styles/           # Global styles and CSS variables
├── App.jsx           # Route and shared-layout setup
├── data.js           # Static sample event catalogue
└── main.jsx          # React entry point
```

## Authors and contributions

**Evently Group 8** developed this project collaboratively. The amaizing developers are lenkai, Salim and Kemmy. The group contribution covers:

- React application setup, routing, and shared layout.
- Event catalogue, category filtering, keyword search, and details views.
- Event-card, navigation, footer, and form interface components.
- Styling, responsive presentation, and sample Nairobi event content.

When individual author details are available, replace this section with each member’s name, GitHub profile, and the work they completed.

## Future improvements

- Connect the creation form to `EventContext` and persist new events.
- Add a backend for event management, accounts, and registrations.
- Implement registration, form feedback, and error states.
- Add date, price, and location filters; sorting; and pagination.
- Add automated tests and accessible loading/error states.
