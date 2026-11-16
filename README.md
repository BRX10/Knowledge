# Site perso « Knowledge in the age of AI »

Site statique, sans build ni dépendance externe : pas de CDN, pas de Google Fonts, aucun tracker tant que GoatCounter n'est pas activé.

```
index.html                    accueil perso : playbooks/études, articles, repos (lus dans assets/content.js)
assets/content.js             ← LE fichier à éditer pour ajouter un playbook, une étude, un article ou un repo
assets/site.css, common.js    style et fonctions partagés
assets/km.js                  tuiles, fenêtres de détail et carrousel de la page Knowledge Mesh
assets/figures, illus, carousel, fonts, og-image.png
knowledge-mesh/index.html     les 19 concepts en tuiles (le détail s'ouvre au clic, lien partageable #id)
knowledge-mesh/concepts.js    textes des tuiles (extraits du playbook v2.5)
knowledge-mesh/playbook.html  le playbook complet, texte inchangé
knowledge-mesh/downloads/     PDF du playbook (avec et sans figures) + PDF du carrousel
.nojekyll
```

## Mettre en ligne

1. Sur github.com (compte BRX10) : **New repository**, nom **`Knowledge`**, **Public**.
2. Uploader le **contenu** du dossier, avec `index.html` à la racine (**Add file › Upload files**, ou en ligne de commande, voir plus bas).
3. **Settings › Pages** : Source *Deploy from a branch*, branche `main`, dossier `/ (root)`.
4. Le site est disponible en 1 à 2 minutes aux adresses `https://brx10.github.io/Knowledge/` (accueil) et `https://brx10.github.io/Knowledge/knowledge-mesh/` (lien à mettre dans le post LinkedIn).

```bash
cd site-knowledge
git init -b main && git add . && git commit -m "Knowledge site: Knowledge Mesh v2.5"
git remote add origin https://github.com/BRX10/Knowledge.git
git push -u origin main
```

Si le repo change de nom, l'adresse devient `https://brx10.github.io/<nom>/`. Il faut alors remplacer `https://brx10.github.io/Knowledge/` dans les balises `og:` des 3 pages HTML, sinon l'aperçu LinkedIn sera cassé.

## Faire évoluer le site

- **Ajouter un article, un repo ou un playbook** : ajouter une entrée dans `assets/content.js`, en suivant les exemples. Une entrée sans `url` reste cachée ; pour la voir avant publication, ajouter `?preview` à l'adresse.
- **Nouveau playbook ou nouvelle étude** : créer un dossier (ex. `mon-etude/`) avec sa page, puis l'ajouter à la liste `works` avec `url: "mon-etude/"`.
- **Compteur de téléchargements** : créer un site sur goatcounter.com, puis mettre son code dans le champ `goatcounter` de `content.js`. Chaque clic sur un lien de téléchargement est alors compté et horodaté, sans cookie ni donnée nominative selon GoatCounter. Tant que ce champ est vide, aucun script n'est chargé.

## Avant le post

- Vérifier l'aperçu avec https://www.linkedin.com/post-inspector/
- Aucune licence n'est incluse, donc par défaut tous droits sont réservés. Pour autoriser la reprise, ajouter un fichier `LICENSE` (ex. CC BY 4.0).
- La police manuscrite Architects Daughter est sous licence SIL Open Font License, à vérifier si besoin. Elle a été reprise des figures du projet.
