export const metadata = {
  title: "About - Elite Dental Clinic",
};

import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { Crown, Shield, Star, Clock, Users, Phone, MapPin } from "lucide-react";
import type { ReactElement } from "react";

const stats = [
  { number: "2016", label: "Année de Fondation", icon: Crown },
  { number: "3000+", label: "Patients Satisfaits", icon: Users },
  { number: "98%", label: "Taux de Réussite", icon: Star },
  { number: "25+", label: "Pays de Formation", icon: Clock },
];

const values = [
  {
    title: "SOINS PERSONNALISÉS",
    description: "Chaque patient reçoit un traitement adapté à ses besoins spécifiques.",
    icon: Shield,
  },
  {
    title: "EXPERTISE RECONNUE",
    description: "Formation continue et technologies de pointe pour des résultats optimaux.",
    icon: Crown,
  },
  {
    title: "ÉQUIPEMENTS MODERNES", 
    description: "Matériel de dernière génération pour votre confort et sécurité.",
    icon: Star,
  },
];

export default function AboutPage(): ReactElement {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative min-h-screen bg-background pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background-secondary via-background to-accent-burgundy-dark/10" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
            <Reveal>
              <div className="space-y-8">
                <div className="mb-8">
                  <span className="luxury-card px-6 py-3 text-accent-primary bg-white/10 text-sm font-semibold tracking-widest uppercase">
                    Excellence Dentaire
                  </span>
                </div>
                
                <h1 className="mafia-heading text-6xl sm:text-7xl lg:text-8xl text-white leading-[0.9] mb-8">
                  <span className="block">ELITE</span>
                  <span className="block text-accent-primary">DENTAL</span>
                </h1>
                
                <p className="text-2xl sm:text-3xl text-white/90 max-w-3xl leading-relaxed font-light">
                  Depuis 2016, nous redéfinissons les soins dentaires à Alger. 
                  <span className="text-accent-primary-light font-medium"> Une expertise reconnue au service de votre sourire.</span>
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="relative">
                <div className="luxury-card rounded-3xl overflow-hidden aspect-[4/5] relative group shadow-2xl"
                     style={{
                       backgroundImage: 'url(/herroo.jpg)',
                       backgroundSize: 'cover',
                       backgroundPosition: 'center',
                       backgroundRepeat: 'no-repeat'
                     }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/30 via-transparent to-black/50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="mafia-heading text-3xl text-white mb-2">Excellence Clinique</h3>
                    <p className="text-white/90 text-lg">Soins dentaires de prestige</p>
                  </div>
                  <div className="absolute top-8 right-8">
                    <Crown className="w-10 h-10 text-accent-primary" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="relative bg-background-secondary">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-burgundy/5 via-transparent to-accent-gold/5" />
        
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 150}>
                <div className="text-center group">
                  <div className="luxury-card p-8 rounded-xl border-2 border-transparent hover:border-accent-primary/30 transition-all duration-500">
                    <stat.icon className="w-12 h-12 text-accent-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="mafia-heading text-4xl lg:text-5xl text-white mb-2 group-hover:text-accent-primary transition-colors duration-300">
                      {stat.number}
                    </div>
                    <p className="text-text-muted font-medium tracking-wide uppercase text-sm">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Story Section */}
      <Section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="space-y-8">
                <div>
                  <h2 className="mafia-heading text-5xl lg:text-6xl text-accent-primary mb-6">
                    L&apos;Art du 
                    <span className="text-accent-primary-light block">Sourire</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-primary-light rounded-full mb-8" />
                </div>
                
                <div className="space-y-6 text-lg text-white/85 leading-relaxed">
                  <p>
                    Au cœur d&apos;Alger, Elite Dental Clinic s&apos;est imposée comme une référence 
                    en soins dentaires d&apos;excellence depuis 2016.
                  </p>
                  <p>
                    Nous ne sommes pas simplement une clinique dentaire. Nous sommes les 
                    artisans de votre sourire, les gardiens de votre santé bucco-dentaire, 
                    les partenaires de confiance de votre bien-être.
                  </p>
                  <p className="text-accent-primary-light font-medium">
                    Chaque soin est personnalisé. Chaque patient, une priorité absolue.
                  </p>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="space-y-8">
                {/* Doctor Card */}
                <div className="luxury-card rounded-2xl overflow-hidden relative group shadow-xl">
                  <div className="aspect-[4/3] relative"
                       style={{
                         backgroundImage: 'url(/dr.jpg)',
                         backgroundSize: 'cover',
                         backgroundPosition: 'center top',
                         backgroundRepeat: 'no-repeat'
                       }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-transparent to-black/50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="mafia-heading text-2xl text-white mb-2">Dr. Raout Ladjali</h3>
                      <p className="text-accent-primary-light text-lg font-medium mb-2">Chirurgien-Dentiste</p>
                      <p className="text-white/90 text-sm mb-4">Expert en soins dentaires d&apos;excellence</p>
                      <div className="flex items-center text-white/80">
                        <Phone className="w-4 h-4 mr-2 text-accent-primary" />
                        <span className="text-sm font-medium">0553 54 72 42</span>
                      </div>
                    </div>
                    <div className="absolute top-6 right-6">
                      <Crown className="w-8 h-8 text-accent-primary" />
                    </div>
                  </div>
                </div>

                {/* Google Maps Card */}
                <div className="luxury-card rounded-2xl overflow-hidden relative group shadow-xl bg-gradient-to-br from-accent-gold/20 to-accent-burgundy-dark/30 border border-accent-gold/30">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-6 h-6 text-accent-gold mr-3" />
                      <h3 className="mafia-heading text-xl text-accent-gold">Notre Localisation</h3>
                    </div>
                    <div className="aspect-video rounded-lg overflow-hidden mb-4 border border-accent-gold/20">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.9898756!2d3.0885!3d36.7538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYuNzUzOCwgMy4wODg1!5e0!3m2!1sen!2sdz!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="filter saturate-150 contrast-110"
                      />
                    </div>
                    <a 
                      href="https://maps.app.goo.gl/mbUWiiDYRgwHDbCe7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent-gold hover:text-accent-primary transition-colors duration-300 text-sm font-medium"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Voir sur Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section className="relative bg-background-secondary">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-smoke/10 via-transparent to-accent-steel/10" />
        
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="mafia-heading text-5xl lg:text-6xl text-accent-primary mb-6">
                Nos <span className="text-accent-primary-light">Valeurs</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Les piliers inébranlables de notre excellence
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <Reveal key={value.title} delay={idx * 200}>
                <div className="luxury-card p-8 rounded-xl group hover:scale-105 transition-all duration-500 border-2 border-transparent hover:border-accent-primary/30">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 luxury-card rounded-full flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors duration-300">
                      <value.icon className="w-8 h-8 text-accent-primary" />
                    </div>
                    <h3 className="mafia-heading text-xl text-accent-primary mb-4 group-hover:text-accent-primary-light transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-burgundy-dark/20 via-background to-accent-gold/5" />
        
        <Container>
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="mafia-heading text-5xl lg:text-6xl text-accent-primary mb-8">
                Rejoignez nos 
                <span className="text-accent-primary-light block">Patients Satisfaits</span>
              </h2>
              <p className="text-xl text-white/85 mb-12 max-w-2xl mx-auto">
                Découvrez pourquoi plus de 3000 patients nous font confiance 
                pour leurs soins dentaires les plus importants.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="/contact" 
                  className="premium-shadow inline-flex items-center justify-center gap-3 bg-gradient-to-r from-accent-primary to-accent-primary-light text-white px-12 py-5 text-lg font-bold rounded-lg hover:scale-105 transition-all duration-300 tracking-widest uppercase"
                >
                  <Crown className="w-5 h-5" />
                  PRENDRE RENDEZ-VOUS
                </a>
                <a 
                  href="/pricing" 
                  className="luxury-card border-accent-primary/40 text-white hover:bg-accent-primary/10 hover:border-accent-primary/60 inline-flex items-center justify-center px-12 py-5 text-lg font-medium rounded-lg transition-all duration-300 tracking-wide"
                >
                  VOIR NOS TARIFS
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}


