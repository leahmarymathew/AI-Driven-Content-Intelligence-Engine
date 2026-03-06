# Quick Deploy Guide

## Fastest Way to Deploy (Free Tier)

### 1. Prepare Your Code

```powershell
# Run the deployment setup script
.\scripts\deploy.ps1
```

### 2. Push to GitHub

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 3. Deploy Backend to Render

1. Go to https://render.com
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Connect your repository
5. Configure:
   - **Name:** `ai-content-engine-api`
   - **Environment:** `Python 3`
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
6. Add Environment Variables:
   - `SECRET_KEY`: Generate at https://generate-secret.vercel.app/32
   - `DATABASE_URL`: Get from Supabase (step 4)
   - `OPENAI_API_KEY`: From OpenAI dashboard
7. Click "Create Web Service"
8. Note your backend URL: `https://ai-content-engine-api.onrender.com`

### 4. Setup Database on Supabase

1. Go to https://supabase.com
2. Create new project
3. Go to Settings → Database
4. Copy connection string (transaction pooler)
5. Paste into Render environment variable `DATABASE_URL`

### 5. Deploy Frontend to Vercel

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "Add New..." → "Project"
4. Import your repository
5. Configure:
   - **Framework:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Add Environment Variable:
   - `VITE_API_URL`: Your Render backend URL
7. Click "Deploy"
8. Note your frontend URL: `https://your-app.vercel.app`

### 6. Update CORS

1. Go back to Render
2. Add environment variable:
   - `CORS_ORIGINS`: Your Vercel frontend URL
3. Click "Manual Deploy" → "Deploy latest commit"

### 7. Test Your Deployment

Visit your Vercel URL and test the application!

---

## Total Time: ~30 minutes
## Total Cost: $0 (free tiers)

---

## Next Steps

- Set up custom domain (optional)
- Configure monitoring
- Set up CI/CD
- Add SSL certificates (automatic on Vercel/Render)

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed documentation.
