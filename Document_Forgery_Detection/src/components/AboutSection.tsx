import { FileSearch, Layers, Grid3X3, Shield } from "lucide-react";

const techniques = [
  {
    icon: FileSearch,
    title: "Error Level Analysis",
    description:
      "Uncovers hidden compression inconsistencies by analyzing JPEG artifacts across regions, revealing signs of manipulation invisible to the human eye.",
  },
  {
    icon: Layers,
    title: "Edge Detection",
    description:
      "Detects unnatural boundaries and splicing artifacts using advanced edge operators to expose hidden edits and structural anomalies.",
  },
  {
    icon: Grid3X3,
    title: "Texture Analysis",
    description:
      "Examines surface patterns and noise distributions to identify inconsistencies in texture that indicate possible tampering.",
  },
  {
    icon: Shield,
    title: "Combined Verdict",
    description:
      "Integrates all forensic signals using intelligent scoring to generate a reliable and comprehensive tampering assessment.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/20 blur-3xl rounded-full opacity-30" />

      <div className="relative container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            How It <span className="text-gradient-primary">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            AuthenticGuard combines multiple AI-powered forensic techniques to detect even the most sophisticated document tampering attempts with precision.
          </p>
        </div>

        {/* Techniques */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techniques.map((tech, index) => (
            <div
              key={tech.title}
              className="glass-card p-6 border border-transparent hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group hover:-translate-y-2"
              style={{ animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <tech.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-display font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                {tech.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-20 glass-card p-8 md:p-12 relative overflow-hidden">

          {/* subtle glow */}
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/10 blur-3xl rounded-full" />

          <div className="grid md:grid-cols-2 gap-10 relative">

            {/* Left */}
            <div className="group">
              <h3 className="font-display font-bold text-2xl mb-4 text-foreground flex items-center gap-2">
                🛡️ What is Document Forgery?
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground transition-colors">
                Document forgery is the{" "}
                <span className="text-primary font-medium">
                  intentional manipulation or fabrication
                </span>{" "}
                of documents to deceive. This includes altering text, replacing images,
                forging signatures, or combining elements from multiple sources.
              </p>

              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                With the advancement of modern editing tools, forged documents can now appear{" "}
                <span className="text-primary font-medium">
                  nearly indistinguishable from authentic ones,
                </span>
                making manual inspection increasingly unreliable and insufficient for accurate verification.
              </p>
            </div>

            {/* Right */}
            <div className="group">
              <h3 className="font-display font-bold text-2xl mb-4 text-foreground flex items-center gap-2">
                Why Automated Detection?
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground transition-colors">
                Human inspection alone is often unreliable when dealing with sophisticated forgeries.{" "}
                <span className="text-primary font-medium">AuthenticGuard</span>{" "}
                analyzes subtle pixel-level artifacts, compression inconsistencies, and statistical anomalies that are invisible to the human eye.
              </p>

              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                Each detection technique targets different types of manipulation signatures, and when combined, they produce a highly accurate, robust, and reliable verification system.{" "}
                <span className="text-primary font-medium">
                  manipulation signatures, and when combined, they produce a highly accurate, robust, and reliable verification system
                </span>{" "}
                you can trust.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;