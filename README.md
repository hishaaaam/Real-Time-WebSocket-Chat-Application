# 💬 Real-Time WebSocket Chat Application

## 🚀 Overview

This project is a real-time chatting application built using **FastAPI**, **WebSockets**, and a simple web frontend. It enables multiple users to connect simultaneously and exchange messages instantly with low latency.

The system demonstrates event-driven communication, asynchronous programming, and efficient user routing using hash maps.

---

## ✨ Features

* 🔴 Real-time bi-directional messaging
* 👥 Multi-user support
* ⚡ Fast message routing using WebSockets
* 🧠 Efficient user lookup using hash map (dictionary)
* 🌐 Simple and clean web interface
* 🔌 Lightweight and easy to deploy

---

## 🏗️ Tech Stack

**Backend**

* FastAPI
* Python
* WebSockets
* Uvicorn

**Frontend**

* HTML
* CSS
* JavaScript

---

## 🧠 Core Data Structures Used

* **Hash Map (Python Dictionary)** — manages connected users for O(1) lookup
* **Lists/Arrays (implicit)** — message handling and DOM updates

---

## 📂 Project Structure

```
chatting-app/
│
├── server.py          # FastAPI WebSocket server
├── static/            # Frontend files
│   ├── index.html
│   ├── style.css
│   └── script.js
├── requirements.txt
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/real-time-websocket-chat-app.git
cd real-time-websocket-chat-app
```

### 2️⃣ Create virtual environment (recommended)

```bash
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows
```

### 3️⃣ Install dependencies

```bash
pip install -r requirements.txt
```

### 4️⃣ Run the server

```bash
uvicorn server:app --reload
```

### 5️⃣ Open in browser

```
http://localhost:8000
```

---

## 🔄 How It Works

1. User opens the web interface.
2. Browser establishes a WebSocket connection with FastAPI.
3. Server stores the user in a hash map of active connections.
4. When a message is sent:

   * Server looks up the recipient in O(1) time.
   * Message is pushed instantly via WebSocket.
5. Messages appear in real time without page refresh.

---

## 📈 Possible Improvements

* ✅ Message persistence (database)
* ✅ Authentication & JWT
* ✅ Group chat support
* ✅ Typing indicators
* ✅ Message queue system
* ✅ Docker deployment

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 👤 Author

**Hisham Hidayathulla**

---

⭐ If you found this project useful, consider giving it a star!
