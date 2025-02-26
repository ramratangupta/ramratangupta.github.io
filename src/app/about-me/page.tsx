import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";
import { INTO } from "@/components/Into";
import Skills from "@/components/Skills";
const title = SITE_CONFIG.NAME + " : About me";
const description = "";
export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: "",
  openGraph: {
    title: title,
    description: description,
    url: SITE_CONFIG.URL + "/contact-us/",
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

const ExperienceHeader = (url : String,urlTitle:string,location:String,designation:String) => {
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
            <div className="col-lg-4 col-md-5 col-xs-6">
              <Skills />
            </div>
            <div className="col-lg-8 col-md-7 col-xs-6">
              <h1>About Me</h1>
              <ul>
                {INTO}
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
              <h2>WORK EXPERIENCE</h2>
              {ExperienceHeader("https://www.linkedin.com/company/knexus","Knexus","Gurugram (Remote), India | Jan 2022 – Feb 2025","Senior Lead Full Stack Engineer (Head of Development & DevOps)")}
              <ul>
                <li>
                  Developed and deployed scalable full-stack applications
                  serving over 1 million users.
                </li>
                <li>Detailed requirements analysis for 10+ clients.</li>
                <li>
                  Designed RESTful 200+ APIs for seamless integration between
                  front-end and back-end systems.
                </li>
                <li>
                  Planned and led the deployment and provided post release
                  support.
                </li>
                <li>
                  Collaborated with cross-functional teams to optimize code
                  performance and reduce system downtime.
                </li>
                <li>
                  Maintained a SaaS project’s full stack using ReactJS, PHP,
                  Symfony, NodeJS, and front-end technologies like Bootstrap,
                  HTML, and CSS.
                </li>
                <li>
                  Steered release automation, CRON jobs in Git, & integrated
                  client analytics.
                </li>
                <li>
                  Modernised AWS infrastructure, achieving 45% cost savings
                  through automation, network security enhancements, firewall
                  configuration, server migration, & high-availability (99.99%
                  uptime) setups using CloudFormation.
                </li>
                <li>
                  Managed databases and caching with MySQL, Redis, and CouchDB,
                  and Improved web performance using Nginx, Elasticsearch, and
                  PHP-FPM, resulting in an 84-performance score for WordPress.
                </li>
                <li>
                  Mentored and coached 15+ professionals, led interviews &
                  hiring processes, and guided a Scrum team of five to improve
                  project execution.
                </li>
                <li>
                  Conducted code reviews for 10+ repositories, merged 10-20 pull
                  requests, and managed disaster recovery and migration to
                  ReactJS 16.
                </li>
                <li>
                  Attained expertise in 20+ AWS services, including EC2, Load
                  Balancing, VPC, CloudFront, SQS, SNS, Route53, S3, SES,
                  CloudWatch, AMI automation, Auto Scaling, IAM, Logging,
                  Lambda, DynamoDB, AWS CLI, and SSM for cloud monitoring and
                  management.
                </li>
              </ul>
              Knexus, Gurugram, India | Feb 2016 – Dec 2021 Lead Developer • Led
              migrations - PHP7 to PHP8, Symfony2 to Symfony4, and Amazon Linux
              1 to Amazon Linux 2. • Acted as a Product Owner for Experiences,
              Audience, and Template; paired up for AWS with lead and worked on
              GIT administration. • Defined improvement in UI/UX, and JIRA
              (workflow automation, dashboard), resulting in a 10% increase in
              team productivity.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
