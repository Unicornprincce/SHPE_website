
Animated landing page
Executive board/member showcase
About page
Events page
RSVP system
Admin management
Responsive modern UI

Built efficiently using AI while still learning the important engineering concepts.

Tech Stack
Frontend
Next.js
React
Tailwind CSS
Backend
Node.js
Next.js API routes
Database
PostgreSQL
ORM
Prisma
Auth
Clerk
Deployment
Vercel
Development Tools
Cursor
GitHub
ChatGPT
Core Site Structure
Landing Page
│
├── Hero Section
│   ├── Animated intro
│   ├── SHPE branding
│   └── CTA buttons
│
├── Executive Board Section
│   ├── Member cards
│   ├── Roles
│   └── Social links
│
├── About Page
│   ├── Mission
│   ├── Organization info
│   └── SHPE values
│
├── Events Page
│   ├── Upcoming events
│   ├── Event cards
│   └── RSVP buttons
│
├── RSVP System
│   ├── RSVP form
│   ├── Database storage
│   └── Attendance tracking
│
└── Admin Dashboard
    ├── Create events
    ├── Edit events
    ├── Manage RSVPs
    └── Member management
Folder Scaffolding
shpe-website/
│
├── app/
│   ├── page.tsx
│   ├── about/
│   ├── events/
│   ├── dashboard/
│   └── api/
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── MemberCard.tsx
│   ├── EventCard.tsx
│   ├── RSVPForm.tsx
│   └── Footer.tsx
│
├── lib/
│   ├── prisma.ts
│   └── auth.ts
│
├── prisma/
│   └── schema.prisma
│
├── public/
│
├── styles/
│
└── utils/
Build Order (IMPORTANT)

Build vertically.

Do NOT:

finish all frontend first
then backend later

Instead:

Phase 1 — Initial Setup
AI Prompt

Create a Next.js project using App Router, Tailwind CSS, TypeScript, and Prisma.

Tasks
Initialize project
Setup Tailwind
Setup Prisma
Setup GitHub repo
Push first commit
Deploy blank project to Vercel
Phase 2 — Landing Page Scaffold
Goal

Build visual skeleton only.

Components
Navbar
Hero section
Typing animation
CTA buttons
Background effects
AI Prompt

Create a modern SHPE landing page with a responsive navbar, hero section, typing animation, and Tailwind styling.

Phase 3 — Executive Board Section
Components
Member cards
Role display
Headshots
LinkedIn buttons
Database Table
members
- id
- name
- role
- image
- linkedin
AI Prompt

Generate reusable React member cards using Tailwind CSS with image, role, and social links.

Phase 4 — Events System

This is your FIRST real full-stack feature.

Step 1 — Database
events
- id
- title
- description
- location
- date
- image
Step 2 — API Routes

Routes:

GET /api/events
POST /api/events
Step 3 — Frontend

Components:

Event cards
Event page
Event detail modal
Step 4 — Deployment

Deploy immediately after working.

Phase 5 — RSVP System
Database
rsvps
- id
- userId
- eventId
- timestamp
Features
RSVP button
Form validation
Database save
Attendance count
AI Prompt

Build a full RSVP system using Next.js API routes, PostgreSQL, and Prisma.

Phase 6 — Authentication

Use Clerk.

Features
Sign in
Sign up
Protected admin routes
Protected Routes
/dashboard
/api/admin/*
Phase 7 — Admin Dashboard
Features
Create events
Delete events
Edit member profiles
View RSVPs