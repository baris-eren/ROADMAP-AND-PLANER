from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/send-to-gemini', methods=['POST'])
def send_to_gemini():
    # Frontend'den gelen veriyi alın
    data = request.json
    # Gemini API URL'sini belirleyin
    gemini_url = "https://api.gemini.com/v1/endpoint"  # Gemini API URL'sini buraya girin

    # Gemini'ye isteği gönderin
    response = requests.post(gemini_url, json=data)
    # Yanıtı frontend'e döndürün
    return jsonify(response.json())
