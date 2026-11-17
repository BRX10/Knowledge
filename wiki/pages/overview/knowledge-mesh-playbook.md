---
id: knowledge-mesh-playbook
title: The Knowledge Mesh Playbook
type: overview
summary: Knowledge is a pillar of AI at scale, alongside data. It must be managed as infrastructure, separately from the way it is consumed.
aliases: [overview, abstract, the thesis]
tags: [foundations]
sources: [src-00-playbook-v2.5, src-01-dehghani-2019, src-02-dehghani-2020, src-12-karpathy-2026]
related: [knowledge-mesh, principle-zero, knowledge-owner, dynamic-context]
raw: raw/playbook-v2.5.md#overview
owner: B. Rousseaux
status: active
version: '2.5'
updated: '2026-11-17'
---

# The Knowledge Mesh Playbook

*If only the company knew what it knows.* A playbook to bring the right knowledge, in the right shape, to the right place at the right time, for people and AI agents alike.

Knowledge management has thirty years of research, an international standard, dedicated roles and a market of tools. What is new is the reader: AI agents now consume a company's knowledge directly, and act on it at scale. What they do depends on the context they are given, and that context has to be steered and mastered, not left to chance. AI agents are systems built on AI models that pursue a goal, use tools and act on someone's behalf ([[ai-agent]]). Yet organisations preparing for AI invest in data, models and platforms, and often treat knowledge as a side issue ([[knowledge-as-a-pillar]]).

The playbook builds a bridge between what knowledge management already knows and what agentic AI now requires. Its organising principle is a separation, [[principle-zero]]: managing knowledge is one job, consuming it is another. Its operating model is the [[knowledge-mesh]], openly inspired by the [[data-mesh]]: knowledge bases owned by domains, each with a charter and a [[knowledge-owner]] who commits to what it says, federated by a few shared standards.

## Key concepts at a glance

| Concept | Definition in the playbook |
|---|---|
| [[principle-zero\|Management and consumption]] | Two planes: knowledge is built, owned and governed in one, used by people and agents in the other |
| [[knowledge-base\|Knowledge base]] | The unit of the mesh: a domain, a charter, an owner, sources, pages, a contract and states |
| [[knowledge-owner\|Knowledge Owner]] | The person who answers for a base: orients, arbitrates, commits and retires |
| [[dynamic-context\|Dynamic context]] | Context assembled at the moment of use, from governed bases, within the user's rights, and traceable; the organisational side of context engineering |
| [[knowledge-mesh\|Knowledge Mesh]] | A network of domain-owned knowledge bases, federated by shared standards |

## What it builds on, and what it adds

| It builds on | It adds |
|---|---|
| Thirty years of knowledge management research, methods and tools, which remain valid | That knowledge has been underestimated as a success factor in deploying AI at scale |
| The tacit, human side of knowledge, which lives with people and communities | That agents change who consumes knowledge, and therefore what "well managed" must mean |
| The Data Mesh, whose architecture it openly transposes | An operating model for knowledge that fits agents, and that each organisation can adapt |
| Today's solutions, which already address many of the challenges described here | The fundamentals that let an organisation choose, combine and replace them, in a world where people and agents share the same knowledge |

## How to read it

Sections 1 to 4 set the foundations: [[sec-1-underestimated-pillar]], [[sec-2-principle-zero]], [[sec-3-lineage]], [[sec-4-fundamentals]]. Sections 5 to 8 describe the model, its challenges and its roles: [[sec-5-knowledge-mesh]], [[sec-6-knowledge-base]], [[sec-7-knowledge-owner]], [[sec-8-dynamic-context]]. Section 9 is the field guide to start: [[sec-9-field-guide]]. The closing section sums up what the Knowledge Mesh values: [[sec-closing]]. The foreword explains why the playbook exists: [[sec-foreword]].

The playbook borrows the rigour of an academic paper, sources and definitions, in plain language. It is written in its own words: sources mark the landmarks and inspirations behind each part, and the few direct quotations appear in quotation marks. Each part closes with a short box naming the sources it draws on and what it takes from them; the full references are in the [[index|catalog]] under Sources.
