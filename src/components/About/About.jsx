import './about.css';
import authorAvatar from '../../images/author-avatar.png';

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__avatar">
          <img src={authorAvatar} alt="Author Avatar" className="about__avatar-image" />
        </div>
        <div className="about__bio">
          <h2 className="about__heading">Acerca del autor</h2>
          <p className="about__description">
            ¡Hola!, Mi nombre es Antony Carrasco y soy desarrollador web full-stack con sede en
            Lima-Perú.
            <br />
            <br />
            Mi experiencia en TripleTen a sido increíble. Aprendí habilidades importantes como
            JavaScript, React y desarrollo BackEnd, entre otras tecnologías complementarias.
            Trabajar en los proyectos presentados me preparó para resolver problemas reales. Si
            estás pensando en unirte a TripleTen, estaré encantado de compartir mi experiencia y
            ayudarte a dar tus primeros pasos. Si tienes alguna pregunta, ¡no dudes en contactarme!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
