from flask import Blueprint, request, jsonify

from models.user import User

from flask_jwt_extended import (
    create_access_token
)

import bcrypt

auth_routes = Blueprint(
    "auth",
    __name__
)

@auth_routes.route(
    "/login",
    methods=["POST"]
)
def login():

    data = request.json

    user = User.query.filter_by(
        email=data["email"]
    ).first()

    # CHECK USER + PASSWORD
    if user and bcrypt.checkpw(

        data["password"].encode(),

        user.password.encode()

    ):

        # CREATE JWT TOKEN
        access_token = create_access_token(

            identity=str(user.id)

        )

        return jsonify({

            "msg": "success",

            "token": access_token,

            "role": user.role,

            "user_id": user.id

        })

    return jsonify({

        "msg": "Invalid Credentials"

    }), 401