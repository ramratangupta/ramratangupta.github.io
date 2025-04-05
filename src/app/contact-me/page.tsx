import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";
import Image from "next/image";
const title = SITE_CONFIG.NAME + " : Contact me";
export const metadata: Metadata = {
  title: title,
  description: SITE_CONFIG.Description,
  keywords: "Ramratan Gupta Visual Resume," + SITE_CONFIG.KeyWords,
  alternates: {
    canonical: "/contact-me/", // Add this line
  },
  openGraph: {
    title: title,
    description: SITE_CONFIG.Description,
    url: SITE_CONFIG.URL + "/contact-me/",
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

export default function Home() {
  return (
    <main className="main">
      <section id="about" className="about section">
        <div className="container">
          <div className="row ">
            <div className="col">
              <h1>Scan QR code to download vCard</h1>
              <Image
                src="/qr-code.svg"
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
