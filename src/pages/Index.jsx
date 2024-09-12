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
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Revolutionize Your Workflow</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Streamline your business processes and boost productivity with our cutting-edge SaaS solution.</p>
            <Button size="lg" className="text-lg px-8 py-6">Get Started</Button>
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