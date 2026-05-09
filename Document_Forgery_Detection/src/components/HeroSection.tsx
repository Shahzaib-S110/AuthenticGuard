import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Upload, Shield, Scan } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-primary/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan/10 rounded-full blur-[120px]" />

      <div className="relative container mx-auto px-4 pt-24 pb-16">

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT CONTENT */}
          <div
            className="flex-1 text-center lg:text-left"
            style={{ animation: "fade-in-up 0.6s ease-out forwards" }}
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                AuthenticGuard • Document Forensics
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Detect Document{" "}
              <span className="text-gradient-primary">Forgery</span>{" "}
              in Seconds
            </h1>

            {/* Subtitle */}
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              AuthenticGuard analyzes pixel-level inconsistencies, compression artifacts, and structural anomalies
              to detect tampered documents in real time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <Button variant="hero" size="lg" asChild>
                <Link to="/analyze" className="gap-2">
                  <Upload className="h-5 w-5" />
                  Start Secure Scan
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Learn How It Works
              </Button>

            </div>

            {/* Trust Line */}
            <p className="text-xs text-muted-foreground mt-6">
              • Built for document security • Trusted forensic analysis
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div
            className="flex-1 flex justify-center"
            style={{ animation: "fade-in-up 0.8s ease-out forwards" }}
          >
            <div className="relative">

              {/* Glow Card */}
              <div className="glass-card p-8 glow-primary relative">

                <img
                  src={heroIllustration}
                  alt="Document scanning visualization"
                  className="w-full max-w-md"
                />

                {/* Scan Line */}
                <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                  <div className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent animate-scan opacity-70" />
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;