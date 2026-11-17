---
id: src-01-dehghani-2019
title: Dehghani (2019), monolithic data lake to data mesh
type: source
summary: 'Describes the failure modes of centralised data platforms: monolithic, organised around pipeline stages, and run by hyper-specialised teams cut off from the business domains.'
tags: [reference]
related: [zhamak-dehghani]
ref: 1
citation: Dehghani, Z., How to Move Beyond a Monolithic Data Lake to a Distributed Data Mesh, martinfowler.com (20 May 2019).
url: https://martinfowler.com/articles/data-monolith-to-mesh.html
family: Data architecture and management
owner: B. Rousseaux
status: active
version: '2.5'
updated: '2026-11-17'
---

# Dehghani (2019), monolithic data lake to data mesh

**Citation.** Dehghani, Z., How to Move Beyond a Monolithic Data Lake to a Distributed Data Mesh, martinfowler.com (20 May 2019).

**Link.** <https://martinfowler.com/articles/data-monolith-to-mesh.html>

**Summary in the playbook.**

> Describes the failure modes of centralised data platforms: monolithic, organised around pipeline stages, and run by hyper-specialised teams cut off from the business domains. Proposes a data mesh in which domains own and serve their data as discoverable, trustworthy, self-describing products, on a self-serve platform, under global standards for interoperability.

**Family.** Data architecture and management: the mesh model, ownership and stewardship.

## How the playbook uses it

- [[sec-1-underestimated-pillar]]: failure modes of centralised platforms, named one by one, as a model for the failure modes; the central bottleneck
- [[sec-3-lineage]]: the diagnosis of the limits of centralised data platforms
- [[sec-5-knowledge-mesh]]: data products that are discoverable and interoperable, behind the federation challenges
- [[sec-6-knowledge-base]]: data products that are discoverable, trustworthy and self-describing, with service level objectives: basis of the charter and the contract of a base
- [[sec-7-knowledge-owner]]: the data product owner, responsible for the lifecycle of the domain’s data, including when to revise and retire it
- [[sec-9-field-guide]]: interoperability governed by global standards as a foundational pillar of distributed systems

## Pages that draw on it

[[data-mesh]], [[domain-knowledge-ownership]], [[failure-modes]], [[federated-knowledge-governance]], [[knowledge-as-a-product]], [[knowledge-base]], [[knowledge-mesh]], [[knowledge-mesh-playbook]], [[knowledge-owner]], [[mesh-challenges]], [[portability]], [[zhamak-dehghani]]
