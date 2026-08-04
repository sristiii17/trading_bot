from flask import Flask, request, jsonify
from flask_cors import CORS

from bot.orders import (
    place_market_order,
    place_limit_order,
)

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return jsonify({
        "message": "Trading Bot Backend Running"
    })


@app.route("/trade", methods=["POST"])
def trade():

    data = request.get_json()

    symbol = data["symbol"]
    side = data["side"]
    quantity = float(data["quantity"])
    order_type = data["orderType"]

    try:

        if order_type == "MARKET":

            result = place_market_order(
                symbol=symbol,
                side=side,
                quantity=quantity
            )

        else:

            price = float(data.get("price", 117000))

            result = place_limit_order(
                symbol=symbol,
                side=side,
                quantity=quantity,
                price=price
            )

        return jsonify({
            "success": True,
            "message": "Trade Executed Successfully",
            "result": result
        })

    except Exception as e:

        return jsonify({
            "success": False,
            "message": str(e)
        }), 500


if __name__ == "__main__":
    app.run(debug=True)