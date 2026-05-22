class Config:
    SQLALCHEMY_DATABASE_URI = "postgresql://postgres:112233@localhost:5432/police_it_system"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = "police-ai-project-2026-secure-key"
    UPLOAD_FOLDER = "uploads"