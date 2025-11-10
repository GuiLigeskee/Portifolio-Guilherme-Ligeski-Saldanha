import "./Certifications.css";
import { FaCertificate } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";

const certifications = [
  {
    title: "Curso de Node.js",
    platform: "Udemy",
    duration: "40 horas",
    status: "Completo",
    icon: <SiUdemy />,
  },
  {
    title: "Curso de React",
    platform: "Udemy",
    duration: "40 horas",
    status: "Completo",
    icon: <SiUdemy />,
  },
  {
    title: "Curso de Git/GitHub",
    platform: "Curso em Vídeo",
    duration: "10 horas",
    status: "Completo",
    icon: <FaCertificate />,
  },
  {
    title: "Curso de C#.NET",
    platform: "Udemy",
    duration: "40 horas",
    status: "Em andamento",
    icon: <SiUdemy />,
  },
];

const Certifications = () => {
  return (
    <div className="certifications" id="certifications">
      <h1 className="title">Cursos & Certificações</h1>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="cert-icon">{cert.icon}</div>
            <h3>{cert.title}</h3>
            <p className="platform">{cert.platform}</p>
            <p className="duration">{cert.duration}</p>
            <span
              className={`status ${
                cert.status === "Completo" ? "complete" : "ongoing"
              }`}
            >
              {cert.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
