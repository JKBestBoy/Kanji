# Kanji — app d'apprentissage du japonais

Application web autonome : 2 212 kanji (N5 à N1), 7 868 mots (N5 à N1) et 356 points de grammaire (N5 à N1),
avec tracé, cartes en répétition espacée, quiz et profil.
Elle s'installe sur un téléphone comme une app (PWA) et fonctionne hors ligne pour les niveaux déjà ouverts.

## Contenu du dossier
- `index.html` : l'application
- `data/` : kanji (`n5` … `n1`), vocabulaire (`v-n5` … `v-n1`), grammaire (`g-n5`, `g-n4`, `g-n3`, `g-n2`, `g-n1`)
- `manifest.json`, `sw.js`, icônes : installation sur l'écran d'accueil et mode hors ligne
- `.nojekyll` : nécessaire pour GitHub Pages (fichier caché, laisse-le)

## Option 1 : Netlify (le plus simple, 2 minutes)
1. Crée un compte gratuit sur https://app.netlify.com
2. Va sur https://app.netlify.com/drop
3. Glisse le dossier `kanji-app` (dézippé) dans la page.
4. Netlify te donne une adresse du type `https://nom-au-hasard.netlify.app`.
   Tu peux la renommer dans Site configuration → Change site name.

Pour mettre à jour : dans ton site Netlify, onglet Deploys, glisse de nouveau le dossier.

## Option 2 : GitHub Pages
1. Crée un compte sur https://github.com puis un nouveau dépôt public, par exemple `kanji`.
2. Dans le dépôt : Add file → Upload files, et glisse **le contenu** du dossier `kanji-app`
   (index.html, data/, les icônes…), puis Commit changes.
   Le fichier `.nojekyll` est caché : sur Mac, Cmd+Maj+. pour l'afficher et l'inclure.
3. Settings → Pages → Source : « Deploy from a branch », branche `main`, dossier `/ (root)`, Save.
4. Après une ou deux minutes, l'app est à l'adresse `https://ton-pseudo.github.io/kanji/`.

## Installer sur le téléphone
Ouvre l'adresse en https, puis :
- iPhone (Safari) : Partager → « Sur l'écran d'accueil »
- Android (Chrome) : menu ⋮ → « Installer l'application »

## Tester sur ton ordinateur
Ouvrir `index.html` par double-clic ne charge pas les données : il faut un petit serveur.
Dans le dossier `kanji-app` :

    python3 -m http.server 8000

puis ouvre http://localhost:8000

## Mettre à jour l'app
Remplace les fichiers, puis dans `sw.js` change `kanji-v2` en `kanji-v3` (et ainsi de suite)
pour que les téléphones déjà installés téléchargent la nouvelle version.

## À savoir
- La progression est enregistrée dans le navigateur de chaque appareil (pas de compte, pas de synchronisation).
- La progression faite dans la version Claude ne se transfère pas.

## Sources et licences
- Ordre des traits : KanjiVG (CC BY-SA 3.0)
- Lectures et sens des kanji : KANJIDIC2, EDRDG (CC BY-SA 4.0)
- Vocabulaire : listes JLPT open-anki-jlpt-decks (MIT), sens JMdict / EDRDG (CC BY-SA 4.0)
- Traductions françaises du vocabulaire N5 et contenu de grammaire : rédigés pour cette app
Si tu publies l'app, garde ces mentions et partage-la sous la même licence (CC BY-SA).
