🔍 Document Forgery Detection
<div align="center">








An AI-powered full-stack web application that detects forged or tampered documents using computer vision and deep learning techniques.

</div>
📌 Overview

Document forgery is a serious issue in legal, financial, and government sectors.
This system automatically analyzes uploaded document images and detects possible tampering such as:

Splicing
Copy-move forgery
Region manipulation
Image retouching

It combines classical image forensics with deep learning for high accuracy detection.

✨ Features
📄 Upload document images (JPG, PNG, PDF render support)
🧠 AI-based detection using EfficientNet CNN
🔍 Error Level Analysis (ELA)
🧩 Copy-move forgery detection (ORB + RANSAC)
📊 Confidence score with verdict (Authentic / Forged)
🗺️ Heatmap visualization of tampered regions
⚡ Fast processing (< 2 seconds inference)
📱 Responsive modern UI
📥 Downloadable analysis report (PDF)
🛠 Tech Stack
Layer	Technology
Frontend	Next.js, TypeScript, Tailwind CSS
Backend	FastAPI (Python)
ML / CV	OpenCV, NumPy, Pillow
Deep Learning	PyTorch / TensorFlow (EfficientNet-B0)
Deployment	Vercel + Render
Storage	Local / AWS S3
🚀 How It Works
Document Upload
      ↓
Preprocessing (resize, normalization)
      ↓
┌──────────────────────────────────────────────┐
│                                              │
│  1. Error Level Analysis (ELA)               │
│  2. Copy-Move Detection                     │
│  3. CNN Classification (EfficientNet)       │
│                                              │
└──────────────────────────────────────────────┘
      ↓
Weighted Fusion Model
      ↓
Final Verdict + Confidence Score
📁 Project Structure
Document_Forgery_Detection/
│
├── Document_Forgery_Detection/   # Frontend (Next.js)
│   ├── src/
│   ├── app/
│   ├── components/
│   └── public/
│
├── backend/                      # FastAPI backend
│   ├── api/
│   │   ├── main.py
│   │   ├── routes/
│   ├── ml/
│   │   ├── ela.py
│   │   ├── copy_move.py
│   │   ├── cnn.py
│   │   └── fusion.py
│   └── utils/
│
├── requirements.txt
└── package.json
⚙️ Installation & Setup
1. Clone Repository
git clone https://github.com/Shahzaib-S110/AuthenticGuard.git
cd AuthenticGuard
🧠 Backend Setup (FastAPI)
cd backend

python -m venv venv
venv\Scripts\activate   # Windows

pip install -r requirements.txt

uvicorn api.main:app --reload --port 8000

Backend runs at:

http://localhost:8000

API docs:

http://localhost:8000/docs
💻 Frontend Setup (Next.js)
cd Document_Forgery_Detection

npm install

npm run dev

Frontend runs at:

http://localhost:3000
🌐 Environment Variables

Create .env.local:

NEXT_PUBLIC_API_URL=http://localhost:8000
📡 API Endpoint
POST /detect

Upload document for analysis.

Request:

file: image

Response:

{
  "verdict": "forged",
  "confidence": 0.92,
  "processing_time": "1.8s"
}
📊 Model Performance
Model	Accuracy
ELA	74%
Copy-Move	70%
CNN (EfficientNet)	88%
Ensemble Model	91%
📸 Screenshots

Add images in /screenshots folder

Upload Page → results/upload.png
Results Page → results/output.png
🚀 Deployment
Frontend
Vercel → https://vercel.com
Backend
Render → https://render.com
🤝 Contributing
1. Fork repo
2. Create feature branch
3. Commit changes
4. Push branch
5. Open PR
👤 Author

Shahzaib Sheikh

GitHub: https://github.com/Shahzaib-S110

⭐ Support

If you like this project:

⭐ Star the repo
🍴 Fork it
🚀 Share it