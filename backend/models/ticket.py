from db import db

class Ticket(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(100))

    description = db.Column(db.Text)

    priority = db.Column(db.String(10))

    status = db.Column(
        db.String(20),
        default="Pending"
    )

    created_by = db.Column(
        db.Integer,
        db.ForeignKey("user.id")
    )

    assigned_to = db.Column(db.Integer)

    created_at = db.Column(
        db.DateTime,
        default=db.func.now()
    )

    updated_at = db.Column(
        db.DateTime,
        onupdate=db.func.now()
    )