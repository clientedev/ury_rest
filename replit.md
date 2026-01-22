# URY - Open Source Restaurant Management System

## Overview
URY is an open source ERP designed for restaurant operations, built on top of ERPNext. This repository contains the frontend applications for the URY system.

## Project Structure
- `pos/` - URY POS v2 (React + TypeScript + Vite) - Main POS application
- `urypos/` - URY POS v1 (Vue.js) - Legacy POS application
- `URYMosaic/` - Kitchen Display System (Vue.js)
- `ury/` - Python backend module for Frappe/ERPNext

## Current State
The frontend dev server is running on port 5000. Note that this is a frontend-only setup - the full functionality requires a Frappe/ERPNext backend to be configured.

## Development Setup
- **Language**: Node.js 20
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS

## Running the Application
The `pos` frontend runs via `npm run dev` in the pos directory, configured to port 5000.

## Backend Requirements
This project is designed to work with Frappe/ERPNext. To fully use the POS features:
1. Set up an ERPNext instance
2. Install the URY app via `bench get-app ury`
3. Configure the frontend to connect to your ERPNext backend

## Recent Changes
- 2026-01-22: Initial Replit environment setup
  - Configured Vite to run on port 5000 with allowed hosts for Replit proxy
  - Replaced Jinja2 template variables with static values for standalone development
