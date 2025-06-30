import React, { useState, useEffect } from 'react';

// Main application component
const App = () => {
  // Define box data for the interactive sections, updated for Rebornebike.com
  const boxData = [
    {
      title: 'About ZiTeng Trading',
      content: 'With over a decade of experience, ZiTeng Trading is the premier refurbishing center for e-mobility and consumer electronics returns in the United States. We serve over 300 U.S. retailers and annually refurbish 10,000+ e-bikes/scooters, 300,000+ electronic devices, and 5,000+ furniture/home goods.',
    },
    {
      title: 'Our 5-Step Process',
      content: 'Our comprehensive refurbishing process includes: 1. Assessment & Grading (functional, repairable, scrap). 2. Component Repair (motors, batteries, control boards, brakes, frames). 3. Deep Cleaning & Cosmetic Restoration. 4. Full Testing & Quality Control. 5. Repackaging with Refurbished Labels & 90-Day Warranty.',
    },
    {
      title: 'Our Advantages',
      content: 'We offer: Local U.S. Operations (no need to ship back to China), Fast Turnaround (1-3 days), Factory-Level Repair Standards (certified technicians), Reduced Return Losses, Strong Brand Control, and Multilingual Support (Mandarin-English bilingual team).',
    },
    {
      title: 'Who We Serve',
      content: 'We collaborate with: Chinese manufacturers exporting to U.S. platforms (Amazon, Walmart, TikTok Shop), Brands seeking B2B liquidation solutions, Cross-border sellers dealing with returns/overstock. We support E-Scooters, E-Bikes, Portable Power Stations, Smart Helmets, Chargers, Accessories.',
    },
    {
      title: 'Partner With Us',
      content: 'Looking for a reliable refurbishing solution in the U.S.? We offer flexible buyout or consignment options for returns from U.S. customers, overstock from 3PL or brand warehouses, and warranty claims & repair logistics. Contact us for a tailored service plan: support@rebornebike.com | +1-XXX-XXX-XXXX.',
    },
  ];

  // State to track which interactive box is currently expanded
  const [activeIndex, setActiveIndex] = useState(null);

  // Handle mouse leaving the entire interactive box container
  const handleContainerMouseLeave = () => {
    setTimeout(() => {
      setActiveIndex(null);
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-sm py-4 px-4 md:px-8 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-extrabold text-gray-900 tracking-wide">
            ZiTeng Trading
          </a>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">Home</a>
            <a href="#what-we-do" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">What We Do</a>
            <a href="#why-choose-us" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">Why Choose Us</a>
            <a href="#who-we-serve" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">Who We Serve</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Large banner with text overlay */}
      <section className="relative h-96 md:h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/Suspension-Fork.webp')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Your Trusted U.S. Refurbishing Partner
          </h1>
          <p className="mt-4 text-lg md:text-2xl drop-shadow-lg">
            Specializing in E-Mobility & Electronics for Chinese Brands
          </p>
          <a href="#interactive-boxes" className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Partner with Us
          </a>
        </div>
      </section>

      {/* Interactive Box Container - now acting as key service highlights */}
      <div id="interactive-boxes"
        className="flex flex-col md:flex-row justify-center items-stretch gap-4 max-w-7xl mx-auto py-12 px-4 md:px-8 -mt-20 relative z-10"
        onMouseLeave={handleContainerMouseLeave}
      >
        {boxData.map((box, index) => (
          <BoxItem
            key={index}
            title={box.title}
            isActive={activeIndex === index}
            onMouseEnter={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Dropdown content area, occupying full width below interactive boxes */}
      {activeIndex !== null && (
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8 max-w-7xl mx-auto border border-gray-200 mb-12 px-4 md:px-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            {boxData[activeIndex].title}
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 text-center">
            {boxData[activeIndex].content}
          </p>
        </div>
      )}

      {/* What We Do Section - based on "Our 5-Step Process" */}
      <section id="what-we-do" className="bg-white rounded-xl shadow-lg p-8 mt-12 max-w-7xl mx-auto border border-gray-200 mb-12 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our 5-Step Refurbishing Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-start">
          <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-5xl text-blue-500 mb-3">1.</span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Assessment & Grading</h3>
            <p className="text-gray-600 text-sm">Classify as functional, repairable, or scrap.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-5xl text-blue-500 mb-3">2.</span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Component Repair</h3>
            <p className="text-gray-600 text-sm">Motors, batteries, control boards, brakes, frames.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-5xl text-blue-500 mb-3">3.</span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Deep Cleaning & Cosmetic Restoration</h3>
            <p className="text-gray-600 text-sm">Thorough cleaning and restoration of appearance.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-5xl text-blue-500 mb-3">4.</span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Full Testing & QC</h3>
            <p className="text-gray-600 text-sm">Rigorous testing and quality control.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-5xl text-blue-500 mb-3">5.</span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Repackaging & Warranty</h3>
            <p className="text-gray-600 text-sm">With refurbished labels & 90-Day Warranty.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - based on "Our Advantages" */}
      <section id="why-choose-us" className="bg-white rounded-xl shadow-lg p-8 mt-12 max-w-7xl mx-auto border border-gray-200 mb-12 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Why Choose ZiTeng Trading?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-5xl text-green-600 mr-4">🚚</span>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Local U.S. Operations</h3>
              <p className="text-gray-700">No need to ship products back to China, saving time and costs.</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-5xl text-green-600 mr-4">⚡</span>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Fast Turnaround</h3>
              <p className="text-gray-700">1 to 3 days refurbishing lead time for quick re-entry into market.</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-5xl text-green-600 mr-4">🧰</span>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Factory-Level Repair</h3>
              <p className="text-gray-700">Motor/battery/PCB-certified technicians ensure high standards.</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-5xl text-green-600 mr-4">📉</span>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Reduced Return Losses</h3>
              <p className="text-gray-700">Cut down on warehousing and liquidation costs.</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-5xl text-green-600 mr-4">🛡️</span>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Brand Control</h3>
              <p className="text-gray-700">Standardized refurb flow protects your brand reputation.</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-5xl text-green-600 mr-4">💬</span>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Multilingual Support</h3>
              <p className="text-gray-700">Mandarin-English bilingual support team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section id="who-we-serve" className="bg-white rounded-xl shadow-lg p-8 mt-12 max-w-7xl mx-auto border border-gray-200 mb-12 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Who We Serve</h2>
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">We collaborate with:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>Chinese manufacturers exporting to U.S. platforms (Amazon, Walmart, TikTok Shop)</li>
              <li>Brands seeking B2B liquidation solutions</li>
              <li>Cross-border sellers dealing with returns/overstock</li>
            </ul>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Product Types We Support:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>E-Scooters (foldable, seated, off-road)</li>
              <li>E-Bikes (commuter, fat tire, mountain)</li>
              <li>Portable Power Stations</li>
              <li>Smart Helmets, Chargers, Accessories</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="bg-white rounded-xl shadow-lg p-8 mt-12 max-w-7xl mx-auto border border-gray-200 mb-12 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
            <p className="italic text-lg text-gray-700 mb-4">
              “ZiTeng Trading helped us turn our U.S. returns into a profitable channel. Fast, professional, and reliable.”
            </p>
            <p className="font-semibold text-gray-800">– Shenzhen-based E-Bike Manufacturer</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
            <p className="italic text-lg text-gray-700 mb-4">
              “They transformed our brand’s U.S. after-sales experience.”
            </p>
            <p className="font-semibold text-gray-800">– Cross-border Amazon Seller</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left px-4 md:px-8">
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-4">ZiTeng Trading</h3>
            <p className="text-gray-400">
              Refurbishing Center – Los Angeles | Houston | Phoenix<br/>
              📍 30,000 sq.ft. LA facility | Daily Capacity: 100+ units
            </p>
          </div>
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#what-we-do" className="text-gray-400 hover:text-white transition-colors duration-300">What We Do</a></li>
              <li><a href="#why-choose-us" className="text-gray-400 hover:text-white transition-colors duration-300">Why Choose Us</a></li>
              <li><a href="#who-we-serve" className="text-gray-400 hover:text-white transition-colors duration-300">Who We Serve</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p className="text-gray-400">
              Email: support@rebornebike.com<br/>
              Phone: +1-XXX-XXX-XXXX<br/>
              {/* Optional: Add a link to a contact form/WeChat QR Code/WhatsApp as suggested in doc */}
              <a href="#" className="text-blue-400 hover:underline">Contact Form</a>
            </p>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 text-sm px-4 md:px-8">
          &copy; {new Date().getFullYear()} ZiTeng Trading. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

// Single box component - unchanged functionality
const BoxItem = ({ title, isActive, onMouseEnter }) => {
  return (
    <div
      className={`
        flex-1 flex flex-col justify-between items-center p-6
        bg-white rounded-xl shadow-md cursor-pointer
        border-2 transition-all duration-500 ease-in-out transform
        ${isActive ? 'border-blue-500 scale-105 shadow-xl' : 'border-gray-200 hover:border-gray-400 hover:shadow-lg'}
        ${isActive ? 'md:flex-[3]' : 'md:flex-[1]'} /* Desktop: active box becomes longer, others become shorter */
      `}
      onMouseEnter={onMouseEnter}
    >
      <h3 className="text-xl md:text-2xl font-bold text-gray-700 whitespace-nowrap mb-4">
        {title}
      </h3>
    </div>
  );
};

export default App;
