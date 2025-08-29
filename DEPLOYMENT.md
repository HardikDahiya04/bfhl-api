# 🚀 BFHL API - Quick Deployment Guide

## Step-by-Step Deployment Instructions

### 1. 📁 Setup GitHub Repository

1. Create a new repository on GitHub:
   ```bash
   # Initialize git (if not already done)
   git init

   # Add all files
   git add .

   # Commit
   git commit -m "Initial commit: BFHL API implementation"

   # Add remote origin (replace with your repository URL)
   git remote add origin https://github.com/yourusername/bfhl-api.git

   # Push to GitHub
   git push -u origin main
   ```

### 2. 🌐 Deploy to Vercel (Recommended - Free & Fast)

**Option A: GitHub Integration (Recommended)**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically:
   - Detect it's a Node.js project
   - Use the `vercel.json` configuration
   - Deploy your API

**Option B: Vercel CLI**
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (run from project directory)
vercel --prod

# Your API will be available at: https://your-project-name.vercel.app/bfhl
```

### 3. 🚂 Deploy to Railway (Alternative)

1. Go to [Railway](https://railway.app)
2. Sign up/Login with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway will automatically:
   - Use the `Procfile` configuration
   - Install dependencies
   - Start your server

### 4. 🎨 Deploy to Render (Alternative)

1. Go to [Render](https://render.com)
2. Sign up/Login with GitHub
3. Click "New" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Node Version**: 18 or latest

### 5. ✅ Test Your Deployed API

Once deployed, test your API endpoint:

```bash
# Replace YOUR_DEPLOYED_URL with your actual URL
curl -X POST https://YOUR_DEPLOYED_URL/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R", "$"]}'
```

Expected response:
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### 6. 📝 Submit Your Assignment

1. **Copy your deployed URL** (should end with `/bfhl`)
2. **Submit to the form**: https://forms.office.com/r/ZeVpUYp3zV
3. **Format**: `https://your-app-name.platform.com/bfhl`

### 7. 🛠️ Customize User Details

Before deploying, update your personal details in `server.js`:

```javascript
// Replace these with your actual details:
"user_id": "your_name_ddmmyyyy",     // e.g., "john_doe_17091999"
"email": "your.email@domain.com",    // Your email
"roll_number": "YOUR123",            // Your roll number
```

## 🔧 Troubleshooting

### Common Issues:

1. **API returns 404**
   - Ensure you're accessing `/bfhl` endpoint
   - Check if deployment was successful

2. **CORS errors**
   - API includes CORS headers, should work from any frontend

3. **Timeout errors**
   

4. **Local testing**
   ```bash
   # Start locally
   npm start

   # Test locally
   curl -X POST http://localhost:3000/bfhl -H "Content-Type: application/json" -d '{"data": ["a","1"]}'
   ```

## 🎯 Quick Test URLs

After deployment, these should work:
- **GET**: `https://your-url.com/bfhl` (Returns operation_code: 1)
- **POST**: `https://your-url.com/bfhl` (Main API endpoint)
- **GET**: `https://your-url.com/` (Health check)

## 📊 Performance Tips

- **Vercel**: Fastest for this type of API, great free tier
- **Railway**: Good alternative, easy GitHub integration  
- **Render**: Reliable but may have cold start delays

## 🏆 Success Checklist

- [x] API responds to POST /bfhl correctly
- [x] API responds to GET /bfhl with operation_code
- [x] All example test cases pass
- [x] CORS enabled for cross-origin requests
- [x] Error handling implemented
- [x] Code pushed to GitHub
- [x] API deployed and accessible
- [x] Endpoint URL submitted to VIT form

## 🆘 Need Help?

1. Check deployment logs on your platform
2. Test locally first with `npm start`
3. Use the provided `test-interface.html` for easy testing
4. Verify your JSON input format matches examples

**Your API endpoint should look like:**
`https://your-project.vercel.app/bfhl`

Good luck with your assignment! 🚀
