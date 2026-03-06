#!/bin/bash

# Deployment script for quick setup

echo "🚀 AI Content Intelligence Engine - Deployment Setup"
echo "=================================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit - AI Content Intelligence Engine"
fi

# Backend setup
echo ""
echo "🔧 Setting up backend..."
cd backend

# Create .env if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file from example..."
    cp .env.example .env
    echo "⚠️  Remember to update .env with your actual values!"
fi

# Ensure requirements.txt is up to date
if [ -d venv/bin ]; then
    source venv/bin/activate
    pip freeze > requirements.txt
    echo "✅ Updated requirements.txt"
fi

cd ..

# Frontend setup
echo ""
echo "🔧 Setting up frontend..."
cd frontend

# Create .env if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file from example..."
    cp .env.example .env
fi

# Build frontend
echo "🏗️  Building frontend..."
npm run build

cd ..

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env files with your actual values"
echo "2. Push to GitHub: git push origin main"
echo "3. Deploy backend to Render.com"
echo "4. Deploy frontend to Vercel.com"
echo "5. Update CORS_ORIGINS in backend .env"
echo ""
echo "For detailed instructions, see DEPLOYMENT.md"
