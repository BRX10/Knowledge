/* ============================================================
   SITE CONTENT — the only file to edit to add a work, an article or a repository.
   Each list is shown newest first in the order written here.
   An entry without "url" stays hidden on the public site (add ?preview to the address to see it).
   ============================================================ */
window.SITE = {
  owner: {
    name: "Benoit Rousseaux",
    tagline: "Knowledge management in the age of AI agents: playbooks, articles and open work.",
    linkedin: "https://www.linkedin.com/in/benoitrousseaux/"
  },

  /* Download counter (GoatCounter). Empty = no tracker loaded at all.
     To enable: create a site on goatcounter.com and put its code here, e.g. "brxpr". */
  goatcounter: "",

  /* "Latest" block on the home page: newest first. Keep 3 to 5 items. */
  news: [
    { date: "16 Nov 2026", label: "Playbook", text: "The Knowledge Mesh, version 2.5: nineteen concepts, the full playbook and a 10-slide carousel.", url: "knowledge-mesh/" },
    { date: "21 Oct 2026", label: "Article", text: "Owning the learning loop: knowledge as the key to scaling AI with trust.", url: "https://www.linkedin.com/pulse/owning-learning-loop-knowledge-key-scaling-ai-trust-benoit-rousseaux-k5fce" },
    { date: "29 Jul 2026", label: "Article", text: "How much of your company can an AI actually understand?", url: "https://www.linkedin.com/pulse/how-much-your-company-can-ai-actually-understand-benoit-rousseaux-o85ne/" }
  ],

  /* Main call to action in the header and the hero. */
  cta: { label: "Download the playbook", url: "knowledge-mesh/downloads/knowledge-mesh-playbook-v2.5-with-figures.pdf", dl: "playbook-pdf-figures", note: "PDF · 1.7 MB" },

  /* Playbooks, studies, frameworks. The first one is featured on the home page with its deliverables. */
  works: [
    { type: "Playbook", title: "The Knowledge Mesh",
      subtitle: "Bridging knowledge management and agentic AI at scale",
      summary: "Knowledge is a pillar of AI at scale, alongside data. It must be managed as infrastructure, separately from the way it is consumed.",
      meta: "Version 2.5 · 16 November 2026",
      url: "knowledge-mesh/", image: "assets/illus/mesh.png", featured: true,
      deliverables: [
        { kicker: "Explore the concepts", title: "The concept map", text: "Nineteen concepts, one tile each, from principle zero to the Knowledge Owner. Open a tile to go one level deeper.", link: "Explore the concepts", url: "knowledge-mesh/", image: "assets/illus/mesh.png" },
        { kicker: "See it at a glance", title: "The carousel", text: "The playbook in 10 slides, made to be shared.", link: "View the slides", url: "knowledge-mesh/#carousel", image: "assets/carousel/slide-01.jpg", visual: "slides" },
        { kicker: "Read the argument", title: "The full playbook", text: "Nine sections and twenty-one annotated sources, readable online. A set of landmarks, not a method.", link: "Read online", url: "knowledge-mesh/playbook.html", image: "assets/figures/figure-1.png" },
        { kicker: "Take it with you", title: "PDF", text: "The playbook with or without figures, plus the carousel.", link: "All downloads", url: "knowledge-mesh/#resources", visual: "files" }
      ] }
  ],

  articles: [
    { series: "Knowledge Management in the Age of AI", n: 4, date: "21 October 2026",
      title: "Owning the learning loop: knowledge as the key to scaling AI with trust",
      blurb: "",
      url: "https://www.linkedin.com/pulse/owning-learning-loop-knowledge-key-scaling-ai-trust-benoit-rousseaux-k5fce" },
    { series: "Knowledge Management in the Age of AI", n: 1, date: "29 July 2026",
      title: "How much of your company can an AI actually understand?",
      blurb: "What AI really understands about an organization from its documents.",
      url: "https://www.linkedin.com/pulse/how-much-your-company-can-ai-actually-understand-benoit-rousseaux-o85ne/" }
  ],

  repos: [
    { name: "LLM Wiki", author: "Andrej Karpathy", kind: "Gist", year: "2026",
      url: "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f",
      note: "A language model reads raw sources and integrates them into a persistent, interlinked Markdown wiki, while a human curates sources and asks questions." }
  ]
};
