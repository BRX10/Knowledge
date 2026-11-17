---
id: compiled-knowledge
title: Compiled knowledge (LLM wiki)
type: concept
summary: 'The pages of a base are the compiled layer Andrej Karpathy described as an "LLM wiki": knowledge assembled once and kept up to date, rather than reassembled at every question.'
aliases: [LLM wiki, compiled not reassembled]
tags: [management-plane, agents]
sources: [src-00-playbook-v2.5, src-12-karpathy-2026]
related: [andrej-karpathy, knowledge-base, principle-zero]
raw: raw/playbook-v2.5.md#knowledge-base
owner: B. Rousseaux
status: active
version: '2.5'
updated: '2026-11-17'
---

# Compiled knowledge (LLM wiki)

In a [[knowledge-base]], pages hold the consolidated knowledge, in an open, readable format, each page linked to its sources. This is the compiled layer [[andrej-karpathy|Andrej Karpathy]] described as an "LLM wiki": knowledge assembled once and kept up to date, rather than reassembled at every question.

In Karpathy's pattern, as the playbook summarises it, a language model reads raw sources and integrates them into a persistent, interlinked Markdown wiki, noting contradictions and checking for stale claims, while a human curates sources and asks questions. This wiki itself follows that pattern.
