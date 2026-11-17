---
id: traceability
title: Traceability
type: concept
summary: Every element of an agent's context points back to a page, and every page to its sources and its owner, so that whatever an agent relied on can be inspected afterwards.
aliases: [traceable action]
tags: [governance, regulation, context]
sources: [src-00-playbook-v2.5, src-17-eu-ai-act]
related: [dynamic-context, auditable-knowledge-construction, eu-ai-act, delegation-levels, mesh-values]
raw: raw/playbook-v2.5.md#dynamic-context
owner: B. Rousseaux
status: active
version: '2.5'
updated: '2026-11-17'
---

# Traceability

Traceability runs through the playbook: the untraceable answer is one of the [[failure-modes]]; auditable construction is the fifth principle ([[auditable-knowledge-construction]]); traceable is one of the four properties of [[dynamic-context]]; and traceable action is one of the things the mesh values ([[mesh-values]]).

Regulation points the same way, within a narrower scope. For high-risk AI systems, the [[eu-ai-act]] requires automatic logging to ensure the traceability of how a system functions, effective human oversight, and the retention of logs by deployers. Most knowledge agents will not fall into that category. It is still reasonable to aim for the same capability everywhere: being able to trace what an agent did, and which knowledge it relied on, is what makes it possible to understand, validate and trust the adoption of agents at scale.

At the delegation level, every action is traceable to the knowledge it relied on ([[delegation-levels]]).
