const services = [
  { title: "Niños", text: "Regulación emocional, atención y confianza.", icon: "🌱" },
  { title: "Adolescentes", text: "Manejo del estrés, ansiedad, autoestima y rendimiento escolar.", icon: "🌿" },
  { title: "Adultos", text: "Estrés, ansiedad, insomnio y bienestar integral.", icon: "🍃" },
];

const posts = [
  ["Bienestar", "5 ejercicios de respiración para reducir el estrés"],
  ["Conciencia", "La importancia de vivir el presente"],
  ["Sofrología", "¿Qué es la sofrología y cómo puede ayudarte?"],
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="brand" href="#inicio" aria-label="Sofrología México, inicio">
          <span className="brandMark">♧</span>
          <span><strong>SOFROLOGÍA MÉXICO</strong><small>Instituto SOS PHREN LOGOS®</small></span>
        </a>
        <nav>
          <a href="#inicio">Inicio</a><a href="#metodo">¿Qué es?</a><a href="#servicios">Servicios</a>
          <a href="#formacion">Formación</a><a href="#blog">Blog</a><a href="#contacto">Contacto</a>
        </nav>
        <a className="button small" href="#agenda">Agenda tu sesión</a>
      </header>

      <section id="inicio" className="hero">
        <div className="heroContent">
          <p className="eyebrow">BIENESTAR · CONCIENCIA · TRANSFORMACIÓN</p>
          <h1>SOFROLOGÍA MÉXICO</h1>
          <p className="institute">Instituto SOS PHREN LOGOS®</p>
          <div className="rule" />
          <h2>Respira con conciencia. Vive con plenitud.</h2>
          <p className="lead">La sofrología es un método que integra respiración, relajación y visualización positiva para fortalecer el equilibrio físico, mental y emocional.</p>
          <div className="actions"><a className="button" href="#agenda">Agenda una sesión</a><a className="button outline" href="#metodo">Conoce la Sofrología</a></div>
        </div>
      </section>

      <section className="features" aria-label="Características">
        {["Método científico y humano", "Atención personalizada", "Formación profesional", "Bienestar para todas las edades", "Excelencia académica"].map((x) => <div key={x}>✦ <span>{x}</span></div>)}
      </section>

      <section id="metodo" className="intro section">
        <p className="eyebrow">UN MÉTODO PARA LA VIDA</p>
        <h2>Calma, equilibrio y conciencia</h2>
        <p>La práctica sofrológica utiliza técnicas sencillas y estructuradas para desarrollar recursos personales, responder mejor al estrés y vivir con mayor presencia.</p>
      </section>

      <section id="servicios" className="section">
        <div className="sectionHeading"><p className="eyebrow">NUESTROS SERVICIOS</p><h2>Acompañamiento para cada etapa</h2></div>
        <div className="serviceGrid">
          {services.map((s) => <article className="card" key={s.title}><div className="cardImage"><span>{s.icon}</span></div><div className="cardBody"><h3>{s.title}</h3><p>{s.text}</p><a href="#agenda">Más información →</a></div></article>)}
          <article id="formacion" className="training"><p className="eyebrow">FORMACIÓN PROFESIONAL</p><h3>Curso de Sofrólogo Profesional</h3><p>Conviértete en un profesional del bienestar y acompaña a otras personas en su camino de transformación.</p><a className="button" href="#contacto">Conoce el programa</a></article>
        </div>
      </section>

      <section className="why section"><p className="eyebrow">¿POR QUÉ ELEGIR SOFROLOGÍA MÉXICO?</p><div className="whyGrid">{[["15+", "Años de experiencia"],["Método", "Estructurado y científico"],["Atención", "Cercana y humana"],["Acompañamiento", "Continuo"],["Comunidad", "de aprendizaje"]].map(([a,b]) => <div key={a}><strong>{a}</strong><span>{b}</span></div>)}</div></section>

      <section className="section"><div className="sectionHeading"><p className="eyebrow">TESTIMONIOS</p><h2>Experiencias que transforman</h2></div><div className="testimonialGrid">{["La sofrología me ayudó a recuperar la calma y dormir mejor.","La formación superó mis expectativas y fortaleció mi práctica profesional.","Encontré un espacio cálido, profesional y profundamente humano."].map((t,i)=><blockquote key={t}>“{t}”<footer>{["Mariana R.","Luis A.","Paola G."][i]}</footer></blockquote>)}</div></section>

      <section id="blog" className="section blog"><div className="sectionHeading"><p className="eyebrow">ARTÍCULOS DEL BLOG</p><h2>Recursos para tu bienestar</h2></div><div className="postGrid">{posts.map(([tag,title])=><article key={title}><small>{tag}</small><h3>{title}</h3><p>Ideas y herramientas prácticas para integrar la conciencia y el bienestar en tu vida diaria.</p><a href="#">Leer más →</a></article>)}</div></section>

      <section id="agenda" className="agenda section"><div><p className="eyebrow">DA EL PRIMER PASO</p><h2>Agenda tu sesión</h2><p>Estamos para acompañarte de manera cercana y personalizada.</p></div><form><input aria-label="Nombre" placeholder="Nombre completo"/><input aria-label="Correo" type="email" placeholder="Correo electrónico"/><input aria-label="Teléfono" placeholder="Teléfono / WhatsApp"/><select aria-label="Tipo de sesión" defaultValue=""><option value="" disabled>¿Para quién es la sesión?</option><option>Niño o niña</option><option>Adolescente</option><option>Adulto</option></select><button type="button">Enviar solicitud</button></form></section>

      <footer id="contacto" className="footer"><div><strong>SOFROLOGÍA MÉXICO</strong><span>Instituto SOS PHREN LOGOS®</span><p>Desarrollo integral de la persona mediante la práctica y enseñanza de la sofrología.</p></div><div><strong>Servicios</strong><a href="#servicios">Niños</a><a href="#servicios">Adolescentes</a><a href="#servicios">Adultos</a></div><div><strong>Formación</strong><a href="#formacion">Curso profesional</a><a href="#contacto">Especialidades</a></div><div><strong>Contacto</strong><span>Ciudad de México</span><span>Teléfono por confirmar</span><span>Correo por confirmar</span></div></footer>
    </main>
  );
}
