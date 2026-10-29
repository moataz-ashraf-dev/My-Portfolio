export default function ContactSection({ t }) {
  return <section className="contact wrap" id="contact" data-aos="fade-up"><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>{t.contactTitle}<br /><em>{t.contactLineTwo}</em></h2>
    <div className="contact-row"><a className="button" href="mailto:moatazalhappony@gmail.com?subject=Portfolio%20inquiry">moatazalhappony@gmail.com ↗</a><a className="phone-link" href="tel:+201227946282">+20 122 794 6282</a><a className="phone-link" href="https://wa.me/201227946282" target="_blank" rel="noreferrer">WhatsApp ↗</a></div>
  </section>;
}
