---
id: failure-modes
title: Eight failure modes
type: concept
summary: The same patterns recur when AI meets the real corpus. Each has a recognisable symptom, a specific cost for agents, and a principle of the playbook that answers it.
aliases: [retrieval without curation, central bottleneck, frozen snapshot, accumulation trap, tool-first programme, canonical model fantasy, open door, untraceable answer]
tags: [foundations, governance]
sources: [src-00-playbook-v2.5, src-01-dehghani-2019, src-02-dehghani-2020]
related: [underestimation-reasons, principle-zero, mesh-values]
raw: raw/playbook-v2.5.md#underestimated-pillar
owner: B. Rousseaux
status: active
version: '2.5'
updated: '2026-11-17'
---

# Eight failure modes

| Failure mode | What it looks like | What answers it |
|---|---|---|
| Retrieval without curation | A retrieval layer is plugged into existing documents, and answers are corrected at the output, use case by use case. The same error is fixed ten times and never at the source. | Principle zero: separate management from consumption ([[principle-zero]]) |
| The central bottleneck | A central team, whether knowledge, IT or data, carries the work alone, while the people who hold the knowledge are out of the loop. The base ages faster than it is corrected. | Domain ownership ([[domain-knowledge-ownership]]) |
| The frozen snapshot | A base is built once, for a project, then left as it is. Nothing says it has gone stale; agents keep answering from it with the same confidence. | The lifecycle, and a contract with a review date ([[knowledge-lifecycle]]) |
| The accumulation trap | Content keeps growing, generated content included, and nothing is ever retired. Every new page dilutes the ones that matter. | Retirement as a step of the lifecycle ([[knowledge-lifecycle]]) |
| The tool-first programme | A platform is bought in place of an organisation. No one embodies the knowledge, practices do not change, and the tool fills with content no one stands behind. | The Knowledge Owner, and the change in roles ([[knowledge-owner]]) |
| The canonical model fantasy | A single taxonomy, a single vocabulary, a single model is imposed on every domain. Local meanings are flattened, and agents lose the nuance that made the knowledge useful. | Composable bases under shared standards ([[federated-knowledge-governance]]) |
| The open door | Knowledge is exposed without regard to who may see it. Not all knowledge is meant for everyone: an agent that reads everything can show one person what was meant for another, or miss what they need. | Rights that follow the person ([[dynamic-context]]) |
| The untraceable answer | The agent answers or acts without saying which source, which version or whose authority it relied on. No one can validate the answer, correct the source, or explain the action afterwards. | Grounded context and traceable actions ([[traceability]]) |

> Each of these is a matter of organisation, which technology makes more visible, and more costly, once agents are involved.

Each calls for an organisational answer, beyond prompt engineering or a better model. The way the failure modes are named one by one follows [[zhamak-dehghani|Dehghani]]'s description of the failure modes of centralised data platforms.
