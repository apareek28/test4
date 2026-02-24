# NEUROFLOW Enterprise Website Blueprint

## Sitemap & Navigation Structure
- `/` Home
- `/platform.html`
- `/solutions.html`
- `/industries.html`
- `/security.html`
- `/architecture.html`
- `/enterprise.html`
- `/case-studies.html`
- `/about.html`
- `/careers.html`
- `/contact.html`
- `/demo-request.html`
- `/docs-api.html`
- `/compliance.html`
- `/legal.html`

Primary navigation prioritizes buyer intent: evaluate platform, validate trust posture, then convert through contact/demo CTAs.

## UX Flows & Conversion Funnel Logic
1. **Discovery flow:** Home → Platform/Solutions → Architecture/Security.
2. **Validation flow:** Industries → Case Studies → Compliance.
3. **Procurement flow:** Enterprise → Legal → Contact.
4. **High-intent conversion:** Any page CTA → Demo Request form submission.

CTA strategy:
- Architecture Review CTA (technical buyers)
- Strategy Call CTA (executives)
- System Audit CTA (security/compliance teams)
- Demo CTA (procurement gate)

## Design System Tokens
### Color tokens
- `--accent-red: #F24444`
- `--accent-blue: #44A0F2`
- `--accent-green: #7AF244`
- Neutral: `--bg-primary`, `--bg-surface`, white, gray text tiers, transparent glass layers.

### Typography scale
- H1: `clamp(2rem, 4vw, 3.3rem)`
- H2: `clamp(1.5rem, 2.5vw, 2.3rem)`
- Body: 1rem base, 1.6 line height
- Kicker: 0.78rem uppercase

### Spacing system
Tokenized increments `--space-1` through `--space-8` (4px to 64px equivalent).

### Grid system
- Content width: `min(1200px, calc(100vw - 2.5rem))`
- Desktop: 3-column metrics/cards
- Tablet: 2-column
- Mobile: 1-column

## Component Library
- `site-header` sticky glass navigation shell
- `brand` identity lockup
- `btn` variants (`primary`, `secondary`, `success`, `alert`)
- `panel` glass card shell
- `card` content unit
- `metric` KPI block
- `diagram` AI topology canvas
- `form-grid` responsive enterprise form layout
- notification pattern via `[data-notice]`

## AI Visual System
- Subtle animated node graph in hero
- Topology cards and orchestration language in architecture/security pages
- Infrastructure map placeholders reserved in case studies and docs content
- Motion: low amplitude, 8s easing cycle, no bounce/flash

## CMS Schema (summary)
See `docs/cms-schema.json`.
Collections:
- `pages`
- `caseStudies`
- `industries`
- `complianceFrameworks`
- `teamMembers`
- `openRoles`

## API Structure (summary)
See `docs/api-contract.yaml`.
- `GET /v1/content/pages/{slug}`
- `GET /v1/case-studies`
- `POST /v1/demo-requests`
- `POST /v1/contact-requests`

## SEO Model
- Unique title/meta per page
- Semantic landmarks (`header`, `nav`, `main`, `footer`)
- Crawlable static routes
- Descriptive internal linking for topical authority
- Future-ready JSON-LD insertion points per page template

## Analytics & Event Tracking
Key events:
- `cta_click`
- `nav_click`
- `demo_request_submitted`
- `contact_request_submitted`
- `case_study_opened`
- `docs_api_viewed`

Properties:
- `page`
- `cta_type`
- `industry_interest`
- `deployment_preference`
- `persona`

## Performance Strategy
- Static first architecture
- Shared CSS/JS assets only
- Minimal JavaScript for progressive enhancement
- Responsive layouts with no blocking third-party scripts
- Prepared for CDN deployment and immutable asset caching

## Security Model
- Form submission pattern designed for secure backend handoff
- CSP and security headers to be enforced at edge/web server
- Input validation and anti-abuse controls required server-side
- Audit-ready logging model via API endpoints

## Accessibility Model
- Skip links and keyboard-friendly navigation
- ARIA labels on primary nav and form
- High contrast text/background tiers
- Focus-visible interaction states
- Logical heading hierarchy and semantic sections

## Folder Structure
- `assets/site.css` design system + components
- `assets/site.js` progressive enhancement
- HTML pages at project root for static route parity
- `docs/` for architecture, CMS, API, and governance artifacts

## Deployment Strategy
- Host as static site on enterprise CDN (Akamai/CloudFront/Azure Front Door)
- Protect forms behind API gateway with WAF + rate limiting
- Enforce TLS 1.2+, HSTS, and managed certificates
- Integrate CI pipeline: lint, accessibility checks, broken link tests, artifact publishing
