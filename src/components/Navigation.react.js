"use client"; // Important for Next.js 13+ client components
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SITE_CONFIG,SOCIAL_LINKS} from '@/constants';
const Navigation = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pathname = usePathname();
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  }
  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  }
  return (
    <header
      id="header"
      className={`header d-flex align-items-center sticky-top ${
        isMobileNavOpen ? "mobile-nav-active" : ""
      }`}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link onClick={closeMobileNav} href="/" className={pathname == "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            
            <li>
              <Link onClick={closeMobileNav}
                href="/contact-us/"
                className={pathname == "/contact-us/" ? "active" : ""}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <i
            className={`mobile-nav-toggle d-xl-none bi ${
              isMobileNavOpen ? "bi-x" : "bi-list"
            }`}
            onClick={toggleMobileNav}
          ></i>
        </nav>

        <Link onClick={closeMobileNav} className="p-3" href={`https://wa.me/91${SOCIAL_LINKS.CONTACT.PHONE}?text=Hi`}>
          <i className="bi bi-whatsapp"></i>
        </Link>
      </div>
    </header>
  );
};

// Export the component
export default Navigation;
