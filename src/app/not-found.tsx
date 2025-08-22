import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { Crown } from "lucide-react";

export default function NotFound() {
  return (
    <Section className="min-h-screen flex items-center">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <Crown className="w-16 h-16 text-accent-primary mx-auto mb-8" />
          <h1 className="mafia-heading text-6xl text-accent-primary mb-6">404</h1>
          <h2 className="mafia-heading text-2xl text-accent-text mb-4">
            Page Non Trouvée
          </h2>
          <p className="elegant-text text-lg text-accent-text-light mb-8">
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
          <Link
            href="/"
            className="premium-shadow inline-flex items-center gap-3 bg-gradient-to-r from-accent-primary to-accent-primary-light text-white px-8 py-4 text-lg font-bold rounded-lg hover:scale-105 transition-all duration-300 tracking-widest uppercase"
          >
            <Crown className="w-5 h-5" />
            RETOUR À L&apos;ACCUEIL
          </Link>
        </div>
      </Container>
    </Section>
  );
}