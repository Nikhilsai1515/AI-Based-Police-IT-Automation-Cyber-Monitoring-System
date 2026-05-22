from flask import Blueprint, request, jsonify

from flask_jwt_extended import jwt_required

from models.ticket import Ticket

from db import db

ticket_routes = Blueprint(
    "ticket",
    __name__
)

# CREATE TICKET
@ticket_routes.route(
    "/ticket/create",
    methods=["POST"]
)

@jwt_required()
def create_ticket():

    data = request.json

    new_ticket = Ticket(

        title=data["title"],

        description=data["description"],

        priority=data["priority"],

        created_by=data["user_id"]

    )

    db.session.add(new_ticket)

    db.session.commit()

    return jsonify({
        "msg": "Ticket created successfully"
    })

# GET ALL TICKETS
@ticket_routes.route(
    "/tickets",
    methods=["GET"]
)

@jwt_required()
def get_tickets():

    tickets = Ticket.query.all()

    result = []

    for ticket in tickets:

        result.append({

            "id": ticket.id,

            "title": ticket.title,

            "description": ticket.description,

            "priority": ticket.priority,

            "status": ticket.status

        })

    return jsonify(result)

# UPDATE TICKET STATUS
@ticket_routes.route(
    "/ticket/update/<int:id>",
    methods=["PUT"]
)

@jwt_required()
def update_ticket(id):

    ticket = Ticket.query.get(id)

    if not ticket:

        return jsonify({
            "msg": "Ticket not found"
        }), 404

    ticket.status = "Completed"

    db.session.commit()

    return jsonify({
        "msg": "Ticket updated successfully"
    })

# DELETE TICKET
@ticket_routes.route(
    "/ticket/delete/<int:id>",
    methods=["DELETE"]
)

@jwt_required()
def delete_ticket(id):

    ticket = Ticket.query.get(id)

    if not ticket:

        return jsonify({
            "msg": "Ticket not found"
        }), 404

    db.session.delete(ticket)

    db.session.commit()

    return jsonify({
        "msg": "Ticket deleted successfully"
    })