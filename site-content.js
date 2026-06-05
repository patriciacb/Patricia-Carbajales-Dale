/*
  Edit this file when you want to update the website.

  To add a new manuscript:
  1. Copy one object inside the publications array.
  2. Change year, title, authors, venue, link, and tags.
  3. Save the file and refresh index.html in your browser.
*/

window.siteContent = {
  metrics: [
    { value: "20+", label: "Years in GIS leadership, spatial analytics, teaching, and applied research" },
    { value: "2,000+", label: "Students, staff, and faculty supported and trained annually through CCGT" },
    { value: "$8.4M+", label: "Sponsored research portfolio across NSF, NIJ, Clemson, and regional initiatives" },
    { value: "16", label: "Peer-reviewed articles, reports, and GIScience knowledge-base publications" },
    { value: "National", label: "Esri Special Achievement in GIS recognition for Clemson CCGT" }
  ],

  focusAreas: [
    {
      title: "AI-ready geospatial strategy",
      icon: "ai",
      signal: "AI-ready",
      body: "Guides responsible adoption of GeoAI, cloud GIS, remote sensing, and spatial decision support."
    },
    {
      title: "Center leadership and service models",
      icon: "center",
      signal: "2,000+ trained yearly",
      body: "Builds campus-wide services for training, consultation, visualization, data, and grants."
    },
    {
      title: "GIS for vulnerable populations",
      icon: "people",
      signal: "GIS for good",
      body: "Applies spatial methods to health access, emergency response, foster care, justice, and resilience."
    },
    {
      title: "Interdisciplinary translation",
      icon: "network",
      signal: "Many disciplines",
      body: "Connects health, engineering, social science, planning, libraries, data science, and computing teams."
    },
    {
      title: "Teaching and workforce development",
      icon: "teaching",
      signal: "Future workforce",
      body: "Designs training that makes spatial thinking practical, useful, and transferable."
    },
    {
      title: "Partnership across sectors",
      icon: "partners",
      signal: "Cross-sector",
      body: "Works with universities, governments, nonprofits, communities, industry, and professional organizations."
    }
  ],

  impactStories: [
    {
      meta: "CCGT Leadership",
      title: "A center that turns geospatial infrastructure into human capacity",
      body: "At Clemson, Dr. Carbajales-Dale connects research support, teaching, cloud GIS, grant collaboration, and technology partnerships."
    },
    {
      meta: "Emergency Response",
      title: "Spatial tools for action during acute community need",
      body: "Recent public recognition highlights map-driven response after Hurricane Helene and spatial tools under pressure.",
      link: "https://www.esri.com/about/newsroom/arcnews/the-power-to-help",
      linkLabel: "ArcNews feature"
    },
    {
      meta: "Public Health",
      title: "Geographic approaches to health access and social determinants",
      body: "Her publications examine vaccination access, diabetes program participation, rural response, and care patterns."
    },
    {
      meta: "Child and Family Well-Being",
      title: "Spatial insight for foster care and substance-use challenges",
      body: "Her doctoral research uses neighborhood-scale geography to inform prevention strategies for at-risk families.",
      link: "https://open.clemson.edu/all_dissertations/3811/",
      linkLabel: "Dissertation record"
    }
  ],

  experience: [
    {
      date: "2015 - Present",
      title: "Executive Director",
      organization: "Clemson Center for Geospatial Technologies, Clemson University",
      body: "Leads Clemson's geospatial technology center, strategic programs, training, research support, cloud GIS, cyberGIS, grant collaboration, and partnership development."
    },
    {
      date: "2019 - 2022",
      title: "Interim Director",
      organization: "Clemson Data Visualization Lab",
      body: "Supported data visualization capacity and interdisciplinary research communication across Clemson."
    },
    {
      date: "2015 - 2020",
      title: "Visiting Faculty",
      organization: "Department of Public Health Sciences, Clemson University",
      body: "Taught GIS for Public Health and helped connect spatial analysis to health research and community outcomes."
    },
    {
      date: "2014 - 2017",
      title: "Advanced Cyberinfrastructure Research and Education Facilitator",
      organization: "Cyberinfrastructure Technology Integration, Clemson University",
      body: "Advanced cyberinfrastructure adoption for geospatial research, visualization, and high-performance computing."
    },
    {
      date: "2010 - 2014",
      title: "Geospatial Manager and GIS Lecturer",
      organization: "Stanford Geospatial Center and Stanford School of Earth Sciences",
      body: "Managed geospatial support and taught GIScience, GIS for Good, and spatial analysis in an interdisciplinary university setting."
    },
    {
      date: "2003 - 2010",
      title: "GIS Specialist and Geographer",
      organization: "Integrated Water Resources and UC Santa Barbara",
      body: "Delivered applied GIS projects in water resources, campus planning, long-range development planning, and spatial data management."
    }
  ],

  publications: [
    {
      year: 2026,
      title: "COVID-19-Related Discrimination and Mental Distress: Mediating Role of Loneliness, Resilience, and Financial Worries",
      authors: "Luo, Y., Li, M., Haller, W., Wang, Y.-B., Carbajales-Dale, P., Jones, S., & Pan, X.",
      venue: "Social Sciences, 15(6), 370",
      link: "https://doi.org/10.3390/socsci15060370",
      tags: ["Public health", "Vulnerable populations", "COVID-19"]
    },
    {
      year: 2025,
      title: "A comparative approach of machine learning models to predict attrition in a diabetes management program",
      authors: "Kanny, S., Post, G., Carbajales-Dale, P., Cummings, W., Evatt, J., & Sherrill, W. W.",
      venue: "PLOS Digital Health, 4(7), e0000930",
      link: "https://doi.org/10.1371/journal.pdig.0000930",
      tags: ["Machine learning", "Digital health", "Diabetes"]
    },
    {
      year: 2025,
      title: "Proximity to COVID-19 vaccination sites and vaccine uptake: The role of gender and vaccine distrust",
      authors: "Luo, Y., Carbajales-Dale, P., Li, M., Haller, W., & Wang, Y.-B.",
      venue: "Frontiers in Public Health, 13, 1569280",
      link: "https://doi.org/10.3389/fpubh.2025.1569280",
      tags: ["Public health", "Spatial access", "COVID-19"]
    },
    {
      year: 2025,
      title: "High Throughput Computing",
      authors: "Carbajales-Dale, P., Cleveland, S., & Post, G.",
      venue: "The Geographic Information Science & Technology Body of Knowledge",
      link: "https://doi.org/10.22224/gistbok/2025.1.1",
      tags: ["CyberGIS", "High-throughput computing", "GIScience education"]
    },
    {
      year: 2024,
      title: "Geospatial analysis of the social determinants of health of participants of a diabetes management program to evaluate enrollment of vulnerable populations",
      authors: "Kanny, S., Cummings, W., Carbajales-Dale, P., Evatt, J., & Sherrill, W. W.",
      venue: "Preventing Chronic Disease, 21, 240068",
      link: "https://doi.org/10.5888/pcd21.240068",
      tags: ["Social determinants", "Diabetes", "Vulnerable populations"]
    },
    {
      year: 2024,
      title: "geoFOR: A collaborative forensic taphonomy database for estimating the postmortem interval",
      authors: "Weisensee, K. E., Tica, C. I., Atwell, M. M., Ehrett, C., Smith, D. H., Carbajales-Dale, P., and collaborators",
      venue: "Forensic Science International, 111934",
      link: "",
      tags: ["Forensic science", "Geospatial databases", "Collaboration"]
    },
    {
      year: 2023,
      title: "Using GIS to improve public health emergency response in rural areas during the COVID-19 crisis: A case study of South Carolina, US",
      authors: "Carbajales-Dale, P., Annan-Coultas, D., Joseph, A., Thompson, M., Jafarifiroozabadi, R., Limber, S. P., and collaborators",
      venue: "Transactions in GIS",
      link: "",
      tags: ["Emergency response", "Rural health", "GIS"]
    },
    {
      year: 2021,
      title: "Diabetes patient surveillance in the emergency department: Proof of concept and opportunities",
      authors: "Sava, M. G., Pirrallo, R., Helsel, B., Tian, J., Carbajales-Dale, P., Wang, K. C., Bruch, J., & Gimbel, R.",
      venue: "Western Journal of Emergency Medicine",
      link: "",
      tags: ["Public health", "Emergency medicine", "Diabetes"]
    },
    {
      year: 2020,
      title: "Rolling coal: The greenhouse gas emissions of coal rail transport for electricity generation",
      authors: "Sherwood, J., Bickhart Jr., R., Murawski, E., Dhanani, Z., Lytle, B., Carbajales-Dale, P., & Carbajales-Dale, M.",
      venue: "Journal of Cleaner Production, 120770",
      link: "",
      tags: ["Energy", "Environmental systems", "Spatial analysis"]
    },
    {
      year: 2019,
      title: "Digital Story Map learning for STEM disciplines",
      authors: "Groshans, G., Mikhailova, E., Post, C., Schlautman, M., Carbajales-Dale, P., & Payne, K.",
      venue: "Education Sciences, 9(2), 75",
      link: "",
      tags: ["Education", "Story maps", "STEM"]
    },
    {
      year: 2019,
      title: "Cyber literacy for GIScience: Toward formalizing geospatial computing education",
      authors: "Shook, E., Bowlick, F. J., Kemp, K. K., Ahlqvist, O., Carbajales-Dale, P., DiBiase, D., and collaborators",
      venue: "The Professional Geographer, 71(2), 221-238",
      link: "",
      tags: ["GIScience education", "CyberGIS", "Computing"]
    },
    {
      year: 2018,
      title: "Developing and evaluating an ESRI Story Map as an educational tool",
      authors: "Cope, M. P., Mikhailova, E. A., Post, C. J., Schlautman, M. A., & Carbajales-Dale, P.",
      venue: "Natural Sciences Education, 47(1)",
      link: "",
      tags: ["Education", "Story maps", "STEM"]
    },
    {
      year: 2017,
      title: "Giving Meaning to the Right to Science: A Global and Multidisciplinary Approach",
      authors: "Wyndham, J. M., Vitullo, M. W., Kraska, K., Sianko, N., Carbajales-Dale, P., Nunez-Eddy, C., & Platts, E.",
      venue: "AAAS Science and Human Rights Coalition report",
      link: "",
      tags: ["Human rights", "Science policy", "Multidisciplinary"]
    },
    {
      year: 2016,
      title: "Utility-scale solar PV in South Carolina: Analysis of suitable lands and geographical potential",
      authors: "Farthing, A., Carbajales-Dale, M., Mason, S., Carbajales-Dale, P., & Matta, P.",
      venue: "BioPhysical Economics and Resource Quality, 1(2), 8",
      link: "",
      tags: ["Renewable energy", "South Carolina", "Spatial analysis"]
    },
    {
      year: 2015,
      title: "Disease risk and landscape attributes of tick-borne Borrelia pathogens in the San Francisco Bay Area, California",
      authors: "Salkeld, D. J., Nieto, N. C., Carbajales-Dale, P., Carbajales-Dale, M., Cinkovich, S. S., & Lambin, E. F.",
      venue: "PLOS ONE, 10(8), e0134812",
      link: "https://doi.org/10.1371/journal.pone.0134812",
      tags: ["Disease risk", "Landscape ecology", "Public health"]
    },
    {
      year: 2013,
      title: "Stanford University Libraries study: Topographical map vectorization and the impact of Bayer Moire defect",
      authors: "Pearson, M., Mohammed, G. S., Sanchez-Silva, R., & Carbajales, P.",
      venue: "Journal of Map & Geography Libraries, 9(3), 313-334",
      link: "",
      tags: ["Libraries", "Cartography", "Geospatial data"]
    }
  ],

  grantsAndHonors: [
    {
      meta: "2023 - 2025 | NSF | Co-I",
      title: "Disease Modeling and Analytics to Inform Outbreak Preparedness, Response, Intervention, Mitigation, and Elimination in South Carolina",
      body: "$6,979,562 award supporting outbreak preparedness and analytics."
    },
    {
      meta: "2021 - 2023 | NIJ | Co-I",
      title: "GIS Application for Building a Nationally Representative Forensic Taphonomy Database",
      body: "$457,536 award advancing forensic science through geospatial database collaboration."
    },
    {
      meta: "2015 - 2020 | NSF | Co-PI",
      title: "GEOPATHS: Building an affective pathway to the geosciences",
      body: "$599,139 award focused on experiential learning opportunities for non-geoscience majors."
    },
    {
      meta: "2023 | Esri",
      title: "Special Achievement Award in GIS - Higher Education",
      body: "National recognition for Clemson's Center for Geospatial Technologies."
    },
    {
      meta: "2020 | UCGIS",
      title: "TRELIS NSF Fellow",
      body: "Selected for Training and Retaining Leaders in STEM - Geospatial Sciences."
    }
  ],

  teachingAndSpeaking: [
    {
      title: "GIS for Sustainable Development",
      body: "Study-abroad coursework connecting GIS, sustainability, and experiential learning."
    },
    {
      title: "GIS for Public Health",
      body: "Spatial analysis for access, risk, vulnerability, and decision-making."
    },
    {
      title: "GIS for Good",
      body: "Coursework applying GIS to development and humanitarian assistance."
    },
    {
      title: "Geospatial Intelligence and Leadership",
      body: "Invited talks on GIS-enabled leadership, public health, justice, and research."
    },
    {
      title: "CyberGIS Education",
      body: "National work on geospatial computing, cyber literacy, and spatial data science."
    },
    {
      title: "Data and Maps for Social Justice",
      body: "Workshops connecting mapping, data literacy, and justice-oriented research."
    }
  ],

  collaboration: [
    {
      title: "Academic research teams",
      body: "Helps faculty and graduate students translate research questions into spatial workflows, data products, maps, and grant-ready methods."
    },
    {
      title: "Government and public agencies",
      body: "Supports data-informed planning, public health response, emergency coordination, and place-based decision-making."
    },
    {
      title: "Nonprofits and communities",
      body: "Centers questions of access, vulnerability, equity, and local context so geospatial tools serve the people most affected."
    },
    {
      title: "Industry and technology partners",
      body: "Builds partnerships that keep Clemson current with geospatial software, AI integration, imagery, drones, cloud computing, and applied analytics."
    }
  ],

  news: [
    {
      meta: "ArcNews | Summer 2025",
      title: "The Power to Help",
      body: "Feature on geospatial response work after Hurricane Helene and CCGT's role in helping communities use spatial tools under urgent conditions.",
      link: "https://www.esri.com/about/newsroom/arcnews/the-power-to-help"
    },
    {
      meta: "Clemson News | August 2023",
      title: "CCGT wins Esri national award",
      body: "Coverage of Clemson's Center for Geospatial Technologies receiving Esri Special Achievement in GIS recognition.",
      link: "https://news.clemson.edu/clemsons-center-for-geospatial-technologies-ccgt-wins-esri-national-award/"
    },
    {
      meta: "Esri Higher Education | January 2022",
      title: "Clemson University inspires campus-wide GIS use",
      body: "Story on CCGT's growth, campus-wide support model, machine-learning training, and geospatial technology adoption.",
      link: "https://www.esri.com/en-us/lg/industry/education/stories/clemson-center-for-geospatial-technologies-inspires-campus-wide-gis-use"
    }
  ]
};
