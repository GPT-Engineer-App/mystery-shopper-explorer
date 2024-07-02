import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Discover the World of Mystery Shopping</h1>
          <p className="mt-4 text-xl">Uncover hidden experiences and get rewarded for your insights.</p>
          <Button className="mt-8" onClick={() => navigate('/register')}>Register Now</Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">What is Mystery Shopping?</h2>
        <p className="mt-4 text-lg">Mystery shopping is a method used by companies to measure the quality of service, compliance with regulations, or to gather specific information about products and services.</p>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Step 1</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Sign up and create your profile.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Step 2</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Receive assignments and complete them.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Step 3</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Submit your reports and get paid.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">What Our Shoppers Say</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <nav className="mb-4">
            <a href="/" className="mx-2">Home</a>
            <a href="/about" className="mx-2">About</a>
            <a href="/contact" className="mx-2">Contact</a>
          </nav>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;