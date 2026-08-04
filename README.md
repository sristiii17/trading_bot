#  Trading Bot Dashboard

A full-stack trading dashboard built with **React**, **Flask**, and **Python** that provides a modern web interface for executing mock Binance Futures Market and Limit orders.

The project transforms a command-line trading bot into an interactive dashboard by integrating a React frontend with a Flask REST API.

---

##  Features

-  Modern trading dashboard
-  Place Market and Limit orders
-  React frontend with responsive UI
-  Flask REST API integration
-  Modular Python backend
-  Logging support
-  Dark mode trading interface
-  Docker support

---

##  Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios
- Lucide React

### Backend
- Python
- Flask
- Flask-CORS

### Tools
- Git
- GitHub
- Docker

---

##  Project Structure

```text
trading_bot/
│
├── bot/
│   ├── client.py
│   ├── logging_config.py
│   ├── orders.py
│   └── validators.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── Dockerfile
│
├── logs/
├── tests/
├── app.py
├── cli.py
├── requirements.txt
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/trading_bot.git
cd trading_bot
```

---

### Backend Setup

Create a virtual environment

```bash
python -m venv venv
```

Activate it

Windows

```bash
venv\Scripts\activate
```

Linux / macOS

```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run Flask

```bash
python app.py
```

Backend runs at

```
http://127.0.0.1:5000
```

---

### Frontend Setup

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run

```bash
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

## API

### POST /trade

Request

```json
{
  "symbol": "BTCUSDT",
  "side": "BUY",
  "orderType": "MARKET",
  "quantity": 0.01
}
```

Response

```json
{
  "success": true,
  "message": "Trade Executed Successfully"
}
```

##  Docker

Build frontend

```bash
docker build -t trading-dashboard ./frontend
```

Run frontend

```bash
docker run -p 5173:5173 trading-dashboard
```

---

##  Learning Outcomes

Through this project I learned:

- Building reusable React components
- Creating REST APIs with Flask
- Connecting React and Python using Axios
- Organizing a modular backend architecture
- Handling HTTP requests and JSON responses
- Managing project structure for scalability
- Dockerizing applications

---

##  Future Improvements

- Live Binance API integration
- Real-time price updates
- Candlestick charts
- User authentication
- Portfolio tracking
- Trade history persistence
- Docker Compose deployment
- Unit and integration tests

---

## Author

**Sristi Sharma**

Computer Engineering Student

GitHub: https://github.com/sristiii17

LinkedIn: https://linkedin.com/in/sristi-sharma-506862325/
