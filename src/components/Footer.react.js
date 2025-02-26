"use client"; // Important for Next.js 13+ client components
import { useEffect, useState } from "react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/constants";
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
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">{SITE_CONFIG.NAME}</span>
              </a>
              <div className="footer-contact pt-3">
               
                <p className="mt-3">
                  <b>Mobile:</b>{" "}
                  <a href={`tel:+91${SOCIAL_LINKS.CONTACT.PHONE}`}>
                    +91 {SOCIAL_LINKS.CONTACT.PHONE}
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${SOCIAL_LINKS.CONTACT.EMAIL}`}>
                    {SOCIAL_LINKS.CONTACT.EMAIL}
                  </a>
                </p>
              </div>
              <div className="social-links d-flex mt-4">
                <a
                  href={`https://wa.me/91${SOCIAL_LINKS.CONTACT.PHONE}?text=Hi`}
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>
            <strong className="px-1 sitename">{SITE_CONFIG.NAME}</strong>
            <span>All Rights Reserved</span>
          </p>
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
