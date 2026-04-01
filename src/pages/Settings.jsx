import React, { useState } from 'react'

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    twoFactor: true,
    emailAlerts: true,
    darkMode: false,
    newsletter: true
  })

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <main className="ml-64 pt-24 pb-12 px-10 max-w-3xl">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-500">Manage your account preferences and security</p>
      </div>

      {/* Profile Section */}
      <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Information</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input type="text" defaultValue="Alexander Chen" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input type="email" defaultValue="alex.chen@example.com" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>United States</option>
              <option>Canada</option>
              <option>UK</option>
            </select>
          </div>
        </div>
        <button className="mt-6 px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 font-medium">
          Save Changes
        </button>
      </div>

      {/* Security Section */}
      <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Security</h2>
        <div className="space-y-4">
          {[
            { key: 'twoFactor', label: '2-Factor Authentication', desc: 'Add an extra layer of security' },
            { key: 'emailAlerts', label: 'Email Alerts', desc: 'Get notified of account changes' }
          ].map((item) => (
            <div key={item.key} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{item.label}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings[item.key]}
                  onChange={() => handleToggle(item.key)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Notifications</h2>
        <div className="space-y-4">
          {[
            { key: 'notifications', label: 'Push Notifications', desc: 'Receive mobile notifications' },
            { key: 'newsletter', label: 'Newsletter', desc: 'Weekly financial tips and insights' }
          ].map((item) => (
            <div key={item.key} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{item.label}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings[item.key]}
                  onChange={() => handleToggle(item.key)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Privacy & Data</h2>
        <div className="space-y-4">
          <button className="w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 text-left font-medium text-gray-900 transition-colors">
            Download Your Data
          </button>
          <button className="w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 text-left font-medium text-gray-900 transition-colors">
            Privacy Policy
          </button>
          <button className="w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 text-left font-medium text-gray-900 transition-colors">
            Terms of Service
          </button>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 rounded-lg p-8 border border-red-200">
        <h2 className="text-xl font-bold text-red-900 mb-6">Danger Zone</h2>
        <div className="space-y-4">
          <button className="w-full p-4 bg-red-100 text-red-900 rounded-lg hover:bg-red-200 font-medium transition-colors">
            Change Password
          </button>
          <button className="w-full p-4 bg-red-100 text-red-900 rounded-lg hover:bg-red-200 font-medium transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </main>
  )
}

export default Settings
