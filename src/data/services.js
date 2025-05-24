import { Globe, Code, ShoppingCart, Smartphone } from 'lucide-react';

export const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Sitios web modernos y responsivos con las últimas tecnologías",
    features: ["React/Next.js", "Vue.js/Nuxt.js", "TypeScript", "Responsive Design"]
  },
  {
    icon: Code,
    title: "Sistemas Web",
    description: "Aplicaciones web complejas y sistemas de gestión empresarial",
    features: ["APIs REST", "Bases de datos", "Autenticación", "Dashboards"]
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Tiendas online completas con pasarelas de pago integradas",
    features: ["Shopify", "WooCommerce", "Stripe/PayPal", "Inventario"]
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Aplicaciones móviles nativas e híbridas para iOS y Android",
    features: ["React Native", "Flutter", "Ionic", "PWA"]
  }
];