# TileCraft Gallery

A modern and luxurious tile gallery web application built with Next.js.
Users can explore premium tile collections, view detailed information, create accounts, and manage their profiles through a beautiful responsive interface.

---

## 🌐 Live Website

🔗 https://tilecraft-gallery.vercel.app

---

## 📌 Project Purpose

TileCraft Gallery is designed to showcase premium tiles in an elegant and user-friendly way.
The platform allows users to browse tile collections, search tiles, authenticate securely, and manage personal profiles.

---

## ✨ Key Features

* 🔐 Authentication system using Better Auth
* 📱 Fully responsive for mobile, tablet, and desktop
* 🎨 Luxury brown-themed modern UI
* 🖼️ Dynamic tile gallery with detailed pages
* 🔎 Search functionality for tiles
* 👤 User profile & update profile feature
* 🚫 Custom Not Found page
* ⏳ Beautiful loading UI
* 📢 Marquee section for announcements
* 🔑 Google Login integration
* 🌐 Secure environment variable configuration

---

## 🛠️ Technologies Used

* Next.js (App Router)
* React
* Tailwind CSS
* DaisyUI
* HeroUI
* Better Auth
* MongoDB
* React Toastify
* React Fast Marquee

---

## 📂 Routes

### Public Routes

* `/`
* `/all-tiles`
* `/login`
* `/signup`

### Private Routes

* `/tileDetails/[id]`
* `/my-profile`
* `/updateProfile`

---

## 📦 NPM Packages Used

```bash
npm install @heroui/react
npm install better-auth
npm install mongodb
npm install react-toastify
npm install react-fast-marquee
npm install @gravity-ui/icons
```

---

## ⚙️ Environment Variables

Create a `.env.local` file and add:

```env
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000

MONGODB_URI=your_mongodb_uri

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

## 🚀 Run Locally

Clone the project:

```bash
https://github.com/khadijarahmannupur-ctrl/assienment-8/edit/main
```

Go to the project directory:

```bash
cd tilecraft-gallery
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 👨‍💻 Author

Developed by Nupur Rahman
