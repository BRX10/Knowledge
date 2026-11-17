---
id: principle-zero
title: Principle zero
type: concept
summary: Managing knowledge and consuming it are two different jobs, in two planes with different roles and rhythms. The separation concerns roles and rhythms, not teams.
aliases: [management and consumption, management plane, consumption plane, separate managing from consuming]
tags: [management-plane, consumption-plane, foundations]
sources: [src-00-playbook-v2.5, src-20-furnas-1987, src-02-dehghani-2020]
related: [fig-1-principle-zero, dynamic-context, document-as-output, mesh-values]
raw: raw/playbook-v2.5.md#principle-zero
owner: B. Rousseaux
status: active
version: '2.5'
updated: '2026-11-17'
---

# Principle zero

The playbook uses the image of an encyclopedia: editors choose entries, check sources, settle disputes and retire what is wrong; readers come with their own questions and never see the editorial process.

In daily practice, companies rarely worked this way. To find something, one had to understand the logic of whoever filed it, and every filing scheme was a bet on how people would search. Research at Bellcore showed how fragile that bet is: two people rarely choose the same word for the same thing ([[src-20-furnas-1987]]). AI breaks that link: people can ask in their own words against a corpus organised once, consistently.

| | Management plane | Consumption plane |
|---|---|---|
| Purpose | Build, validate, keep alive, retire | Answer, assist, act, produce |
| Who | Knowledge Owners, helped by agents | Employees, assistants, business agents, document generators |
| Pace | Deliberate: reviewed, versioned, dated | Instant: at the moment of the question |
| Key question | What do we hold to be true, and who answers for it? | What does this person or agent need, right now? |
| Measured by | Coverage, freshness, contradictions resolved | Usefulness, adoption, time saved |

Three consequences make the approach pragmatic:

- **Each plane can change without breaking the other.** Models, chat tools and agent frameworks will change many times; a well-managed knowledge base survives them all. Conversely, a new use case does not require reorganising the knowledge.
- **One effort, many uses.** Knowledge kept once serves a newcomer, a support agent and a generated report alike. The investment is made in the management plane and pays off in every consumption.
- **A clear boundary.** Consumers read; they do not rewrite while they work. What they run into, a gap or a contradiction, goes back to the management plane as a ticket. The base learns from its use without feeding on its own answers.

The [[data-mesh]] offers a precedent: it keeps operational and analytical data in two planes, integrated yet separate, because they serve different needs; and Dehghani is clear that this technical separation should not separate the organisation: the same domains look after both. The separation proposed here works the same way. RAG, chat interfaces and agents all belong to the consumption plane; they need something upstream to read. The same holds for the ways of bringing knowledge to a model (training, retrieval, web search, fine-tuning or distillation): each has its value, its cost and its prerequisites, and knowledge built into a model's weights is also tied to that model and hard to trace back to a source. Whatever the mode, what an agent can rely on depends on the quality and traceability of what it draws from: a matter of construction before consumption. See [[fig-1-principle-zero]].
