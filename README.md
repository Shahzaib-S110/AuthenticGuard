🔍 Document Forgery Detection (AuthenticGuard)
<div align="center">

🚀 AI-powered full-stack web application for detecting forged or tampered documents

</div>
📌 Overview

Document forgery is a critical issue in legal, financial, and governmental systems.
This system automatically analyzes uploaded document images and detects possible tampering such as:

✂️ Splicing (cut & paste manipulation)
🧩 Copy-move forgery
🎨 Region-based editing or manipulation
🖌️ Image retouching

It combines classical image forensics with deep learning models to deliver accurate and fast detection results.

✨ Features
📄 Upload document images (JPG, PNG, PDF-rendered images)
🧠 AI-based detection using EfficientNet CNN
🔍 Error Level Analysis (ELA)
🧩 Copy-move forgery detection (ORB + RANSAC)
📊 Confidence score with final verdict (Authentic / Forged)
🗺️ Heatmap visualization of tampered regions
⚡ Fast processing (< 2 seconds inference)
📱 Fully responsive modern UI
📥 Downloadable PDF analysis report
🛠 Tech Stack
Layer	Technology
Frontend	Next.js, TypeScript, Tailwind CSS
Backend	FastAPI (Python)
Computer Vision	OpenCV, NumPy, Pillow
Deep Learning	PyTorch / TensorFlow (EfficientNet-B0)
Deployment	Vercel (Frontend), Render (Backend)
Storage	Local / AWS S3
🚀 How It Works
Document Upload
      ↓
Preprocessing (resize, normalization)
      ↓
┌──────────────────────────────────────────────┐
│  1. Error Level Analysis (ELA)              │
│  2. Copy-Move Detection (ORB + RANSAC)     │
│  3. CNN Classification (EfficientNet)      │
└──────────────────────────────────────────────┘
      ↓
Weighted Fusion Model
      ↓
Final Verdict + Confidence Score
📁 Project Structure
Document_Forgery_Detection/
│
├── frontend/                         # Next.js frontend
│   ├── app/
│   ├── src/
│   ├── components/
│   └── public/
│
├── backend/                          # FastAPI backend
│   ├── api/
│   │   ├── main.py
│   │   └── routes/
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
1️⃣ Clone Repository
git clone https://github.com/Shahzaib-S110/AuthenticGuard.git
cd AuthenticGuard
🧠 Backend Setup (FastAPI)
cd backend

python -m venv venv
venv\Scripts\activate   # Windows

pip install -r requirements.txt

uvicorn api.main:app --reload --port 8000

Backend runs at:
👉 http://localhost:8000

API Docs:
👉 http://localhost:8000/docs

💻 Frontend Setup (Next.js)
cd frontend

npm install
npm run dev

Frontend runs at:
👉 http://localhost:3000

🌐 Environment Variables

Create a .env.local file in frontend:

NEXT_PUBLIC_API_URL=http://localhost:8000
📡 API Endpoint
🔹 POST /detect

Upload a document image for analysis.

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

Add images inside /screenshots folder

Upload Page → screenshots/upload.png
Results Page → screenshots/results.png
🚀 Deployment
Frontend
Vercel: https://vercel.com
Backend
Render: https://render.com
🤝 Contributing

Contributions are welcome!

Steps:
Fork the repository
Create a new branch (feature-new)
Commit changes
Push branch
Open a Pull Request
👥 Contributors
👤 Shahzaib Sheikh (Project Owner)
GitHub: https://github.com/Shahzaib-S110
⭐ Support

If you like this project:

⭐ Star the repository
🍴 Fork it
🚀 Share it with others
