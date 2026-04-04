# GitHub Pages Personal Website Template

A polished **English personal website starter** for GitHub Pages.

This template includes:

- **Profile**
- **Education**
- **Papers**
- **Experience**
- **Media support** for text, images, video, and audio
- **Visitor Map** with built-in **ClustrMaps** integration

## 1. Quick start

### Option A: easiest deployment (recommended)

1. Create a repository named:

```bash
<your-github-username>.github.io
```

2. Upload all files from this template to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` / root
5. Wait a few minutes.
6. Your site will be available at:

```bash
https://<your-github-username>.github.io
```

## 2. Edit your content

Open `index.html` and replace the placeholder text in these sections:

- hero
- profile
- education
- papers
- experience
- contact

## 3. Replace media files

### Profile photo
Replace:

```bash
assets/images/profile-placeholder.png
```

### Cover image
Replace:

```bash
assets/images/media-cover.png
```

### Video
Replace:

```bash
assets/media/sample-video.mp4
```

### Audio
Replace:

```bash
assets/media/sample-audio.wav
```

## 4. Enable the visitor map

This template already contains a **ClustrMaps** mount point.

### What you need to do

1. Deploy your website first.
2. Go to ClustrMaps and create a widget for your public site URL.
3. In the script snippet they generate, locate the value after `?d=`.
4. Open `script.js` and replace:

```js
REPLACE_WITH_YOUR_CLUSTRMAPS_ID
```

with your real widget ID.

### Example

If ClustrMaps gives you something like:

```html
<script type="text/javascript" id="clustrmaps" src="https://cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=a&t=tt&d=YOUR_REAL_ID"></script>
```

then copy only:

```text
YOUR_REAL_ID
```

and paste it into `script.js`.

After that, push the change to GitHub and refresh your site.

## 5. Custom domain (optional)

If you buy a domain like `yourname.com`, you can connect it later in:

- **Settings → Pages → Custom domain**

If you use a custom domain, also enable HTTPS after DNS is ready.

## 6. Suggested personal links

You may want to add:

- GitHub
- Google Scholar
- ORCID
- LinkedIn
- CV PDF
- Email

## 7. File structure

```text
github-pages-personal-site-template/
├── index.html
├── styles.css
├── script.js
├── .nojekyll
├── README.md
└── assets/
    ├── images/
    │   ├── profile-placeholder.png
    │   ├── media-cover.png
    │   └── visitor-map-placeholder.svg
    └── media/
        ├── sample-video.mp4
        └── sample-audio.wav
```

## 8. Notes

- This template is intentionally written in **plain HTML/CSS/JS** so it deploys easily on GitHub Pages.
- If later you want blog posts, paper collections, or automatic BibTeX rendering, you can migrate to **Jekyll**, **Hugo**, or **Astro**.
