import { socials } from "../helpers/constants";

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact__title">Боғланиш</h2>
      <div className="contact__container container">
        {socials.map(({ link, icon, text, alt, id }) => (
          <a key={id} className="contact__link button--rect" href={link} target="_blank">
            <img className="contact__link-icon" src={icon} alt={alt} width={24} height={24} />
            <span className="contact__link-text">{text}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
