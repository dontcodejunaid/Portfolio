# 🚀 Mohammed Junaid Baig — Personal Portfolio Website

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A modern, responsive, and fully interactive personal portfolio website showcasing my skills, projects, experience, and education — built with pure HTML, CSS, and JavaScript

---

## 🌐 Live Preview.

> Open `index.html` directly in your browser, or run with a local server:
```bash
npx http-server -p 3000
```
Then visit: **http://localhost:3000**

---

## ✨ Features

- 🌙 **Dark / Light Mode Toggle** — Persists user preference via `localStorage`
- ⌨️ **Typewriter Animation** — Dynamic hero section role cycling
- 📌 **Scroll Spy Navigation** — Active nav links tracked via Intersection Observer
- 🎨 **Glassmorphic Header** — Floating header with blur effect
- 🗂️ **Project Filtering** — Filter by Web, Mobile, or AI/ML category
- ✅ **Live Form Validation** — Real-time feedback on each contact field
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile
- 🎞️ **Smooth Animations** — Hover effects, card lifts, and micro-interactions
- 🎨 **Custom Scrollbar** — Accent-colored custom scrollbar styling

---

## 📁 Project Structure

```
Portfolio/
├── index.html        # Main HTML structure & all sections
├── style.css         # Styling, themes, layout, animations
├── script.js         # Interactivity, typewriter, filters, form validation
└── profile_user.png  # Profile photo
```

---

## 📄 Sections

| Section | Description |
|---|---|
| **Home** | Hero intro with typewriter animation and CTA buttons |
| **About** | Biography, skills grid, and profile photo |
| **Experience** | Work experience, education, and Oracle Cloud certifications |
| **Projects** | Filterable project cards linked to GitHub repos |
| **Contact** | Validated contact form with submission feedback |
| **Footer** | Social links (GitHub, LinkedIn) and location/email |

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic page structure |
| **CSS3** | Styling, animations, Flexbox & Grid, custom properties |
| **JavaScript (ES6+)** | Interactivity, DOM manipulation, Intersection Observer |
| **Google Fonts** | Inter & Fira Code typography |
| **CSS Variables** | Centralized dark/light theme system |

---

## 🗂️ Featured Projects

| Project | Category | Technologies |
|---|---|---|
| 🛍️ [ShopVerse Mini E-Commerce](https://github.com/dontcodejunaid/ShopVerse-Mini-E-Commerce) | Web | HTML, CSS, JavaScript |
| ✅ [Focus Flow — Todo App](https://github.com/dontcodejunaid/focus-flow-todo) | Web | HTML, CSS, JavaScript |
| 📝 [Simple Notes App](https://github.com/dontcodejunaid/simple-notes-app) | Web | HTML, CSS, JavaScript |
| 📅 AI Time Table Generator | Web / AI | Java, Servlets, SQL |
| ☁️ Is It Raining? App | AI / Mobile | Flutter, Dart, Google AI Studio |
| 📱 College Academic Manager | Mobile | Flutter, Firebase |
| 🎙️ RVC Voice Cloning System | AI / ML | Python, Machine Learning |

---

## 🏆 Certifications

- ☁️ **Oracle Cloud Infrastructure — Certified DevOps Professional** (2025)
- 🤖 **Oracle Cloud Infrastructure — Certified Generative AI Professional** (2025)
- 🎓 **Oracle Cloud Infrastructure — Certified AI Foundations Associate** (2025)

---

## 🚀 Getting Started

### Option 1: Open Directly
Just double-click `index.html` — no build step needed.

### Option 2: Local Server (Recommended)
```bash
# Using Node.js http-server
npx http-server -p 3000

# Using Python
python -m http.server 3000
```

### Option 3: GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Set source to `main` branch, root `/`
3. Save — your site will be live at `https://dontcodejunaid.github.io/Portfolio`

---

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `style.css`:
```css
:root {
  --accent: #64ffda;        /* Primary accent color */
  --bg-primary: #0a192f;    /* Main background */
  --bg-secondary: #112240;  /* Card background */
}
```

### Adding a New Project
Add a new card inside `#projects-grid` in `index.html`:
```html
<div class="project-card" data-category="web">
  <div class="project-top">
    <div class="folder-icon">🚀</div>
    <div class="project-links">
      <a href="YOUR_GITHUB_URL" target="_blank">...</a>
    </div>
  </div>
  <h3 class="project-title">Project Name</h3>
  <p class="project-desc">Short description here.</p>
  <div class="project-tech">
    <span>React</span>
    <span>Node.js</span>
  </div>
</div>
```

---

## 📬 Contact

| Platform | Link |
|---|---|
| 📧 Email | baigjunaid187@gmail.com |
| 💼 LinkedIn | [mohammedjunaidbaig187](https://www.linkedin.com/in/mohammedjunaidbaig187/) |
| 🐙 GitHub | [dontcodejunaid](https://github.com/dontcodejunaid) |

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Designed & Built with ❤️ by <strong>Mohammed Junaid Baig</strong> © 2026</p>
