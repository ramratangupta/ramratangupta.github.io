import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";
const description = "";
export const metadata: Metadata = {
  title: SITE_CONFIG.NAME,
  description: description,
  keywords: "",
  openGraph: {
    title: SITE_CONFIG.NAME,
    description: description,
    url: SITE_CONFIG.URL, // Replace with your actual URL
    siteName: SITE_CONFIG.NAME,
    images: [
      {
        url: SITE_CONFIG.URL + "/Ramratn_Gupta.png",
        type: "logo",
        alt: SITE_CONFIG.NAME,
      },
    ],
  },
};
export default function Home() {
  return (
    <main className="main">
      <section id="about" className="about section">
        <div className="container">
          <div className="row ">
            <div className="col-lg-2">
              <img src="/Ramratn_Gupta.png" className="rounded-circle w-100" />
            </div>
            <div className="col-lg-10">
              <h1>Ramratan Gupta</h1>
              <h3>
                Senior Lead Full Stack Engineer (Head of Development & DevOps)
              </h3>
              <ul>
                <li>
                  Full Stack Software Engineer with 15+ years of experience in
                  Full Stack Development, AWS Services, Project Execution,
                  Migrations, Operations, and Client Engagement.
                </li>
                <li>
                  Proficient in front-end and back-end development with
                  expertise in technologies: ReactJS, NodeJS, Python, GenAI,
                  AI/ML, PHP, Symfony, JavaScript, HTML, CSS, and database
                  systems & cloud-based architectures.
                </li>
                <li>
                  Expertise in modern frameworks and cloud platforms & applying
                  cutting-edge practices (AI/ML) to enhance product performance,
                  security & compliance, and client satisfaction.
                </li>
                <li>
                  Collaborated across the full Software Development Life cycle
                  (SDLC), covering business requirement mapping, application
                  design & development, integration, testing, and
                  troubleshooting.
                </li>
                <li>
                  Rich exposure in hiring, coaching, mentoring new developers,
                  and conducting code reviews, while driving a culture of
                  continuous improvement.
                </li>
                <li>
                  Enhanced project efficiency through Agile methodologies, and
                  Scrum ceremonies such as Daily Scrums and Sprint Planning.
                </li>
              </ul>
              <div className="embed-responsive embed-responsive-4by3">
                <iframe
                  className="embed-responsive-item  w-100" style={{height:"400px"}}
                  src="https://www.youtube.com/embed/3hYVO7z4RYc"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
