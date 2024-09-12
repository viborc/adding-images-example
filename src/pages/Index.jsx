import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <h1 className="text-5xl font-bold mb-6">Revolutionize Your Workflow</h1>
                <p className="text-xl mb-8">Streamline your business processes and boost productivity with our cutting-edge SaaS solution.</p>
                <Button size="lg" className="text-lg px-8 py-6">Get Started</Button>
              </div>
              <div className="md:w-1/2 flex flex-col items-center space-y-4">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Pale_Blue_Dot.png/442px-Pale_Blue_Dot.png" 
                  alt="Pale Blue Dot"
                  className="w-full max-w-md h-auto rounded-lg shadow-lg mb-4"
                />
                <img 
                  src="/c-64-close-up.jpg.jpeg" 
                  alt="C-64 Close Up"
                  className="w-full max-w-md h-auto rounded-lg shadow-lg mb-4"
                />
                <img 
                  src="data:image/png;base64,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"
                  alt="Additional Image"
                  className="w-full max-w-md h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Automated Workflows', 'Real-time Analytics', 'Seamless Integration'].map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{feature}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Basic', price: '$29', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
                { name: 'Pro', price: '$79', features: ['Everything in Basic', 'Feature 4', 'Feature 5', 'Feature 6'] },
                { name: 'Enterprise', price: 'Custom', features: ['Everything in Pro', 'Feature 7', 'Feature 8', 'Priority Support'] }
              ].map((plan, index) => (
                <Card key={index} className={index === 1 ? 'border-blue-500 border-2' : ''}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <p className="text-3xl font-bold">{plan.price}</p>
                    {index === 1 && <p className="text-blue-500 font-semibold">Most Popular</p>}
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center">
                          <CheckCircle className="text-green-500 mr-2" size={20} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6">Choose Plan</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers and take your productivity to the next level.</p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">Start Your Free Trial</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;