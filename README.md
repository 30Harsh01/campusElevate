---

# 🎓 **Campus Elevate Backend**

A unified campus-service backend that brings together resources, library management, event handling, feedback collection, and community features in one place.
Built with Node.js, Express, and MongoDB, it streamlines daily campus needs—from borrowing items to managing books, events, and sustainability initiatives.

---

## 🚀 **Project Overview**

**Campus Elevate** is a multi-module backend designed to simplify and digitize everyday campus activities.
The platform includes resource borrowing, lost & found, library book management with due-date alerts, event registrations, feedback systems, and a green donation initiative.

---

## 📂 **Modules Included**

---

## 📘 **1. Resources Module**

### Features:

* **All Resources** – View every available campus resource
* **Your Resources** – Track items borrowed by the user
* **Uploaded Resources** – View items uploaded by the user
* **Lost & Found** – Report lost items or upload found items

### Functionalities:

* Borrow any resource
* Upload new resources
* Manage items and lending activity
* Dedicated lost & found section

Routes file: `ResourcesRoutes.js`, `lostandfoundsroutes.js`, `foundItems.js`

---

## 📚 **2. Library Module**

A mini **Library Management System** with user-specific controls.

### Features:

* Track all issued books
* View pending fines
* System alerts users before & after due dates
* Helps maintain accountability and reduce penalties

Route file: `libraryRoutes.js`

---

## 🎉 **3. Events Module**

A simple **Event Management System**.

### Features:

* Explore campus events
* Register for events
* Book tickets (feature under development)

Route file: `eventsRoutes.js`

---

## 📝 **4. Feedback Module**

Provides an easy way for students or faculty to submit feedback.

### Features:

* Submit feedback on any topic
* Store and retrieve feedback entries
* Separate website feedback system

Routes file:
`feedbackRoutes.js`, `websitefeedbackRoutes.js`

---

## 🌱 **5. Go Green Donation**

A sustainability initiative within the platform.

### Features:

* Users can donate to plant a tree
* Tracks donations and encourages eco-friendly participation

Route file: `donateRoute.js`

---

## 👤 **6. User & Admin Management**

Includes:

* User authentication & data handling
* Admin controls for moderation and approval

Routes file: `userRoutes.js`, `adminRoutes.js`

---

## 📁 **Routes Overview**

| Module       | Route File                                      |
| ------------ | ----------------------------------------------- |
| Resources    | `ResourcesRoutes.js`                            |
| Lost & Found | `lostandfoundsroutes.js`, `foundItems.js`       |
| Library      | `libraryRoutes.js`                              |
| Events       | `eventsRoutes.js`                               |
| Feedback     | `feedbackRoutes.js`, `websitefeedbackRoutes.js` |
| Donations    | `donateRoute.js`                                |
| Users        | `userRoutes.js`                                 |
| Admin        | `adminRoutes.js`                                |

---
