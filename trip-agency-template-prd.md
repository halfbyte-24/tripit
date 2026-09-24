# Trip Agency Website Template — Product Requirements Document (PRD)

## 1. Project Overview

Build a **premium, reusable website template for trip organisers / travel agencies** that sell organised trips, tours, group departures, and custom travel experiences.

The site should feel like a modern travel brand rather than a generic travel-booking website. The visual direction can take **inspiration from the supplied reference screenshots**, especially the large travel imagery, horizontal destination browsing, trip cards, FAQ accordion, enquiry/contact flow, and immersive scrolling.

**Important:** the supplied website is a rival/reference brand. We are **not copying it**. Do not reproduce its exact layout, wording, branding, logo treatment, typography, spacing, icons, content, imagery, animations, or component arrangement. Use the screenshots only to understand the type of experience and interaction we want, then create an original visual system.

The template should be reusable for different travel businesses by replacing:
- Brand name and logo
- Hero imagery
- Destinations
- Trip plans
- Prices
- Dates/departures
- Contact information
- WhatsApp number
- About/company content
- FAQ content
- Social links

---

# 2. Primary Goals

### Customer-facing goals

1. Immediately communicate the travel company's identity and the kind of trips it organises.
2. Make upcoming trips visually attractive and easy to explore.
3. Let visitors inspect itinerary, pricing, inclusions, food options, stay/transport details, and dates.
4. Make enquiry extremely easy through **WhatsApp**.
5. Provide a proper contact form whose submissions become leads in the company's admin dashboard.
6. Create a dedicated Tours page where the complete catalogue can be explored.
7. Keep the site fast, responsive, premium, and mobile-friendly.

### Business goals

1. Generate more qualified enquiries.
2. Give the travel organiser a professional digital presence.
3. Turn website visitors into leads without requiring a full e-commerce/online payment system.
4. Allow the business owner/admin to manage trips and incoming leads from one dashboard.
5. Make this a reusable freelance template that can be customised for multiple travel agencies.

---

# 3. Recommended Tech Stack

Use the following stack unless there is a strong implementation reason to change it:

- **Frontend:** React + Vite
- **Language:** JavaScript only
- **Styling:** Plain CSS / CSS modules or well-organised CSS files
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router
- **Backend / Database:** Supabase
- **Authentication:** Supabase Auth for protected admin area
- **Deployment:** Vercel
- **Source control:** GitHub

### Explicit constraints

- **Do not use TypeScript.**
- Avoid Tailwind for this template; the goal is a distinctive CSS-driven visual system that is easy to customise for different clients.
- Avoid unnecessary libraries when CSS/React can solve the requirement cleanly.

---

# 4. Brand / Visual Direction

## 4.1 Overall mood

The visual identity should communicate:

**Adventure + premium travel + warmth + trust + exploration**

It should not look like a cheap holiday-booking portal.

Use:
- Large cinematic travel photography
- Strong editorial typography
- Generous whitespace
- Rounded but refined cards
- Strong image-to-text hierarchy
- Smooth motion
- Subtle texture / grain where useful
- Premium buttons and micro-interactions
- Clear pricing and trip information
- Large section headings

The visual language should be **original**, using the reference screenshots only as inspiration.

---

# 5. Suggested Color System

The supplied colour reference contains five strong colours. The sampled palette is approximately:

| Role | Colour | Hex |
|---|---|---|
| Deep Charcoal | Primary dark | `#222222` |
| Brick Red | Secondary accent | `#891F11` |
| Saffron Orange | Main accent / CTA | `#FE940A` |
| Warm Yellow | Highlight | `#FDE24D` |
| Travel Blue | Brand/supporting colour | `#3A77C7` |

Add neutral colours for readability:

| Role | Suggested Hex |
|---|---|
| Ivory / Warm Background | `#F7F1E6` |
| Soft Sand | `#EDE4D4` |
| White | `#FFFFFF` |
| Muted Text | `#6F6A61` |
| Dark Text | `#222222` |

### Suggested usage

- **Charcoal:** headings, dark sections, footer, overlays.
- **Blue:** brand colour, links, secondary buttons, navigation accents.
- **Orange:** primary CTA, active states, enquiry buttons.
- **Yellow:** tiny highlights, badges, active indicators, decorative accents.
- **Brick red:** occasional supporting accent; do not overuse.
- **Ivory/sand:** main page backgrounds to prevent the website from becoming visually harsh.
- **White:** cards, forms, high-contrast content blocks.

The exact final palette can be tuned during implementation. The goal is a recognisable travel identity, not literal reproduction of the reference site's colours.

---

# 6. Typography Direction

Use a modern editorial pairing.

Suggested direction:

- **Display / headings:** a bold modern sans-serif or slightly editorial display face.
- **Body:** clean neutral sans-serif.

Examples that can be evaluated:
- Manrope
- Plus Jakarta Sans
- Inter
- DM Sans
- Space Grotesk

Do not copy the typography from the reference site.

Large headings should feel confident and cinematic.

Example tone:

**EXPLORE BEYOND  
THE ORDINARY**

rather than generic copy such as:

**WELCOME TO OUR TRAVEL WEBSITE**

---

# 7. Website Information Architecture

Main navigation:

- Home
- Tours
- Upcoming Trips / Departures
- About
- Contact
- Enquire Now

Optional navigation dropdowns:

- Explore by Destination
- Trip Types
- Popular Tours

Navigation should remain simple on mobile.

---

# 8. HOME PAGE — COMPLETE FLOW

## Section 1 — Immersive Hero

The first viewport should feel cinematic.

### Visual

Use a **large AI-generated travel image** selected specifically for the brand.

Possible visual direction:
- Himalayan road disappearing into mountains
- Group of travellers overlooking a valley
- Coastal road with travellers
- Desert landscape at sunset
- Trekking trail through dramatic terrain

The image should have:
- Strong depth
- Clear foreground/middle/background
- Space around the subject so text can be placed cleanly
- Rich but natural lighting
- No logos
- No watermarks
- No text generated inside the image

### Layout

Hero should include:

- Transparent or floating navigation
- Brand logo
- Large headline
- Short supporting statement
- Primary CTA: **EXPLORE TRIPS**
- Secondary CTA: **ENQUIRE ON WHATSAPP**
- Optional small trust indicator such as “50+ departures” or “Trusted by 1,000+ travellers”
- Small scroll indicator

### Example visual hierarchy

Small eyebrow:
`TRAVEL • EXPLORE • DISCOVER`

Large title:
`YOUR NEXT  
GREAT STORY  
STARTS HERE`

Supporting copy:
`Curated group journeys, unforgettable landscapes and trips worth talking about.`

Buttons:
`EXPLORE TOURS`
`WHATSAPP US`

### Hero motion

On initial load:

- Image slowly scales from ~1.03 to 1.0.
- Headline enters with a subtle upward reveal.
- Buttons fade/slide in.
- Background may have a very subtle parallax effect.
- Do not use aggressive motion that makes the page tiring.

On scroll:
- Hero content gradually moves/fades.
- Image may slightly zoom or shift.

---

# 9. Section 2 — Intro / Brand Story

Immediately after the hero, create a short brand introduction.

Possible layout:

Left:
- Small label
- Large statement

Right:
- 2–3 paragraphs about the company
- CTA to About page

Example concept:

`WE PLAN THE JOURNEY.  
YOU COLLECT THE STORIES.`

This section should make the company feel human and trustworthy.

---

# 10. Section 3 — Explore Destinations / Horizontal Scroll

This is one of the core interactions.

Create a visually distinctive **horizontal destination/trip browser**.

### Behaviour

As the user reaches this section:
- vertical scrolling can drive a horizontal movement sequence, OR
- the section can use a horizontally scrolling carousel with snap behaviour.

The interaction must remain comfortable on desktop and mobile.

### Cards

Each card should contain:

- Large destination image
- Destination name
- Short descriptor
- Number of available trips
- Starting price
- Small arrow/icon
- Optional category badge

Example:

`LADAKH`
`Roads, passes, monasteries and impossible landscapes`
`4 TRIPS`
`FROM ₹24,499`

### Interaction

- Cards snap into position.
- Hover slightly enlarges image / reveals additional information.
- Clicking a card opens the destination/tour page.
- Arrow controls should also be available.
- Keyboard interaction should work.

### Visual direction

Cards can vary slightly in size for editorial rhythm.

Use:
- rounded image containers
- image overlays
- large destination labels
- subtle gradients
- a strong active-card state

Do not reproduce the reference site's exact card widths or spacing.

---

# 11. Section 4 — Upcoming Trips / Departures

After destinations, surface trips with actual future dates.

Suggested heading:

`UPCOMING DEPARTURES`

or

`THE NEXT JOURNEYS`

Each trip card should show:

- Trip image
- Trip name
- Destination
- Duration
- Departure date
- Starting price
- Trip type
- Difficulty (where relevant)
- Available seats / status if applicable
- CTA: `VIEW TRIP`
- CTA: `ENQUIRE`

Example:

`3D / 2N`
`MEGHALAYA ESCAPE`
`12 OCT 2026`
`FROM ₹8,999`

### Optional date strip

A horizontal date/departure selector can sit above the cards.

---

# 12. Section 5 — Trip Detail Experience

Clicking a trip must open a complete trip detail route, for example:

`/tours/manali-weekend`

or

`/tours/ladakh-adventure`

## Trip detail hero

Include:

- Full-width cinematic trip image
- Destination
- Trip title
- Duration
- Starting price
- Next departure
- Primary CTA

Example:

`LADAKH • 6 DAYS / 5 NIGHTS`

`THE HIGH-ALTITUDE ROAD JOURNEY`

`FROM ₹24,499 / PERSON`

Buttons:
- `ENQUIRE ON WHATSAPP`
- `VIEW ITINERARY`

---

# 13. Trip Detail — Itinerary

The itinerary should be one of the most important parts of the page.

Use an expandable timeline.

Example:

### Day 01
**ARRIVE IN LEH**

- Airport pickup
- Hotel check-in
- Rest and acclimatisation
- Evening market walk

### Day 02
**LEH → NUBRA**

- Khardung La
- Scenic viewpoints
- Camp check-in

Each day can expand/collapse.

Use:
- numbered day markers
- vertical line / timeline
- location icon
- transport icon where relevant

---

# 14. Trip Detail — Cost & Package Information

Clearly show:

### Starting Price

`₹24,499 / person`

Then include a concise breakdown:

- Stay
- Meals
- Transportation
- Transfers
- Guide / trip leader
- Permits / entry fees if applicable

Also show:

### Exclusions

- Flights
- Personal expenses
- Insurance
- Anything explicitly excluded

Do not make visitors hunt for pricing information.

---

# 15. Trip Detail — Food / Stay / Travel Features

Trip data should support optional attributes:

### Food
- Vegetarian available
- Non-vegetarian available
- Breakfast included
- Lunch included
- Dinner included

### Stay
- Hotel
- Hostel
- Camp
- Homestay

### Transport
- SUV
- Tempo Traveller
- Bus
- Train
- Flight
- Mixed transport

### Trip Type
- Group trip
- Family
- Backpacking
- Trek
- Weekend getaway
- Couple
- Adventure

Use small visual feature chips/icons.

---

# 16. Trip Detail — Inclusions / Exclusions

Two-column layout on desktop.

### Included
Use check icons.

### Not Included
Use simple neutral icons or understated indicators.

The layout should stay readable on mobile.

---

# 17. Section 6 — Most Popular Trips

Create a premium "popular trips" showcase inspired by the reference concept but redesigned.

Heading:

`TRIPS PEOPLE KEEP TALKING ABOUT`

Show 3–6 cards.

Each card should have:

- Large photography
- Destination
- Trip name
- Duration
- Rating/review count if real data exists
- Price
- Popularity badge such as `MOST BOOKED`
- CTA

Do not invent fake reviews or ratings for production clients.

For the template, use clearly marked dummy data until the client supplies real data.

---

# 18. Section 7 — Why Travel With Us

Create a compact benefit section.

Possible benefits:

- Small groups
- Local expertise
- Carefully planned itineraries
- Transparent pricing
- Verified stays
- Dedicated trip leader
- Quick WhatsApp support
- Flexible custom trips

Use icons and short descriptions.

Avoid generic marketing overload.

---

# 19. Section 8 — Offers / Seasonal CTA

Create a large visual promotional banner.

Possible content:

`WEEKEND ESCAPE`
`SPECIAL DEPARTURE PRICE`

or

`EARLY BIRD`
`SAVE ON SELECT DEPARTURES`

The section should be data-driven so the admin can change the offer later.

Use one strong background image with an overlay.

---

# 20. Section 9 — FAQ

Use an accordion layout.

The FAQ section should answer common travel questions.

Example questions:

1. What is included in the trip cost?
2. How does the booking/enquiry process work?
3. Can I join the trip alone?
4. Are vegetarian and non-vegetarian food options available?
5. Can I request a private/custom trip?
6. What happens if weather or road conditions affect the itinerary?
7. What documents do I need?
8. How do I get the final itinerary?

### Behaviour

- One or multiple items may be open.
- Smooth height animation.
- Clear plus/minus indicator.
- Good keyboard accessibility.

---

# 21. Section 10 — Newsletter

Create a clean newsletter section.

Example:

`GET THE NEXT JOURNEY IN YOUR INBOX`

Supporting copy:
`New departures, destination ideas and limited offers — without the noise.`

Input:
- Email

CTA:
`SUBSCRIBE`

Store the email in Supabase.

Admin can later export subscriber data.

Include a small privacy note.

---

# 22. Section 11 — Final CTA / Enquiry Banner

Create a large final CTA before the footer.

Example:

`READY TO PLAN THE JOURNEY?`

Supporting text:
`Tell us where you want to go, who is travelling and roughly when. We'll help shape the trip.`

Buttons:

`ENQUIRE NOW`
`WHATSAPP US`

The WhatsApp button should open WhatsApp with a pre-filled message.

Example prefilled message:

`Hi, I found your website and would like to know more about your trips. I am interested in [Trip Name].`

---

# 23. WhatsApp Enquiry Flow

The main "Enquire Now" actions should support WhatsApp.

### Behaviour

When a customer clicks `Enquire on WhatsApp`:

1. Open WhatsApp.
2. Use the agency's configurable WhatsApp number.
3. Pre-fill the message.
4. Include relevant trip name when clicked from a trip page/card.

Example:

`Hi! I’m interested in the Manali Weekend Escape. Please share the upcoming dates, itinerary and booking details.`

The number should live in configuration / database rather than being hardcoded across components.

---

# 24. Contact Us Page

Route:

`/contact`

This page should feel like a proper business contact/lead page.

## Left side

Show:

- Phone
- WhatsApp
- Email
- Office/location if applicable
- Business hours
- Social links

## Right side

Show contact/enquiry form.

Fields:

- Full Name
- Phone / WhatsApp
- Email (optional)
- Preferred destination
- Preferred trip / trip interest
- Preferred travel date
- Number of travellers
- Message

CTA:

`SEND ENQUIRY`

---

# 25. Contact Form → Admin Dashboard Flow

This is a core business feature.

When the user submits the form:

1. Validate data.
2. Save the lead to Supabase.
3. Show success state to the customer.
4. The lead immediately appears in the admin dashboard.

The dashboard should allow the business owner to call the customer.

### Success message

`Thanks! Your enquiry has been received. Our travel desk will contact you shortly.`

### Optional

Also provide:
- `Chat on WhatsApp`
- `Call Now`

on the success state.

---

# 26. Admin Dashboard

Create a protected admin interface.

Route example:

`/admin`

## Dashboard overview

Display:

- New enquiries
- Open leads
- Contacted leads
- Confirmed enquiries
- Upcoming trips
- Total trips

Use clean summary cards.

---

# 27. Admin — Enquiry Management

A table/list containing:

- Name
- Phone
- Email
- Destination
- Interested trip
- Travel date
- Travellers
- Submitted date
- Status
- Notes

Possible statuses:

- New
- Contacted
- Follow-up
- Confirmed
- Closed

Admin can:

- Open lead
- View complete message
- Call customer
- Open WhatsApp
- Change status
- Add notes
- Delete/archive lead

This area is the main CRM-like function of the template.

---

# 28. Admin — Trip Management

Admin should eventually be able to:

- Add trip
- Edit trip
- Delete/archive trip
- Upload trip cover image
- Add destination
- Set price
- Add itinerary days
- Add inclusions/exclusions
- Set food options
- Add departure dates
- Mark popular
- Mark featured
- Enable/disable trip visibility

This allows the website to become a reusable client CMS instead of a static landing page.

---

# 29. Dedicated Tours Page

Route:

`/tours`

This page should contain the complete tour catalogue.

### Hero

Large heading:

`EXPLORE ALL TOURS`

Supporting text describing the travel company's collection.

### Filters

Provide:

- Search
- Destination
- Trip type
- Duration
- Price range
- Month / departure date
- Difficulty
- Food / package features

### Tour cards

Each card contains:

- Cover image
- Destination
- Name
- Duration
- Starting price
- Next departure
- Badges
- CTA

### UX

Use a grid on desktop.

Use 1-column or 2-column on mobile depending on screen width.

Filtering should happen without full page reloads.

---

# 30. Optional Dedicated Destination Page

Route:

`/destinations/:slug`

A destination page can contain:

- Hero image
- Destination introduction
- Best time to visit
- Popular experiences
- Available tours
- Starting prices
- FAQ
- CTA

This can be added once the base template is working.

---

# 31. Footer

The footer should be visually strong and useful.

Suggested sections:

### Brand
Logo + short description.

### Explore
- Tours
- Popular trips
- Destinations
- Upcoming departures

### Company
- About
- Contact
- FAQ
- Terms
- Privacy

### Talk to us
- Phone
- WhatsApp
- Email
- Instagram / Facebook

### Footer bottom
- Copyright
- Social links
- Small brand statement

Avoid copying the exact column structure of the reference site.

A subtle oversized travel-related decorative graphic can be used in the background.

---

# 32. Scrolling & Animation System

Animations are important but should support the experience.

## Use Framer Motion for:

- Hero entrance
- Section reveal
- Card stagger
- Image transitions
- FAQ open/close
- Modal/drawer transitions
- Page transitions where appropriate

## Use CSS for:

- Hover states
- Image zoom
- button micro-interactions
- scrolling
- gradients
- transitions

## Suggested scroll effects

### Hero
Subtle parallax.

### Destination section
Horizontal movement tied to scroll.

### Trip cards
Fade/slide in when entering viewport.

### Images
Small scale-up on hover.

### Section headings
Short upward reveal.

### CTA sections
Soft entrance animation.

Avoid:
- excessive spinning
- huge text jumps
- long blocking animations
- animations that interfere with navigation

---

# 33. Image Direction

Images are extremely important to the design.

## Hero image generation

Ask Antigravity/image generation to create **original cinematic travel images**, not screenshots or copied site imagery.

The hero images should look like premium travel editorial photography.

Examples:

### Himalayan hero
A dramatic winding mountain road through high-altitude terrain, distant snow peaks, warm evening light, one or two tiny travellers for scale, cinematic depth, realistic photography, wide composition, clean negative space for text.

### Beach hero
Turquoise coastline, dramatic cliffs, travellers walking along the shore, golden-hour light, premium tourism photography, wide cinematic composition.

### Adventure hero
Trekkers crossing a dramatic mountain ridge with large landscape scale, realistic photography, atmospheric depth.

## Destination images

Generate separate images for each destination.

Example destinations:
- Ladakh
- Manali
- Kashmir
- Meghalaya
- Sikkim
- Rajasthan
- Goa
- Kerala
- Spiti
- Uttarakhand

Use image dimensions appropriate to the component:

- Hero: very wide / 16:9 or wider
- Destination cards: portrait-ish or 4:5
- Trip cards: 4:3 or 16:10
- Promotional banner: wide 16:9

Important:
- No embedded text
- No fake logos
- No watermarks
- No strange faces or distorted anatomy
- Keep imagery realistic
- Maintain a coherent photography style across the website

---

# 34. Responsive Design

The website must be designed mobile-first.

## Desktop

- Large cinematic hero
- Horizontal destination sections
- 3-column trip grids where appropriate
- Floating/sticky navigation
- Two-column contact forms
- Spacious section layouts

## Tablet

- Reduce heading scale
- Keep horizontal scrolling
- 2-column card layouts

## Mobile

- Hamburger menu
- Full-width hero
- Swipeable destination cards
- Single-column trip cards
- Sticky bottom/accessible enquiry CTA can be considered
- Accordion-friendly FAQ
- Stacked forms
- Large tap targets

Never simply shrink the desktop layout.

---

# 35. Accessibility

Implement:

- Semantic HTML
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation
- Visible focus states
- Accessible accordion buttons
- Sufficient colour contrast
- Reduced-motion support using `prefers-reduced-motion`
- Proper form labels
- Meaningful button labels

---

# 36. SEO

Every public page should support:

- Unique `<title>`
- Meta description
- Open Graph metadata
- Clean URLs
- Descriptive headings
- Image alt text
- Sitemap
- Robots configuration
- Canonical URLs where appropriate

Trip pages should have destination/trip-specific metadata.

---

# 37. Suggested Supabase Database Structure

## `trips`

Suggested fields:

- `id`
- `title`
- `slug`
- `destination`
- `short_description`
- `description`
- `cover_image`
- `gallery`
- `duration_days`
- `duration_nights`
- `price`
- `original_price` (optional)
- `trip_type`
- `difficulty`
- `food_veg`
- `food_nonveg`
- `stay_type`
- `transport_type`
- `is_featured`
- `is_popular`
- `is_active`
- `created_at`

## `departures`

- `id`
- `trip_id`
- `departure_date`
- `return_date`
- `available_seats`
- `status`
- `created_at`

## `itinerary_days`

- `id`
- `trip_id`
- `day_number`
- `title`
- `description`
- `activities`
- `meals`
- `stay`
- `transport`

## `inquiries`

- `id`
- `name`
- `phone`
- `email`
- `destination`
- `trip_id`
- `travel_date`
- `travellers`
- `message`
- `status`
- `admin_notes`
- `created_at`

## `newsletter_subscribers`

- `id`
- `email`
- `is_active`
- `created_at`

## `destinations`

- `id`
- `name`
- `slug`
- `description`
- `cover_image`
- `is_active`

---

# 38. Admin Security

Use Supabase Auth for the admin area.

Requirements:

- Public users can submit enquiries.
- Public users cannot read all enquiries.
- Only authenticated admins can view/manage enquiries.
- RLS must protect all sensitive tables.
- Never expose service-role keys in the frontend.
- Validate all form input.
- Keep public/write policies as narrow as possible.

---

# 39. Component Architecture

Suggested structure:

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── SectionHeading.jsx
│   ├── DestinationScroller.jsx
│   ├── DestinationCard.jsx
│   ├── UpcomingTrips.jsx
│   ├── TripCard.jsx
│   ├── TripFeatures.jsx
│   ├── ItineraryTimeline.jsx
│   ├── PopularTrips.jsx
│   ├── WhyUs.jsx
│   ├── OfferBanner.jsx
│   ├── FAQ.jsx
│   ├── Newsletter.jsx
│   ├── FinalCTA.jsx
│   ├── Footer.jsx
│   └── WhatsAppButton.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Tours.jsx
│   ├── TourDetails.jsx
│   ├── Destination.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
│
├── admin/
│   ├── AdminLogin.jsx
│   ├── Dashboard.jsx
│   ├── Inquiries.jsx
│   ├── InquiryDetails.jsx
│   ├── TripsManager.jsx
│   └── TripEditor.jsx
│
├── lib/
│   ├── supabase.js
│   ├── whatsapp.js
│   └── helpers.js
│
└── styles/
    ├── variables.css
    ├── global.css
    ├── components.css
    └── responsive.css
```

The exact folder structure can change, but keep the architecture modular and reusable.

---

# 40. Reusable Configuration

The template should be easy to customise.

Centralise:

```js
const siteConfig = {
  brandName: "YOUR BRAND",
  tagline: "Travel beyond the ordinary.",
  phone: "+91XXXXXXXXXX",
  whatsapp: "91XXXXXXXXXX",
  email: "hello@example.com",
  instagram: "",
  facebook: "",
  location: "",
};
```

Do not hardcode the brand identity throughout components.

---

# 41. Dummy Data Requirements

The template must be populated with believable demo content so the entire website can be reviewed without a backend being fully populated.

Create at least:

- 6 destinations
- 8–12 tours
- 3–5 popular trips
- Multiple upcoming departure dates
- 5–8 FAQ entries
- 1–2 promotional offers

Use clearly fictional/demo content.

Do not use another company's brand, phone number, address, or proprietary text.

---

# 42. UX Details

### Buttons

Primary:
- rounded pill or moderately rounded
- high contrast
- animated arrow/icon on hover

Secondary:
- outlined
- subtle background transition

### Cards

- medium/large radius
- soft shadows used sparingly
- image-first
- clear information hierarchy

### Navigation

Desktop:
- floating/sticky navigation can be used

Mobile:
- clean drawer menu

### Floating WhatsApp

Optional floating WhatsApp button on mobile and/or desktop.

Do not allow it to obstruct critical UI.

---

# 43. Error / Empty States

Implement professional states for:

- No trips found
- No upcoming departures
- Form submission failure
- Network error
- Invalid tour URL
- Loading skeletons

Example:

`No journeys match those filters. Try another destination or date.`

---

# 44. Performance Requirements

Optimise the website for fast loading.

Requirements:

- Lazy-load below-the-fold images.
- Use responsive image sizes.
- Prefer WebP/AVIF where supported.
- Avoid oversized background images.
- Keep animation GPU-friendly.
- Avoid excessive JavaScript for scroll effects.
- Prevent layout shift.
- Use loading skeletons where appropriate.

The hero should be visually rich without becoming unnecessarily heavy.

---

# 45. Reference Screenshot Interpretation — What The Supplied Images Are Teaching Us

The following descriptions explain what should be taken from the supplied references. They are **design/interaction references, not instructions to copy the original site**.

### Reference 1 — Full Hero

Shows a travel homepage opening with:
- large panoramic mountain image
- strong oversized title treatment
- floating navigation
- prominent enquiry CTA
- travel search/enquiry controls near the bottom of the hero
- strong contrast between white text and blue mountain background

**Use:** inspiration for the cinematic opening experience and hierarchy.

### Reference 2 — Hero flowing into destinations

Shows the hero visually continuing into the next section rather than feeling like disconnected pages.

**Use:** inspiration for a smooth transition from hero to content.

### Reference 3 — Horizontal destinations

Shows a light background section with multiple large destination cards visible side-by-side.

Cards use:
- destination photography
- destination title
- package count
- price
- circular arrow
- horizontal movement

**Use:** inspiration for the horizontal destination discovery experience.

### Reference 4 — Destination detail page

Shows a destination-specific hero followed by:
- descriptive section
- traveller-type tags
- important highlights
- structured two-column content

**Use:** inspiration for destination/tour detail information architecture.

### Reference 5 — Promotional banner

Shows a wide rounded promotional image panel with:
- large title
- short supporting copy
- CTA button
- arrows / carousel indicators

**Use:** inspiration for an offers/promotional block.

### Reference 6 — Popular / featured trips

Shows several large trip cards with:
- image
- duration badge
- popularity badge
- rating
- trip title
- price
- enquiry CTA

**Use:** inspiration for the "popular trips" section.

### Reference 7 — FAQ section

Shows:
- large left-side heading
- short explanatory copy
- CTA buttons
- right-side accordion

**Use:** inspiration for an FAQ layout; build an original version.

### Reference 8 — Large final CTA

Shows a very large orange section with:
- oversized heading
- short supporting copy
- primary CTA
- contact/phone CTA
- decorative travel illustration

**Use:** inspiration for the final conversion section.

### Reference 9 — Footer

Shows a large dark blue footer with:
- brand summary
- navigation columns
- contact details
- social buttons
- address
- copyright

**Use:** inspiration for footer content density and hierarchy.

### Reference 10 — Contact page

Shows:
- contact details on the left
- large enquiry form on the right
- name / phone / email / message
- strong submission CTA

**Use:** inspiration for the contact page, but the new template must send submissions into its own admin dashboard.

### Reference 11 — Tours catalogue / destination explorer

Shows a dedicated Tours section with a destination navigation panel and a catalogue underneath.

**Use:** inspiration for building the dedicated `/tours` page and destination filtering experience.

### Reference 12 — Colour palette

The supplied palette contains:
- dark charcoal
- brick red
- orange
- warm yellow
- travel blue

Use these as the basis for the new brand identity while adding neutral background colours for balance.

---

# 46. Recommended 5 Reference Images To Give Antigravity

Give Antigravity these five specific screenshots as visual references:

1. **`066cd16d-4c1c-4e35-9877-b7e784c2392a.png`**  
   Use for the **hero / landing-page visual hierarchy**.

2. **`61223a47-71b7-461e-9ed3-6aeda0e878a4.png`**  
   Use for the **horizontal destination-scrolling card experience**.

3. **`3fe0db63-f56c-475c-9e2f-0c88db94ccd1.png`**  
   Use for the **popular/upcoming trip card system**.

4. **`5f4c9752-fd9b-4432-9e64-676d719703f6.png`**  
   Use for the **FAQ / information hierarchy**.

5. **`4ece3029-ca49-4105-ba04-ea4182590133.png`**  
   Use for the **Contact + enquiry form layout**.

The Tours catalogue screenshot and footer screenshot are already sufficiently described in this PRD, so the five above give the most useful visual coverage without overwhelming Antigravity.

---

# 47. What Antigravity Should NOT Do

Do not:

- clone the reference website
- copy the rival's logo
- copy the rival's text
- copy its exact navigation
- use screenshots as website assets
- reproduce exact colours across every section
- copy their card dimensions exactly
- copy their typography exactly
- copy proprietary imagery
- scrape their content
- imitate their branding

Instead:

- create an original brand language
- generate fresh images
- use the same broad UX ideas where useful
- change composition, spacing, typography, colour balance, animation and component styling
- build the site as a reusable template

---

# 48. Implementation Phases

## Phase 1 — Foundation

- React/Vite setup
- CSS variables
- routing
- global typography
- responsive shell
- navbar
- footer
- site configuration

## Phase 2 — Landing Page

- hero
- intro
- destination horizontal scroll
- upcoming trips
- popular trips
- why us
- offer banner
- FAQ
- newsletter
- final CTA

## Phase 3 — Tours

- Tours page
- filtering
- search
- destination browsing
- tour cards
- trip detail page

## Phase 4 — Enquiry System

- WhatsApp integration
- contact form
- Supabase enquiry storage
- success/error states

## Phase 5 — Admin

- auth
- dashboard
- inquiry management
- trip management

## Phase 6 — Polish

- animations
- responsive tuning
- accessibility
- SEO
- performance
- loading/error states

## Phase 7 — Final Content

- generate/select all images
- load demo data
- test WhatsApp links
- test form submissions
- test admin flows
- prepare Vercel deployment

---

# 49. Definition of Done

The template is complete when:

### Frontend
- Home page feels premium and original.
- Hero is visually impressive.
- Horizontal destination section works smoothly.
- Upcoming/popular trips work.
- FAQ works.
- Newsletter form works.
- Footer is complete.
- Contact page works.
- Tours catalogue works.
- Tour detail pages work.
- Responsive behaviour is polished.

### Business functionality
- WhatsApp enquiry works.
- Dynamic trip name is added to WhatsApp messages.
- Contact form submits to Supabase.
- New enquiry appears in admin dashboard.
- Admin can update lead status and notes.
- Admin can manage trips.

### Technical quality
- No TypeScript.
- No console errors.
- Good Lighthouse-oriented performance.
- Proper RLS on Supabase.
- Accessible forms and navigation.
- Mobile layout is fully usable.
- Images are optimised.
- Deployment works on Vercel.

---

# 50. Final Design Principle

The website should make a visitor think:

**“These people know how to plan a great trip.”**

Not:

**“This is just another travel website.”**

The strongest parts of the experience should be:

**cinematic imagery → confident brand statement → interactive trip discovery → detailed itinerary/pricing → easy WhatsApp enquiry → professional follow-up through the admin dashboard.**

Build the first version as a **premium reusable trip-agency template**, keeping the content/data architecture flexible enough that a different travel organiser can be launched by changing configuration, images, trips, pricing, contact information, and branding.
