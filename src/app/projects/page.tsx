import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";
import YTPlayer from "@/components/YTPlayer";
import projects from "./projects";
import Image from "next/image";
import { Fragment } from "react";
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
  }
  return (
    <>
      <div className="col-lg-3 col-md-6 col-xs-12">
        <a href={url} target="_blank">
          <Image
            src={image}
            className="object-fit-contain"
            alt={`${urlTitle} logo`}
            width={119}
            height={50}
          />
        </a>
      </div>
      <div className="col-lg-7 col-md-6 col-xs-12 my-auto">
        <b>Compnay Name : {urlTitle}</b>{" "}
        {linkedIn != undefined ? (
          <a href={linkedIn} target="_blank">
            <i className="bi bi-linkedin"></i>
          </a>
        ) : null}{" "}
        {url != linkedIn && linkedIn != undefined ? (
          <a href={url} target="_blank">
            <i className="bi bi-globe"></i>
          </a>
        ) : null}
      </div>
    </>
  );
};
export default function Home() {
  return (
    <main className="main">
      <section id="about" className="about section">
        <div className="container">
          {projects.map((company) => {
            return (
              <Fragment key={company.company_name}>
                <div className="row bg-secondary-subtle py-1">
                  {commpanyLogo(
                    company.url,
                    company.company_name,
                    company.logo,
                    company.linkedIn
                  )}
                </div>

                {company.projects.map((project, i) => {
                  return (
                    <div
                      className="row py-4  border-top"
                      key={project.project_title}
                    >
                      <div className="col-lg-6 col-md-12 col-xs-12">
                        <div className="row ">
                          <div className="col-12">
                            <b>
                              Project {i + 1} : {project.project_title}
                            </b>
                          </div>
                          <div className="col-12">
                            <b>Skills:</b> {project.skills}
                          </div>
                          <div className="col-12">
                            <b>Role:</b> {project.role}
                          </div>
                          <div className="col-12">
                            <b>Responsibility:</b> {project.responsibility}
                          </div>

                          <div className="col-12">
                            {project.type === "yt" && (
                              <YTPlayer
                                ytID={project.resource}
                                height="300px"
                              />
                            )}
                            {project.type === "embed" && (project.resource
                            )}
                            {project.type === "image" && project.img !== "" && (
                              <Image
                                src={project.img}
                                alt={project.project_title}
                                height={400}
                                width={300}
                                className="d-flex mx-auto img-fluid img-thumbnail"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-xs-12 my-auto">
                        <div>
                          <b>Project Description:</b>
                        </div>
                        {project.description}
                      </div>
                    </div>
                  );
                })}
              </Fragment>
            );
          })}
        </div>
      </section>
    </main>
  );
}
