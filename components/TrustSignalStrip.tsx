const trustSignals = [
  "Internal operations",
  "HR workflows",
  "Data extraction",
  "Reporting systems",
  "Messaging automations",
];

const scrollContent = trustSignals.join(" • ");

export default function TrustSignalStrip() {
  return (
    <section
      className="relative overflow-hidden border-t border-b border-white/5 trust-signal-strip"
      style={{
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <div className="flex whitespace-nowrap trust-signal-content">
        {/* First set */}
        <div className="flex items-center">
          <span
            className="text-foreground-medium"
            style={{
              fontSize: "0.875rem",
              letterSpacing: "0.05em",
              color: "#6b6b6b",
              paddingRight: "4rem",
            }}
          >
            {scrollContent}
          </span>
        </div>

        {/* Duplicate for seamless loop */}
        <div className="flex items-center">
          <span
            className="text-foreground-medium"
            style={{
              fontSize: "0.875rem",
              letterSpacing: "0.05em",
              color: "#6b6b6b",
              paddingRight: "4rem",
            }}
          >
            {scrollContent}
          </span>
        </div>
      </div>
    </section>
  );
}

