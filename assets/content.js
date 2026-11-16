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

  /* Download counter (GoatCounter). Empty = no tracker loaded at all.
     To enable: create a site on goatcounter.com and put its code here, e.g. "brxpr". */
  goatcounter: "",

  /* PDF button in the header. */
  cta: { label: "Download the playbook", url: "knowledge-mesh/downloads/knowledge-mesh-playbook-v2.5-with-figures.pdf", dl: "playbook-pdf-figures", note: "PDF · 1.7 MB" },

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
