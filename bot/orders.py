import requests

from bot.logging_config import logger

BASE_URL = "https://testnet.binancefuture.com"


def place_market_order(
    symbol,
    side,
    quantity
):

    payload = {
        "symbol": symbol,
        "side": side,
        "type": "MARKET",
        "quantity": quantity
    }

    try:

        logger.info(
            f"MARKET ORDER REQUEST: {payload}"
        )

        # MOCK RESPONSE
        response = {
            "orderId": 123456,
            "status": "FILLED",
            "executedQty": quantity,
            "avgPrice": "117000"
        }

        logger.info(
            f"MARKET ORDER RESPONSE: {response}"
        )

        return response

    except Exception as e:

        logger.error(
            f"MARKET ORDER ERROR: {str(e)}"
        )

        raise


def place_limit_order(
    symbol,
    side,
    quantity,
    price
):

    payload = {
        "symbol": symbol,
        "side": side,
        "type": "LIMIT",
        "quantity": quantity,
        "price": price
    }

    try:

        logger.info(
            f"LIMIT ORDER REQUEST: {payload}"
        )

        # MOCK RESPONSE
        response = {
            "orderId": 789456,
            "status": "NEW",
            "executedQty": "0",
            "avgPrice": "0"
        }

        logger.info(
            f"LIMIT ORDER RESPONSE: {response}"
        )

        return response

    except Exception as e:

        logger.error(
            f"LIMIT ORDER ERROR: {str(e)}"
        )

        raise