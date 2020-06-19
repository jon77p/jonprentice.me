from flask import Flask, jsonify, request, url_for, redirect, abort, Response, send_file, session, flash, make_response
from flask_cors import CORS
import json
import os
import sys
import time
import subprocess
import config

app = Flask(__name__)
app.config.from_object(config.Config)

CORS(app, resources={r'/*': {'origins': '*'}})

PRINTED_TIME_FORMAT = "%B %d, %Y -  %I:%M:%S %p %Z"

############# PAGE ROUTING #############

@app.route('/', methods=['GET'])
def index():
    data = {}
    data['msg'] = 'welcome to the API for {}'.format(app.config.get('HOST'))
    lastmodified = os.environ.get('BUILD_DATE')
    if lastmodified is None:
        lastmodified = subprocess.run('git log -1 --format=%cd'.split(' '), capture_output=True).stdout.decode('utf-8').strip()
        data['updated'] = time.strftime(PRINTED_TIME_FORMAT, time.strptime(lastmodified, "%a %b %d %H:%M:%S %Y %z"))
    else:
        data['updated'] = time.strftime(PRINTED_TIME_FORMAT, time.strptime(lastmodified, "%a %b %d %H:%M:%S %Z %Y"))
    return jsonify(data), 200

@app.route('/music', methods=['GET'])
def music():
    data = []

    try:
        for song in loadData('songs'):
            data.append({'name': song.get('name'), 'link': song.get('link'), 'img': song['img'], 'released': song.get('released')})

        return jsonify(data), 200

    except Exception as msg:
        data = {'error': '{}: {}'.format(type(msg), msg)}
        return jsonify(data), 400

@app.route('/resume', methods=['GET'])
def resume():
    data = {}
    data['msg'] = 'Coming soon.'
    return jsonify(data), 400

@app.route('/src', methods=['GET'])
def src():
    data = {}
    data['link'] =  'https://github.com/jon77p/jonprentice.me'
    return jsonify(data), 200

@app.route('/privacy', methods=['GET'])
def privacy():
    host=app.config.get('HOST')
    hosturl = ''

    data = {}
    data['policy'] = loadData('privacy')
    for k in range(len(data['policy'])):
        for j in data['policy'][k].keys():
            if type(data['policy'][k][j]) is str:
                data['policy'][k][j] = data['policy'][k][j].replace('{{ host }}', host)
                data['policy'][k][j] = data['policy'][k][j].replace('{{ hosturl }}', hosturl)
            elif type(data['policy'][k][j]) is list:
                for l in range(len(data['policy'][k][j])):
                    for i in data['policy'][k][j][l].keys():
                        data['policy'][k][j][l][i] = data['policy'][k][j][l][i].replace('{{ host }}', host)
                        data['policy'][k][j][l][i] = data['policy'][k][j][l][i].replace('{{ hosturl }}', hosturl)

    data['date'] = time.strftime(PRINTED_TIME_FORMAT, time.localtime(os.path.getmtime(os.path.join(app.config.get('APP_DIR'), 'data/privacy.json'))))

    return jsonify(data), 200

@app.route('/social', methods=['GET'])
def social():
    data = {}
    try:
        data = loadData('social')
        return jsonify(data), 200
    except Exception as msg:
        data['error'] = '{}: {}'.format(type(msg), msg)
        return jsonify(data), 400


############# ERROR HANDLING #############

@app.errorhandler(404)
def page_not_found(error):
    data = {}
    data['error'] = 'resource not found'

    return jsonify(data), 404

############# UTILITY FUNCTIONS #############

def loadData(fname):
    with open(os.path.join(app.config.get('APP_DIR'), 'data/{}.json'.format(fname)), 'r') as datafd:
        data = json.load(datafd)

    return data

if __name__ == "__main__":
    app.run(debug=True)
