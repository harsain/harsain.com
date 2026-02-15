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

1.  Upload your new image to a hosting service (like Firebase Storage, Imgur, etc.).
2.  Get the direct URL for the image.
3.  Find the image you want to replace in `src/lib/placeholder-images.json` (e.g., the one with `id: "hero-avatar"`).
4.  Replace the `imageUrl` with your new URL.

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

## 4. Overall Page Structure: `src/app/page.tsx`

This file is the main entry point for your homepage. It imports the content from `data.ts` and `placeholder-images.json` and uses various components from the `src/components/` directory to build the final page. You typically won't need to edit this file unless you want to add, remove, or reorder entire sections.

## 5. Styling: `src/app/globals.css`

This file contains the core color theme for your website (using CSS variables like `--primary`, `--background`, etc.). If you want to change the site's color scheme, this is the place to do it.

By editing these files, you have full control over your portfolio's content and appearance.
