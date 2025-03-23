"use client"; // Important for Next.js 13+ client components
import { useEffect, useState } from "react";
import { SOCIAL_LINKS } from "@/constants";
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listeners
    window.addEventListener("scroll", toggleVisibility);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  // Scroll to top handler
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer id="footer" className="footer position-relative light-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col footer-about">
              <div className="footer-contact pt-3">
                <p className="mt-3">
                  <b>
                    <i className="bi bi-phone"></i> Mobile:
                  </b>{" "}
                  <a href={`tel:+91${SOCIAL_LINKS.CONTACT.PHONE}`}>
                    +91 {SOCIAL_LINKS.CONTACT.PHONE}
                  </a>
                </p>
                <p>
                  <strong>
                    <i className="bi bi-envelope-at"></i> Email:
                  </strong>{" "}
                  <a href={`mailto:${SOCIAL_LINKS.CONTACT.EMAIL}`}>
                    {SOCIAL_LINKS.CONTACT.EMAIL}
                  </a>
                </p>
                <p>
                  <strong>
                    <i className="bi bi-file-earmark-person"></i> Resume:
                  </strong>{" "}
                  <a href="/Ramratan_Gupta.pdf" target="_blank">
                    Download Resume
                  </a>
                </p>
              </div>
              <div className="social-links d-flex mt-4">
                <a
                  href={`https://wa.me/91${SOCIAL_LINKS.CONTACT.PHONE}?text=Hi`} title="WhatsApp"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" title="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href={SOCIAL_LINKS.X} target="_blank" title="X">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href={SOCIAL_LINKS.X} target="_blank" title="Stack Overflow">
                  <i className="bi bi-stack-overflow"></i>
                </a>
                <a href={SOCIAL_LINKS.GITHUB} target="_blank" title="Github">
                  <i className="bi bi-github"></i>
                </a>
                <a href={SOCIAL_LINKS.LEETCODE} target="_blank" title="Leetcode">
                  <img src="https://img.icons8.com/?size=20&id=9L16NypUzu38&format=png&color=000000"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a
        href="#"
        id="scroll-top"
        className={`scroll-top d-flex align-items-center justify-content-center ${
          isVisible ? "active" : ""
        }`}
        onClick={scrollToTop}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

// Export the component
export default Footer;
