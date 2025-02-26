import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";
import {INTO} from "@/components/Into"
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
            <div className="col-lg-2 col-md-3 col-xs-6">
              <img
                src="/Ramratn_Gupta.png"
                className="rounded-circle w-100 "
                alt="Ramratan Gupta"
              />
            </div>
            <div className="col-lg-10 col-md-9 col-xs-6">
              <h1>Ramratan Gupta</h1>
              <h3>
                Senior Lead Full Stack Engineer (Head of Development & DevOps)
              </h3>
              <ul>
                {INTO}
              </ul>
              <div className="embed-responsive embed-responsive-4by3">
                <iframe
                  className="embed-responsive-item  w-100"
                  style={{ height: "400px" }}
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
