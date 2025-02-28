import React from 'react';
import { Users as Horseshoe, Calendar, MapPin, Phone, Mail, ChevronRight, Star, Users, Clock, Shield } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;