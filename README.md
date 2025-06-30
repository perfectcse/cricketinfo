cricket-blog-site/
├── client/ # React (Frontend)
├── server/ # Node.js + Express (Backend)
├── .env # Environment variables (for Cloudinary, DB, etc.)
├── README.md
.............................................................
✅ Next Step?
Now that frontend is done:
Would you like to move on to:
🔄 Backend (Models + API for Players and Blogs)?
☁️ Cloudinary integration (Backend + Frontend)?
🧪 Axios connection testing and frontend CRUD forms?
..............................................................
✅ STEP 6: Optional Features
✅ Admin Login (Simple Auth)
✅ Pagination for blogs
✅ Search bar for players or blogs
✅ Likes/comments (for future)
Let me know if you want:
Add Blog / Player Form UI
Backend API & Cloudinary setup
Dashboard or Admin panel for managing data
.................................................................
/server
├── config/
│ └── db.js # MySQL DB connection
├── controllers/
│ ├── blogController.js # CRUD logic for blogs
│ └── playerController.js # CRUD logic for players
├── models/
│ ├── blogModel.js # DB queries for blogs
│ └── playerModel.js # DB queries for players
├── routes/
│ ├── blogRoutes.js # /api/blogs
│ ├── playerRoutes.js # /api/players
│ └── uploadRoutes.js # /api/upload (Cloudinary)
├── utils/
│ └── cloudinary.js # Cloudinary storage setup
├── .env # Environment variables
├── server.js # Main entry point
...........................................................................................
| Route | Method | Description |
| ------------------ | ------ | -------------------------- |
| `/api/players` | GET | List all players |
| `/api/players` | POST | Add new player |
| `/api/players/:id` | PUT | Update player |
| `/api/players/:id` | DELETE | Delete player |
| `/api/blogs` | GET | List all blogs |
| `/api/blogs` | POST | Add new blog |
| `/api/blogs/:id` | PUT | Update blog |
| `/api/blogs/:id` | DELETE | Delete blog |
| `/api/upload` | POST | Upload image to Cloudinary |
............................................................
/client
├── public/
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── PlayerCard.jsx
│ │ ├── BlogCard.jsx
│ │ └── BlogForm.jsx
| |.....
│ ├── pages/
│ │ ├── Home.jsx[dpne]
│ │ ├── Players.jsx[dpne]
│ │ ├── Blogs.jsx[done]
│ │ └── About.jsx[done]
| | AddBlog.jsx
AddPlayer.jsx
| | ....
│ ├── App.jsx
│ ├── main.jsx
│ └── styles/
│ └── Global.css
├── .env ← (Frontend)
└── vite.config.js
............................................................................................
| Method | URL | Body / Params | Description |
| ------ | --------------------------------------- | -------------------------------------- | ------------------- |
| GET | `http://localhost:5000/api/players` | — | Get all players |
| POST | `http://localhost:5000/api/players` | `{ "name": "Virat", "team": "India" }` | Add new player |
| DELETE | `http://localhost:5000/api/players/:id` | — | Delete player by ID |
...................................................................................................................
| Method | URL | Body / Params | Description |
| ------ | ------------------------------------- | ----------------------------------------------------------- | ----------------- |
| GET | `http://localhost:5000/api/blogs` | — | Get all blogs |
| POST | `http://localhost:5000/api/blogs` | `{ "title": "New Blog", "content": "This is a test blog" }` | Add blog |
| PUT | `http://localhost:5000/api/blogs/:id` | JSON body | Update blog by ID |
| DELETE | `http://localhost:5000/api/blogs/:id` | — | Delete blog by ID |s
............................................................................................................
RECCAP OF THE THINGS IN MIND
✅ 📁 Project Overview
Frontend: React (Vite), Axios, CSS Modules

Backend: Node.js, Express, MySQL

Database: MySQL (Database: cricket_blog)

Design: Clean modern UI with responsive layout

Assets: Local player images + logo

No Cloudinary used (images from local or URLs)
✅ Frontend Features
🌐 Pages Built
Home.jsx — Welcome, intro, project info

Players.jsx — Shows all player cards

AddPlayer.jsx — Add new player (with image, role, team)

Blogs.jsx — Show all blogs with cards

AddBlog.jsx — Add/Edit blogs

About.jsx — Live cricket updates + highlights + latest matches

Navbar.jsx — Navigation bar with logo + links

Footer.jsx — Contact form + social links + copyright

🎨 UI/UX Enhancements
Local logo (CrickFlick)

Rectangular player cards with image fallback

Blog cards with conditional image

Scroll-to-top button (optional)

Responsive CSS for all pages and components

Contact form with working validation and alert feedback

🧠 Components Created
PlayerCard.jsx – Dynamic card with delete/edit buttons

BlogCard.jsx – Blog post UI with delete/edit

BlogForm.jsx – Reusable form for Add/Edit Blog

PlayerForm.jsx – Add new player form

Footer.jsx – Contact + Socials

Navbar.jsx – Navigation

.....................................................................
server/
├── config/db.js ✅ MySQL connection
├── models/ ✅ Player & Blog model logic
├── controllers/ ✅ Express logic
├── routes/ ✅ API routes
└── index.js ✅ Main server file
..................................................
| Method | Endpoint | Description |
| ------ | ------------------ | --------------- |
| GET | `/api/players` | Get all players |
| POST | `/api/players` | Add player |
| DELETE | `/api/players/:id` | Delete player |
.................................................
| Method | Endpoint | Description |
| ------ | ---------------- | ------------- |
| GET | `/api/blogs` | Get all blogs |
| POST | `/api/blogs` | Add blog |
| PUT | `/api/blogs/:id` | Update blog |
| DELETE | `/api/blogs/:id` | Delete blog |
..............................................
| Method | Endpoint | Description |
| ------ | -------------- | ------------ |
| POST | `/api/contact` | Save message |
...........................................
📊 Database Tables
players: id, name, role, team, imageUrl

blogs: id, title, content, imageUrl

contacts: id, name, message
