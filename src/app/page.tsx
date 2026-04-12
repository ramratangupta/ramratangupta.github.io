import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";
import { INTO } from "@/components/Into";
import YTPlayer from "@/components/YTPlayer";
import Image from "next/image";
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
            <div className="col">
              <h1>Ramratan Gupta</h1>
              Senior Full Stack Engineering Leader with 15+ years of experience building scalable systems, cloud-native platforms, and high-performance applications. I specialize in modern frontend development, backend architecture, DevOps, and GenAI-driven engineering.
              <h2>🚀 About Me</h2>
              <ul>
                <li> 💻 15+ years in full-stack development and system design</li>
                <li> ☁️ Strong expertise in AWS, cloud architecture, and DevOps automation</li>
                <li> ⚛️ Modern frontend development using React, Vite, and Next.js</li>
                <li> 🤖 Actively exploring GenAI, prompt engineering, and AI-assisted workflows</li>
                <li> 👥 Led and mentored engineering teams, driving scalable SaaS solutions</li>
              </ul>

              <h2>🧠 What I Focus On</h2>

              <ul>
                <li>Designing scalable and maintainable systems</li>
                <li>Building high-performance frontend and backend applications</li>
                <li>Automating workflows using AI and DevOps practices</li>
                <li>Solving real-world engineering problems end-to-end</li>
              </ul>

              <h2>🔥 Featured Projects</h2>

              <h3> 🧩 Tender Insights Platform</h3>
              A React-based application to fetch and summarize tender data with modern tooling and testing.

              <ul>
                <li>Migrated application from CRA to Vite for faster builds</li>
                <li>Implemented unit testing using Vitest (~90% coverage)</li>
                <li>Debugged CI/CD issues on Vercel (React + environment mismatch)</li>
                <li>Built responsive UI with filtering, pagination, and error handling</li>
              </ul>
              <a href="https://tender-scraper-summarizer.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a><br />
              <a href="https://github.com/ramratangupta/tender-scraper-summarizer" target="_blank" rel="noopener noreferrer">Code</a>

              <h3> 🧠 AI-Driven Gita Learning Chatbot (Google Gemini Gems)</h3>
              An experimental GenAI project for structured learning sessions based on Bhagavad Gita for different age groups.
              <ul>
                <li>Created prompts for guided sessions (kids & teens)</li>
                <li>Built structured flow: Relaxation → Story → Meaning → Reflection → Quiz</li>
                <li>Applied multi lingual prompt engineering for contextual understanding</li>
                <li>Validated through real-world usage</li>
                <li>Focused on engagement, clarity, and emotional connection</li>
              </ul>
              <a href="https://gemini.google.com/gem/cf46b4650e89?usp=sharing" target="_blank" rel="noopener noreferrer">Gitopdesh Chat Bot for Age 5–15 Hindi Version</a><br />
              <a href="https://gemini.google.com/gem/6f1e5a4c66d0?usp=sharing" target="_blank" rel="noopener noreferrer">Gitopdesh Chat Bot for Age 5–15 Multilingual Version</a><br />
              <a href="https://gemini.google.com/gem/a27a955480d4?usp=sharing" target="_blank" rel="noopener noreferrer">Gitopdesh Chat Bot for Age 5-15 Hindi Version</a><br />
              <a href="https://gemini.google.com/gem/4ebf53103295?usp=sharing" target="_blank" rel="noopener noreferrer">Gitopdesh Chat Bot for Age 15+ Multilingual Version</a><br />
              

              <h2>🛠️ Tech Stack</h2>

              <h3>Frontend</h3>
              React.js, Next.js, Vite, JavaScript, TypeScript, HTML, CSS, Bootstrap

              <h3>Backend</h3>
              Node.js, Golang, Python, PHP, Symfony

              <h3>Cloud & DevOps</h3>
              AWS (EC2, S3, Lambda, VPC, CloudFormation, IAM), CI/CD pipelines, GitHub Actions, Docker

              <h3>Databases</h3>
              MySQL, Redis, DynamoDB, CouchDB

              <h3>AI & Tools</h3>
              ChatGPT, Amazon Q, GitHub Copilot, Gemini, Prompt Engineering, REST APIs, Git, Jira
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
