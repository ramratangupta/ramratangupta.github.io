import type { Metadata } from "next";
import { SITE_CONFIG} from '@/constants';
const title = SITE_CONFIG.NAME+" : Contact Us";
const description=""
export const metadata: Metadata = {
  title: title,
  description: description,
  keywords:"",
  openGraph: {
    title: title, 
    description: description,
    url: SITE_CONFIG.URL+"/contact-us/",
    siteName: title,type: "website",
    images: [
      {
        url: SITE_CONFIG.URL+"/sushhma.png",type: "logo",
        alt: title,
      },
    ],
  }
};
export default function Home() {
  return (
    <main className="main">
 
  <section id="about" className="about section">

    <div className="container">

      <div className="row ">
        <div className="col content">
          <h2>Contact Us</h2>
          
        </div>
      </div>
    </div>
  </section>
</main>
  );
}
