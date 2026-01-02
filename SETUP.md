# Setup Instructions

## Installation

1. Navigate to the project directory:
```bash
cd create-with-diwash
```

2. Install dependencies:
```bash
npm install
```

## Running the Development Server

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Building for Production

Build the production version:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Project Structure

```
create-with-diwash/
├── app/
│   ├── about/          # About page
│   ├── api/
│   │   └── contact/     # Contact form API endpoint
│   ├── contact/        # Contact page
│   ├── portfolio/      # Portfolio page
│   ├── services/       # Services page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   └── Navigation.tsx  # Navigation component
└── [config files]      # Configuration files
```

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Contact form with API endpoint
- ✅ Navigation component
- ✅ All pages: Home, About, Services, Portfolio, Contact

## Customization

### Updating Branding

The branding "Create with Diwash" appears in:
- `app/layout.tsx` - Page title and metadata
- `components/Navigation.tsx` - Navigation header

### Styling

Styles are managed through:
- `app/globals.css` - Global styles and Tailwind imports
- `tailwind.config.ts` - Tailwind configuration
- Individual page components use Tailwind utility classes

### Adding Content

Edit the respective page files:
- `app/page.tsx` - Home page content
- `app/about/page.tsx` - About page content
- `app/services/page.tsx` - Services page content
- `app/portfolio/page.tsx` - Portfolio page content
- `app/contact/page.tsx` - Contact page content

## API Endpoints

### POST /api/contact

Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your services."
}
```

**Response:**
```json
{
  "message": "Message received successfully"
}
```

Currently, the API logs submissions to the console. You can extend it to:
- Save to a database
- Send email notifications
- Integrate with a CRM system

