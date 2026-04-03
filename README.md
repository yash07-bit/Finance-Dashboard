# Finance Dashboard - Personal Finance Management

A modern, fully-featured personal finance dashboard built with React 19, Tailwind CSS, and Vite. Real-time data synchronization with Excel import, dynamic analytics, and comprehensive financial management.

## ✨ Features

### Core Functionality
- **Dashboard** - Real-time financial overview with balance trends and spending analysis
- **Transactions** - Complete transaction management with filtering and sorting
- **Budgets** - Smart budget tracking with category management
- **Accounts** - Multi-account management with balance tracking
- **Insights** - Advanced analytics with spending patterns and trends
- **Reports** - Detailed financial reports with monthly comparisons
- **Settings** - User preferences and security configuration

### Advanced Features
- **Excel Import** - Upload financial data from Excel files (XLSX)
- **Bidirectional Sync** - Data reflects across all pages in real-time
- **Dynamic Charts** - Responsive charts with realistic data fluctuations
- **Category Analysis** - Spending breakdown and allocation insights
- **Budget Tracking** - Real-time notifications when approaching limits
- **Monthly Trends** - Historical data analysis
- **Currency Support** - Multi-currency conversion (USD, EUR, GBP)

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm 8+ or yarn 4+
- Modern web browser

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will start on `http://localhost:5174`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/              # React components (50+)
├── context/
│   ├── DataContext.jsx      # Global state management
│   └── useAppData.js        # Custom hook for data access
├── pages/
│   ├── Dashboard.jsx
│   ├── Transactions.jsx
│   ├── Budgets.jsx
│   ├── Accounts.jsx
│   ├── Reports.jsx
│   ├── Insights.jsx
│   └── Settings.jsx
├── utils/
│   ├── financeData.js       # Data calculations
│   └── mockData.js          # Sample data
└── App.jsx
```

## 🛠️ Tech Stack

- **React** 19.2.4
- **React Router DOM** 6.22.0
- **Tailwind CSS** 3.4.3
- **Recharts** 2.10.3
- **Lucide React** 0.408.0
- **XLSX** 0.18.5
- **Vite** 5.0.0

## ✅ Assignment Requirement Mapping

This project satisfies the Finance Dashboard UI assignment requirements as follows:

### 1) Dashboard Overview
- Summary cards for **Total Balance, Income, Expenses**
- Time-based visualization: **Balance Trend**
- Categorical visualization: **Category Spending**
- Implemented in:
  - `src/components/DashboardContent.jsx`
  - `src/components/SummaryCards.jsx`
  - `src/components/BalanceTrendChart.jsx`
  - `src/components/CategorySpending.jsx`

### 2) Transactions Section
- Transaction table includes:
  - Date
  - Amount
  - Category
  - Type (income/expense)
- Interaction features:
  - Filtering (category/type/date range)
  - Sorting (newest/oldest)
  - Empty-state handling
- Implemented in:
  - `src/components/TransactionsContent.jsx`
  - `src/components/FilterBar.jsx`
  - `src/components/TransactionTable.jsx`

### 3) Basic Role-Based UI (Frontend Simulation)
- Role toggle between **Admin** and **Viewer** in sidebar
- Viewer mode is read-only; admin mode allows create/edit/import/delete actions
- Role state persisted in local storage
- Implemented in:
  - `src/components/Sidebar.jsx`
  - `src/context/DataContext.jsx`
  - `src/components/TransactionsContent.jsx`
  - `src/components/AccountsContent.jsx`
  - `src/components/BudgetsContent.jsx`
  - `src/components/ExcelUpload.jsx`

### 4) Insights Section
- Highest spending category
- Monthly comparison
- Additional insight widgets
- Implemented in:
  - `src/components/InsightsContent.jsx`
  - `src/components/HighestSpending.jsx`
  - `src/components/MonthlyComparison.jsx`

### 5) State Management
- Global state management via React Context
- Shared transaction/account/budget data across pages
- Role and permissions state handling
- Currency preference state handling
- Implemented in:
  - `src/context/DataContext.jsx`
  - `src/context/useAppData.js`
  - `src/context/CurrencyPreference.jsx`
  - `src/context/currencyPreferenceStore.js`

### 6) UI/UX Expectations
- Clean and readable component-driven UI
- Responsive layout across mobile/tablet/desktop
- Handles empty or no-data states in key sections

### Optional Enhancements Included
- Excel/CSV import flow
- Currency preference support (USD/EUR/GBP)
- Export support (budget CSV)
- Local storage persistence for selected role and currency preference

## 📊 Data Management

The app uses React Context for global state management:

```javascript
import { useAppData } from '../context/useAppData';

const MyComponent = () => {
  const { data, addTransaction, uploadExcelData } = useAppData();
};
```

### Excel Import Format

Create `.xlsx` files with these sheets:

**Transactions Sheet:**
```
Date | Description | Category | Amount | Type | Account | Status
```

**Budgets Sheet:**
```
Category | Budget_Limit | Month | Spent
```

**Accounts Sheet:**
```
Account_Name | Account_Type | Balance | Currency
```

## 💡 Usage Guide

### Uploading Financial Data
1. Click **"Import Excel"** in sidebar
2. Select `.xlsx` file
3. Data auto-populates all pages
4. Charts update instantly

### Managing Data
- Real-time sync across all pages
- Add/edit transactions, budgets, accounts
- Automatic chart recalculation
- Filter and sort transactions

## 📈 Features

- **Real-time Balance Tracking** - Dynamic calculations from transactions
- **Smart Budget Management** - Monitors spending with alerts
- **Dynamic Analytics** - Volume analysis, top categories, trends
- **Data Synchronization** - Instant updates everywhere

## 🔄 Automatic Data Sync

Changes reflect instantly:
- ✅ Add transaction → Dashboard updates
- ✅ Edit budget → Reports recalculate  
- ✅ Upload Excel → All pages sync
- ✅ Add account → Balances update

## ⚙️ Configuration

### Currency Preferences
Select in Settings: USD, EUR, or GBP

### Environment Variables
```bash
VITE_API_URL=your_api_url  # Optional: for future backend
```

## 📱 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 📚 Generate Sample Data

```bash
python3 create_excel.py
```

Creates `demo-financial-data.xlsx` with:
- 62 transactions (3 months)
- 8 accounts
- 18 budgets
- 14 categories

## 🔒 Important Notes

- **Data Storage**: Client-side only (in memory)
- **Persistence**: Resets on page refresh
- **Security**: Demo mode (no authentication)

**For Production**: Add backend API, database, and auth.

## 🚀 Future Enhancements

- [ ] Backend API
- [ ] User authentication
- [ ] Data persistence
- [ ] PDF export
- [ ] Mobile apps
- [ ] AI insights
- [ ] Bank API integration

## 🐛 Troubleshooting

**Excel import not working?**
- Verify `.xlsx` format
- Check sheet names match
- Try demo file first

**Data not appearing?**
- Refresh page (Cmd+R / Ctrl+R)
- Check browser console
- Upload again

## 📄 License

MIT License - Free to use

---

**Happy Tracking! 📊💰**

**Version**: 1.0.0 | **Status**: Production Ready
