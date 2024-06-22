from flask import Flask, send_file, request
import logging
from datetime import datetime

app = Flask(__name__)

# Configure logging
logging.basicConfig(filename='access.log', level=logging.INFO)

@app.route('/trackimg.gif')
def track():
    # Log request details
    logging.info(f"IP: {request.remote_addr}, User Agent: {request.headers.get('User-Agent')}, Time: {datetime.now()}")

    # Serve a 1x1 pixel transparent image
    return send_file('trackimg.gif', mimetype='image/gif')

if __name__ == '__main__':
    app.run(debug=True)
