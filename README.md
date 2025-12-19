# Lost & Found Portal

A web-based **Lost & Found management system** that allows users to upload found items, search for items, and mark items as collected.  
The frontend is built using **React**, and the backend is implemented using **Spring Boot** with a **MySQL** database.

---

## 🛠 Tech Stack

### Frontend
- React (Create React App)
- HTML, CSS, JavaScript
- Fetch API

### Backend
- Spring Boot
- RESTful APIs
- Spring Web
- Spring Data JPA

### Database
- MySQL

---

## ✨ Features

- Upload found items
- Search items by item type
- View all available items
- Mark items as collected
- RESTful communication between frontend and backend

---

## 📂 Project Structure

lost-and-found-portal/
│
├── src/                # React frontend
├── public/
├── README.md
│
└── backend/
    └── lost-and-found-portal/   # Spring Boot backend 

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:

- **Node.js & npm**
- **Java (11 or above)**
- **MySQL**
- **Spring Tool Suite (STS) / Eclipse**

---

## ▶️ Running the Application

### 1️⃣ Start MySQL
Create a database:

```sql
CREATE DATABASE lost_and_found_portal;
```

### 2️⃣ Run Spring Boot Backend

- Open the backend project in **STS / Eclipse**
- Configure MySQL credentials in `application.properties`
- Run the **Spring Boot application**


Backend will run at:

http://localhost:8080


### 3️⃣ Run React Frontend

From the project root:

```bash
npm install
npm start
```


Frontend will run at:

http://localhost:3000


## 🔗 API Endpoints (Spring Boot)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/item/` | Fetch all items |
| POST   | `/item/save` | Upload a new item |
| DELETE | `/item/delete/{id}` | Mark item as collected |


## 🧠 Backend Dependencies

The Spring Boot backend uses only the following dependencies:

- **Spring Web**
- **Spring Data JPA**
- **MySQL Driver**

**No additional frameworks or libraries are used.**

---

## 📌 Notes

- Each request between frontend and backend is **stateless**
- The backend follows **RESTful API principles**
- Deleting an item represents **marking it as collected**
- Accessing `DELETE` endpoints directly from the browser may result in  
  **405 Method Not Allowed**, which is expected behavior

## 📜 License

This project is developed for **educational purposes**.
