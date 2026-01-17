# Effrem's Professional Page

## Project info

## How to Manage Your Website Content

This section contains instructions for how to update the website's content, including blog posts, photos, and general text.

**You can make all these changes directly on GitHub!**
1.  Go to the file you want to edit (e.g., a blog post in `src/content/blog/`).
2.  Click the "Edit this file" (pencil) icon.
3.  Make your changes.
4.  Scroll down, add a short description of your changes, and click "Commit changes."

### 📝 Adding and Updating Blog Posts

Your blog posts are written in simple text files called Markdown files. You can find them in the `src/content/blog/` folder.

**To Update an Existing Blog Post:**
1.  Go to the `src/content/blog/` folder.
2.  Open the Markdown file (`.md`) for the post you want to edit (e.g., `first-post.md`).
3.  At the very top of the file, you'll see a section enclosed by `---` lines. This is called "frontmatter" and contains important information about your post:
    *   `title`: The title of your blog post.
    *   `description`: A short summary of your post.
    *   `publishDate`: The date your post was published (e.g., `2023-01-01T00:00:00Z`).
    *   `author`: The author's name.
    *   `image`: The path to the main image for your blog post (e.g., `"/achievement.avif"`).
    *   `hidden`: Set to `true` if you want to hide the post, `false` to show it.
4.  Below the `---` lines, you'll find the main content of your blog post. You can edit this text directly.
    *   Use a single `#` for the main heading of your post.
    *   Use `##` for subheadings.
    *   You can use `**text**` for **bold** text and `*text*` for *italic* text.
    *   To add a new paragraph, just leave an empty line between sentences.
5.  Save your changes.

**To Add a New Blog Post:**
1.  Go to the `src/content/blog/` folder.
2.  Create a new file with a `.md` extension (e.g., `my-new-post.md`).
3.  Copy the frontmatter section from an existing post and paste it at the top of your new file. Update the `title`, `description`, `publishDate`, `author`, and `image` as needed.
4.  Write your blog post content below the frontmatter, using Markdown formatting as described above.
5.  Save your new file.

### 📸 Adding and Updating Photos

Photos on your website are stored in two main places:
*   `public/`: For general images like logos, favicons, or images used in blog posts.
*   `src/assets/`: For images that might be optimized by the website system (like hero images).

**To Update a Photo in a Blog Post:**
1.  Place your new image file (e.g., `my-new-image.avif`) into the `public/` folder.
2.  Open the blog post's Markdown file (`.md`) in `src/content/blog/`.
3.  In the frontmatter section, change the `image` property to point to your new image (e.g., `image: "/my-new-image.avif"`).
4.  Save your changes.

**Important Note on Images:**
For best performance and appearance, all images should have a clear purpose and be appropriately sized. If you're replacing an image, try to use one with similar dimensions to avoid layout issues.

### ✍️ Adding and Updating General Text (Copy)

Most of the general text on your website (like headlines, descriptions, and button labels) is managed in special translation files. This allows the website to support multiple languages easily. These files use a format called **JSON**.

**What is JSON?**
JSON (JavaScript Object Notation) is a simple way to organize information. Think of it like a structured list or a dictionary. It uses curly braces `{}` to define objects, square brackets `[]` for lists, and colons `:` to separate a "key" (the name of a piece of information) from its "value" (the actual text). All text values must be enclosed in double quotes `""`.

**Why is JSON Validity Important?**
It's crucial that these JSON files are perfectly structured. If there's a missing comma, an extra quote, or any other small mistake, the website might not be able to read the text, and parts of your site could appear blank or broken.

**To Update Text:**
1.  Go to the `src/i18n/` folder.
2.  Open the JSON file (`.json`) for the language you want to edit:
    *   `en.json` for English text.
    *   `he.json` for Hebrew text.
3.  Inside these files, you'll see text organized in a structured way (e.g., `"hero": { "headline": "Your amazing headline here" }`).
4.  Find the specific text you want to change and update it. Be careful not to change the structure (the parts in quotes like `"hero"` or `"headline"`). Only change the actual text content.
5.  **Always double-check your changes for correct JSON syntax.** Ensure all commas, colons, and double quotes are in their right places. There are many free online JSON validators you can use if you're unsure.
6.  Save your changes.


**Some text might also be directly in the website's components.** These are files ending with `.astro` or `.tsx` in the `src/components/` folder. If you can't find the text in the `src/i18n/` files, it might be directly in one of these component files. Editing these directly requires a bit more care.
