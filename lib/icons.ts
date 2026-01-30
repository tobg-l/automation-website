// Lazy-loaded icon exports to reduce bundle size
// Only import icons when needed

export const lazyIcons = {
  // Navigation icons
  Menu: () => import("lucide-react").then((mod) => ({ default: mod.Menu })),
  X: () => import("lucide-react").then((mod) => ({ default: mod.X })),
  ChevronDown: () => import("lucide-react").then((mod) => ({ default: mod.ChevronDown })),
  
  // UI icons
  ArrowRight: () => import("lucide-react").then((mod) => ({ default: mod.ArrowRight })),
  Linkedin: () => import("lucide-react").then((mod) => ({ default: mod.Linkedin })),
  
  // Category icons
  BarChart: () => import("lucide-react").then((mod) => ({ default: mod.BarChart })),
  Users: () => import("lucide-react").then((mod) => ({ default: mod.Users })),
  FileText: () => import("lucide-react").then((mod) => ({ default: mod.FileText })),
  MessageSquare: () => import("lucide-react").then((mod) => ({ default: mod.MessageSquare })),
  Zap: () => import("lucide-react").then((mod) => ({ default: mod.Zap })),
  
  // Process icons
  Search: () => import("lucide-react").then((mod) => ({ default: mod.Search })),
  Code: () => import("lucide-react").then((mod) => ({ default: mod.Code })),
  Settings: () => import("lucide-react").then((mod) => ({ default: mod.Settings })),
  
  // Principle icons
  Minimize: () => import("lucide-react").then((mod) => ({ default: mod.Minimize })),
  Eye: () => import("lucide-react").then((mod) => ({ default: mod.Eye })),
  Shield: () => import("lucide-react").then((mod) => ({ default: mod.Shield })),
  BookOpen: () => import("lucide-react").then((mod) => ({ default: mod.BookOpen })),
  
  // Case study icons
  AlertCircle: () => import("lucide-react").then((mod) => ({ default: mod.AlertCircle })),
  Layout: () => import("lucide-react").then((mod) => ({ default: mod.Layout })),
  Workflow: () => import("lucide-react").then((mod) => ({ default: mod.Workflow })),
  TrendingUp: () => import("lucide-react").then((mod) => ({ default: mod.TrendingUp })),
  Info: () => import("lucide-react").then((mod) => ({ default: mod.Info })),
  Check: () => import("lucide-react").then((mod) => ({ default: mod.Check })),
  Minus: () => import("lucide-react").then((mod) => ({ default: mod.Minus })),
  
  // Reference automation icons
  Sparkles: () => import("lucide-react").then((mod) => ({ default: mod.Sparkles })),
  Mail: () => import("lucide-react").then((mod) => ({ default: mod.Mail })),
  Database: () => import("lucide-react").then((mod) => ({ default: mod.Database })),
  Calendar: () => import("lucide-react").then((mod) => ({ default: mod.Calendar })),
};

