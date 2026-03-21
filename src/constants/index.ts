export const SITE_CONFIG = {
  NAME: "Ramratan Gupta",
  URL: "https://ramratangupta.github.io",
  KeyWords:"Full Stack Development, Frontend Development, Backend Development, AWS Cloud Services, ReactJS, NodeJS, Python, GenAI, AI/ML, PHP, Symfony, JavaScript, HTML, CSS, MySQL, Redis, NoSQL, Docker, API Design, Microservices, DevOps, CI/CD, CloudFormation, Lambda, EC2, S3, DynamoDB, Prompt Engineering, AmazonQ, Gemini, Google Vision, Competencies and Experience:Project Execution, Migrations, Code Reviews, Release Management, Client Engagement, Training and Mentoring, Team Leadership, Agile (Scrum), Software Development Life Cycle (SDLC), Cloud Architecture, Scalable Systems, Multitenant Architecture, Service-Based Architecture, Enterprise Application Architecture, ETL Jobs, Cybersecurity, Design Patterns, AWS Well-Architected Framework, Other Relevant Keywords:WordPress, Nginx, Elasticsearch, PHP-FPM, REST APIs, Jira, Git, Shell Script, GitHub Actions, UI/UX, Database Management, Cloud Monitoring, Disaster Recovery, API Integration, SaaS, Automation, Performance Optimization, Security Enhancements, High Availability",
  Description:"Portfolio Ramratan Gupta : 15+ years of experience in Full Stack Development, AWS Services, Project Execution, Migrations, Operations, and Client Engagement."
} as const;

export const skills: Record<string, { name: string; iconKey?: string }[]> = {
  Frontend: [
    { name: "ReactJS", iconKey: "SiReact" },
    { name: "NextJS", iconKey: "SiNextdotjs" },
    { name: "JavaScript", iconKey: "SiJavascript" },
    { name: "HTML", iconKey: "SiHtml5" },
    { name: "CSS", iconKey: "SiCss" },
    { name: "Bootstrap", iconKey: "SiBootstrap" },
  ],
  Databases: [
    { name: "MySQL - AWS RDS", iconKey: "SiMysql" },
    { name: "Elastic Search - AWS Open Search", iconKey: "SiElasticsearch" },
    { name: "AWS Dynamo DB", iconKey: "SiAmazondynamodb" },
    { name: "Redis", iconKey: "SiRedis" },
    { name: "Couch DB", iconKey: "SiApachecouchdb" },
  ],
  Backend: [
    { name: "NodeJS", iconKey: "SiNodedotjs" },
    { name: "Golang", iconKey: "SiGo" },
    { name: "PHP", iconKey: "SiPhp" },
    { name: "Python", iconKey: "SiPython" },
    { name: "Symfony", iconKey: "SiSymfony" },
  ],
  AI: [
    { name: "Google Gemini", iconKey: "SiGooglegemini" },
    { name: "Amazon Q", iconKey: "AmazonQ" },
    { name: "GenAI" },
    { name: "Prompt Engineering" },
    { name: "Amazon Transcribe", iconKey: "AmazonTranscribe" },
  ],
  Cloud: [
    { name: "AWS", iconKey: "SiAmazonwebservices" },
    { name: "EC2", iconKey: "SiAmazonec2" },
    { name: "AWS Elastic Load Balancing", iconKey: "SiAwselasticloadbalancing" },
    { name: "Lambda", iconKey: "SiAwslambda" },
    { name: "Cloud Formation", iconKey: "CloudFormation" },
    { name: "Virtual Private Cloud", iconKey: "VPC" },
    { name: "AWS Route 53", iconKey: "SiAmazonroute53" },
    { name: "Global Accelerator", iconKey: "GlobalAccelerator" },
    { name: "SQS - Simple Queue Service", iconKey: "SiAmazonsqs" },
    { name: "SNS - Simple Notification Service", iconKey: "SNS" },
    { name: "SES - Simple Email Service", iconKey: "SiAmazonsimpleemailservice" },
    { name: "Cloud Watch", iconKey: "SiAmazoncloudwatch" },
    { name: "Cloud Trail", iconKey: "CloudTrail" },
    { name: "S3 - Simple Storage Service", iconKey: "SiAmazons3" },
    { name: "CloudFront - CDN", iconKey: "CloudFront" },
    { name: "IAM - Identity and Access Management", iconKey: "SiAmazoniam" },
    { name: "WAF - Web Application Firewall", iconKey: "WAF" },
    { name: "AWS Inspector", iconKey: "AWSInspector" },
  ],
};

export const SOCIAL_LINKS = {
  GITHUB: "https://github.com/ramratangupta",
  X: "https://x.com/ramratangupta",
  STACKOVERFLOW: "https://stackoverflow.com/users/1589444/ramratan-gupta",
  LINKEDIN: "https://www.linkedin.com/in/ramratangupta",
  LEETCODE:"https://leetcode.com/u/ramratangupta/",
  CONTACT: {
    EMAIL: "ramratan.gupta@gmail.com",
    PHONE: "7701983357",
  },
} as const;
