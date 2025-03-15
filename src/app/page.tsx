import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";
import { INTO } from "@/components/Into";
export const metadata: Metadata = {
  title: SITE_CONFIG.NAME,
  description: SITE_CONFIG.Description,
  keywords: "Ramratan Gupta Video self intoduction," + SITE_CONFIG.KeyWords,
  metadataBase: new URL(SITE_CONFIG.URL), // Add this line
  alternates: {
    canonical: "/", // Add this line
  },
  openGraph: {
    title: SITE_CONFIG.NAME,
    description: SITE_CONFIG.Description,
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
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="embed-responsive embed-responsive-4by3">
                <iframe
                  className="embed-responsive-item  w-100"
                  style={{ height: "400px" }}
                  src="https://www.youtube.com/embed/3hYVO7z4RYc"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <h1>Ramratan Gupta</h1>
              <h3>
                Senior Lead Full Stack Engineer (Head of Development & DevOps)
              </h3>
              <ul>{INTO}</ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
