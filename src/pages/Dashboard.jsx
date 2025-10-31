import React, { useState } from 'react';
import './Dashboard.css';
import logo from '../assets/Purple Cush.png';

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState('Search');
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'clari',
      text: 'Hello! How can to assist you today with health records records today?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const menuItems = [
    { id: 'new-chat', name: 'New Chat', icon: 'plus' },
    { id: 'search', name: 'Search', icon: 'search' },
    { id: 'chat-history', name: 'Chat History', icon: 'history' },
    { id: 'clock', name: '', icon: 'clock' },
    { id: 'search-active', name: 'Search', icon: 'search', active: true },
    { id: 'records', name: 'Records', icon: 'folder' },
    { id: 'results', name: 'Results', icon: 'clipboard' },
    { id: 'notes', name: 'Notes', icon: 'note' }
  ];

  const medicalRecords = [
    { name: 'Echocardiogram', date: '01/18/22', icon: 'file' },
    { name: 'Glucose Panel 1st visit', date: '12/05/24', icon: 'file' },
    { name: 'Primary Physical Annual', date: '11/12/24', icon: 'file' },
    { name: 'Primary Physical Report', date: '01/16/25', icon: 'file', badge: 'pending' },
    { name: 'Prescription: Lisinopril 10/01 MG', date: '09/08/24', icon: 'file' },
    { name: 'Therapy Notes', date: '12/01/24', icon: 'file' }
  ];

  const suggestedTopics = [
    'Summarize my latest labs',
    'Explain my diagnosis',
    'Schedule follow-up'
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setChatMessages([...chatMessages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
    }
  };

  const renderIcon = (iconType) => {
    const icons = {
      plus: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
      search: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M10 10L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
      history: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3V8L11 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.5"/></svg>,
      clock: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/><path d="M8 4V8L10.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
      folder: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4H14V13H2V4Z" stroke="currentColor" strokeWidth="1.5"/><path d="M2 4L6 2H10L14 4" stroke="currentColor" strokeWidth="1.5"/></svg>,
      clipboard: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="4" y="2" width="8" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/><path d="M6 2H10V4H6V2Z" stroke="currentColor" strokeWidth="1.5"/></svg>,
      note: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 2H10L13 5V14H3V2Z" stroke="currentColor" strokeWidth="1.5"/><path d="M10 2V5H13" stroke="currentColor" strokeWidth="1.5"/></svg>,
      file: <svg width="16" height="16" viewBox="0 0 16 16" fill="#7C8DB5"><rect x="4" y="2" width="8" height="12" rx="1"/><rect x="6" y="4" width="4" height="1" fill="white"/><rect x="6" y="6" width="4" height="1" fill="white"/><rect x="6" y="8" width="3" height="1" fill="white"/></svg>
    };
    return icons[iconType] || null;
  };

  return (
    <div className="dashboard-new">
      {/* Left Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <img src={logo} alt="ClearChartAI" className="sidebar-logo" />
          <h1 className="sidebar-brand">ClearChartAI</h1>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${item.active ? 'active' : ''}`}
              onClick={() => setActiveMenu(item.name)}
            >
              <span className="nav-icon">{renderIcon(item.icon)}</span>
              {item.name && <span className="nav-label">{item.name}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="btn-get-records">
            Get Medical Records
          </button>
          <button className="btn-settings">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 2V3M8 13V14M14 8H13M3 8H2M11.5 11.5L10.8 10.8M5.2 5.2L4.5 4.5M11.5 4.5L10.8 5.2M5.2 10.8L4.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Settings
          </button>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="dashboard-main">
        <div className="chat-header">
          <h2 className="chat-title">Chat Box</h2>
          <button className="chat-menu-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 6H10.01M10 10H10.01M10 14H10.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="chat-content">
          <div className="chat-messages-area">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                <div className="message-bubble">
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="chat-input-section">
            <div className="chat-greeting">Hey Dhruv</div>
            <form onSubmit={handleSendMessage} className="chat-input-form">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask Clari..."
                className="chat-input"
              />
            </form>

            <div className="suggested-topics">
              {suggestedTopics.map((topic, index) => (
                <button key={index} className="topic-btn">
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Right Sidebar - Records */}
      <aside className="dashboard-records">
        <div className="records-header">
          <h2 className="records-title">Your Records</h2>
        </div>

        <div className="records-list">
          {medicalRecords.map((record, index) => (
            <div key={index} className="record-item">
              <div className="record-icon">
                {renderIcon(record.icon)}
              </div>
              <div className="record-info">
                <h3 className="record-name">{record.name}</h3>
                <p className="record-date">{record.date}</p>
              </div>
              {record.badge && (
                <span className="record-badge">{record.badge}</span>
              )}
            </div>
          ))}
        </div>

        <div className="records-footer">
          <div className="sync-status">
            <span className="sync-count">16 Documents Synced</span>
            <button className="sync-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8H14M14 8L11 5M14 8L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
