# Deployment script for Windows PowerShell

Write-Host "🚀 AI Content Intelligence Engine - Deployment Setup" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is initialized
if (-not (Test-Path .git)) {
    Write-Host "📦 Initializing git repository..." -ForegroundColor Yellow
    git init
    git add .
    git commit -m "Initial commit - AI Content Intelligence Engine"
}

# Backend setup
Write-Host ""
Write-Host "🔧 Setting up backend..." -ForegroundColor Yellow
Set-Location backend

# Create .env if it doesn't exist
if (-not (Test-Path .env)) {
    Write-Host "📝 Creating .env file from example..." -ForegroundColor Yellow
    Copy-Item .env.example .env
    Write-Host "⚠️  Remember to update .env with your actual values!" -ForegroundColor Red
}

# Ensure requirements.txt is up to date
if (Test-Path venv\bin\activate.ps1) {
    & venv\bin\activate.ps1
    pip freeze | Out-File -FilePath requirements.txt -Encoding utf8
    Write-Host "✅ Updated requirements.txt" -ForegroundColor Green
}

Set-Location ..

# Frontend setup
Write-Host ""
Write-Host "🔧 Setting up frontend..." -ForegroundColor Yellow
Set-Location frontend

# Create .env if it doesn't exist
if (-not (Test-Path .env)) {
    Write-Host "📝 Creating .env file from example..." -ForegroundColor Yellow
    Copy-Item .env.example .env
}

# Build frontend
Write-Host "🏗️  Building frontend..." -ForegroundColor Yellow
npm run build

Set-Location ..

Write-Host ""
Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:"
Write-Host "1. Update .env files with your actual values"
Write-Host "2. Push to GitHub: git push origin main"
Write-Host "3. Deploy backend to Render.com"
Write-Host "4. Deploy frontend to Vercel.com"
Write-Host "5. Update CORS_ORIGINS in backend .env"
Write-Host ""
Write-Host "For detailed instructions, see DEPLOYMENT.md"
