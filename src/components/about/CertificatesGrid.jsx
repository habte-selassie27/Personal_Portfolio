import { CERTIFICATES } from "../../data/certificates.js";

export default function CertificatesGrid() {
  return (
    <div className="about-block" id="certificates-block">
      <div className="about-block-kicker">Achievements</div>
      <h2 className="about-block-title">Certificates</h2>
      <div className="cert-grid">
        {CERTIFICATES.map((cert) => (
          <figure className="about-panel cert-card" key={cert.title}>
            <img src={cert.img} alt={cert.title} loading="lazy" />
            <span>{cert.title}</span>
          </figure>
        ))}
      </div>
    </div>
  );
}
