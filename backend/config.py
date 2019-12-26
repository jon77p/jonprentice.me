import os
import configparser

class Config:
    def _validate(option, section, key):
        if option == '--INVALID--':
            raise configparser.Error('Found default invalid option in \'{}\' key in \'{}\' section!'.format(key, section))

        return option

    # General
    APP_DIR = os.path.dirname(os.path.abspath(__file__))

    _config_file = os.path.join(APP_DIR, 'server.conf')
    _config = configparser.ConfigParser()
    if os.path.isfile(_config_file) is True:
        _config.read(_config_file)

        HOST = _validate(_config.get('Flask Setup', 'Host'), 'Flask Setup', 'Host')
        SECRET_KEY = _validate(_config.get('Flask Setup', 'Secret Key'), 'Flask Setup', 'Secret Key')

        FLASK_DEBUG = True

        DUO = {}
        DUO['ikey'] = _validate(_config.get('DUO Authentication', 'IKey'), 'DUO Authentication', 'IKey')
        DUO['skey'] = _validate(_config.get('DUO Authentication', 'SKey'), 'DUO Authentication', 'SKey')
        DUO['akey'] = _validate(_config.get('DUO Authentication', 'AKey'), 'DUO Authentication', 'AKey')
        DUO['host'] = _validate(_config.get('DUO Authentication', 'Host'), 'DUO Authentication', 'Host')
    else:
        print(os.environ)
        HOST = os.environ.get('HOST')
        SECRET_KEY = os.environ.get('SECRET_KEY')
        FLASK_DEBUG = bool(os.environ.get('FLASK_DEBUG'))
        DUO = {}
        DUO['ikey'] = os.environ.get('DUO_IKEY')
        DUO['skey'] = os.environ.get('DUO_SKEY')
        DUO['akey'] = os.environ.get('DUO_AKEY')
        DUO['host'] = os.environ.get('DUO_HOST')

    if HOST is None or SECRET_KEY is None or FLASK_DEBUG is None:
        raise OSError('Missing file: \'{0}\'! Please copy \'{1}\' to \'{0}\' and edit necessary values.'.format(_config_file, os.path.join(APP_DIR, 'defaults.conf')))
