# Scope of Work 
The scope of work includes "Design", "Development" and "Deployment" so that the dental clinic/hospital would have an online presence.
This is the list of pages which are planned after going through the list of competitors.

## Pages
1. Home Page
- Hero with CTA (Book Appointment via Calendly)
- Overview of practice
- Highlighted services
- Testimonials preview
- Insurance/financing highlights
- Google Reviews widget
- CTA buttons (Call / Book Appointment)

2. About Pages
2.1 About the Dentist
- Bio
- Qualifications
- Associations/awards

2.2 Meet the Team
- Hygienists
- Assistants
- Staff photos

2.3 Our Clinic / Why Choose Us
- Clinic mission + values
- Tour of facility
- Technology list

3. Services Pages (Individual Pages for SEO)
- Each page will have: overview → symptoms → procedure → FAQs → before/after (optional)

3.1 General Dentistry
- Dental Exams & Cleanings
- X-rays
- Fillings
- Root Canal Treatment
- Tooth Extraction

3.2 Cosmetic Dentistry
- Teeth Whitening
- Veneers
- Cosmetic Bonding
- Smile Makeover

3.3 Restorative Dentistry
- Crowns
- Bridges
- Dental Implants
- Dentures & Partials

3.4 Orthodontics
- Invisalign / Clear Aligners
- Braces

3.5 Emergency Dentistry
- Same-day appointments
- Emergency hotline

3.6 Pediatric Dentistry (Optional)

4. Patient Information
4.1 New Patient Info
- What to expect
- First visit requirements
- Paperwork

4.2 Insurance & Financing
- Insurance providers accepted
- Payment plans
- Discounts / memberships

4.3 FAQs
- General dental FAQs + clinic-specific FAQs

5. Smile Gallery
- Before/after images

6. Testimonials
- Embedded Google Reviews
- Optional video testimonials

7. Blog / Articles (Optional)
- Static pages

8. Contact Section
8.1 Contact Us Page
- Clinic address
- Google Maps embed
- Working hours
- Phone number
- WhatsApp button
- Contact form (AWS SES backend)

8.2 Book Appointment
- Direct Calendly embed
- CTA: “Schedule Now”

9. Legal Pages
- Privacy Policy
- Terms of Service
- Refund/Cancellation Policy (Optional)
- HIPAA compliance statement (if US)

## Deliverables Summary
### Website Pages
- Home
- About (Dentist, Team, Clinic)
- Services (10–15 pages depending on list)
- Patient Info (New Patient, Insurance, FAQs)
- Gallery
- Testimonials
- Blog (optional)
- Contact
- Appointment Booking
- Legal pages

### Backend Functionality
- Contact form (AWS SES)
- Insurance form (optional)
- Newsletter/lead capture (optional)

### Integrations
- Calendly booking
- Google Maps
- WhatsApp click-to-chat
- Google Reviews embed
- AWS SES email system

## Coding Style and Standard
1. Make sure whatever information we put in pages should be customisable from a JSON file. That is, all the text will be written in JSON file [e.g. home page titel, home page section1 heading, home page section3 para etc.]. The tsx files should only have variables not any hard coded text
2. The website mostly will be static but responsive. So we need to focus on css and make sure we rely very less on backned.
3. Don't use emojis anywhere
4. Use consistent logging wherever required
5. Use consistent UI elements (like buttons, borders, shadows). Clearly define the colors in some global file and use them everywhere. Branding colors are: 
- #117598
- #A1C65D
- #74C6D1
- #70CCB9
- #FFFFFF
- #000000
6. Use poppins as font family.
7. FFD (Freeport Family Dentistry) logo is: FFD_Logo.jpeg

## Figma Designs
Here you can find figma designs: https://www.figma.com/design/pdpmKeM9viyTI9gsUtW1tP/Freeport-Family-Dentistry?node-id=40-2666&t=YjFfZMEfZtQJsEfr-0