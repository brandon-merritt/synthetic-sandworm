import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div className="container-fluid p-0">
      {/* Header Section */}
      <header className="bg-primary text-white text-center py-5">
        <h1 className="display-4">Mindful Journal</h1>
        <p className="lead">Your personal space for mindfulness and mental wellness</p>
        <Link to="/signup" className="btn btn-light btn-lg mt-4">
          Get Started
        </Link>
      </header>

      {/* Intro Section */}
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Why Journaling?</h2>
            <p>
              Journaling is a powerful way to process thoughts and emotions. Whether it's a few minutes a day or whenever you
              feel overwhelmed, writing can help clear your mind and improve mental well-being. Our app makes it easy to log
              your thoughts and reflect over time.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Journaling illustration"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2>App Features</h2>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <i className="bi bi-pencil-square display-4 mb-3"></i>
              <h5>Daily Prompts</h5>
              <p>Receive daily journaling prompts to help you focus on mindfulness.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-shield-lock display-4 mb-3"></i>
              <h5>Secure Entries</h5>
              <p>All your entries are securely stored, only you have access to them.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-calendar-check display-4 mb-3"></i>
              <h5>Track Your Progress</h5>
              <p>Look back and reflect on past entries to track your mental health journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-5 text-center">
        <h2 className="mb-4">Ready to start your mindfulness journey?</h2>
        <Link to="/signup" className="btn btn-primary btn-lg mx-2">
          Sign Up
        </Link>
        <Link to="/login" className="btn btn-outline-primary btn-lg mx-2">
          Log In
        </Link>
      </section>

      {/* Footer Section */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">© {new Date().getFullYear()} Mindful Journal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
