from binance.client import Client
from dotenv import load_dotenv
import os

load_dotenv()

API_KEY = os.getenv("API_KEY")
API_SECRET = os.getenv("API_SECRET")

# Connect to Binance Futures Testnet
client = Client(
    API_KEY,
    API_SECRET,
    testnet=True
)

client.FUTURES_URL = "https://testnet.binancefuture.com/fapi"