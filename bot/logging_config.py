import logging
import os

os.makedirs("logs", exist_ok=True)

logger = logging.getLogger("trading_bot")
logger.setLevel(logging.INFO)

logger.handlers.clear()

file_handler = logging.FileHandler("logs/trading_bot.log")
file_handler.setLevel(logging.INFO)

console_handler = logging.StreamHandler()
console_handler.setLevel(logging.INFO)

formatter = logging.Formatter(
    "%(asctime)s - %(levelname)s - %(message)s"
)

file_handler.setFormatter(formatter)
console_handler.setFormatter(formatter)

logger.addHandler(file_handler)
logger.addHandler(console_handler)