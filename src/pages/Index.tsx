import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Zap, Shield, BarChart3, Bot, Plug, Cloud,
  Check, Menu, X, ArrowRight, Mail, Phone, MapPin,
  Github, Twitter, Linkedin
} from "lucide-react";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const Section = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => {
  const { ref, visible } = useInView();
  return (
    <section id={id} ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </section>
  );
};

const features = [
  { icon: Bot, title: "IA Integrada", desc: "Automatiza tareas repetitivas y toma decisiones inteligentes con modelos de IA de última generación." },
  { icon: Plug, title: "Integraciones Nativas", desc: "Conecta con más de 200 herramientas y servicios que ya usas en tu día a día." },
  { icon: Shield, title: "Seguridad Avanzada", desc: "Encriptación de extremo a extremo, auditorías y cumplimiento normativo incluido." },
  { icon: BarChart3, title: "Analíticas en Tiempo Real", desc: "Dashboards interactivos con métricas clave para tomar decisiones basadas en datos." },
  { icon: Zap, title: "Rendimiento Ultra Rápido", desc: "Infraestructura optimizada para latencias mínimas y disponibilidad del 99.99%." },
  { icon: Cloud, title: "Cloud Nativo", desc: "Escalabilidad automática sin preocuparte por servidores ni mantenimiento." },
];

const plans = [
  {
    name: "Starter",
    price: "0",
    desc: "Para equipos que empiezan",
    features: ["Hasta 3 usuarios", "5 integraciones", "1 GB almacenamiento", "Soporte por email", "Analíticas básicas"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "49",
    desc: "Para negocios en crecimiento",
    features: ["Hasta 25 usuarios", "Integraciones ilimitadas", "50 GB almacenamiento", "Soporte prioritario", "IA avanzada", "API completa"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    desc: "Para grandes organizaciones",
    features: ["Usuarios ilimitados", "Integraciones ilimitadas", "Almacenamiento ilimitado", "SLA garantizado", "IA personalizada", "Onboarding dedicado"],
    highlighted: false,
  },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Características", href: "#features" },
    { label: "Precios", href: "#pricing" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg shadow-sm border-b border-border" : "bg-transparent"}`}>
        <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
          <a href="#" className="font-heading text-xl font-bold text-foreground tracking-tight">
            Jarvis<span className="text-primary">Connect</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
            ))}
            <Button size="sm" asChild><a href="#contact">Empezar gratis</a></Button>
          </div>
          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border px-4 pb-4 animate-fade-in-up">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
            ))}
            <Button size="sm" className="w-full mt-2" asChild><a href="#contact" onClick={() => setMenuOpen(false)}>Empezar gratis</a></Button>
          </div>
        )}
      </nav>

      {/* Hero — Split Screen */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <Zap size={14} /> Nueva versión disponible
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Conecta tu negocio <br className="hidden sm:block" />
              <span className="text-primary">al futuro</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Jarvis Connect es la plataforma inteligente que unifica tus herramientas, automatiza procesos y potencia tu equipo con inteligencia artificial.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base px-8" asChild>
                <a href="#contact">Empezar gratis <ArrowRight size={18} className="ml-2" /></a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                <a href="#features">Ver características</a>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-square max-w-lg mx-auto rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-1">
              <div className="w-full h-full rounded-3xl bg-card border border-border/50 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <div className="relative z-10 text-center p-8 space-y-4">
                  <div className="mx-auto w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Bot size={40} className="text-primary" />
                  </div>
                  <p className="font-heading text-xl font-bold text-foreground">Dashboard Inteligente</p>
                  <p className="text-sm text-muted-foreground">Métricas, automatizaciones e IA en un solo lugar.</p>
                  <div className="flex gap-3 justify-center pt-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-16 w-20 rounded-lg bg-muted animate-pulse" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <Section id="features" className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Todo lo que necesitas</h2>
            <p className="mt-4 text-muted-foreground text-lg">Herramientas poderosas diseñadas para equipos modernos que buscan eficiencia y resultados.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Card key={i} className="group border-border/50 bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <f.icon size={24} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading text-lg">{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{f.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Planes para cada etapa</h2>
            <p className="mt-4 text-muted-foreground text-lg">Empieza gratis y escala cuando lo necesites. Sin sorpresas.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card key={plan.name} className={`relative flex flex-col border-border/50 bg-card transition-all duration-300 hover:shadow-lg ${plan.highlighted ? "border-primary shadow-md scale-[1.02]" : ""}`}>
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="font-heading text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.desc}</CardDescription>
                  <div className="mt-4">
                    {plan.price === "Personalizado" ? (
                      <span className="font-heading text-3xl font-bold text-foreground">A medida</span>
                    ) : (
                      <>
                        <span className="font-heading text-4xl font-bold text-foreground">${plan.price}</span>
                        <span className="text-muted-foreground text-sm">/mes</span>
                      </>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check size={16} className="text-primary shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button className="w-full" variant={plan.highlighted ? "default" : "outline"} asChild>
                    <a href="#contact">{plan.price === "Personalizado" ? "Contactar ventas" : "Empezar ahora"}</a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact — Split Screen */}
      <Section id="contact" className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Hablemos de tu proyecto</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                ¿Listo para transformar tu negocio? Cuéntanos qué necesitas y te responderemos en menos de 24 horas.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail size={18} className="text-primary" /> contacto@jarvisconnect.com
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone size={18} className="text-primary" /> +34 900 123 456
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin size={18} className="text-primary" /> Madrid, España
                </div>
              </div>
            </div>
            <Card className="border-border/50 bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nombre</label>
                    <Input placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Mensaje</label>
                  <Textarea placeholder="Cuéntanos sobre tu proyecto..." rows={5} />
                </div>
                <Button className="w-full" size="lg">
                  Enviar mensaje <ArrowRight size={18} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-heading text-lg font-bold text-foreground tracking-tight">
              Jarvis<span className="text-primary">Connect</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#features" className="hover:text-foreground transition-colors">Características</a>
              <a href="#pricing" className="hover:text-foreground transition-colors">Precios</a>
              <a href="#contact" className="hover:text-foreground transition-colors">Contacto</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter size={18} /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github size={18} /></a>
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-8">© 2026 Jarvis Connect. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
