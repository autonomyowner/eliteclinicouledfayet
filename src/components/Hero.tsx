"use client";

import Link from "next/link";
import { type ReactElement } from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";

export default function Hero(): ReactElement {

  return (
    <section className="relative isolate overflow-hidden -mt-20">
      <div 
        className="relative min-h-screen w-full flex items-center justify-center pt-20" 
        aria-label="Clinique dentaire moderne"
        style={{
          backgroundImage: 'url(/heroima.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        
        {/* Enhanced overlay with gold gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-accent-gold/10 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-accent-gold/20 via-transparent to-black/30" />
        
        <Container>
          <motion.div 
            className="relative z-10 max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-8"
            >
              <span className="inline-block px-6 py-3 luxury-card text-accent-primary text-sm font-semibold tracking-widest uppercase">
                ELITE DENTAL CLINIC
              </span>
            </motion.div>
            
            <motion.h1 
              className="hero-heading text-5xl sm:text-7xl lg:text-8xl text-accent-text leading-[0.85] mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="block relative">
                ELITE
                <div className="absolute -inset-2 bg-gradient-to-r from-accent-primary/5 via-transparent to-accent-primary/5 blur-xl" />
              </span>
              <span className="block golden-accent text-4xl sm:text-6xl lg:text-7xl font-medium italic mt-2">
                Dental
              </span>
              <span className="block text-3xl sm:text-5xl lg:text-6xl font-normal text-accent-text-light mt-1">
                Excellence
              </span>
            </motion.h1>
            
            <motion.p 
              className="elegant-text text-xl sm:text-2xl text-accent-text-light max-w-3xl leading-relaxed mb-14"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Cabinet dentaire d&apos;exception offrant des soins de luxe dans un cadre raffiné à Alger.
              <br className="hidden sm:block" />
              <span className="golden-accent font-medium">L&apos;Excellence Dentaire à l&apos;Algérienne</span>
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <Button variant="gold" size="lg" asChild className="premium-shadow">
                <Link href="/contact" className="text-lg px-10 py-5 font-semibold tracking-wide">
                  PRENDRE RENDEZ-VOUS
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="luxury-card border-accent-primary/40 text-accent-text hover:bg-accent-primary/10 hover:border-accent-primary/60 transition-all duration-300">
                <Link href="/services" className="text-lg px-10 py-5 font-medium tracking-wide">
                  DÉCOUVRIR NOS SOINS
                </Link>
              </Button>
            </motion.div>
            
            {/* Enhanced call to action */}
            <motion.div
              className="mt-20 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <p className="text-accent-text-light text-sm tracking-[0.2em] uppercase font-medium">
                Découvrir nos soins dentaires
              </p>
              <motion.div
                className="w-px h-20 bg-gradient-to-b from-accent-primary via-accent-primary/50 to-transparent mx-auto mt-6 relative"
                animate={{ 
                  scaleY: [1, 0.3, 1],
                  opacity: [0.8, 0.4, 0.8]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}


