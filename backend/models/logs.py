from db import db

class Log(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(db.Integer)

    action = db.Column(db.String(255))

    timestamp = db.Column(
        db.DateTime,
        default=db.func.now()
    )