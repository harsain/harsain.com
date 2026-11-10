# How to Update Your Site

The site is a static Next.js export. Almost everything you see is driven by one data file.

## 1. Content: `src/lib/data.ts`

Roles (the "decision records"), the impact numbers, Base2 Labs products, capabilities, stack and credentials all live here.

- **Add or change a role:** edit the `adrs` array. It is newest first; each entry supersedes the one below it. Fields: `num`, `title`, `org`, `role`, `period`, `status` (`'accepted'` for the current role, `'superseded'` for the rest), `body`, optional `consequence` (a measurable result), optional `items` (key initiatives, with `listLabel`), `tags`, `chain`, and `commit` (used by the git log view).
- **Add a Labs product:** add an entry to `labs` with `stage: 'private'` or `'beta'`.
- **Headline, summary, contact links:** `profile` and `site` at the top of the file.

If a field is optional and left out, that part of the card simply doesn't appear.

## 2. Avatar

Replace `public/avatar.jpg` (a square image works best). It is used on the page and as the social-share image.

## 3. Theme

Colours and layout are in `src/app/globals.css`. The light and dark palettes are the two sets of variables at the top. Light is the default; a visitor's choice is remembered in their browser.

## 4. Writing posts (optional)

Add a Markdown file to `content/blog/` with this at the top:

```
---
title: "Your title"
date: "2026-01-31"
summary: "One sentence."
tags: ["Architecture"]
---
```

Add `externalUrl: "https://..."` to link out to a post published elsewhere. A "notes" link appears in the header automatically once at least one post exists. With no posts, the blog pages stay out of the navigation and the sitemap.

## 5. Deploying to GitHub Pages (Static Hosting)

This project is now configured to be deployed as a static site on GitHub Pages.

### Step 1: Create a GitHub Repository

If you haven't already, create a new repository on GitHub. **Do not** initialize it with a README or .gitignore file.

### Step 2: Push Your Code

Follow the instructions on GitHub to push your existing local repository to the remote one you just created.

### Step 3: Configure GitHub Pages

1.  In your repository on GitHub, go to **Settings > Pages**.
2.  Under the "Build and deployment" section, select **GitHub Actions** as the source.
3.  GitHub will suggest a workflow. You can use the "Next.js" workflow template. A file will be created at `.github/workflows/nextjs.yml`.

### Step 4: Configure the Next.js Workflow

You will need to make one small but important change to the default Next.js workflow file:

```yaml
# .github/workflows/nextjs.yml

# ... (other configuration)

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Detect Package Manager
        # ...
      - name: Setup Node
        # ...
      - name: Restore cache
        # ...
      - name: Install dependencies
        # ...
      - name: Build with Next.js
        run: npm run build # Or yarn build, etc.
      
      # This is the important part for GitHub Pages!
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out # This must point to the 'out' directory

  # ... (deployment job)
```

Ensure the `path` for the `upload-pages-artifact` action is set to `./out`. The `next build` command (when `output: 'export'` is set) creates the static files in the `out` directory.

After you commit this workflow file, GitHub Actions will automatically build your site and deploy it. Your site will be available at `https://<your-username>.github.io/<your-repository-name>/`.
