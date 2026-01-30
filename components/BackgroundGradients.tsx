export default function BackgroundGradients() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
    >
      {/* LAYER 2: Radial overlay at top - glow from above */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(20, 20, 20, 0.8) 0%, transparent 100%)",
        }}
      />
      
      {/* LAYER 3: Bottom fade for footer area */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 100% 30% at 50% 100%, rgba(15, 15, 15, 0.6) 0%, transparent 100%)",
        }}
      />
      
      {/* Accent gradients - Dark blue gradient - top right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-40"
        style={{
          background: "radial-gradient(circle at top right, rgba(26, 35, 50, 0.15) 0%, transparent 70%)",
        }}
      />
      
      {/* Accent gradients - Cyan gradient - bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-30"
        style={{
          background: "radial-gradient(circle at bottom left, rgba(26, 51, 56, 0.12) 0%, transparent 70%)",
        }}
      />
      
      {/* Accent gradients - Dark blue gradient - center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(26, 35, 50, 0.1) 0%, transparent 70%)",
        }}
      />
      
      {/* Accent gradients - Cyan gradient - top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] opacity-25"
        style={{
          background: "radial-gradient(circle at top, rgba(26, 51, 56, 0.1) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

