# HFPL Auction Platform

A real-time cricket auction management system built with Next.js and React.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📋 Project Structure

```
HFPL_Auction/
├── app/                  # Next.js App Router
│   ├── page.js          # Home page
│   ├── layout.js        # Root layout
│   └── globals.css      # Global styles
├── components/          # React components
│   └── HFPLAuction.jsx  # Main auction component
├── package.json         # Dependencies
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript config
└── .gitignore          # Git ignore rules
```

## 🌐 Deployment to Vercel

### Option 1: Connect GitHub Repository (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Fix: Setup Next.js structure for Vercel deployment"
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js and deploys
   - Your app will be live with a `.vercel.app` domain

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

### Option 3: Drag & Drop (Not Recommended)

Go to vercel.com/new and drag the project folder, but GitHub method is better for continuous deployment.

## 🔧 Configuration

### Environment Variables

If you need Firebase or other services, create `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project
```

### Vercel Deployment Settings

These are automatically configured, but you can customize at Settings:

- **Build Command**: `next build`
- **Start Command**: `next start`
- **Install Command**: `npm install`

## ⚙️ What Was Fixed

❌ **Before**: Single JSX file - Vercel couldn't find entry point → **404 Error**

✅ **After**: Proper Next.js structure
- ✅ `app/page.js` - Home page entry point
- ✅ `app/layout.js` - Root layout
- ✅ `package.json` - Dependencies declared
- ✅ `next.config.js` - Next.js configuration
- ✅ `components/` folder - Organized components

## 📱 Testing Before Deploy

```bash
# Build locally to test
npm run build

# Start production build
npm start
```

Then visit http://localhost:3000 and verify the app loads without 404 errors.

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| **404 errors** | Ensure `app/page.js` exists and exports default |
| **Build fails** | Check `npm install` completes without errors |
| **Styles missing** | Verify `app/globals.css` imported in `layout.js` |
| **Components not found** | Confirm component paths use `@/` alias correctly |

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [React Documentation](https://react.dev)

---

**Now your app is production-ready!** 🎉
