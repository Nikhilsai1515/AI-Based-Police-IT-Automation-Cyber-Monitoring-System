from flask import Blueprint, request, jsonify

from ai_module.summarizer import summarize_text

ai_routes = Blueprint(
    "ai",
    __name__
)

@ai_routes.route(
    "/summarize",
    methods=["POST"]
)
def summarize_route():

    text = request.json["text"]

    summary = summarize_text(text)

    return jsonify({
        "summary": summary
    })