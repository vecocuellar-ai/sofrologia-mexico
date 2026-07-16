import { Calendar, Leaf, Users, GraduationCap, Heart, ShieldCheck, MessageCircle, Menu, ChevronDown, BookOpen, Globe2 } from "lucide-react";

const services = [
  {
    title: "Niños",
    text: "Regulación emocional, atención y confianza.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Adolescentes",
    text: "Manejo del estrés, ansiedad, autoestima y rendimiento escolar.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Adultos",
    text: "Estrés, ansiedad, insomnio y bienestar integral.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80"
  }
];

const benefits = [
  ["15+", "Años de experiencia"],
  ["Método", "Estructurado y científico"],
  ["Atención", "Cercana y humana"],
  ["Acompañamiento", "Continuo"],
  ["Comunidad", "de aprendizaje"],
];

const posts = [
  ["Bienestar", "5 ejercicios de respiración para reducir el estrés"],
  ["Conciencia", "La importancia de vivir el presente"],
  ["Sofrología", "¿Qué es la sofrología y cómo puede ayudarte?"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-ink">
      <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-white/92 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-forest text-forest">
              <Leaf size={34} />
            </div>
            <div>
              <p className="font-serif text-2xl tracking-wide">SOFROLOGÍA MÉXICO</p>
              <p className="text-lg text-forest">Instituto SOS PHREN LOGOS®</p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            <a className="text-forest" href="#">INICIO</a>
            <a href="#sofrologia">¿QUÉ ES LA SOFROLOGÍA?</a>
            <a href="#servicios">SERVICIOS</a>
            <a href="#formacion">FORMACIÓN</a>
            <a href="#nosotros">NOSOTROS</a>
            <a href="#blog">BLOG</a>
            <a href="#contacto">CONTACTO</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#agenda" className="hidden rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white md:inline-flex">
              Agenda tu sesión
            </a>
            <Menu className="lg:hidden" />
          </div>
        </div>
      </header>

      <section className="hero-bg pt-28">
        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.45em] text-forest">Bienestar · Conciencia · Transformación</p>
            <h1 className="font-serif text-6xl leading-none tracking-wide md:text-8xl">
              SOFROLOGÍA MÉXICO
            </h1>
            <p className="mt-4 font-serif text-3xl text-forest">Instituto SOS PHREN LOGOS®</p>
            <div className="my-6 h-px w-2/3 bg-forest" />
            <h2 className="font-serif text-3xl md:text-4xl">Respira con conciencia. Vive con plenitud.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8">
              La sofrología es un método que integra respiración, relajación y visualización positiva para fortalecer el equilibrio físico, mental y emocional.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#agenda" className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-4 font-semibold text-white">
                <Calendar size={19} /> Agenda una sesión
              </a>
              <a href="#sofrologia" className="inline-flex items-center gap-2 rounded-full border border-forest bg-white/85 px-7 py-4 font-semibold text-ink">
                <Leaf size={19} /> Conoce la Sofrología
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-7 md:grid-cols-5">
          {[
            [Leaf, "Método", "Científico y Humano"],
            [Heart, "Atención", "Personalizada"],
            [GraduationCap, "Formación", "Profesional"],
            [Users, "Bienestar Integral", "para todas las edades"],
            [ShieldCheck, "Avalado", "con excelencia académica"],
          ].map(([Icon, title, text]: any) => (
            <div key={title} className="flex items-center gap-4">
              <Icon className="text-forest" size={36} />
              <div>
                <p className="font-semibold">{title}</p>
                <p className="text-sm">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-center text-sm font-bold uppercase tracking-widest text-forest">Nuestros servicios</h2>
        <div className="mx-auto mt-2 h-px w-16 bg-forest" />
        <div className="mt-10 grid gap-7 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="overflow-hidden rounded-2xl bg-white soft-shadow">
              <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
              <div className="p-7">
                <h3 className="font-serif text-3xl text-forest">{service.title}</h3>
                <p className="mt-2 leading-7">{service.text}</p>
                <a className="mt-5 inline-flex font-semibold text-forest" href="#">Más información →</a>
              </div>
            </article>
          ))}

          <article id="formacion" className="rounded-2xl bg-[#EEF2E7] p-9 soft-shadow">
            <GraduationCap className="mb-5 rounded-full bg-forest p-2 text-white" size={48} />
            <p className="text-sm font-bold uppercase tracking-widest text-forest">Formación profesional</p>
            <h3 className="mt-5 font-serif text-4xl">Curso de Sofrólogo Profesional</h3>
            <div className="my-5 h-px w-16 bg-forest" />
            <p className="leading-7">Conviértete en un profesional del bienestar y acompaña a otros en su camino de transformación.</p>
            <a className="mt-8 inline-flex rounded-full bg-forest px-7 py-4 font-semibold text-white" href="#contacto">Conoce el programa →</a>
          </article>
        </div>
      </section>

      <section id="nosotros" className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-3xl bg-white p-8 soft-shadow">
          <h2 className="text-center text-sm font-bold uppercase tracking-widest text-forest">¿Por qué elegir Sofrología México?</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-5">
            {benefits.map(([title, text]) => (
              <div key={title} className="text-center">
                <ShieldCheck className="mx-auto mb-3 text-forest" />
                <p className="font-serif text-3xl text-forest">{title}</p>
                <p className="text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-center text-sm font-bold uppercase tracking-widest text-forest">Testimonios</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {["La sofrología me ayudó a recuperar la calma y dormir mejor.", "La formación superó mis expectativas.", "Un espacio profesional, cálido y transformador."].map((text, i) => (
            <article key={i} className="rounded-2xl bg-white p-8 soft-shadow">
              <p className="font-serif text-6xl text-sage">“</p>
              <p className="leading-7">{text}</p>
              <p className="mt-5 font-semibold text-forest">{["Mariana R.", "Luis A.", "Paola G."][i]}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="blog" className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-3xl bg-white p-8 soft-shadow">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-serif">Artículos del blog</h2>
            <a className="text-forest font-semibold" href="#">Ver todos los artículos →</a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map(([tag, title]) => (
              <article key={title} className="rounded-2xl border border-black/5 bg-ivory p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-forest">{tag}</p>
                <h3 className="mt-4 font-serif text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-6">Contenido breve para inspirar bienestar, respiración y conciencia en la vida diaria.</p>
                <a className="mt-5 inline-flex font-semibold text-forest" href="#">Leer más →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="agenda" className="bg-sand px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl">Agenda tu sesión</h2>
            <p className="mt-4 max-w-md leading-7">Da el primer paso hacia tu bienestar. Estamos para acompañarte.</p>
          </div>
          <form className="grid gap-4 md:grid-cols-2">
            <input className="rounded-xl border border-black/10 px-4 py-3" placeholder="Nombre completo" />
            <input className="rounded-xl border border-black/10 px-4 py-3" placeholder="Correo electrónico" />
            <input className="rounded-xl border border-black/10 px-4 py-3" placeholder="Teléfono / WhatsApp" />
            <select className="rounded-xl border border-black/10 px-4 py-3">
              <option>¿Para quién es la sesión?</option>
              <option>Niño/a</option>
              <option>Adolescente</option>
              <option>Adulto</option>
            </select>
            <button className="rounded-full bg-forest px-6 py-3 font-semibold text-white md:col-span-2">Enviar</button>
          </form>
        </div>
      </section>

      <footer id="contacto" className="bg-forest px-6 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div>
            <p className="font-serif text-2xl">SOFROLOGÍA MÉXICO</p>
            <p>Instituto SOS PHREN LOGOS®</p>
            <p className="mt-4 text-sm opacity-80">Instituto dedicado al desarrollo integral de la persona mediante la práctica y enseñanza de la sofrología.</p>
          </div>
          <div>
            <h3 className="font-semibold">Enlaces rápidos</h3>
            <p className="mt-3 text-sm opacity-80">¿Qué es la Sofrología?<br/>Servicios<br/>Formación Profesional<br/>Blog</p>
          </div>
          <div>
            <h3 className="font-semibold">Servicios</h3>
            <p className="mt-3 text-sm opacity-80">Niños<br/>Adolescentes<br/>Adultos<br/>Sesiones individuales</p>
          </div>
          <div>
            <h3 className="font-semibold">Contacto</h3>
            <p className="mt-3 text-sm opacity-80">Ciudad de México, México<br/>+52 55 1234 5678<br/>hola@sofrologiamexico.com</p>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/525512345678" className="fixed bottom-6 right-6 rounded-full bg-green-500 p-4 text-white shadow-xl" aria-label="WhatsApp">
        <MessageCircle />
      </a>
    </main>
  );
}
