from flask import Blueprint
from flask import request, jsonify
from flask import url_for, redirect
from flask_cors import cross_origin

from db_service import InitializeDB

user_api = Blueprint('user-api', __name__, template_folder='templates')
PHOTO_DB = InitializeDB()


@user_api.route('/image', methods=['GET', 'POST'])
@cross_origin()
def upload_image():
    if request.method == 'POST':
        f = request.files['image']
        name = f.filename
        f.save(f'static/{name}')
        return {"img_url": url_for('static', filename=f'{name}')}
    else:
        return redirect(url_for('static', filename='image.jpg'))


@user_api.route('/comments', methods=['GET', 'POST'])
@cross_origin()
def upload_comment():
    if request.method == 'POST':
        f = request.files['image']
        metadata = request.form
        print('metadata')
        print(metadata['author'])

        name = f.filename
        f.save(f'static/{name}')

        path = str(f'static/{name}')
        print(path)
        PHOTO_DB.insert_new_comment(image=path,
                              author=metadata['author'],
                              rating=metadata['rating'],
                              comment=metadata['comment'])

        return {"img_url": url_for('static', filename=f'{name}')}
    else:
        response = PHOTO_DB.find_all_comments()
        return jsonify(response)


@user_api.route('/orders', methods=['GET', 'POST'])
@cross_origin()
def upload_order():
    if request.method == 'POST':
        avatar = request.files['image']
        metadata = request.form
        av_name = avatar.filename
        avatar.save(f'static/order/avatar/{av_name}')
        reference = request.files['reference']
        ref_name = reference.filename
        reference.save(f'static/order/references/{ref_name}')
        av_path = str(f'static/order/avatar/{av_name}')
        ref_path = str(f'static/order/references/{ref_name}')
        referencetwo = request.files['referencetwo']
        ref_two = referencetwo.filename
        referencetwo.save(f'static/order/references/{ref_two}')
        ref_two_path = str(f'static/order/references/{ref_two}')

        referencethree = request.files['referencethree']
        ref_three = referencethree.filename
        referencethree.save(f'static/order/references/{ref_three}')
        ref_three_path = str(f'static/order/references/{ref_three}')

        PHOTO_DB.insert_new_order(name=metadata['name'],
                                   lastname=metadata['lastname'],
                                   email=metadata['email'],
                                   link=metadata['link'],
                                   theme=metadata['theme'],
                                   duration=metadata['duration'],
                                   date=metadata['date'],
                                   time=metadata['time'],
                                   location=metadata['location'],
                                   image=av_path,
                                   reference=ref_path,
                                  referencetwo=ref_two_path,
                                  referencethree=ref_three_path)
        return jsonify({'status': 'ok'})
    else:
        response = PHOTO_DB.find_all_orders()
        return jsonify(response)
