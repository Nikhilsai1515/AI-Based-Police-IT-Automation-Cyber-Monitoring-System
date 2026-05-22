from flask_jwt_extended import JWTManager
from flask import Flask
from flask_cors import CORS

from db import db

app = Flask(__name__)

CORS(app)

app.config.from_object("config.Config")
app.config["JWT_SECRET_KEY"] = "super-secret-jwt-key"

db.init_app(app)
jwt = JWTManager(app)

from models.user import User
from models.ticket import Ticket
from models.logs import Log

from routes.auth_routes import auth_routes
from routes.ticket_routes import ticket_routes
from routes.ai_routes import ai_routes
from routes.automation_routes import automation_routes
from routes.dashboard_routes import dashboard_routes

app.register_blueprint(auth_routes)
app.register_blueprint(ticket_routes)
app.register_blueprint(ai_routes)
app.register_blueprint(automation_routes)
app.register_blueprint(dashboard_routes)

with app.app_context():
    db.create_all()

@app.route("/")
def home():
    return "Police AI Backend Running"

if __name__ == "__main__":
    app.run(debug=True)