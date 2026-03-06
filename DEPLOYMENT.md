# Deployment Guide - AI Content Intelligence Engine

## Overview

This guide covers deploying your application to production across multiple platforms.

---

## Backend Deployment

### Option 1: Render (Recommended for beginners)

**Steps:**
1. Create account at [render.com](https://render.com)
2. Connect your GitHub repository
3. Create a new Web Service
4. Configure:
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `uvicorn app.main:app --host 0.0.0.0 --port 8000`
   - **Environment:** Python 3.12

**Environment Variables:**
```
DATABASE_URL=your_postgres_url
SECRET_KEY=your-secret-key-here
OPENAI_API_KEY=your-openai-key
```

**Cost:** Free tier available

---

### Option 2: Railway

**Steps:**
1. Install Railway CLI: `npm i -g @railway/cli`
2. Login: `railway login`
3. Initialize: `railway init`
4. Deploy: `railway up`

**railway.json:**
```json
{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "uvicorn app.main:app --host 0.0.0.0 --port $PORT",
    "healthcheckPath": "/health",
    "restartPolicyType": "ON_FAILURE"
  }
}
```

**Cost:** $5/month starter plan

---

### Option 3: Fly.io

**Steps:**
1. Install Flyctl: `curl -L https://fly.io/install.sh | sh` (Mac/Linux) or download from fly.io
2. Login: `flyctl auth login`
3. Launch: `flyctl launch`
4. Deploy: `flyctl deploy`

**Cost:** Free tier available

---

### Option 4: AWS (Advanced)

**Using AWS Elastic Beanstalk:**
1. Install EB CLI: `pip install awsebcli`
2. Initialize: `eb init -p python-3.12 ai-content-engine`
3. Create environment: `eb create ai-content-prod`
4. Deploy: `eb deploy`

**Cost:** Variable, starts ~$25/month

---

## Frontend Deployment

### Vercel (Recommended)

**Method 1: GitHub Integration (Easiest)**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Configure:
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

**Method 2: CLI Deployment**
```bash
cd frontend
npm install -g vercel
vercel login
vercel
```

**Environment Variables on Vercel:**
```
VITE_API_URL=https://your-backend-url.onrender.com
```

**Cost:** Free for personal projects

---

### Alternative: Netlify

```bash
cd frontend
npm run build
npx netlify-cli deploy --prod --dir=dist
```

---

## Database Deployment

### Option 1: Supabase (Recommended)

**Steps:**
1. Create account at [supabase.com](https://supabase.com)
2. Create new project
3. Go to Settings → Database
4. Copy connection string
5. Update backend environment:
   ```
   DATABASE_URL=postgresql://postgres:[password]@db.[project].supabase.co:5432/postgres
   ```

**Features:**
- PostgreSQL database
- Built-in authentication
- Real-time subscriptions
- Storage for files

**Cost:** Free tier included

---

### Option 2: Neon PostgreSQL

**Steps:**
1. Create account at [neon.tech](https://neon.tech)
2. Create new project
3. Copy connection string
4. Add to backend environment

**Features:**
- Serverless PostgreSQL
- Branching (like Git for databases)
- Auto-scaling

**Cost:** Free tier: 3GB storage

---

### Option 3: PlanetScale

**Steps:**
1. Create account at [planetscale.com](https://planetscale.com)
2. Create new database
3. Copy connection string
4. Update SQLAlchemy to use MySQL instead of PostgreSQL

**Features:**
- MySQL-compatible
- Branching and merge requests
- Schema changes without downtime

**Cost:** Free tier: 5GB storage

---

## Quick Start Guide

### 1. Prepare Backend for Deployment

```bash
cd backend

# Ensure requirements.txt is up to date
pip freeze > requirements.txt

# Test production mode locally
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

### 2. Prepare Frontend for Deployment

```bash
cd frontend

# Create production build
npm run build

# Test production build locally
npm run preview
```

### 3. Environment Variables

**Backend (.env):**
```env
DATABASE_URL=postgresql://user:pass@host:5432/dbname
SECRET_KEY=your-secret-key-minimum-32-characters-long
OPENAI_API_KEY=sk-your-openai-api-key
CORS_ORIGINS=https://your-frontend-url.vercel.app
```

**Frontend (.env):**
```env
VITE_API_URL=https://your-backend-url.onrender.com
```

---

## Recommended Stack (Easiest Setup)

1. **Backend:** Render.com
2. **Frontend:** Vercel
3. **Database:** Supabase

**Total Cost:** $0 (all free tiers)

**Deployment Time:** ~30 minutes

---

## Post-Deployment Checklist

- [ ] Backend health check works: `https://your-api.com/health`
- [ ] Frontend loads correctly
- [ ] API calls work from frontend to backend
- [ ] Database migrations applied
- [ ] Environment variables set correctly
- [ ] CORS configured for production domain
- [ ] SSL/HTTPS enabled (automatic on most platforms)
- [ ] Monitoring/logging configured

---

## Monitoring & Logging

**Backend Logs:**
- Render: Built-in logs dashboard
- Railway: `railway logs`
- Fly.io: `flyctl logs`

**Frontend Analytics:**
- Vercel Analytics (built-in)
- Google Analytics
- Plausible (privacy-focused)

---

## CI/CD (Continuous Deployment)

Most platforms auto-deploy on git push:

**Render:** Auto-deploys on main branch push
**Vercel:** Auto-deploys on main branch push
**Railway:** Auto-deploys on main branch push

---

## Troubleshooting

**Backend won't start:**
- Check logs for errors
- Verify environment variables
- Ensure port binding to 0.0.0.0

**Frontend can't reach backend:**
- Check CORS settings in backend
- Verify VITE_API_URL is correct
- Check network tab in browser DevTools

**Database connection fails:**
- Verify connection string format
- Check IP allowlist (whitelist 0.0.0.0/0 for Render/Railway)
- Test connection locally first

---

## Performance Optimization

**Backend:**
- Enable gzip compression
- Use connection pooling for database
- Add Redis for caching
- Use background workers for heavy tasks

**Frontend:**
- Enable code splitting
- Optimize images
- Use lazy loading
- Enable CDN (automatic on Vercel)

---

## Security Checklist

- [ ] Change default SECRET_KEY
- [ ] Use environment variables for secrets
- [ ] Enable HTTPS only
- [ ] Set secure CORS origins
- [ ] Rate limiting on API endpoints
- [ ] SQL injection protection (SQLAlchemy handles this)
- [ ] Input validation on all endpoints
- [ ] Keep dependencies updated

---

## Scaling

**When to scale:**
- Response times > 1 second
- Database connections maxed out
- High CPU/Memory usage
- Traffic spikes

**Options:**
- Vertical: Upgrade instance size
- Horizontal: Add more instances (load balancing)
- Database: Read replicas, connection pooling
- Caching: Redis, CDN

---

## Support Resources

- Render: https://render.com/docs
- Vercel: https://vercel.com/docs
- Railway: https://docs.railway.app
- Fly.io: https://fly.io/docs
- Supabase: https://supabase.com/docs
