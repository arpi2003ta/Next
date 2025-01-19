# Responsive Header Component

This project implements a responsive header component for a web application using **React** and **Material-UI (MUI)**. The header adjusts dynamically based on screen size, with different layouts and elements displayed for large and small screens.

---

## **Features**

1. **Responsive Design:**
   - On large screens:
     - The header includes a brand name, a search bar, and a user avatar.
     - The brand name and search bar are slightly shifted to the left, and the search bar has an increased width.
   - On small screens:
     - The search bar is removed, leaving only the brand name (aligned to the left) and the avatar (aligned to the right).

2. **Search Bar:**
   - Includes a search icon inside the search box on the right.
   - Dynamically adjusts width based on screen size.

3. **Custom Styling:**
   - The header background color is customized.
   - The layout is styled using Material-UI's `sx` property and responsive utilities.

4. **Avatar Section:**
   - Displays an avatar with a fallback initial ("J") and a username on larger screens.

---

## **Technologies Used**

- **React**
- **Material-UI (MUI)**
- **Emotion** (for styling with Material-UI)

---

## **Setup Instructions**

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## **Component Breakdown**

### **Header.jsx**

The `Header` component is the main responsive header. It uses the following elements:

- **AppBar:** Acts as the main container for the header.
- **Toolbar:** Provides flexible layout for arranging child components.
- **Box:** Used for grouping and aligning elements (brand name, search bar, avatar).
- **SearchBar Component:**
  - A reusable component for the search input field.
  - Includes a search icon inside the input box.

#### Key Logic:
- **Responsive Behavior:**
  - `useMediaQuery` is used to detect screen width and adjust the layout dynamically.
  - The search bar is conditionally rendered only on larger screens.

---




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
