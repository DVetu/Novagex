# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static portfolio/marketing site for Novagex IT consulting. No build step, no framework, no package manager. Open `index.html` directly in a browser to test.

## Communication Preferences
- For non-trivial or multi-file changes, present 2-3 options with short descriptions; rate each (10 = best, 1 = poor)
- For small/obvious fixes, or when the user explicitly asks for direct edits, make changes directly
- When exploring code and finding patterns similar to the target (e.g., reusable logic, duplicate code):
  - Do not automatically refactor or merge - report the similarity instead
  - Briefly note: what was found, potential implications, suggested next step
  - Do not protect me. Be direct, and use brutal honesty.
- When a prompt mentions the request is for **testing**:
  - Evaluate if the changes can be easily reversed.
  - If reversible: implement with clear flagging so they can be undone.
  - If not reversible: make no changes and explain why.

## Architecture

**i18n system** — the core pattern to understand before touching any UI text:

- `js/LibEn.js` and `js/LibFr.js` each populate `window.translations.EN` and `window.translations.FR` with key/value pairs.
- `LanguageManager` (in `js/script.js`) reads the active language from `localStorage`, then iterates every element with class `lang` and sets `textContent` from `translations[lang][element.id]`.
- Exception: if the element is an `<img>`, the `src` attribute is set instead (used for language-specific card images, e.g. `Card1BackImg`).
- Language detection order: saved `localStorage` preference → browser `navigator.language` → fallback `EN`.

**To add a translatable string**: give the element a unique `id` and the `lang` class, then add matching keys to both `LibEn.js` and `LibFr.js`.

**Carousel** (`Carousel` object in `js/script.js`): auto-advances every 5 s, pauses on hover. Height is computed dynamically from the active slide's natural aspect ratio on every `goTo()` call. Dot navigation is created programmatically on `Init()`.

**Scroll animations**: `IntersectionObserver` watches elements with class `animate-on-scroll`. Each section (`#about`, `#projects`, `#contact`) has a hard-coded animation name in `animateOnScroll()`.

**Project cards**: CSS 3-D flip on hover (front = text, back = screenshot image). The card aspect ratio (`886 / 643`) is fixed in CSS to match the screenshot dimensions. Touch devices navigate to `data-href` on tap instead of flipping.

## CSS tokens

All colors and spacing live in `:root` in `css/style.css`. Always use the existing custom properties (`--primary-color`, `--shadow-light`, `--spacing-default`, etc.) rather than raw values.
