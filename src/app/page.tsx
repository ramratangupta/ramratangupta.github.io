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
            <div className="col-lg-6 col-md-6 col-xs-12">
              {<YTPlayer ytID="3hYVO7z4RYc" />}
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <h1>Ramratan Gupta</h1>
              <h3>
                Senior Lead Full Stack Engineer (Head of Development & DevOps)
              </h3>
              <ul>{INTO}</ul>
              <h4>
                Scan QR code to download vCard
              </h4>
              <Image
                src="/QR.png"
                alt="QR Code"
                layout="responsive"
                width={400} 
                height={400} 
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
