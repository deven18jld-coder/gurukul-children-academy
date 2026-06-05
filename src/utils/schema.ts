import { contactData } from '../data/contact';

const siteUrl = 'https://kiddiesacademy.in';

export function getSchoolSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["School", "EducationalOrganization", "LocalBusiness"],
    "name": contactData.schoolName,
    "url": siteUrl,
    "logo": `${siteUrl}/favicon.svg`,
    "description": "Kiddies Academy - Where Every Child's Story Begins. Nurturing bright futures with a holistic and playful approach to learning.",
    "foundingDate": contactData.establishedYear,
    "telephone": contactData.phone.display,
    "email": contactData.email.display.replace('mailto:', ''),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": contactData.address.street,
      "addressLocality": contactData.address.city,
      "addressRegion": contactData.address.state,
      "postalCode": contactData.address.pincode,
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      contactData.whatsapp.value
    ]
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": contactData.schoolName,
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${siteUrl}${item.url}`
    }))
  };
}
