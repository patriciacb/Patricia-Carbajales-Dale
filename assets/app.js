(function () {
  const data = window.siteContent;
  let activeYear = "All";
  let searchTerm = "";
  let showAllPublications = false;
  let showAllExperience = false;

  const byId = (id) => document.getElementById(id);

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function linkNode(href, text) {
    const link = document.createElement("a");
    link.href = href;
    link.textContent = text;
    link.target = href.startsWith("http") ? "_blank" : "";
    link.rel = href.startsWith("http") ? "noreferrer" : "";
    return link;
  }

  const focusIcons = {
    ai: '<path d="M12 3v3"/><path d="M12 18v3"/><path d="M3 12h3"/><path d="M18 12h3"/><path d="m5.6 5.6 2.1 2.1"/><path d="m16.3 16.3 2.1 2.1"/><path d="m18.4 5.6-2.1 2.1"/><path d="m7.7 16.3-2.1 2.1"/><circle cx="12" cy="12" r="3.5"/>',
    center: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/><path d="M8 6v12"/><path d="M16 6v12"/>',
    people: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    network: '<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="7" r="2.5"/><circle cx="9" cy="18" r="2.5"/><path d="m8.3 7.1 7.4-.2"/><path d="m7.1 8.2 1.8 7.4"/><path d="m16.4 9.1-5.8 7"/>',
    teaching: '<path d="M3 7h18"/><path d="M6 7v11"/><path d="M18 7v11"/><path d="M8 18h8"/><path d="M9 11h6"/><path d="M9 14h4"/>',
    partners: '<path d="M8 12h8"/><path d="M12 8v8"/><circle cx="12" cy="12" r="3"/><circle cx="5" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="12" cy="19" r="2"/>'
  };

  function iconNode(name) {
    const wrap = el("span", "focus-icon");
    wrap.setAttribute("aria-hidden", "true");
    wrap.innerHTML = `<svg viewBox="0 0 24 24">${focusIcons[name] || focusIcons.network}</svg>`;
    return wrap;
  }

  function renderMetrics() {
    const root = byId("metric-grid");
    data.metrics.forEach((metric) => {
      const item = el("div", "metric");
      item.append(el("strong", "", metric.value), el("span", "", metric.label));
      root.append(item);
    });
  }

  function renderFocus() {
    const root = byId("focus-grid");
    data.focusAreas.forEach((area) => {
      const card = el("article", "focus-card");
      const top = el("div", "focus-card-top");
      top.append(iconNode(area.icon), el("span", "focus-signal", area.signal));
      card.append(top, el("h3", "", area.title), el("p", "", area.body));
      root.append(card);
    });
  }

  function renderImpactStories() {
    const root = byId("impact-stories");
    data.impactStories.forEach((story) => {
      const card = el("article", "story-card");
      const content = el("div");
      content.append(el("p", "story-meta", story.meta), el("h3", "", story.title), el("p", "", story.body));
      card.append(content);
      if (story.link) {
        card.append(linkNode(story.link, story.linkLabel || "Read more"));
      }
      root.append(card);
    });
  }

  function renderTimeline() {
    const root = byId("timeline");
    const toggle = byId("experience-toggle");
    root.replaceChildren();
    const visibleExperience = showAllExperience ? data.experience : data.experience.slice(0, 4);

    toggle.hidden = data.experience.length <= 4;
    toggle.textContent = showAllExperience ? "Show less experience" : "Show full experience";

    visibleExperience.forEach((role) => {
      const item = el("article", "timeline-item");
      const date = el("div", "timeline-date", role.date);
      const body = el("div");
      body.append(el("h3", "", role.title), el("p", "", role.organization), el("p", "", role.body));
      item.append(date, body);
      root.append(item);
    });
  }

  function renderPublicationTabs() {
    const root = byId("publication-tabs");
    const years = ["All", ...Array.from(new Set(data.publications.map((pub) => pub.year))).sort((a, b) => b - a)];
    years.forEach((year) => {
      const button = el("button", "publication-tab", String(year));
      button.type = "button";
      button.setAttribute("aria-pressed", String(year === activeYear));
      button.addEventListener("click", () => {
        activeYear = year;
        showAllPublications = false;
        renderPublications();
      });
      root.append(button);
    });
  }

  function publicationMatches(pub) {
    const yearMatch = activeYear === "All" || pub.year === activeYear;
    const haystack = [pub.year, pub.title, pub.authors, pub.venue, ...(pub.tags || [])]
      .join(" ")
      .toLowerCase();
    return yearMatch && haystack.includes(searchTerm.toLowerCase());
  }

  function renderPublications() {
    const root = byId("publication-list");
    const tabs = byId("publication-tabs");
    const toggle = byId("publication-toggle");
    root.replaceChildren();
    Array.from(tabs.children).forEach((tab) => {
      tab.setAttribute("aria-pressed", String(tab.textContent === String(activeYear)));
    });

    const filtered = data.publications.filter(publicationMatches);
    const isLimitedView = activeYear === "All" && !searchTerm && !showAllPublications;
    const visiblePublications = isLimitedView ? filtered.slice(0, 6) : filtered;

    toggle.hidden = filtered.length <= 6 || activeYear !== "All" || Boolean(searchTerm);
    toggle.textContent = showAllPublications ? "Show fewer publications" : "Show all publications";

    if (!filtered.length) {
      root.append(el("p", "empty-state", "No publications match this filter."));
      return;
    }

    visiblePublications.forEach((pub) => {
      const item = el("article", "publication-item");
      item.append(
        el("p", "publication-meta", `${pub.year} | ${pub.venue}`),
        el("h3", "", pub.title),
        el("p", "", pub.authors)
      );
      if (pub.link) {
        item.append(linkNode(pub.link, "Publication link"));
      }
      if (pub.tags && pub.tags.length) {
        const tags = el("div", "publication-tags");
        pub.tags.forEach((tag) => tags.append(el("span", "publication-tag", tag)));
        item.append(tags);
      }
      root.append(item);
    });
  }

  function renderGrants() {
    const root = byId("grants-list");
    data.grantsAndHonors.forEach((grant) => {
      const item = el("article", "grant-item");
      item.append(el("p", "grant-meta", grant.meta), el("strong", "", grant.title), el("p", "", grant.body));
      root.append(item);
    });
  }

  function renderTeaching() {
    const root = byId("teaching-grid");
    data.teachingAndSpeaking.forEach((item) => {
      const card = el("article", "teaching-card");
      card.append(el("h3", "", item.title), el("p", "", item.body));
      root.append(card);
    });
  }

  function renderCollaboration() {
    const root = byId("collaboration-grid");
    data.collaboration.forEach((item) => {
      const card = el("article", "collaboration-card");
      card.append(el("h3", "", item.title), el("p", "", item.body));
      root.append(card);
    });
  }

  function renderNews() {
    const root = byId("news-grid");
    data.news.forEach((item) => {
      const card = el("article", "news-card");
      card.append(el("p", "news-meta", item.meta), el("h3", "", item.title), el("p", "", item.body));
      if (item.link) {
        card.append(linkNode(item.link, "Open story"));
      }
      root.append(card);
    });
  }

  function setupMenu() {
    const toggle = document.querySelector(".nav-toggle");
    const menu = byId("site-menu");
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    menu.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function setupSearch() {
    const input = byId("publication-search");
    input.addEventListener("input", (event) => {
      searchTerm = event.target.value.trim();
      showAllPublications = false;
      renderPublications();
    });
  }

  function setupPublicationToggle() {
    const toggle = byId("publication-toggle");
    toggle.addEventListener("click", () => {
      showAllPublications = !showAllPublications;
      renderPublications();
    });
  }

  function setupExperienceToggle() {
    const toggle = byId("experience-toggle");
    toggle.addEventListener("click", () => {
      showAllExperience = !showAllExperience;
      renderTimeline();
    });
  }

  renderMetrics();
  renderFocus();
  renderImpactStories();
  renderTimeline();
  renderPublicationTabs();
  renderPublications();
  renderGrants();
  renderTeaching();
  renderCollaboration();
  renderNews();
  setupMenu();
  setupSearch();
  setupPublicationToggle();
  setupExperienceToggle();
})();
