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

const commpanyLogo = (
  url: string,
  urlTitle: string,
  image: string,
  linkedIn?: string
): React.ReactElement => {
  if (url == "" && linkedIn != undefined && linkedIn != "") {
    url = linkedIn;
    linkedIn = undefined;
  }
  return (
    <>
      <a href={url} target="_blank">
        <img src={image} className="projects_logo" />
        <br />
        {urlTitle}{" "}
      </a>
      {linkedIn != undefined ? (
        <a href={linkedIn} target="_blank">
          <i className="bi bi-linkedin"></i>
        </a>
      ) : null}{" "}
      {url != "" && linkedIn != undefined ? (
        <a href={url} target="_blank">
          <i className="bi bi-globe"></i>
        </a>
      ) : null}
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
          <div className="row ">
            <div className="col-2">
              {commpanyLogo(
                "https://www.knexusai.com/",
                "Knexus",
                "https://d3qy1pxzcopg5z.cloudfront.net/wp-content/uploads/2021/01/15112406/knexus-full-000-3-01.png",
                "https://www.linkedin.com/company/knexus/"
              )}
            </div>
            <div className="col-10">
              <div className="row ">
                <div className="col-3"><h3 className="text-xl font-semibold mb-2">Project Title</h3></div>
                <div className="col-3"><h3 className="text-xl font-semibold mb-2">Skills</h3></div>
                <div className="col-6"><h3 className="text-xl font-semibold mb-2">Project Decription</h3></div>
              </div>
              <div className="row ">
                <div className="col-3"><h4 className="text-xl font-semibold mb-2">Experiences</h4></div>
                <div className="col-3"></div>
                <div className="col-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
