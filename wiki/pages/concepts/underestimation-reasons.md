---
id: underestimation-reasons
title: Why knowledge was underestimated
type: concept
summary: 'Four reasons, offered as a practitioner''s reading rather than a measured finding: the model seemed to know, retrieval was treated as engineering, governance followed data, and knowledge management was out of the room.'
aliases: [why it was underestimated in the move to AI]
tags: [foundations]
sources: [src-00-playbook-v2.5, src-18-mit-nanda-2025]
related: [knowledge-as-a-pillar, failure-modes]
raw: raw/playbook-v2.5.md#underestimated-pillar
owner: B. Rousseaux
status: active
version: '2.5'
updated: '2026-11-17'
---

# Why knowledge was underestimated

The playbook gives four reasons, and states that they are a practitioner's reading, not a measured finding.

- **The model seemed to know.** Large language models answer fluently on almost any subject, yet know nothing specific about a company until it is given to them.
- **Retrieval was treated as engineering.** RAG framed the problem as search (chunking, indexing, ranking). Authority, freshness and contradiction were left to sources that often nobody owned.
- **Governance followed data.** AI programmes inherited the data governance agenda (privacy, quality, lineage, bias) and often stopped there. Unstructured knowledge sat between data teams, IT and the business.
- **Knowledge management was out of the room.** It had often become a support function, rarely part of AI steering.

The cost shows up at scale. A widely discussed MIT report finds that most organisations see no measurable return from generative AI, and points to systems that do not retain context or learn from feedback. Pilots run on clean, curated material; at scale, agents meet the real corpus, where the [[failure-modes]] appear.
