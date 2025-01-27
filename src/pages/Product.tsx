import React from 'react';
import { Check, Battery, Zap, Leaf, Shield, Clock } from 'lucide-react';

const Product = () => {
  return (
    <div>
      {/* Product Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">Hybrid EV Charger Pro</h1>
              <p className="text-xl mb-8">
                The next generation of electric vehicle charging technology, combining speed, efficiency, and sustainability.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="h-6 w-6 text-green-400 mr-2" />
                  Up to 150kW DC fast charging
                </li>
                <li className="flex items-center">
                  <Check className="h-6 w-6 text-green-400 mr-2" />
                  Hybrid power source integration
                </li>
                <li className="flex items-center">
                  <Check className="h-6 w-6 text-green-400 mr-2" />
                  Smart grid compatibility
                </li>
                <li className="flex items-center">
                  <Check className="h-6 w-6 text-green-400 mr-2" />
                  Advanced safety features
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1697403025580-5e44b8411f5f?auto=format&fit=crop&q=80"
                alt="Hybrid EV Charger"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <Battery className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dual Charging Mode</h3>
              <p className="text-gray-600">
                Switch seamlessly between AC and DC charging based on your vehicle's requirements.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <Leaf className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">
                Integrates with renewable energy sources for sustainable charging.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <Shield className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Protection</h3>
              <p className="text-gray-600">
                Advanced safety features protect both vehicle and charging system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Charging Capabilities</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-green-600 mr-2" />
                  DC Output: Up to 150kW
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-2" />
                  Charging Time: 20-40 minutes (80% charge)
                </li>
                <li className="flex items-center">
                  <Battery className="h-5 w-5 text-green-600 mr-2" />
                  Compatible with all major EV brands
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Smart Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  Remote monitoring and control
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  Over-the-air updates
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  Load balancing capability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;