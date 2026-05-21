# Binance Futures Testnet Trading Bot

A simplified trading bot built using Python for Binance Futures Testnet.

## Features

- MARKET orders
- LIMIT orders
- BUY and SELL support
- CLI-based input
- Input validation
- Logging system
- Exception handling
- Structured modular architecture

---

## Project Structure

trading_bot/

│

├── bot/
│   ├── client.py
│   ├── orders.py
│   ├── validators.py
│   └── logging_config.py
│
├── logs/
├── cli.py
├── requirements.txt
├── README.md
└── .env

---

## Setup

### Create Virtual Environment

```bash
python -m venv venv
```

### Activate Environment

Windows:

```bash
venv\Scripts\activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Run MARKET Order

```bash
python cli.py --symbol BTCUSDT --side BUY --type MARKET --quantity 0.001
```

---

## Run LIMIT Order

```bash
python cli.py --symbol BTCUSDT --side SELL --type LIMIT --quantity 0.001 --price 120000
```

---

## Logging

Logs are stored in:

```text
logs/trading_bot.log
```

---

## Assumptions

- Binance Futures Testnet endpoint is used
- Mock responses are currently implemented for order execution
- Structure is designed for easy integration with live Binance APIs

---

## Note

Due to Binance regional/API restrictions during development, mock responses were implemented while preserving modular production-ready architecture and Binance Futures Testnet compatibility.