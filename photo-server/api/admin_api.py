from flask import request, jsonify
from http import HTTPStatus
from flask import Blueprint
from flask import request, jsonify
from flask import url_for
from flask_cors import cross_origin
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from db_service import InitializeDB
import os

admin_api = Blueprint('admin-api', __name__, url_prefix='/admin', template_folder='templates')
PHOTO_DB = InitializeDB()


@admin_api.route('/signed', methods=['GET'])
@cross_origin()
@jwt_required()
def is_signed():
    return {'status': 'ok'}


@admin_api.route('/login', methods=['POST'])
@cross_origin()
def login():
    body = request.get_json()
    username = body["user"]
    password = body["pass"]
    if username == "admin" and password == "password":
        access_token = create_access_token(identity={
            'role': 'admin',
        }, expires_delta=False)
        result = {'token': access_token}
        return jsonify(result)
    else:
        return {'error': 'Invalid username and password'}, HTTPStatus.UNAUTHORIZED


@admin_api.route('/photos', methods=['GET', 'POST', 'DELETE'])
@cross_origin()
def handle_photo():
    r = request
    if request.method == 'POST':
        f = request.files['image']
        metadata = request.form
        print('metadata')

        name = f.filename
        f.save(f'static/photos/{name}')

        path = str(f'static/photos/{name}')
        print(path)
        PHOTO_DB.insert_new_photo(image=path,
                              description=metadata['description'],
                              theme=metadata['theme'])

        return {"img_url": url_for('static', filename=f'{name}')}
    elif request.method == 'GET':
        response = PHOTO_DB.find_all_photos()
        return jsonify(response)

    elif request.method == 'DELETE':
        data = request.json
        PHOTO_DB.delete_photo(id=data['id'])
        imagename = data['name']
        if os.path.exists(imagename):
            os.remove(imagename)
        return jsonify({'status': 'ok'})
