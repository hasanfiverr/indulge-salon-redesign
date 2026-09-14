# Indulge Salon Redesign (prototype)

This repository contains a mobile-first, responsive static prototype redesign for Indulge Salon. It uses only verified business information collected from the official site and does NOT modify the live production website.

Branches
- redesign/modern-site — working branch with the redesign files.

How to preview locally
1. Clone the repo:
   git clone https://github.com/hasanfiverr/indulge-salon-redesign.git
2. Checkout the redesign branch:
   git checkout redesign/modern-site
3. Serve the files locally (example using Python):
   python3 -m http.server 8000
   Open http://localhost:8000 in your browser.

What was added
- Mobile-first static pages: index.html, services.html, gallery.html, reviews.html, contact.html
- Location pages: locations/york-pa.html and locations/greensboro-ga.html
- Assets: CSS and JS (assets/css/main.css and assets/js/main.js)
- JSON-LD structured data for both locations in data/

Verified business data used
- York, PA: 970 South George Street, York, PA 17403 — Phone: (717) 846-4424 — Fax: (717) 846-1838 — Hours as on the official site.
- Greensboro, GA: Parkside Commons, 1104 Market Street, Greensboro, GA 30642 — Phone: (706) 999-9911 — Fax: (706) 999-9912 — Hours as on the official site.
- Emails: info@indulgesalon.com, indulgesaloncustomerservice@gmail.com

Notes & items needing verification
- Reviews: This prototype contains structural placeholders for verified reviews. Please confirm which exact testimonials (text + reviewer name + source) from the live site or Google Business should be displayed and I will add them verbatim.
- Booking provider deep-links or embeddable widget: I linked Book actions to the main official site and phone numbers. Provide the booking provider deep-links or embed code if you want direct booking from this prototype.
- High-resolution images: The prototype uses simple placeholders for gallery and hero visuals. Provide original images to replace them for production.

Deployment
- This is a static prototype. To integrate with WordPress, Wix, or another CMS, copy the HTML into theme templates, or use these pages as references for a front-end implementation.

Accessibility & performance notes
- Mobile-first layout, accessible navigation, large tap targets for booking CTA.
- Images should be optimized (WebP, srcset) before production deployment.

If you want, I can now:
- Add verified review texts into reviews.html (provide permission to copy from the live site),
- Replace placeholders with your high-res images,
- Add booking provider embed or deep-links if you provide the URLs.
