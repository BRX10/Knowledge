/* The concepts shown as tiles. Texts are taken from the playbook v2.5 (verbatim or near-verbatim excerpts).
   size: 1 = one column, 2 = two columns. dark: true = night tile. */
window.KM_ZONES = [
  { id: "why",   label: "Why" },
  { id: "found", label: "Foundations" },
  { id: "model", label: "The model" },
  { id: "roles", label: "Roles & use" },
  { id: "act",   label: "Getting started" }
];

window.KM_CONCEPTS = [
  /* ---------------- WHY ---------------- */
  { id: "pillar", zone: "why", size: 2, title: "The underestimated pillar",
    hook: "Data tells an agent what the company records. Knowledge tells it what the company means.",
    art: "../assets/illus/pillars.png", artAlt: "Data and knowledge as two pillars under context engineering",
    body: [
      "Every company that has tried to put AI to work has learned the same lesson about data: garbage in, garbage out, even if it is not quite that simple. Data quality, ownership and governance are now standard items of any AI programme.",
      "Knowledge has received less attention. Knowledge, here, means what lets someone act well: the rule, the exception, the reason behind both, the trade-off made last year and why.",
      "<strong>Knowledge is a pillar of AI at scale, alongside data.</strong>"
    ],
    fig: "../assets/illus/pillars.png", link: "underestimated-pillar", sec: "Section 1" },

  { id: "failure-modes", zone: "why", size: 1, dark: true, title: "Eight failure modes",
    hook: "The same patterns recur when AI meets the real corpus. Which ones do you recognise?",
    big: "8", special: "failure", link: "underestimated-pillar", sec: "Section 1" },

  { id: "what-changes", zone: "why", size: 1, title: "What agents change",
    hook: "The fundamentals stay. Agents change three things around them.",
    list: ["The reader", "The scale", "The economics"],
    body: [
      "The fundamentals of knowledge management stay. Agents change three things around them.",
      "<strong>They change the reader:</strong> the main new consumer is a machine that knows only what has been made explicit.",
      "<strong>They change the scale:</strong> an error no longer misleads one colleague, it travels through every process an agent touches.",
      "<strong>And they change the economics:</strong> drafting and maintaining pages becomes cheap, so the effort moves to validation.",
      "<em>Agents raise the bar upstream. The effort moves from consuming knowledge to building it: owned, validated, dated and traceable before any agent reads it.</em>"
    ], link: "underestimated-pillar", sec: "Section 1" },

  /* ---------------- FOUNDATIONS ---------------- */
  { id: "principle-zero", zone: "found", size: 2, title: "Principle zero",
    hook: "Managing knowledge is one job. Consuming it is another.",
    art: "../assets/figures/figure-1.png", artAlt: "Managing and consuming planes",
    body: [
      "Think of an encyclopedia. Writing it and reading it are two different jobs. Editors choose the entries, check sources, settle disputes, retire what is wrong. Readers come with their own questions, in their own words, and never see the editorial process.",
      "<strong>One effort, many uses.</strong> Knowledge kept once serves a newcomer, a support agent and a generated report alike.",
      "<strong>A clear boundary.</strong> Consumers read; they do not rewrite while they work. What they run into, a gap or a contradiction, goes back to the management plane as a ticket.",
      "<em>It separates roles and rhythms, not teams.</em>"
    ], fig: "../assets/figures/figure-1.png", link: "principle-zero", sec: "Section 2" },

  { id: "lineage", zone: "found", size: 1, title: "Two foundations",
    hook: "Its architecture from the Data Mesh. Its diagnosis from thirty years of knowledge management.",
    body: [
      "The Knowledge Mesh openly stands on two foundations. It borrows its architecture from the Data Mesh, and its diagnosis from thirty years of research and practice in knowledge management.",
      "In 2019, Zhamak Dehghani described a central data lake, run by highly specialised engineers, cut off from the business domains that produce and understand the data. Her answer was not a better lake but a paradigm shift.",
      "Knowledge management research had reached the same diagnosis earlier: Tsoukas, Nonaka, Wenger, McDermott.",
      "<strong>The stance:</strong> accept fragmentation and organise it, rather than pursue the single base."
    ], link: "lineage", sec: "Section 3" },

  { id: "tacit", zone: "found", size: 1, title: "Tacit and explicit",
    hook: "“We can know more than we can tell.” Michael Polanyi",
    art: "../assets/figures/figure-2.png", artAlt: "What can be written, and where the rest lives",
    body: [
      "Part of what experts know will never be fully written down. A Knowledge Mesh aims to make explicit what can be, and to show clearly where the rest lives: with whom, in which community.",
      "AI excels at combination and is a strong ally for externalisation. Socialisation remains a human affair: people still learn from people.",
      "<em>A knowledge strategy that overlooks this produces clean pages and empty expertise.</em>"
    ], fig: "../assets/figures/figure-2.png", link: "fundamentals", sec: "Section 4" },

  { id: "lifecycle", zone: "found", size: 2, title: "Born, lives, dies",
    hook: "Six stages, from capture to retirement. The last one is the most often forgotten.",
    art: "../assets/figures/figure-3.png", artAlt: "The six-stage lifecycle",
    body: [
      "Knowledge is born, lives and dies. Six stages mark that life, and each has someone responsible for it:",
      "<ol><li><strong>Capture</strong>: bring in sources, legacy documents, interviews, decisions.</li><li><strong>Consolidate</strong>: deduplicate, link, structure into pages.</li><li><strong>Validate</strong>: the Knowledge Owner commits to what the page says.</li><li><strong>Serve</strong>: expose it to people and agents, according to rights.</li><li><strong>Review</strong>: refresh on a known cadence or when a source changes.</li><li><strong>Retire</strong>: withdraw what is obsolete, and say so.</li></ol>",
      "<em>An outdated document left in an index silently becomes a wrong answer. Living knowledge must be allowed to die.</em>"
    ], fig: "../assets/figures/figure-3.png", link: "fundamentals", sec: "Section 4" },

  /* ---------------- MODEL ---------------- */
  { id: "knowledge-mesh", zone: "model", size: 2, title: "The Knowledge Mesh",
    hook: "A decentralised network of living knowledge bases, owned by business domains.",
    art: "../assets/illus/mesh.png", artAlt: "Domains HR, Legal, Finance and more, linked by shared standards",
    body: [
      "<strong>A Knowledge Mesh</strong> is a decentralised network of living knowledge bases, owned by business domains, each described by a charter and built through auditable contributions from people and agents, federated by common standards so that everyone, human or agent, shares the same governed context.",
      "The <strong>Knowledge Mesh</strong> is the whole: the network, the platform and the common rules. The <strong>knowledge base</strong> is the unit: what a domain builds, owns and serves.",
      "<em>Centralise the means, decentralise the knowledge.</em>"
    ], fig: "../assets/figures/figure-4.png", link: "knowledge-mesh", sec: "Section 5" },

  { id: "principles", zone: "model", size: 1, title: "Five principles",
    hook: "Four transposed from the Data Mesh, a fifth that extends it.",
    list: ["Domain knowledge ownership", "Knowledge as a self-describing product", "Self-serve knowledge platform", "Federated knowledge governance", "Auditable knowledge construction"],
    body: [
      "<table class='mini'><thead><tr><th>Data Mesh</th><th>Knowledge Mesh</th></tr></thead><tbody>" +
      "<tr><td>Domain-oriented ownership</td><td><strong>Domain knowledge ownership</strong><br>the owner answers for it, not just stores it</td></tr>" +
      "<tr><td>Data as a product</td><td><strong>Knowledge as a self-describing product</strong><br>no base without a charter</td></tr>" +
      "<tr><td>Self-serve data platform</td><td><strong>Self-serve knowledge platform</strong><br>AI works inside it: drafts, links, flags contradictions</td></tr>" +
      "<tr><td>Federated computational governance</td><td><strong>Federated knowledge governance</strong><br>not merge bases but make them composable</td></tr>" +
      "<tr><td>Data product quality, assured by the domain</td><td><strong>Auditable knowledge construction</strong><br>who proposed each change, who validated it, from which sources, and how to revert it</td></tr>" +
      "</tbody></table>"
    ], link: "knowledge-mesh", sec: "Section 5" },

  { id: "knowledge-base", zone: "model", size: 1, title: "The knowledge base",
    hook: "A domain, a charter, an owner, sources, pages, a contract and states.",
    art: "../assets/figures/figure-5.png", artAlt: "The seven parts of a knowledge base",
    body: [
      "A knowledge base is the asset of the mesh. It is small enough to have one owner and one purpose, and complete enough to be useful on its own.",
      "<strong>An entry point.</strong> Preparing knowledge for an agent is, almost by accident, the first real audit of what the organisation knows.",
      "<strong>A destination.</strong> Today, the base is fed by documents. Tomorrow, documents will increasingly be produced from it.",
      "<em>The document is no longer the source of knowledge; it becomes one of its outputs.</em>"
    ], fig: "../assets/figures/figure-5.png", link: "knowledge-base", sec: "Section 6" },

  { id: "compiled", zone: "model", size: 2, title: "Compiled, not reassembled",
    hook: "Knowledge assembled once and kept up to date, rather than reassembled at every question.",
    art: "../assets/illus/rag-vs-wiki.png", artAlt: "RAG reassembles at every question; a wiki is organised, sourced, owned, dated",
    body: [
      "Pages are the consolidated knowledge, in an open, readable format, each page linked to its sources. This is the compiled layer Andrej Karpathy described as an “LLM wiki”: knowledge assembled once and kept up to date, rather than reassembled at every question.",
      "RAG, chat interfaces and agents all belong to the consumption plane. None of them is wrong. They simply need something upstream to read.",
      "<em>Bases coexist rather than merge: each keeps its owner, its charter and its pace.</em>"
    ], fig: "../assets/illus/rag-vs-wiki.png", link: "knowledge-base", sec: "Section 6" },

  /* ---------------- ROLES & USE ---------------- */
  { id: "knowledge-owner", zone: "roles", size: 2, title: "The Knowledge Owner",
    hook: "Authority, not probability. Knowledge needs a face.",
    art: "../assets/figures/figure-6.png", artAlt: "Agents handle the clear-cut changes; the owner arbitrates and commits",
    body: [
      "A language model produces the most plausible answer. A company needs something else: an answer someone stands behind.",
      "In a Knowledge Mesh, agents take on most of the stewardship. The owner keeps what cannot be delegated: <strong>orient, arbitrate, commit, listen, retire</strong>. Clear-cut changes go through; the owner handles the exceptions.",
      "<blockquote>“This is what the company holds to be true, as of this date, and I answer for it.”</blockquote>",
      "<em>No owner, no authority.</em>"
    ], fig: "../assets/figures/figure-6.png", link: "knowledge-owner", sec: "Section 7" },

  { id: "dynamic-context", zone: "roles", size: 2, title: "Dynamic context",
    hook: "Context assembled at the moment of use, from governed bases, within the user's rights.",
    art: "../assets/illus/prompt-to-context.png", artAlt: "From a prompt written by hand to context assembled for each task",
    body: [
      "Dynamic context is context assembled at the moment of use, from governed knowledge bases, within the rights of the person on whose behalf the agent acts.",
      "<ul><li><strong>Assembled, not written.</strong> The agent selects the bases it needs, guided by their charters.</li><li><strong>Governed at the source.</strong> What enters the context has an owner, a date and a status.</li><li><strong>Rights follow the person.</strong> An agent sees what the person it serves is allowed to see, no more.</li><li><strong>Traceable.</strong> Every element of the context points back to a page, and every page to its sources and its owner.</li></ul>",
      "<em>The Knowledge Mesh adds the organisational side that context engineering calls for: where good context comes from, and who stands behind it.</em>"
    ], fig: "../assets/illus/prompt-to-context.png", link: "dynamic-context", sec: "Section 8" },

  { id: "grounding", zone: "roles", size: 1, dark: true, title: "No delegation without grounding",
    hook: "Decisions and actions anchored in knowledge the company holds to be true, not in what a model finds plausible.",
    body: [
      "Before an agent can decide or act, it needs to stand on solid ground: facts, rules and reasons that are established, dated and owned.",
      "Linguists Herbert Clark and Susan Brennan called the process of building that shared basis grounding: the mutual knowledge on which any joint action rests. The same word is now used in AI for anchoring an answer in sources.",
      "<em>Grounding is what separates an answer that sounds right from a decision that can be defended.</em>"
    ], link: "dynamic-context", sec: "Section 8" },

  { id: "portability", zone: "roles", size: 1, title: "The portability test",
    hook: "If the tool that built a base disappeared tomorrow, could the knowledge be read, moved and served by another one?",
    body: [
      "A knowledge base is built to last longer than the technologies that serve it. That calls for simple, open and evolvable formats: readable text pages, explicit metadata, stable identifiers, and access through open protocols rather than proprietary connectors.",
      "<em>If the answer is no, the company does not own its knowledge; its tool does.</em>"
    ], link: "field-guide", sec: "Section 9" },

  /* ---------------- ACT ---------------- */
  { id: "start-small", zone: "act", size: 1, title: "Start small, and real",
    hook: "One domain, one owner, one charter, the legacy, an evaluation set.",
    list: ["Pick one domain", "Name one Knowledge Owner", "Write the charter", "Compile the legacy", "Build an evaluation set"],
    body: [
      "<ol><li><strong>Pick one domain</strong> with a real pain: questions asked again and again, answers that vary from one person to the next.</li><li><strong>Name one Knowledge Owner</strong> who wants the role, and give them time for it.</li><li><strong>Write the charter</strong> in one page: purpose, audience, scope, what is out of scope.</li><li><strong>Compile the legacy</strong>: let agents turn the existing documents into a first set of sourced pages, then let the owner validate them.</li><li><strong>Build an evaluation set</strong>: the questions the domain actually receives, with the answers the owner expects.</li></ol>"
    ], link: "field-guide", sec: "Section 9" },

  { id: "trajectory", zone: "act", size: 1, title: "A trajectory",
    hook: "No company starts with a mesh.",
    body: [
      "No company starts with a mesh. It usually starts with a common foundation: one platform, a few standards, the first bases, often run by a small central team.",
      "The mesh appears as domains take ownership one after another, and as the central team moves from building bases to providing the platform and the rules. Starting centrally is a sound first step; the aim is to move beyond it.",
      "<em>Centralise the means, decentralise the knowledge.</em>"
    ], link: "field-guide", sec: "Section 9" },

  { id: "delegation", zone: "act", size: 2, title: "Three levels of delegation",
    hook: "Assistance, delegation, autopilot. Each is reached on evidence.",
    list: ["Assistance", "Delegation", "Autopilot"], special: "delegation", link: "field-guide", sec: "Section 9" },

  { id: "values", zone: "act", size: 2, dark: true, title: "What it values",
    hook: "Curating the source more than correcting the answer.",
    big: "5", special: "values", link: "closing", sec: "Closing" }
];

window.KM_FAILURES = [
  ["Retrieval without curation", "A retrieval layer is plugged into existing documents, and answers are corrected at the output, use case by use case. The same error is fixed ten times and never at the source.", "Principle zero: separate management from consumption"],
  ["The central bottleneck", "A central team, whether knowledge, IT or data, carries the work alone, while the people who hold the knowledge are out of the loop.", "Domain ownership"],
  ["The frozen snapshot", "A base is built once, for a project, then left as it is. Nothing says it has gone stale; agents keep answering from it with the same confidence.", "The lifecycle, and a contract with a review date"],
  ["The accumulation trap", "Content keeps growing, generated content included, and nothing is ever retired. Every new page dilutes the ones that matter.", "Retirement as a step of the lifecycle"],
  ["The tool-first programme", "A platform is bought in place of an organisation. No one embodies the knowledge, practices do not change, and the tool fills with content no one stands behind.", "The Knowledge Owner, and the change in roles"],
  ["The canonical model fantasy", "A single taxonomy, a single vocabulary, a single model is imposed on every domain. Local meanings are flattened.", "Composable bases under shared standards"],
  ["The open door", "Knowledge is exposed without regard to who may see it. An agent that reads everything can show one person what was meant for another.", "Rights that follow the person"],
  ["The untraceable answer", "The agent answers or acts without saying which source, which version or whose authority it relied on.", "Grounded context and traceable actions"]
];

window.KM_VALUES = [
  ["Curating the source", "Correcting the answer", "A correction made once, upstream, serves every use downstream"],
  ["Committed knowledge", "Plausible answers", "An agent can rely on what someone stands behind; from the rest, it can only guess"],
  ["Owned bases", "A single repository", "Knowledge stays close to those who hold it, and bases coexist rather than merge"],
  ["Retiring knowledge", "Accumulating content", "What is withdrawn on time protects every answer that follows"],
  ["Traceable action", "Opaque assistance", "What can be traced can be understood, corrected and trusted"]
];

window.KM_LEVELS = [
  ["Assistance", "People read the answer and remain the filter", "Base validated, sources traced"],
  ["Delegation", "Agents act; every action is traceable to the knowledge it relied on", "Evaluation results stable over time; owner arbitrates exceptions"],
  ["Autopilot", "Sources flow into the base without human review, under continuous quality monitoring", "Proven quality on the domain; ability to quarantine instantly"]
];

/* display order (fills a 4-column grid without holes) */
window.KM_ORDER = ["pillar", "failure-modes", "what-changes", "principle-zero", "tacit", "lineage", "lifecycle", "knowledge-base", "principles", "knowledge-mesh", "compiled", "knowledge-owner", "grounding", "portability", "dynamic-context", "start-small", "trajectory", "delegation", "values"];
