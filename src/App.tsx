import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Sofa, 
  PenTool as Tools, 
  Palette, 
  Star, 
  Phone, 
  Clock, 
  MapPin, 
  Home, 
  ArrowRight, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Linkedin,
  ChevronDown,
  Shield,
  Award,
  Heart,
  MessageCircle,
  Send
} from 'lucide-react';

interface TestimonialProps {
  customerName: string;
  testimonialText: string;
  location: string;
  image: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const NavLink: React.FC<{ 
  href: string; 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
}> = ({ href, children, className = "", onClick }) => (
  <a 
    href={href} 
    className={`text-lg text-gray-200 hover:text-white transition-colors ${className}`}
    onClick={(e) => {
      // Smooth scroll to the section
      e.preventDefault();
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
      // Call the onClick handler if provided
      onClick?.();
    }}
  >
    {children}
  </a>
);

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, image }) => (
  <div className="service-card group relative bg-white rounded-2xl overflow-hidden">
    <div className="absolute inset-0">
      <img src={image} alt={title} className="w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
    </div>
    <div className="relative p-6 md:p-10 flex flex-col h-full">
      <div className="text-amber-700 mb-6 transform group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-700 transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
      <div className="mt-8">
        <button className="text-amber-700 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
          Explore Service <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

const ValueProposition: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
    <div className="text-amber-600 mb-4 transform hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Testimonial: React.FC<TestimonialProps> = ({ customerName, testimonialText, location, image }) => (
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
    <div className="md:w-1/3">
      <img src={image} alt={customerName} className="w-full h-full object-cover" />
    </div>
    <div className="md:w-2/3 p-10">
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, index) => (
          <Star key={index} className="w-5 h-5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-gray-600 mb-8 italic leading-relaxed text-lg">"{testimonialText}"</p>
      <div>
        <p className="font-bold text-xl text-gray-900">{customerName}</p>
        <p className="text-amber-600">{location}</p>
      </div>
    </div>
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    setIsMenuOpen(false); // Close menu when WhatsApp is clicked
    window.open('https://wa.me/15551234567?text=Hi%20Niched,%20I%20would%20like%20to%20discuss%20a%20project', '_blank');
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const valuePropositions = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Lifetime Guarantee",
      description: "Every piece we craft comes with our commitment to excellence, backed by a lifetime guarantee on craftsmanship."
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Master Artisans",
      description: "Our team consists of certified master craftsmen with decades of experience in fine furniture making."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Personalized Care",
      description: "From design to delivery, enjoy a fully personalized experience tailored to your unique preferences."
    }
  ];

  const workshopServices = [
    {
      title: "Bespoke Sofa Crafting",
      description: "Experience the pinnacle of custom furniture with our signature sofa crafting service. Each piece is meticulously handcrafted using time-honored techniques and premium materials, ensuring a legacy piece that will be cherished for generations.",
      icon: <Sofa className="w-12 h-12" />,
      image: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&q=80"
    },
    {
      title: "Heritage Restoration",
      description: "Revive the splendor of cherished heirlooms through our masterful restoration service. Our artisans combine traditional craftsmanship with modern techniques to breathe new life into antique and vintage pieces while preserving their historical integrity.",
      icon: <Tools className="w-12 h-12" />,
      image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80"
    },
    {
      title: "Atelier Design Service",
      description: "Transform your vision into reality with our comprehensive design service. Our master craftsmen and designers collaborate with you to create bespoke pieces that perfectly balance aesthetics, comfort, and functionality.",
      icon: <Palette className="w-12 h-12" />,
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80"
    },
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&q=80",
      caption: "Contemporary Elegance"
    },
    {
      url: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80",
      caption: "Classic Restoration"
    },
    {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80",
      caption: "Modern Comfort"
    },
    {
      url: "https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?auto=format&fit=crop&q=80",
      caption: "Artisanal Detail"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black py-4' : 'bg-gradient-to-b from-black/70 to-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-white flex items-center gap-2">
              <Sofa className="w-8 h-8" />
              <span className="font-serif">NICHED</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#process">Process</NavLink>
              <NavLink href="#gallery">Gallery</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-all hover:scale-105 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Us
              </button>
            </div>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-12">
            <NavLink href="#services" className="mobile-nav-link" onClick={handleMenuClose}>Services</NavLink>
            <NavLink href="#process" className="mobile-nav-link" onClick={handleMenuClose}>Process</NavLink>
            <NavLink href="#gallery" className="mobile-nav-link" onClick={handleMenuClose}>Gallery</NavLink>
            <NavLink href="#contact" className="mobile-nav-link" onClick={handleMenuClose}>Contact</NavLink>
            <button 
              onClick={handleWhatsAppClick}
              className="mt-8 bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-all hover:scale-105 flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Contact Us on WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative min-h-screen flex flex-col">
          <div className="flex-grow flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full py-20">
              <div className="max-w-3xl">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 text-white text-shadow text-balance leading-tight">
                  Crafting Your Perfect <span className="text-amber-500">Living Space</span>
                </h1>
                <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed max-w-2xl text-balance">
                  Transform your home with our bespoke sofa craftsmanship. We bring over two decades of artisanal expertise directly to your doorstep, creating pieces that perfectly blend comfort with your unique style.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <button 
                    onClick={handleWhatsAppClick}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 text-lg transition-all hover:gap-4 hover:scale-105"
                  >
                    Start Your Journey
                    <MessageCircle className="w-5 h-5" />
                  </button>
                  <button className="border-2 border-white hover:bg-white hover:text-amber-600 text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 text-lg transition-all hover:gap-4">
                    View Collection
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-12 text-center">
            <ChevronDown className="w-6 h-6 text-white mx-auto scroll-indicator" />
          </div>
        </div>
      </header>

      {/* Value Propositions */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {valuePropositions.map((prop, index) => (
              <ValueProposition key={index} {...prop} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Masterful Craftsmanship</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              From bespoke creations to loving restorations, our workshop brings decades of expertise to every project. Whether in our atelier or at your residence, we ensure each piece receives the attention it deserves.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {workshopServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="mt-20 bg-amber-50 rounded-3xl p-8 md:p-12 border border-amber-100">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <Home className="w-16 h-16 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Exclusive In-Home Service</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  Experience our premium service in the comfort of your home. Our mobile atelier brings our expertise directly to you, offering consultations, repairs, and custom fittings without compromising on quality or convenience.
                </p>
                <button 
                  onClick={handleWhatsAppClick}
                  className="text-amber-700 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
                >
                  Schedule In-Home Service
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 md:py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Craft Process</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Every masterpiece begins with a vision. Our meticulous process ensures that your piece is crafted to perfection, combining traditional techniques with modern innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-20">
            <div className="space-y-16">
              {[
                {
                  number: "01",
                  title: "Personal Consultation",
                  description: "We begin with an in-depth discussion of your vision, preferences, and space requirements. Our experts guide you through material selections and design possibilities, ensuring every detail aligns with your lifestyle."
                },
                {
                  number: "02",
                  title: "Custom Design",
                  description: "Our designers create detailed sketches and 3D visualizations, working closely with you to perfect every aspect. We consider your space, lifestyle, and aesthetic preferences to create a piece that's uniquely yours."
                },
                {
                  number: "03",
                  title: "Expert Crafting",
                  description: "Our master artisans bring your design to life using time-honored techniques and premium materials. Each piece is handcrafted with meticulous attention to detail, ensuring exceptional quality and durability."
                },
                {
                  number: "04",
                  title: "White Glove Delivery",
                  description: "Your finished piece undergoes rigorous quality checks before our white-glove delivery service ensures it reaches you in perfect condition. We handle everything from placement to final adjustments."
                }
              ].map((step, index) => (
                <div key={index} className="process-step">
                  <div className="pl-12">
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative hidden md:block">
              <div className="sticky top-32">
                <img 
                  src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80" 
                  alt="Crafting Process"
                  className="w-full h-[600px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">Our Creations</h2>
          <div className="image-gallery">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image.url} alt={image.caption} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-lg font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">Client Stories</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Testimonial 
              customerName="Elizabeth Montgomery"
              location="Victorian Heritage Home"
              testimonialText="The attention to detail in preserving the original character of my grandmother's settee while updating its comfort is remarkable. Niched's craftsmen showed incredible respect for the piece's history."
              image="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
            />
            <Testimonial 
              customerName="James Richardson"
              location="Modern City Penthouse"
              testimonialText="Their ability to create a custom sectional that perfectly fits our unusual space while maintaining exceptional comfort and style exceeded our expectations. True masters of their craft."
              image="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-32 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Create Something Beautiful</h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Ready to transform your living space? Our master craftsmen are just a message away. Reach out through WhatsApp for a personalized consultation about your project.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-2xl transition-all hover:scale-105 flex items-center gap-4 mx-auto text-xl font-semibold"
            >
              <MessageCircle className="w-8 h-8" />
              Chat with Us on WhatsApp
            </button>
            <p className="mt-8 text-gray-500">
              Available Monday - Saturday, 9AM - 6PM
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-8 md:mb-0">
              <Sofa className="w-8 h-8" />
              <span className="text-2xl font-bold font-serif">NICHED</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">Crafting Excellence Since 2000</p>
              <p className="mt-2 text-gray-600">© 2025 Niched Sofa Workshop. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;