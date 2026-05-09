import { Shield, Mail, Github, HelpCircle } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-12 mt-20 relative overflow-hidden">

    {/* glow */}
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/10 blur-3xl rounded-full opacity-30" />

    <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">

      {/* Brand */}
      <div>
        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
          <Shield className="h-5 w-5 text-primary" />
          <span className="font-display font-semibold text-foreground text-lg">
            Authentic<span className="text-primary">Guard</span>
          </span>
        </div>
        <p className="text-muted-foreground text-sm max-w-xs mx-auto md:mx-0">
          Guarding the truth in every document with AI-powered forensic analysis.
        </p>
      </div>

      {/* Contact */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Contact Us</h3>

        <a
          href="mailto:your-email@gmail.com"
          className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition mb-2"
        >
          <Mail className="h-4 w-4" />
          shahzaib110cci@gmail.com
        </a>

        <a
          href="https://github.com/Shahzaib-S110"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition"
        >
          <Github className="h-4 w-4" />
          GitHub Profile
        </a>
      </div>

      {/* Help */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Help</h3>

        <a
          href="#about"
          className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition mb-2"
        >
          <HelpCircle className="h-4 w-4" />
          How it Works
        </a>

        <a
          href="#"
          className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition"
        >
          <HelpCircle className="h-4 w-4" />
          Support / FAQ
        </a>
      </div>

    </div>

    {/* Bottom */}
    <div className="mt-10 border-t border-border/40 pt-4 text-center">
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} AuthenticGuard. All rights reserved.
      </p>
    </div>

  </footer>
);

export default Footer;