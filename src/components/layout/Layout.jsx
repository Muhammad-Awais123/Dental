import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingWhatsApp from '../common/FloatingWhatsApp';
import ScrollToTop from '../common/ScrollToTop';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-charcoal">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
