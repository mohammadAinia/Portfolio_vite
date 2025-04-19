import './education.scss';

export default function Education() {
  const certifications = [
    {
      title: "Developing Front-End Apps with React – IBM (Coursera)",
      file: "cert1.pdf",
    },
    {
      title: "Developing Back-End Apps with Node.js and Express – IBM (Coursera)",
      file: "cert2.pdf",
    },
    {
      title: "Get Started with Cloud Native, DevOps, Agile, and NoSQL – IBM (Coursera)",
      file: "cert3.pdf",
    },
    {
      title: "Getting Started with Git and GitHub – IBM (Coursera)",
      file: "cert4.pdf",
    },
    {
      title: "Node.js & MongoDB – IBM (Coursera)",
      file: "cert5.pdf",
    }
  ];

  return (
    <div className="education" id="education">
      <h1>Education & Certifications</h1>

      <div className="education-section">
        <h2>Education</h2>
        <div className="education-card">
          <h3>Bachelor’s Degree in Information Technology Engineering</h3>
          <p>University of Kalamoon (2020 – 2024)</p>
          <p><strong>Cumulative GPA:</strong> 3.08 / 4</p>
          <a
            href="/Education.pdf"
            className="download-btn grad-btn"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            🎓 View Graduation Certificate
          </a>
        </div>
      </div>

      <div className="certification-section">
        <h2>Certifications</h2>
        <ul className="cert-list">
          {certifications.map((cert, index) => (
            <li key={index}>
              <span>{cert.title}</span>
              <a
                href={`/${cert.file}`}
                className="download-btn"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
