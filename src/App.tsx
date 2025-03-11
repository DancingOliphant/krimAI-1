import React from 'react';
import Section from './components/Section';
// Fix the import path - no "styles" folder specified in import
import '../src/styles/backgrounds.css';

function App() {
  return (
    <div className="app">
      <Section backgroundType="wave-purple" id="home">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Welcome to Our Site</h1>
        <p className="text-xl text-white mb-8">Discover amazing features and services</p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          Get Started
        </button>
      </Section>
      
      <Section backgroundType="wave-blue" id="about">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">About Us</h2>
        <p className="text-xl text-white max-w-3xl">
          We are a team of passionate individuals dedicated to creating beautiful digital experiences.
        </p>
      </Section>
      
      <Section backgroundType="spectrum" id="services">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Service 1</h3>
            <p className="text-white">Description of your amazing service goes here.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Service 2</h3>
            <p className="text-white">Description of your amazing service goes here.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Service 3</h3>
            <p className="text-white">Description of your amazing service goes here.</p>
          </div>
        </div>
      </Section>
      
      <Section backgroundType="circle" id="features">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <div className="flex items-start">
            <div className="bg-teal-500 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Feature 1</h3>
              <p className="text-white opacity-80">Description of an amazing feature.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-teal-500 p-2 rounded-full mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Feature 2</h3>
              <p className="text-white opacity-80">Description of an amazing feature.</p>
            </div>
          </div>
        </div>
      </Section>
      
      <Section backgroundType="particles" id="contact">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Contact Us</h2>
        <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-filter backdrop-blur-sm max-w-2xl w-full">
          <form>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input className="w-full px-3 py-2 bg-white bg-opacity-20 text-white rounded" id="name" type="text" />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input className="w-full px-3 py-2 bg-white bg-opacity-20 text-white rounded" id="email" type="email" />
            </div>
            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea className="w-full px-3 py-2 bg-white bg-opacity-20 text-white rounded" id="message" rows={4}></textarea>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300" type="button">
              Send Message
            </button>
          </form>
        </div>
      </Section>
    </div>
  );
}

export default App;
