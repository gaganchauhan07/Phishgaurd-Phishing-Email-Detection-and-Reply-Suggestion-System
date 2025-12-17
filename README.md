# Phishgaurd-Phishing-Email-Detection-and-Reply-Suggestion-System
# 🛡️ Phishing Email Detection and Reply Suggestion System

An intelligent email security system that **detects phishing emails** using machine learning and **generates safe reply suggestions** using a Large Language Model (LLM). This project integrates  phishing detection with  secure, human-like email replies.

---

## 📌 Key Features

- 🔍 **Phishing Detection** using XGBoost and TF-IDF
- 📧 **Email Content & Header Analysis**
- 🤖 **LLM-based Reply Suggestions** (via Mistral API)
- 💻 **React Frontend + Flask Backend** for real-time interaction

---

## 🧠 Project Workflow

### 1. Email Preprocessing
- Extract subject, body, sender, and headers
- Clean email text (remove HTML, punctuation, stopwords)

### 2. Feature Extraction
- Apply **TF-IDF Vectorizer** to convert email text to feature vectors
- Extract URL-based features (shortened links, TLDs, keywords)
- Validate headers using **SPF**, **DKIM**, and **DMARC**

### 3. Phishing Detection Model
- Trained an **XGBoost Classifier** on labeled phishing and ham emails
- Saved the model as `XGBoostClassifier.pickle.dat` for deployment

### 4. LLM-Based Reply Suggestion
- Integrated **Mistral API** to generate safe replies for non-phishing emails
- Replies include formal tone, appropriate context, and security caution

### 5. Web Interface
- Developed using **React** (Frontend) and **Flask** (Backend)
- Users can input or upload email content
- Results: phishing label + reply suggestion (if safe)

---

## 🧩 Tech Stack

- **Python**, **Scikit-learn**, **XGBoost**, **TF-IDF**
- **Flask** for backend API
- **React**, **Axios**, **Tailwind CSS** for frontend
- **Mistral API** for reply generation




