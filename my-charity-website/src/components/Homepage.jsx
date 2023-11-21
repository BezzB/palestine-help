import React from 'react';
import Navbar from './Navbar';

function HomePage() {
  return (
    <div className="font-sans">
      <header className="bg-gray-900 text-white py-4">
      <header className="bg-gray-900 text-white py-4">
        <Navbar/>         
       
      </header>
      </header>

      <main className="container mx-auto mt-8">
        {/* Compelling Banner Section */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center bg-cover bg-center bg-gray-500 h-80 md:h-96 rounded-lg">
            {/* Add impactful images or videos here */}
            {/* Example: <img src="path/to/image.jpg" alt="Impactful image" className="rounded-lg" /> */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Support Palestine</h1>
              <p className="text-lg md:text-xl text-white">Help us make a difference in the lives of people and children in Palestine.</p>
            </div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="mb-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg">We are committed to providing essential support and assistance to the people and children in Palestine. Together, we can make a positive impact on their lives and bring hope for a better future.</p>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Get Involved</h2>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <a href="donate.html" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg mb-4 md:mb-0 md:mr-4">Donate Now</a>
            <a href="get-involved.html" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg">Get Involved</a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 text-center">
        {/* Footer content */}
        <p>&copy; 2023 Charity for Palestine</p>
      </footer>
    </div>
  );
}

export default HomePage;
