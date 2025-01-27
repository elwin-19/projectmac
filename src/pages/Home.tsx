import React from 'react';
import { ArrowRight, Zap, Battery, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80"
            alt="EV Charging"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Revolutionary Hybrid<br />EV Charging Solution
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Experience the future of electric vehicle charging with our innovative hybrid charging technology.
            Faster, smarter, and more efficient.
          </p>
          <Link
            to="/product"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold"
          >
            Discover More
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Solution?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fast Charging</h3>
              <p className="text-gray-600">
                Achieve up to 80% charge in just 30 minutes with our advanced charging technology.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <Battery className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Hybrid Technology</h3>
              <p className="text-gray-600">
                Seamlessly switch between grid and renewable energy sources for optimal efficiency.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Protection</h3>
              <p className="text-gray-600">
                Advanced safety features ensure protection for both your vehicle and the charging system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your EV Charging?</h2>
          <p className="text-xl mb-8">
            Contact us today to learn more about our innovative charging solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;