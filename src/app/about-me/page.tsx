import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";
import { INTO } from "@/components/Into";
import Skills from "@/components/Skills";
const title = SITE_CONFIG.NAME + " : About me";
export const metadata: Metadata = {
  title: title,
  description: SITE_CONFIG.Description,
  keywords: "Ramratan Gupta Visual Resume," + SITE_CONFIG.KeyWords,
  alternates: {
    canonical: "/about-me/", // Add this line
  },
  openGraph: {
    title: title,
    description: SITE_CONFIG.Description,
    url: SITE_CONFIG.URL + "/about-me/",
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
  designation: string,
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
            <div className="col-lg-5 col-md-6 col-xs-6">
              <Skills />
            </div>
            <div className="col-lg-7 col-md-6 col-xs-6">
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
              {ExperienceHeader(
                "https://intraedge.com/",
                "IntraEdge (Client: American Express)",
                "Bengaluru, India | Apr 2025 – Current",
                "Senior Software Developer - II",
              )}
              <ul>
                <li>
                  <b>Full-Stack Development</b> – Leading React.js frontend
                  delivery while building scalable Golang backend services,
                  ensuring high-performance interfaces and reliable API
                  architectures.
                </li>
                <li>
                  <b>Code Quality & Testing</b> – Elevating engineering
                  standards through comprehensive unit tests, continuous
                  reviews, and best practices, resulting in a 10% rise in code
                  coverage and stronger release stability.
                </li>
                <li>
                  <b>Deployment & DevOps Integration</b> – Managing CI/CD
                  pipelines, OpenShift environments, production rollouts, and
                  coordinating with DevOps teams to treamline
                  development-to-deployment workflows
                </li>
                <li>
                  <b>Open Source & Performance Optimization</b> – Customizing
                  the Red Hat console project while optimizing system
                  performance, user workflows, and operational efficiency across
                  feature sets.
                </li>
                <li>
                  <b>AI & Platform Intelligence</b> – Increased team
                  productivity by 40% by implementing ChatGPT Enterprise, Custom
                  AI Agents, GitHub Copilot, and advanced prompt-engineering to
                  automate unit test creation, accelerate pull-request reviews,
                  streamline documentation, improve code-flow comprehension, and
                  drive team-wide adoption of AI-assisted development practices.
                </li>
              </ul>
              {ExperienceHeader(
                "https://www.linkedin.com/company/knexus",
                "Knexus",
                "Gurugram (Remote), India | Jan 2022 – Feb 2025",
                "Senior Lead Full Stack Engineer (Head of Development & DevOps)",
              )}
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
              {ExperienceHeader(
                "https://www.linkedin.com/company/knexus",
                "Knexus",
                "Gurugram, India | Feb 2016 – Dec 2021",
                "Lead Developer",
              )}
              <ul>
                <li>
                  Led migrations - PHP7 to PHP8, Symfony2 to Symfony4, and
                  Amazon Linux 1 to Amazon Linux 2.
                </li>
                <li>
                  Acted as a Product Owner for Experiences, Audience, and
                  Template; paired up for AWS with lead and worked on GIT
                  administration.
                </li>
                <li>
                  Defined improvement in UI/UX, and JIRA (workflow automation,
                  dashboard), resulting in a 10% increase in team productivity.
                </li>
              </ul>
              {ExperienceHeader(
                "https://www.linkedin.com/company/knexus",
                "Knexus",
                "Gurugram, India | Jun 2014 – Jan 2016",
                "Senior Development Engineer",
              )}
              <ul>
                <li>
                  Implemented Facebook API integration, ensuring seamless social
                  media connectivity and enhancing user engagement.
                </li>
                <li>
                  Upgraded and streamlined the technology stack, including
                  migrating PHP5 to PHP7, and upgrading ReactJS 13.
                </li>
                <li>
                  Migrated from an in-house MVC framework to Symfony 2,
                  improving Bootstrap UI, and enhancing code quality through
                  optimization and peer programming.
                </li>
              </ul>
              {ExperienceHeader(
                "https://www.linkedin.com/company/digitasin/",
                "DigitasLBi",
                "Gurugram, India | Jun 2012 – May 2014",
                "Software Developer",
              )}
              <ul>
                <li>
                  Delivered 30+ projects, including Websites, Facebook
                  applications, admin panels, and API integrations (Facebook,
                  Twitter, LinkedIn, and YouTube) using PHP and jQuery, with
                  completion timelines ranging from 3 to 15 days.
                </li>
                <li>
                  {" "}
                  Key Projects Undertaken:{" "}
                  <a
                    href="https://docs.google.com/spreadsheets/d/1mFxAYI1lDFebOQKUWHVvAR8u8szmpL4utYSSnRPcgvU/edit?gid=0#gid=0"
                    target="_blank"
                  >
                    Project Annexure
                  </a>
                  .
                </li>
              </ul>
              {ExperienceHeader(
                "https://www.linkedin.com/company/alethia-education-services/about/",
                "Alethia Education Services",
                "Gurugram, India | Dec 2009 – Jun 2012",
                "IT Executive",
              )}
              <ul>
                <li>
                  Launched a website, email campaigns, and an employee
                  attendance system using PHP and MySQL.
                </li>
                <li>
                  Integrated PHPList with AWS SES, enabling the delivery of
                  100,000 emails daily, and implemented a lead management system
                  for improved customer engagement.
                </li>
                <li>Created website for Square Education Private Limited.</li>
                <li>
                  Created website for Shiv Khera Institute of Leadership And
                  Management.
                </li>
                <li>
                  Created website for Succession Planers for S. S. Nathyal, ex
                  VP of J&K Bank.
                </li>
                <li>
                  akgim.edu.in : Website redesign for some pages to capture
                  online leads, mailer campaign and landing page development.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
