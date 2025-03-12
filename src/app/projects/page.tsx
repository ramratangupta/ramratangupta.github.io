import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";
const title = SITE_CONFIG.NAME + " : Projects";
export const metadata: Metadata = {
  title: title,
  description: SITE_CONFIG.Description,
  keywords: "Ramratan Gupta Projects," + SITE_CONFIG.KeyWords,
  alternates: {
    canonical: "/projects/", // Add this line
  },
  openGraph: {
    title: title,
    description: SITE_CONFIG.Description,
    url: SITE_CONFIG.URL + "/projects/",
    siteName: title,
    type: "website",
    images: [
      {
        url: SITE_CONFIG.URL + "/Ramratn_Gupta.png",
        type: "logo",
        alt: title,
      },
    ],
  },
};

const ExperienceHeader = (
  url: string,
  urlTitle: string,
  location: string,
  designation: string
): React.ReactElement => {
  return (
    <>
      <h3>
        <a href={url} target="_blank">
          {urlTitle}
        </a>
        , {location}
      </h3>
      <h4>{designation}</h4>
    </>
  );
};
export default function Home() {
  return (
    <main className="main">
      <section id="about" className="about section">
        <div className="container">
          <div className="row ">
            <div className="col">
              <h1>Projects</h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
