from flask import (
    Blueprint,
    request,
    jsonify,
    current_app
)

from automation.excel_processor import clean_excel

import os

automation_routes = Blueprint(
    "automation",
    __name__
)

@automation_routes.route(
    "/upload",
    methods=["POST"]
)
def upload():

    file = request.files["file"]

    # CHECK EXCEL FILE
    if not file.filename.endswith(".xlsx"):

        return jsonify({
            "error": "Only Excel files allowed"
        }), 400

    # CREATE ABSOLUTE uploads PATH
    upload_folder = os.path.join(
        os.getcwd(),
        "uploads"
    )

    # CREATE uploads FOLDER IF MISSING
    os.makedirs(
        upload_folder,
        exist_ok=True
    )

    # CREATE FULL FILE PATH
    path = os.path.join(
        upload_folder,
        file.filename
    )

    # SAVE FILE
    file.save(path)

    # PROCESS EXCEL
    result = clean_excel(path)

    return jsonify(result)