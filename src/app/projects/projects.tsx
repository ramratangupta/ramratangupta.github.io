import { ReactElement } from "react";

export interface Project {
  project_title: string;
  skills: string;
  role?: string;
  responsibility?: string;
  description: string | ReactElement;
  resource?: string | ReactElement;
  links?: { label: string; url: string }[];
}

export interface Category {
  title: string;
  description?: string;
  items: Project[];
}

const projects: Category[] = [
  {
    title: "🚀 Featured Projects",
    items: [
      {
        project_title: "Tender Insights Platform",
        skills: "React, Vite, Vitest, AWS, CI/CD",
        role: "Full Stack Engineer",
        responsibility: "End-to-end development and CI debugging",
        description:
          "Migrated application from CRA to Vite, implemented testing (~90% coverage), and resolved CI/CD issues on Vercel.",
        links: [
          {
            label: "Live Demo",
            url: "https://tender-scraper-summarizer.vercel.app/",
          },
          {
            label: "GitHub Repository",
            url: "https://github.com/ramratangupta/tender-scraper-summarizer",
          },
        ],
      },

      {
        project_title: "AI-Driven Gita Custom Chatbot",
        skills: "GenAI, Prompt Engineering",
        role: "Builder",
        responsibility: "Designed AI-based learning sessions",
        description:
          "Built structured learning sessions for kids and teens with storytelling, reflection, and real-world validation.",
          links: [
            {
              label: "Project Overview",
              url: "https://github.com/ramratangupta/genai-dsa-mastery-notes-and-projects/blob/main/Gitopdesh.md",
            },
            {
              label: "Prompts & Resources",
              url: "https://github.com/ramratangupta/genai-dsa-mastery-notes-and-projects/tree/main/projects/gita_explainer",
            },
            {label: "Gitopdesh Chat Bot for Age 5–15 Hindi Version", url: "https://gemini.google.com/gem/cf46b4650e89?usp=sharing"},
            {label: "Gitopdesh Chat Bot for Age 5–15 Multilingual Version", url: "https://gemini.google.com/gem/6f1e5a4c66d0?usp=sharing"},
            {label: "Gitopdesh Chat Bot for Age 5-15 Hindi Version", url: "https://gemini.google.com/gem/a27a955480d4?usp=sharing"},
            {label: "Gitopdesh Chat Bot for Age 15+ Multilingual Version", url: "https://gemini.google.com/gem/4ebf53103295?usp=sharing"},
          ],
      },
    ],
  },
  {
    title: "🧩 Product Engineering",
    items: [
      {
        project_title: "Experiences Platform (Widget System)",
        skills: "ReactJS, PHP, Symfony, MySQL, AWS, Redis, SQS, S3, CRON",
        role: "Product Owner",
        responsibility: "Led end-to-end solution across frontend, backend, and architecture",
        description: (
          <>
            I was <b>Product Owner</b> for the Experiences platform. This system
            enables users to configure and deploy JavaScript widgets for delivering
            personalized and shoppable content on websites.

            <br /><br />

            The interface allows selection of multiple widget types with flexible
            configurations such as:
            <ul>
              <li>Content display options</li>
              <li>Customer journey customization</li>
              <li>AI/ML-based recommendations</li>
              <li>Content formats and templates</li>
              <li>A/B testing capabilities</li>
            </ul>

            <b>Template System:</b>
            <ul>
              <li>Create templates using base Twig templates</li>
              <li>Customize using CSS, JavaScript, and HTML</li>
              <li>Reusable and version-controlled structure</li>
            </ul>

            <b>Knexus Widgets:</b>
            <br />
            Lightweight HTML containers that render personalized content without
            impacting page load or layout.
          </>
        ),
      },

      {
        project_title: "Template Management & Rendering Engine",
        skills: "PHP, Twig, Redis, CRON, AWS",
        role: "Technical Solution & Development",
        responsibility: "Designed and implemented template lifecycle, rendering, and caching system",
        description: (
          <>
            Templates were the <b>core of widget delivery</b>, enabling dynamic
            rendering of content across experiences.

            <br /><br />

            <b>Key Capabilities:</b>
            <ul>
              <li>Template listing, searching, and management UI</li>
              <li>Approval workflow for design changes (multi-user approval)</li>
              <li>Publishing system with automatic Redis cache invalidation</li>
            </ul>

            <b>Rendering Pipeline:</b>
            <ul>
              <li>Templates created using Twig-based structure</li>
              <li>Batch rendering for selected content across templates</li>
              <li>Automatic re-rendering on content create/update</li>
            </ul>

            <b>Version Control:</b>
            <ul>
              <li>Each save creates a new template version</li>
              <li>Rollback to previous or live versions supported</li>
            </ul>

            <b>Performance Optimization:</b>
            <ul>
              <li>Separated CSS/JS from Twig to reduce render payload</li>
              <li>Redis caching for faster widget delivery</li>
            </ul>

            <b>Advanced Features:</b>
            <ul>
              <li>Preview system for templates and content</li>
              <li>CLS (Core Web Vitals) configuration support</li>
            </ul>
          </>
        ),
      },

      {
        project_title: "UGC Rights Request System",
        skills: "React, Backend APIs",
        description:
          "Designed workflows for rights request messaging and T&C handling with improved user experience.",
      },
      {
        project_title: "Insights Dashboard (Word Cloud)",
        skills: "React, Data Visualization",
        description:
          "Built analytics dashboard with word cloud visualization and improved UI for insights.",
      },
      {
        project_title: "YouTube Content Settings",
        skills: "Frontend + API",
        description:
          "Implemented language filtering capabilities for video content management.",
      },
    ],
  },
  {
    title: "☁️ Cloud & DevOps Engineering",
    items: [
      {
        project_title: "AWS Infrastructure Automation",
        skills: "AWS, EC2, S3, IAM, Lambda",
        description:
          "Automated infrastructure setup including AMI, EC2, S3 lifecycle, IAM roles, and deployment pipelines.",
      },
      {
        project_title: "Security & Cost Optimization",
        skills: "AWS, Security",
        description:
          "Implemented firewall rules, penetration testing, SSL setup, and cost optimization strategies.",
      },
      {
        project_title: "CI/CD & Release Automation",
        skills: "CI/CD, Git, CRON",
        description:
          "Built automation for deployments, release tracking, cron jobs, and environment setup.",
      },
      {
        project_title: "Disaster Recovery & High Availability",
        skills: "AWS",
        description:
          "Designed recovery strategies and resilient infrastructure for production systems.",
      },
    ],
  },

  {
    title: "🔄 Migrations & Modernization",
    items: [
      {
        project_title: "Framework Migration",
        skills: "Symfony, PHP",
        description:
          "Migrated legacy MVC applications to Symfony framework improving maintainability.",
      },
      {
        project_title: "PHP Version Upgrades",
        skills: "PHP",
        description:
          "Upgraded systems from PHP 5 → 7 → 8 with performance and security improvements.",
      },
      {
        project_title: "Code Optimization & Cleanup",
        skills: "Performance",
        description:
          "Refactored legacy codebases for better performance, maintainability, and scalability.",
      },
    ],
  },

  {
    title: "📦 Legacy Campaign Work",
    items: [
      {
        project_title: "Facebook & Campaign Applications",
        skills: "PHP, MySQL, Facebook API",
        description:
          "Built multiple campaign-based applications for brands like Airtel, Samsung, Axis Bank focusing on engagement and scalability.",
      },
    ],
  },
];

export default projects;