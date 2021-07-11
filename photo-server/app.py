from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager

from api import admin_api, user_api

if __name__ == '__main__':
    app = Flask(__name__)
    app.register_blueprint(admin_api.admin_api)
    app.register_blueprint(user_api.user_api)
    app.config['JWT_SECRET_KEY'] = 'my_cool_secret'
    jwt = JWTManager(app)
    CORS(app)
    app.run(port=5000)
