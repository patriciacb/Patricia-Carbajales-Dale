# Editing Dr. Carbajales-Dale's Website

Open `index.html` in a browser to view the site.

Most content lives in `data/site-content.js`. To add a new publication, copy one publication object, paste it near the top of the `publications` array, and update:

- `year`
- `title`
- `authors`
- `venue`
- `link`
- `tags`

Example:

```js
{
  year: 2026,
  title: "New manuscript title",
  authors: "Author, A., Carbajales-Dale, P., & Collaborator, C.",
  venue: "Journal Name",
  link: "https://doi.org/...",
  tags: ["Public health", "GIS", "AI"]
}
```

To update professional highlights, edit the arrays named `metrics`, `focusAreas`, `impactStories`, `experience`, `grantsAndHonors`, `teachingAndSpeaking`, `collaboration`, and `news`.

The geospatial background images are `assets/geospatial-network-hands.jpeg` and `assets/geospatial-water-globe.jpeg`. The profile image is `assets/profile-patricia.jpg`. The compact teaching/speaking panel uses `assets/conference-iconic.jpg`, `assets/gis-day-colleagues.jpg`, and `assets/student-outreach.jpg`. You can replace any of these files using the same filename, or update the image paths in `index.html`, `assets/styles.css`, and `data/site-content.js`.

The About section links to `assets/Patricia_Carbajales-Dale_CV.docx`. Replace that file with an updated CV using the same filename when needed.

This site has no build step. After editing, refresh the browser.
