# NexaVault - Finance Dashboard

A modern, fully-featured finance dashboard built with React, Tailwind CSS, and Vite. This is a production-ready application with a clean, well-structured codebase.

## 🎯 Features

- **Dashboard** - Overview of financial metrics and transactions
- **Analytics** - Detailed spending analysis and insights
- **Accounts** - Manage bank and savings accounts
- **Cards** - Credit and debit card management
- **Settings** - User preferences and security settings
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Dark Theme** - Modern dark UI with Tailwind CSS
- **Real-time Navigation** - React Router v6 integration

## 📁 Project Structure

```
src/
├── components/
│   ├── shared/
│   │   ├── Sidebar.jsx           # Navigation sidebar
│   │   ├── Header.jsx            # Top header with search
│   │   └── Card.jsx              # Reusable card components
│   └── dashboard/
│       ├── DashboardComponents.jsx  # Dashboard components
│       └── AnalyticsComponents.jsx  # Analytics components
├── pages/
│   ├── Dashboard.jsx             # Main dashboard
│   ├── Analytics.jsx             # Analytics page
│   ├── Accounts.jsx              # Accounts page
│   ├── Cards.jsx                 # Cards page
│   ├── Settings.jsx              # Settings page
│   └── NotFound.jsx              # 404 page
├── layouts/
│   └── MainLayout.jsx            # Main layout wrapper
├── utils/
│   ├── constants.js              # Constants
│   └── mockData.js               # Mock data
├── App.jsx                       # Main app
├── main.jsx                      # Entry point
└── index.css                     # Tailwind styles
```

## 🛠️ Tech Stack

- **React** 19
- **Tailwind CSS** 3
- **React Router** v6
- **Lucide React** Icons
- **Vite** Build tool

## 📦 Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173/`

## 📋 Routes

- `/` - Dashboard
- `/analytics` - Analytics
- `/accounts` - Accounts
- `/cards` - Cards
- `/settings` - Settings

## 🎨 Design

- Custom dark theme with Tailwind
- Fully responsive (mobile-first)
- Pure Tailwind CSS (no custom CSS files)
- Smooth animations and transitions

## 🔐 Security Features

- Password management
- 2-Factor authentication
- Email alerts
- Transaction notifications
- Fraud alerts

## 📊 Mock Data Included

- 8+ transactions
- 6 months of spending data
- 3 accounts
- 2 credit cards
- Financial metrics

## 🎯 Best Practices

✅ Clean component architecture
✅ Logical folder structure
✅ Reusable components
✅ Utility-first styling
✅ React Router v6
✅ Responsive design
✅ Dark theme optimized

## 🚀 Production Build

```bash
npm run build
npm run preview
```

## 📝 Git Configuration

Comprehensive `.gitignore` included:
- node_modules, dist, build
- IDE files (.vscode, .idea)
- Environment variables
- OS files

## 🚀 Future Enhancements

- Real API integration
- Authentication system
- Chart.js/Recharts integration
- Budget tracking
- Transaction categorization
- Multi-currency support
- Light/Dark theme toggle

## 📄 License

Open source - available for personal and commercial use.

---

**Built with React & Tailwind CSS** ❤️
