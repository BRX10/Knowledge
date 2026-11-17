---
id: schema
title: "Knowledge Mesh Wiki: schema"
version: "1.0"
updated: 2026-11-17
owner: B. Rousseaux
---

# Knowledge Mesh Wiki: schema

This file is the contract of the wiki. Any person or agent that ingests, edits, queries or checks the wiki follows it. The pattern is the one Andrej Karpathy describes as an "LLM wiki": raw sources stay untouched, a compiled layer of interlinked Markdown pages is built from them once and kept current, and this schema states the rules.

## 1. Layers

| Layer | Where | Rule |
|---|---|---|
| Raw | `raw/playbook-v2.5.md` | The source, verbatim. Immutable: a new playbook version is a new raw file, never an edit. The playbook is the primary source of every page (`src-00-playbook-v2.5`); nothing is invented, in content or in sources. |
| Wiki | `pages/<type>/<id>.md` | Compiled pages. Every statement comes from the raw layer; nothing is added. |
| Schema | `SCHEMA.md` (this file) | The rules. Changed deliberately, and logged. |
| Catalog | `index.md` | One line per page, by type. Rebuilt at every build. |
| Journal | `log.md` | Append-only. One entry per operation. |
| API | `api/pages.json`, `api/graph.json`, `api/search.json` | Machine-readable views, rebuilt at every build. |

Figures are not stored as text: each figure has a page that describes it in words and points to the image file in the site repository (`assets/img/v/` and `assets/img/a/`).

## 2. Page types

| Type | Purpose | Folder |
|---|---|---|
| `overview` | The entry page: what the playbook argues, and where to go next | `pages/overview/` |
| `section` | A hub for one part of the playbook: summary, key ideas, concepts, figures, sources | `pages/sections/` |
| `concept` | One idea, defined in the playbook's terms, with its sources | `pages/concepts/` |
| `entity` | A person, organisation, standard or protocol the playbook relies on | `pages/entities/` |
| `figure` | A text description of an illustration, with a link to the image | `pages/figures/` |
| `source` | One reference, with the playbook's own annotation and where it is used | `pages/sources/` |

## 3. Frontmatter

Every page starts with YAML frontmatter.

| Field | Required | Content |
|---|---|---|
| `id` | yes | Unique, kebab-case, stable. Never reused. Sections start with `sec-`, figures with `fig-`, sources with `src-NN-`. |
| `title` | yes | Human title. |
| `type` | yes | One of the six types above. |
| `summary` | yes | At most two sentences and 40 words, drawn from the playbook. Shown at the top of the page and in the catalog. |
| `aliases` | no | Other names a reader or agent may use. |
| `tags` | yes | From the closed list below. |
| `sources` | yes for concepts | Source ids (`src-NN-...`) the idea draws on, as named in the playbook's "Sources & inspirations" boxes. |
| `related` | no | Ids of pages explicitly related. Backlinks are computed, never written by hand. |
| `raw` | yes except sources | Anchor in the raw file, e.g. `raw/playbook-v2.5.md#principle-zero`. |
| `owner` | yes | `B. Rousseaux`. |
| `status` | yes | `active`, `under-review`, `quarantined` or `retired`, the four states of the playbook. |
| `version` | yes | Playbook version the page reflects (`"2.5"`). |
| `updated` | yes | Date of the last change (`YYYY-MM-DD`). |

Figure pages add `figure` (number), `caption` (verbatim), `image` (violet file), `image_amber` (amber file). Source pages add `ref` (number), `citation`, `url` (when public) and `family`.

**Closed tag list:** `foundations`, `management-plane`, `consumption-plane`, `federation`, `ownership`, `lifecycle`, `governance`, `agents`, `context`, `data-mesh`, `km-research`, `practice`, `values`, `standards`, `regulation`, `figure`, `reference`.

## 4. Body

- Plain Markdown, written in the playbook's own words, impersonal.
- Links between pages use `[[id]]` or `[[id|label]]` (inside a table, `[[id\|label]]`). A link must point to an existing id.
- Direct quotations from the playbook are set as blockquotes (`> ...`) and must appear verbatim in the raw file.
- No numbered citations in the body: sources are listed in the frontmatter and shown at the foot of the page.
- Pages do not cite the author of the playbook as a source.

## 5. Operations

**Ingest.** Read a raw source, create or update the pages it touches, refresh summaries, add `[[links]]`, append one entry to `log.md`:
`## [YYYY-MM-DD] ingest | <title>` followed by the pages created and updated.

**Query.** Start from `index.md` (or `api/search.json`), open the pages it points to, follow links and backlinks, and answer with the page ids relied on. An answer worth keeping can be filed as a new page, logged as `query`.

**Lint.** `lint.py` checks, and the build fails on errors:
- every `[[link]]` resolves; no duplicate ids; required fields present; tags in the closed list;
- summaries within 2 sentences and 40 words;
- every concept has at least one incoming link (no orphans); a concept without a named source is reported as a warning, since the playbook does not name a source for every idea;
- every blockquote appears verbatim in the raw file;
- each page's share of 5-word sequences found in the raw file is reported, as a fidelity signal.

Each lint run that changes something is logged as `lint`.

## 6. Serving

The build turns pages into HTML under `/wiki/`, with the summary and metadata in the header and Sources, Related and Backlinks at the foot. The same content is published as Markdown and JSON, so that a server speaking the Model Context Protocol could expose it as tools such as `search(query)`, `get_page(id)`, `get_backlinks(id)` and `list_pages(type, tag)`, without changing the files.
