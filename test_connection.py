import requests

url = "https://testnet.binancefuture.com/fapi/v1/ping"

try:
    response = requests.get(url)

    if response.status_code == 200:
        print("CONNECTED TO BINANCE FUTURES TESTNET")
    else:
        print("FAILED")

except Exception as e:
    print("ERROR:", e)