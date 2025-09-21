# Nithin Thampi · Portfolio

An interactive, resume-driven portfolio site built with Next.js 15, TypeScript, and Tailwind CSS. The site is designed for static export and deployment to GitHub Pages, featuring light/dark themes, animated sections, and a data-driven architecture powered by a structured `resume.json` file.

## ✨ Highlights

- **Modern stack** – Next.js App Router, TypeScript (strict), Tailwind CSS 4, Framer Motion, and next-themes.
- **Data first** – All profile content is sourced from [`data/resume.json`](data/resume.json) and strongly typed.
- **Responsive UI** – Vibrant design with animated sections, skill meters, and smooth scroll navigation.
- **DX excellence** – ESLint + Prettier, Jest + Testing Library, Husky + lint-staged, path aliases, and pnpm workflows.
- **Static deployment** – Configured for `next export` with GitHub Actions to publish to GitHub Pages.

## 📁 Project structure

```
├── app/                  # App Router entry, global layout, and styles
├── components/           # Reusable UI, layout, and theme primitives
├── sections/             # Page sections composing the portfolio
├── data/resume.json      # Structured resume data source
├── lib/                  # Typed resume loader and utilities
├── types/                # Shared TypeScript interfaces
├── .github/workflows/    # CI and GitHub Pages deployment pipelines
└── jest.config.js        # Jest + Testing Library configuration
```

## 🚀 Getting started

1. **Install dependencies** (pnpm is required):

   ```bash
   corepack enable
   pnpm install
   ```

2. **Run the development server**:

   ```bash
   pnpm dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

3. **Static export** (generates the `out/` directory for GitHub Pages):

   ```bash
   pnpm export
   ```

## 🧪 Quality scripts

| Command             | Description                                 |
| ------------------- | ------------------------------------------- |
| `pnpm lint`         | Run ESLint with the shared configuration    |
| `pnpm typecheck`    | Verify TypeScript types with `tsc --noEmit` |
| `pnpm test`         | Execute Jest unit tests                     |
| `pnpm format`       | Check formatting with Prettier              |
| `pnpm format:write` | Apply Prettier formatting fixes             |

Husky pre-commit hooks run `lint-staged` to format and lint only staged files.

## 📄 Resume data model

The site consumes the structured JSON in [`data/resume.json`](data/resume.json). Update this file to refresh the UI with new experience, skills, projects, or contact information. Types are defined in [`types/resume.ts`](types/resume.ts) to provide compile-time safety.

## 🌐 Continuous deployment

- **CI workflow** – `.github/workflows/ci.yml` runs linting, type checks, and unit tests on every push and pull request.
- **GitHub Pages deploy** – `.github/workflows/deploy.yml` builds and exports the static site on pushes to `main`, publishing via GitHub Pages.

## 📬 Contact form

The contact form triggers a prefilled email draft to `resume.basic.email`, ensuring compatibility with static hosting environments. Update the email or supporting content in `resume.json` as needed.

## 📝 License

This project is provided as-is for portfolio purposes. Feel free to adapt the structure for your own résumé experience.
