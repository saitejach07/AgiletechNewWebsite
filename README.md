# 🚀 AgileTech Full Stack Application

This project includes:

* **Frontend** → React (Vite)
* **Backend** → Node.js + Express
* **Database** → PostgreSQL

---

# 📦 Project Structure

```
project/
  frontend/
  server/
```

---

# 🧰 Prerequisites

Make sure you have installed:

* Node.js (v18+ recommended)
* PostgreSQL (local installation)

---

# ⚙️ Step 1 — Clone the repository

```bash
git clone https://github.com/saitejach07/AgiletechNewWebsite.git
```

---

# 📥 Step 2 — Install dependencies

### Backend

```bash
cd server
npm install
```

### Frontend

```bash
cd ../frontend
npm install
```

---

# 🗄️ Step 3 — Setup PostgreSQL Database

## 1. Open PostgreSQL

```bash
psql
```

---

## 2. Create database

```sql
CREATE DATABASE provider_db;
```

---

## 3. Connect to database

```sql
\c provider_db
```

---

## 4. Create table

```sql
=======
🚀 AgileTech Full Stack Application

This project includes:

Frontend → React (Vite)
Backend → Node.js + Express
Database → PostgreSQL
📦 Project Structure
project/
  frontend/
  server/
🧰 Prerequisites

Make sure you have installed:

Node.js (v18+ recommended)
PostgreSQL (local installation)
⚙️ Step 1 — Clone the repository
git clone https://github.com/saitejach07/AgiletechNewWebsite.git
📥 Step 2 — Install dependencies
Backend
cd server
npm install
Frontend
cd ../frontend
npm install
🗄️ Step 3 — Setup PostgreSQL Database
1. Open PostgreSQL
psql
2. Create database
CREATE DATABASE provider_db;
3. Connect to database
\c provider_db
4. Create table
>>>>>>> dfa0f7d (ReadME updated)
CREATE TABLE providers (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  dob DATE,
  gender VARCHAR(10),
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  profession VARCHAR(100),
  license_number VARCHAR(100),
  issuing_authority VARCHAR(255),
  expiration_date DATE,
  npi VARCHAR(20),
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
<<<<<<< HEAD
```

---

# 🔗 Step 4 — Setup Environment Variables

## 📍 Backend `.env` (inside `/server`)

Create a file:

```bash
server/.env
```

Add:

```env
PORT=5050
DATABASE_URL=postgresql://YOUR_USERNAME@localhost:5432/provider_db
JWT_SECRET=your_secret_key
```

---

## 🧠 How to find YOUR_USERNAME

Run:

```bash
whoami
```
=======
🔗 Step 4 — Setup Environment Variables
📍 Backend .env (inside /server)

Create a file:

server/.env

Add:

PORT=5050
DATABASE_URL=postgresql://YOUR_USERNAME@localhost:5432/provider_db
JWT_SECRET=your_secret_key
🧠 How to find YOUR_USERNAME

Run:

whoami
>>>>>>> dfa0f7d (ReadME updated)

👉 Use that as your PostgreSQL username

Example:

<<<<<<< HEAD
```env
DATABASE_URL=postgresql://john@localhost:5432/provider_db
```

---

## 📍 Frontend `.env` (inside `/frontend`)

```bash
frontend/.env
```

Add:

```env
VITE_API_URL=http://localhost:5050
```

---

# ▶️ Step 5 — Run the application

## Start backend

```bash
cd server
npm run dev
```

---

## Start frontend (new terminal)

```bash
cd frontend
npm run dev
```

---

# 🌐 Step 6 — Open app

```
http://localhost:5173
```

---

# 🔐 Notes

* `.env` files are NOT included in the repo (for security)
* Make sure PostgreSQL is running locally
* Backend must be running before frontend

---

# 🚨 Common Issues

## ❌ Cannot connect to DB

* Ensure PostgreSQL is running
* Check DATABASE_URL is correct

## ❌ Login not working

* Ensure backend is running on correct port
* Check API URL in frontend `.env`

---

# 🚀 Production

* Backend → Render / AWS
* Frontend → Vercel / AWS S3
* Database → Neon / AWS RDS

---

=======
DATABASE_URL=postgresql://john@localhost:5432/provider_db
📍 Frontend .env (inside /frontend)
frontend/.env

Add:

VITE_API_URL=http://localhost:5050
▶️ Step 5 — Run the application
Start backend
cd server
npm run dev
Start frontend (new terminal)
cd frontend
npm run dev
🌐 Step 6 — Open app
http://localhost:5173
🔐 Notes
.env files are NOT included in the repo (for security)
Make sure PostgreSQL is running locally
Backend must be running before frontend
🚨 Common Issues
❌ Cannot connect to DB
Ensure PostgreSQL is running
Check DATABASE_URL is correct
❌ Login not working
Ensure backend is running on correct port
Check API URL in frontend .env
>>>>>>> dfa0f7d (ReadME updated)
# AgileTech Inc – Digital Platform

AgileTech Inc is a modern technology consulting and engineering company platform designed to showcase our services, delivery approach, and internal engineering capabilities. The application reflects how AgileTech partners with businesses to deliver scalable, secure, and high-quality digital solutions.

---

## About AgileTech Inc

AgileTech Inc specializes in delivering end-to-end technology solutions with a strong focus on:

- Agile delivery methodologies  
- Cloud-native engineering  
- Secure and scalable system design  
- Cross-functional collaboration  
- Continuous improvement and innovation  

This platform represents AgileTech’s digital presence and internal workflows, providing both public-facing information and controlled internal access for engineering and operational teams.

---

## Platform Highlights

### Unified Dark-Themed Experience
- Fully consistent dark-themed user interface
- Enterprise-grade design system
- Clean typography and modern visual hierarchy
- Optimized for accessibility and readability

---

### Services Showcase

The platform clearly presents AgileTech’s core service offerings, including:

- **IT Staff Augmentation** – Flexible engineering talent aligned to business needs  
- **Mobile Development** – High-performance mobile applications  
- **Web Development** – Scalable, responsive web platforms  
- **Cloud Solutions** – Secure, cloud-native architectures  
- **In-House Engineering Projects** – AgileTech’s internal delivery and innovation initiatives  

Each service page reflects AgileTech’s engineering standards, delivery philosophy, and technical expertise.

---

### In-House Projects & Internal Access

AgileTech maintains a strict separation between public content and internal engineering resources.

- Public users can explore AgileTech’s approach and capabilities freely
- **Internal access is restricted to a dedicated action within the In-House Projects section**
- Authentication is required **every time internal access is requested**
- Access is temporary and session-based, ensuring controlled visibility
- Internal access is automatically revoked when the user exits the internal workspace

This mirrors AgileTech’s real-world security and access control practices.

---

### Internal Dashboard

The internal dashboard represents AgileTech’s operational and delivery environment:

- Accessible only through authenticated internal access
- Direct navigation is blocked without proper authorization
- Designed for internal workflows, analytics, and operational visibility
- Access is intentionally short-lived to align with security best practices

---

### Healthcare Provider Onboarding

The platform includes a structured onboarding experience demonstrating AgileTech’s capability to build complex, real-world workflows:

- Multi-step guided registration process
- Clear progress tracking through a visual step indicator
- Logical separation of personal, contact, professional, and security information
- Smooth user experience with validation and controlled navigation

This workflow highlights AgileTech’s expertise in building enterprise-grade onboarding systems.

---

## Engineering Principles Reflected

The platform is built to reflect how AgileTech operates internally and delivers solutions to clients:

- Modular, component-driven architecture  
- Clear separation of concerns  
- Reusable UI patterns  
- Scalable navigation and routing  
- Security-conscious access flows  
- User-first design approach  

---

## Purpose of the Platform

This application serves as:

- AgileTech Inc’s digital presence  
- A demonstration of engineering and UX capabilities  
- A representation of internal operational workflows  
- A foundation for future feature expansion  

---

© AgileTech Inc. All rights reserved.
