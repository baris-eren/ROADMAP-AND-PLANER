from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/send-to-gemini', methods=['POST'])
def send_to_gemini():
    data = request.is_json
    gemini_url = "https://api.gemini.com/v1/endpoint"  

    response = requests.post(gemini_url, json=data)
    return jsonify(response.json())
