# iNotebook ![Build Status](https://img.shields.io/badge/build-passing-brightgreen)

> **Your notes on the cloud. Simple, secure, and accessible everywhere.**

---

## 🚀 Demo

Try it online: [iNotebook Live](https://i-notebook-teal.vercel.app)

---

## 📖 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 📝 About

**iNotebook** is a modern, full stack **MERN (MongoDB, Express.js, React, Node.js)** note-taking app.  
Create, edit, and securely manage your notes from any device with a powerful, beautiful interface.

---

## ✨ Features

- Create, edit, and delete notes instantly
- Secure cloud storage (MongoDB)
- JWT (JSON Web Token) authentication for user security
- Password encryption using `crypt`
- Session persistence with localStorage
- Responsive design for all devices
- Progressive Web App (offline support)
- Fast, modern UI built with React
- 100% browser-based

---

## 🛠 Tech Stack

- **Frontend:** React (Create React App), HTML, CSS, JavaScript, LocalStorage
- **Backend:** Node.js, Express.js, JWT authentication, password encryption with `crypt`
- **Database:** MongoDB
- **Other:** LocalStorage for session and note caching
- **Deployment:** 
  - Frontend: Vercel
  - Backend: Render (from [`inotebook-backend`](https://github.com/vishal-singh-web/inotebook-backend) repo)

---

## 🚀 Getting Started

Clone and run locally (both client and server):

Frontend
git clone https://github.com/vishal-singh-web/iNotebook.git
cd iNotebook
npm install
npm start

text

For backend/API setup, visit: [`inotebook-backend`](https://github.com/vishal-singh-web/inotebook-backend)

---

## 🗂 Available Scripts

| Command       | Description                           |
|---------------|---------------------------------------|
| npm start     | Run development server                |
| npm test      | Launch test runner                    |
| npm run build | Build app for production              |
| npm run eject | Eject configuration (advanced)        |

---

## 🌍 Deployment

- **Frontend:** Deployed on Vercel  
- **Backend:** Deployed on Render ([`inotebook-backend`](https://github.com/vishal-singh-web/inotebook-backend))

To deploy frontend:
npm run build

text
Upload the `/build` folder to your preferred static host.

Backend is live on Render; update it via the `inotebook-backend` repo.

Read more: [Create React App Deployment Guide](https://facebook.github.io/create-react-app/docs/deployment)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create your branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add feature'`)
4. Push (`git push origin feature/fooBar`)
5. Submit a Pull Request

---

## 📄 License

**This project is NOT licensed.**  
Currently, there is *no license* associated with this repository.  
All rights reserved by the author.

---

## 👤 Contact

Made by [Vishal Singh](https://github.com/vishal-singh-web)  
Have questions? [Open an issue](https://github.com/vishal-singh-web/iNotebook/issues)

---
