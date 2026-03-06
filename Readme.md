#  AI Content Intelligence Engine - Deployment Ready

A production-ready AI-powered content generation platform with analytics, automation, and A/B testing capabilities.

##  Features

- **AI Content Generation** - Generate high-quality content with customizable parameters
- **Content Library** - Organize and manage all generated content
- **Analytics Dashboard** - Track engagement and performance metrics
- **A/B Testing** - Run experiments to optimize content performance
- **Automation Workflows** - Trigger-based content workflows
- **Authentication** - JWT-based auth system with secure password hashing
- **RESTful API** - Complete backend API with FastAPI
- **Modern UI** - Beautiful, responsive Tailwind CSS interface

## 🛠️ Tech Stack

**Backend:**
- FastAPI (Python 3.12)
- SQLAlchemy ORM
- PostgreSQL / SQLite
- JWT Authentication
- OpenAI API Integration

**Frontend:**
- React 19
- Vite
- Tailwind CSS 4
- Recharts
- Axios

**Deployment:**
- Backend: Render / Railway / Fly.io
- Frontend: Vercel
- Database: Supabase / Neon

## 📦 Quick Deploy

See [QUICK_DEPLOY.md](QUICK_DEPLOY.md) for fast deployment instructions.

### Prerequisites

- Python 3.12+
- Node.js 18+
- Git
- OpenAI API key (for AI features)

### Local Development

**Backend:**
```bash
cd backend
python -m venv venv
.\venv\bin\activate  # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

Access the app at `http://localhost:5173`

### Environment Setup

**Backend (.env):**
```env
DATABASE_URL=sqlite:///./content.db
SECRET_KEY=your-secret-key-here
OPENAI_API_KEY=sk-your-key-here
CORS_ORIGINS=http://localhost:5173
```

**Frontend (.env):**
```env
VITE_API_URL=http://localhost:8000
```

## 🌐 Deployment

### Option 1: Automated Script (Recommended)

```powershell
# Windows
.\scripts\deploy.ps1

# Linux/Mac
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

### Option 2: Manual Deployment

Follow the detailed guide in [DEPLOYMENT.md](DEPLOYMENT.md)

### Quick Links

- **Render:** https://render.com
- **Vercel:** https://vercel.com
- **Supabase:** https://supabase.com

## 📖 Documentation

- [Deployment Guide](DEPLOYMENT.md) - Complete deployment documentation
- [Quick Deploy](QUICK_DEPLOY.md) - Fast deployment walkthrough
- [API Documentation](docs/api_documentation.md) - API endpoints reference
- [Architecture](docs/archetecture.md) - System architecture overview

## 🔑 API Endpoints

### Authentication
- `POST /auth/login` - User login
- `POST /auth/token` - OAuth2 token
- `GET /auth/verify` - Verify token

### Content
- `POST /generate-content` - Generate new content
- `GET /content-library` - List all content
- `GET /content/{id}` - Get specific content
- `GET /content/topic/{topic}` - Search by topic

### Analytics
- `GET /analytics` - Get metrics
- `POST /analytics/seed` - Generate sample data

### System
- `GET /health` - Health check

## 🎨 Features Showcase

### Dashboard
- Real-time statistics
- Performance charts
- Recent content overview
- A/B test results

### Content Generator
- Topic, audience, and tone customization
- AI-powered generation
- Automatic categorization
- Metadata tracking

### Analytics
- Engagement tracking
- Response consistency monitoring
- Visual charts and graphs

### Experiments
- A/B testing framework
- Variant comparison
- Performance metrics
- Statistical significance

## 🔒 Security

- JWT authentication
- Password hashing (sha256_crypt)
- CORS protection
- Environment variable management
- SQL injection protection
- Input validation

## 📊 Project Structure

```
├── backend/
│   ├── app/
│   │   ├── auth/          # Authentication
│   │   ├── core/          # Config & database
│   │   ├── models/        # SQLAlchemy models
│   │   ├── routes/        # API endpoints
│   │   ├── services/      # Business logic
│   │   └── main.py        # FastAPI app
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API client
│   │   └── App.jsx        # Main app
│   ├── package.json
│   └── Dockerfile
├── docs/                  # Documentation
├── scripts/               # Deployment scripts
└── docker-compose.yml     # Docker configuration
```

## 🚦 Development Workflow

1. **Setup** - Clone and install dependencies
2. **Develop** - Make changes locally
3. **Test** - Run the app locally
4. **Commit** - Commit to Git
5. **Deploy** - Push to GitHub (auto-deploys)

## 🐳 Docker Deployment

```bash
docker-compose up -d
```

Access:
- Frontend: http://localhost:5173
- Backend: http://localhost:8000
- Database: localhost:5432

## 🤝 Contributing

This is a personal project, but suggestions are welcome!

## 📝 License

MIT License - See LICENSE file for details

## 🆘 Support

For deployment issues:
1. Check [DEPLOYMENT.md](DEPLOYMENT.md)
2. Review environment variables
3. Check server logs
4. Verify database connection

## 🎯 Roadmap

- [ ] Real OpenAI integration
- [ ] User authentication system
- [ ] File upload support
- [ ] Email notifications
- [ ] Advanced analytics
- [ ] API rate limiting
- [ ] Caching layer
- [ ] Webhook integrations

## ⚡ Performance

- FastAPI: High-performance async API
- React: Virtual DOM optimization
- Database: Connection pooling
- CDN: Automatic on Vercel

## 🌟 Demo

**Live Demo:** Coming soon!

**Test Credentials:**
- Username: `demo`
- Password: `password`

---

Made with ❤️ using FastAPI, React, and modern web technologies.

**Ready to deploy?** See [QUICK_DEPLOY.md](QUICK_DEPLOY.md)
