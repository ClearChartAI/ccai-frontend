import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../assets/Purple Cush.png';

const Login = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Navigate to dashboard after sign in
    navigate('/dashboard');
  };

  const handleGoogleLogin = () => {
    // Handle Google login
    console.log('Google login clicked');
    // Navigate to dashboard after Google login
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Side - Branding */}
        <div className="login-left">
          <div className="login-branding">
            <img src={logo} alt="ClearChartAI Logo" className="login-logo" />
            <h1 className="login-brand-title">ClearChartAI</h1>
            <p className="login-brand-subtitle">
            Understand Your Health Own Your Future
            </p>
            <div className="login-features">
              <div className="login-feature-item">
                <span>Unified medical records</span>
              </div>
              <div className="login-feature-item">
                <span>AI-powered explanations</span>
              </div>
              <div className="login-feature-item">
                <span>HIPAA-compliant security</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="login-right">
          <div className="login-form-container">
            <div className="login-form-header">
              <h2 className="login-form-title">
                {isSignUp ? 'Create your account' : 'Welcome back'}
              </h2>
              <p className="login-form-subtitle">
                {isSignUp
                  ? 'Start your journey to better health understanding'
                  : 'Sign in to access your medical insights'}
              </p>
            </div>

            <button className="btn-google-login" onClick={handleGoogleLogin}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M19.8 10.2273C19.8 9.51818 19.7364 8.83636 19.6182 8.18182H10.2V12.05H15.6109C15.3727 13.3 14.6455 14.3591 13.5682 15.0682V17.5773H16.8273C18.7091 15.8364 19.8 13.2727 19.8 10.2273Z" fill="#4285F4"/>
                <path d="M10.2 20C12.9 20 15.1636 19.1045 16.8273 17.5773L13.5682 15.0682C12.6636 15.6682 11.5227 16.0227 10.2 16.0227C7.59545 16.0227 5.38182 14.2636 4.58636 11.9H1.22727V14.4909C2.88182 17.7591 6.27727 20 10.2 20Z" fill="#34A853"/>
                <path d="M4.58636 11.9C4.38636 11.3 4.27273 10.6591 4.27273 10C4.27273 9.34091 4.38636 8.7 4.58636 8.1V5.50909H1.22727C0.445455 7.05909 0 8.48182 0 10C0 11.5182 0.445455 12.9409 1.22727 14.4909L4.58636 11.9Z" fill="#FBBC04"/>
                <path d="M10.2 3.97727C11.6409 3.97727 12.9227 4.48182 13.9227 5.43636L16.8182 2.54091C15.1591 0.990909 12.8955 0 10.2 0C6.27727 0 2.88182 2.24091 1.22727 5.50909L4.58636 8.1C5.38182 5.73636 7.59545 3.97727 10.2 3.97727Z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <div className="login-divider">
              <span>or</span>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              {isSignUp && (
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required={isSignUp}
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              {!isSignUp && (
                <div className="form-options">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="forgot-password">Forgot password?</a>
                </div>
              )}

              <button type="submit" className="btn-submit">
                {isSignUp ? 'Create Account' : 'Sign In'}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>

            <div className="login-footer">
              <p>
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                <button
                  className="btn-toggle"
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? 'Sign In' : 'Create Account'}
                </button>
              </p>
            </div>

            <div className="login-back">
              <Link to="/" className="back-home">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
