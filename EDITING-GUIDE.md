# How to Update Your Portfolio Content

This guide explains the basic structure of your portfolio site so you can easily update its content. Most of the content is centralized in a few key files.

## 1. Primary Content File: `src/lib/data.ts`

This is the most important file for content updates. Almost all the text on your site—your name, summary, skills, experience, and project descriptions—is stored here as a JavaScript object.

To change any text, simply open this file and edit the values within the `profileData`, `skills`, `experience`, and `projects` objects.

**Example: Changing your title**

```typescript
// src/lib/data.ts

export const profileData = {
  // ...
  title: 'Your New Title Here', // <-- Edit this line
  subtitle: 'Your new subtitle',
  // ...
};
```

## 2. Image File: `src/lib/placeholder-images.json`

All images used on the site are defined in this JSON file. Each image has an `id`, a `description`, a `imageUrl`, and an `imageHint`.

To change an image:

1.  Find the image you want to replace in `src/lib/placeholder-images.json` (e.g., the one with `id: "hero-avatar"`).
2.  Replace the `imageUrl` with a direct URL to your new image.

```json
// src/lib/placeholder-images.json
{
  "placeholderImages": [
    {
      "id": "hero-avatar",
      "description": "Avatar for Harsain",
      "imageUrl": "https://your-new-image-url.com/image.jpg", // <-- Replace this URL
      "imageHint": "professional portrait"
    },
    // ... other images
  ]
}
```

## 3. Navigation and Social Links

-   **Header Links**: The main navigation links at the top of the page (`About`, `Experience`, etc.) are in `src/components/site-header.tsx`.
-   **Footer Links**: The social media and contact links in the footer are in `src/components/site-footer.tsx`.

You can edit the `href` (the URL) and the `label` (the visible text) in these files.

## 4. Deploying to GitHub Pages (Static Hosting)

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
