---
id: data-mesh
title: Data Mesh
type: concept
summary: 'Zhamak Dehghani''s answer to the limits of centralised data platforms: four principles, presented as technology-agnostic, held together by shared standards and a common platform.'
aliases: [data mesh principles]
tags: [data-mesh]
sources: [src-00-playbook-v2.5, src-01-dehghani-2019, src-02-dehghani-2020]
related: [zhamak-dehghani, five-principles, knowledge-mesh, distributed-knowledge]
raw: raw/playbook-v2.5.md#lineage
owner: B. Rousseaux
status: active
version: '2.5'
updated: '2026-11-17'
---

# Data Mesh

In 2019, [[zhamak-dehghani|Zhamak Dehghani]] described what many data teams had lived through: a central data lake run by highly specialised engineers, cut off from the business domains that produce and understand the data. The central team became a bottleneck, while the people who knew the data had no ownership of it. Her answer was a paradigm shift, in architecture and organisation alike, not a better lake.

In 2020 she formalised four principles:

1. domain-oriented decentralised data ownership and architecture;
2. data as a product;
3. self-serve data infrastructure as a platform;
4. federated computational governance.

She presented them as a technology-agnostic model: tools appear as examples, and practices and technologies are expected to vary while the principles remain. The mesh is not a landscape of fragmented silos but an intentionally designed distribution, held together by shared standards for interoperability and a common platform.

The [[knowledge-mesh]] borrows this architecture openly and transposes the four principles one by one (see [[five-principles]]). Its diagnosis comes from the other foundation, [[distributed-knowledge|knowledge management research]].
