from flask import Blueprint, jsonify

from models.ticket import Ticket

dashboard_routes = Blueprint(
    "dashboard",
    __name__
)

@dashboard_routes.route(
    "/stats",
    methods=["GET"]
)
def stats():

    total = Ticket.query.count()

    pending = Ticket.query.filter_by(
        status="Pending"
    ).count()

    completed = Ticket.query.filter_by(
        status="Completed"
    ).count()

    return jsonify({

        "total": total,

        "pending": pending,

        "completed": completed

    })