from db import db

class User(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(50))

    email = db.Column(
        db.String(120),
        unique=True
    )

    password = db.Column(db.String(255))

    role = db.Column(db.String(20))

    created_at = db.Column(
        db.DateTime,
        default=db.func.now()
    )