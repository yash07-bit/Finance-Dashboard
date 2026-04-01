import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import Insights from './pages/Insights'
import Budgets from './pages/Budgets'
import Accounts from './pages/Accounts'
import Reports from './pages/Reports'
import Settings from './pages/Settings'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/transactions"
          element={
            <MainLayout>
              <Transactions />
            </MainLayout>
          }
        />
        <Route
          path="/insights"
          element={
            <MainLayout>
              <Insights />
            </MainLayout>
          }
        />
        <Route
          path="/budgets"
          element={
            <MainLayout>
              <Budgets />
            </MainLayout>
          }
        />
        <Route
          path="/accounts"
          element={
            <MainLayout>
              <Accounts />
            </MainLayout>
          }
        />
        <Route
          path="/reports"
          element={
            <MainLayout>
              <Reports />
            </MainLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <MainLayout>
              <Settings />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
