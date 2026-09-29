<a name="top"></a>

<div align="center">

# ByteSpace New

### An online-learning platform, built pixel-accurate from a Figma design

ByteSpace New is a front-end implementation of a course marketplace: a landing page, sign in and
registration, course search, course details with lessons and reviews, and a creator profile. All
content is typed static data, so there is no backend to set up.

<p>
  <img alt="Next.js 16"     src="https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white">
  <img alt="React 19"       src="https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white">
  <img alt="TypeScript"     src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white">
  <img alt="Tailwind CSS 4" src="https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white">
  <img alt="Vercel"         src="https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white">
</p>

**[Live demo](LIVE_URL_HERE)** · **[Preview](#preview)** · **[Getting started](#getting-started)**

</div>

---

<details>
<summary><strong>Table of contents</strong></summary>

- [Preview](#preview)
- [Screenshots](#screenshots)
- [About the project](#about-the-project)
- [Features](#features)
- [Pages and routes](#pages-and-routes)
- [Getting started](#getting-started)
- [Deployment](#deployment)
- [Author](#author)

</details>

---

## Preview

<p align="center">
  <a href="docs/preview.mp4"><img src="docs/preview.gif" alt="ByteSpace New walkthrough (click for the full-quality MP4)" width="100%"></a>
</p>

<p align="center"><sub>Click the animation to open the full-quality MP4.</sub></p>

The walkthrough covers the home page, course search, a course with its lessons and reviews,
a creator profile, and the sign in and registration screens.

**Live demo:** [LIVE_URL_HERE](LIVE_URL_HERE)

<p align="right"><a href="#top">Back to top</a></p>

---

## Screenshots

### Home

<p align="center"><img src="docs/screenshots/showcase-home.png" alt="ByteSpace New home page" width="100%"></p>

<p align="center"><sub>Landing page, first screen. The full page also has partners, course categories, learning paths, testimonials and a footer.</sub></p>

### Sign in and registration

<p align="center"><img src="docs/screenshots/showcase-auth.png" alt="Sign in and registration pages" width="100%"></p>

<p align="center"><sub>Sign in (left) and registration (right) share one split layout.</sub></p>

### Course pages

<p align="center"><img src="docs/screenshots/showcase-courses.png" alt="Course details, lessons and reviews" width="100%"></p>

<p align="center"><sub>Course details, lessons and reviews (left to right), with the shared enrolment sidebar.</sub></p>

### Creator profile

<p align="center"><img src="docs/screenshots/showcase-creator.png" alt="Creator profile page" width="100%"></p>

<p align="center"><sub>Creator profile with bio, follower stats and the creator's courses.</sub></p>

<p align="right"><a href="#top">Back to top</a></p>

---

## About the project

<p align="center">
  <b>A modern learning marketplace, built with the precision of a design system.</b><br>
  <sub>Discover courses &nbsp;·&nbsp; follow creators &nbsp;·&nbsp; start learning</sub>
</p>

ByteSpace New is a front-end implementation of an online-course platform. It started as a frontend
assessment: turn a Figma design into a fast, accessible and maintainable Next.js application that
matches the original as closely as practical.

<table>
  <tr>
    <td width="33%" valign="top">
      <h4>Design fidelity</h4>
      Built from 1440 px Figma frames. Every page was checked against its frame by comparing
      rendered output and text positions. Tablet and mobile layouts are inferred from the desktop design.
    </td>
    <td width="33%" valign="top">
      <h4>Clean architecture</h4>
      Routes in <code>app/</code>, logic in <code>features/</code>, shared code in
      <code>components/</code> and <code>lib/</code>. ESLint fails the build if a feature imports another feature.
    </td>
    <td width="33%" valign="top">
      <h4>Fast by default</h4>
      Course and creator pages are generated at build time, fonts are self-hosted, and the only
      runtime dependencies are Next.js and React.
    </td>
  </tr>
</table>

**Scope:** landing page (required), sign in, registration, course search, course details with
lessons and reviews, creator profile and a custom 404. All content is typed static data, so no
backend is needed.

<p align="right"><a href="#top">Back to top</a></p>

---

## Features

- Landing page with hero, partner logos, category tabs, course grid, learning paths, creator tools,
  call to action, testimonials and footer
- Course search page with filter bar, course grid and pagination
- Course detail pages with About, Lessons and Reviews tabs and an enroll card
- Creator profile page
- Login and register forms with client-side validation for name, email and password
- Toast notification for links that are not built yet
- Custom 404 page
- Statically generated course and creator pages through `generateStaticParams`
- Local fonts (Satoshi, Clash Display) and Poppins through `next/font`
- Responsive layouts inferred from the desktop design

<p align="right"><a href="#top">Back to top</a></p>

---

## Pages and routes

| Screen          | Route                                 |
| --------------- | ------------------------------------- |
| Home            | `/`                                   |
| Login           | `/login`                              |
| Register        | `/register`                           |
| Search          | `/courses`                            |
| Course details  | `/courses/[slug]`                     |
| Course lessons  | `/courses/[slug]/lessons`             |
| Course reviews  | `/courses/[slug]/reviews`             |
| Creator profile | `/creators/[slug]`                    |
| 404 Not Found   | any unknown URL (`app/not-found.tsx`) |

Sample data exists for the course `build-digital-asset` and the creator `purepearl-studio`.

<p align="right"><a href="#top">Back to top</a></p>

---

## Getting started

**Prerequisites:** Node.js 20.9 or newer and npm.

```bash
git clone https://github.com/parvej-brur/ByteSpace-New.git
cd "ByteSpace New"
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To run a production build:

```bash
npm run build
npm run start
```

### Scripts

| Command             | Purpose                      |
| ------------------- | ---------------------------- |
| `npm run dev`       | Start the development server |
| `npm run build`     | Production build             |
| `npm run start`     | Serve the production build   |
| `npm run lint`      | Lint with ESLint             |
| `npm run lint:fix`  | Lint and auto fix            |
| `npm run typecheck` | Type check with `tsc`        |

<p align="right"><a href="#top">Back to top</a></p>

---

## Deployment

<p align="center">
  <a href="LIVE_URL_HERE"><img alt="View live site" src="https://img.shields.io/badge/View_Live_Site-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"></a>
</p>

<p align="center"><b>Live URL:</b> <a href="LIVE_URL_HERE">LIVE_URL_HERE</a></p>

<p align="right"><a href="#top">Back to top</a></p>

---

## Author

<table>
  <tr>
    <td width="200" align="center" valign="top">
      <a href="https://github.com/parvej-brur"><img src="https://github.com/parvej-brur.png?size=240" width="140" alt="Parvej Sikdar"></a>
      <br><br>
      <a href="https://github.com/parvej-brur"><img alt="GitHub" src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"></a>
      <br>
      <a href="LINKEDIN_URL"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"></a>
    </td>
    <td valign="top">
      <h3>Parvej Sikdar</h3>
      <b>Frontend Software Engineer</b>
      <p>
        4+ years shipping production React, Next.js and TypeScript products, plus cross-platform
        React Native apps. I have owned the frontend end to end as the sole engineer, from
        architecture to App Store and Play Store releases, and led code reviews. Seeking a role with
        ownership of architecture and delivery.
      </p>
      <p>
        <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-323330?style=flat-square&logo=javascript&logoColor=F7DF1E">
        <img alt="React" src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB">
        <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white">
        <img alt="React_Native" src="https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB">
        <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white">
        <img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white">
      </p>
    </td>
  </tr>
</table>

<p align="right"><a href="#top">Back to top</a></p>
