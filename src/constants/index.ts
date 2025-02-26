export const SITE_CONFIG = {
    NAME: "Ramratan Gupta",
    URL: "https://www.ramratangupta.github.io"    
  } as const;

  export const SOCIAL_LINKS = {
    FACEBOOK: process.env.NEXT_PUBLIC_FACEBOOK_URL || "#",
    TWITTER: process.env.NEXT_PUBLIC_TWITTER_URL || "#",
    INSTAGRAM: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#",
    LINKEDIN: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#",
    CONTACT: {
        EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "ramratan.gupta@gmail.com",
        PHONE: "9313583357",
      }
  } as const;