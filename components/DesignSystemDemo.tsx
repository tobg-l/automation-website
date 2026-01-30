"use client";

/**
 * Demo component showcasing the design system utility classes
 * - glass-card: Backdrop blur effect
 * - glow-effect: Subtle blue/cyan glow
 * - text-gradient: White to gray gradient text
 */
export default function DesignSystemDemo() {
  return (
    <div className="space-y-8 p-8">
      {/* Glass Card Example */}
      <div className="glass-card rounded-lg p-6 max-w-md">
        <h3 className="text-h3 font-display mb-4 text-foreground-white">
          Glass Card Effect
        </h3>
        <p className="text-body text-foreground-light">
          This card uses the glass-card utility class with backdrop blur and
          semi-transparent background.
        </p>
      </div>

      {/* Glow Effect Example */}
      <div className="glow-effect rounded-lg p-6 max-w-md bg-black-010 border border-accent-blue-20">
        <h3 className="text-h3 font-display mb-4 text-foreground-white">
          Glow Effect
        </h3>
        <p className="text-body text-foreground-light">
          This card demonstrates the glow-effect utility with subtle blue/cyan
          shadows.
        </p>
      </div>

      {/* Text Gradient Example */}
      <div className="max-w-md">
        <h3 className="text-h2 font-display mb-4 text-gradient">
          Text Gradient
        </h3>
        <p className="text-body text-foreground-light">
          The heading above uses the text-gradient utility class for a smooth
          white to gray gradient effect.
        </p>
      </div>

      {/* Combined Example */}
      <div className="glass-card glow-effect rounded-lg p-8 max-w-lg">
        <h3 className="text-h2 font-display mb-4 text-gradient">
          Combined Effects
        </h3>
        <p className="text-body text-foreground-light mb-4">
          This card combines glass-card and glow-effect utilities for a modern,
          polished look.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-accent-blue rounded-lg text-foreground-white hover:bg-accent-blue-80 transition-colors">
            Primary
          </button>
          <button className="px-6 py-3 bg-accent-cyan rounded-lg text-foreground-white hover:bg-accent-cyan-80 transition-colors">
            Secondary
          </button>
        </div>
      </div>
    </div>
  );
}

