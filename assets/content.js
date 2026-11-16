/* ============================================================
   SITE CONTENT — the file to edit to add an article or a repository.
   Each list is shown newest first in the order written here.
   An entry without "url" stays hidden on the public site (add ?preview to the address to see it).
   ============================================================ */
window.SITE = {
  owner: {
    name: "Benoit Rousseaux",
    tagline: "Knowledge management in the age of AI agents: playbooks, articles and open work.",
    linkedin: "https://www.linkedin.com/in/benoitrousseaux/"
  },

  /* Visit statistics: GoatCounter site code (e.g. "brx10" for brx10.goatcounter.com). Empty = not loaded. */
  goatcounter: "brx10",

  /* Download counter: each click on a PDF sends an anonymous ping (which file, which page) to this n8n webhook,
     which emails the owner with the running total. Empty = no ping at all. */
  counter: "https://n8n.knowhere.click/webhook/km-download",

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
