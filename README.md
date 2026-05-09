# 🔍 Document Forgery Detection (AuthenticGuard)

🚀 AI-powered full-stack web application for detecting forged or tampered documents

---

## 📌 Overview

Document forgery is a critical issue in legal, financial, and governmental systems.  
This system automatically analyzes uploaded document images and detects possible tampering such as:

- ✂️ Splicing (cut & paste manipulation)
- 🧩 Copy-move forgery
- 🎨 Region-based editing or manipulation
- 🖌️ Image retouching

It combines classical image forensics with deep learning models to deliver accurate and fast detection results.

---

## ✨ Features

- 📄 Upload document images (JPG, PNG, PDF-rendered images)
- 🧠 AI-based detection using EfficientNet CNN
- 🔍 Error Level Analysis (ELA)
- 🧩 Copy-move forgery detection (ORB + RANSAC)
- 📊 Confidence score with final verdict (Authentic / Forged)
- 🗺️ Heatmap visualization of tampered regions
- ⚡ Fast processing (< 2 seconds inference)
- 📱 Fully responsive modern UI
- 📥 Downloadable PDF analysis report

---

## 🛠️ Tech Stack

### Frontend
- Next.js
- TypeScript
- Tailwind CSS

### Backend
- FastAPI (Python)

### Computer Vision & Deep Learning
- OpenCV
- NumPy
- Pillow
- PyTorch
- EfficientNet

---

## 🎯 Detection Techniques Used

### 1. Error Level Analysis (ELA)
Detects compression inconsistencies in manipulated regions.

### 2. Copy-Move Forgery Detection
Uses ORB feature extraction and RANSAC matching to identify duplicated areas.

### 3. Deep Learning Classification
EfficientNet CNN classifies documents as:
- Authentic
- Forged

### 4. Heatmap Localization
Highlights suspicious tampered regions visually.

---

## 📈 Output Results

The system provides:

- ✅ Authenticity verdict
- 📊 Confidence score
- 🗺️ Forgery heatmap
- 📄 Downloadable PDF report

---

## 🚀 Future Improvements

- OCR-based text inconsistency detection
- Signature verification module
- Multi-language document support
- Cloud deployment with real-time API
- Blockchain-based document verification

---
