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

Three consequences follow: each plane can change without breaking the other; one effort serves many uses; and a clear boundary, where consumers read but do not rewrite, and what they run into goes back to the management plane as a ticket. The base learns from its use without feeding on its own answers.

The [[data-mesh]] offers a precedent with its operational and analytical planes, integrated yet separate, looked after by the same domains. RAG, chat interfaces and agents all belong to the consumption plane; they need something upstream to read. Whatever the way of bringing knowledge to a model (training, retrieval, web search, fine-tuning or distillation), what an agent can rely on depends on the quality and traceability of what it draws from. See [[fig-1-principle-zero]].
