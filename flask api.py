from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import requests
import os
from sklearn.feature_extraction.text import TfidfVectorizer

app = Flask(__name__)
CORS(app)

# Load XGBoost Model & TF-IDF Vectorizer
with open("pickle/xgboost_model.pkl2", "rb") as f:
    model = pickle.load(f)

with open("pickle/tfidf_vectorizer.pkl2", "rb") as f:
    vectorizer = pickle.load(f)

# Mistral API Key
MISTRAL_API_KEY = "l"  # Replace with your actual API key

# Function to clean email text
def clean_text(text):
    return str(text).lower().strip()

# 🛡️ 1️⃣ API Endpoint for **Phishing Email Detection**
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        subject = data.get("subject", "")
        body = data.get("body", "")

        email_text = f"{subject} {body}".strip().lower()
        vectorized_text = vectorizer.transform([email_text]).toarray()
        probability = float(model.predict_proba(vectorized_text)[0][1])  # Convert to float
        prediction = "🔴 Phishing Email" if probability > 0.5 else "🟢 Legitimate Email"

        return jsonify({
            "prediction": prediction,
            "phishing_probability": probability
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500
# 💬 2️⃣ API Endpoint for **Mistral AI Email Reply Suggestion**
@app.route('/generate-reply', methods=['POST'])
def generate_reply():
    try:
        data = request.json
        email_content = data.get("email_content", "")

        if not email_content:
            return jsonify({"error": "Email content is required"}), 400

        # Call Mistral API for generating reply suggestions
        response = requests.post(
            "https://api.mistral.ai/v1/chat/completions",
            headers={"Authorization": f"Bearer {MISTRAL_API_KEY}"},
            json={
                "model": "mistral-small",
                "messages": [{"role": "system", "content": "Generate a polite and professional email reply."},
                             {"role": "user", "content": email_content}],
                "temperature": 0.7
            }
        )

        reply_data = response.json()
        generated_reply = reply_data.get("choices", [{}])[0].get("message", {}).get("content", "")

        return jsonify({"reply": generated_reply})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
