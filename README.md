# Kanji

A mobile-first web app to learn Japanese:

- **2,212 kanji** from JLPT N5 to N1, with animated stroke order and finger drawing practice that checks each stroke
- **7,868 vocabulary words** from N5 to N1, sorted by type (verbs, adjectives, nouns…)
- **356 grammar points** from N5 to N1, with explanations, example sentences and fill-in-the-blank quizzes
- **20 graded reading texts** (N5 to N1) with furigana, audio and comprehension questions
- Swipeable spaced-repetition flashcards; quizzes with multiple choice, typed answers (romaji or kana) and listening
- Daily quests, XP, ranks, an activity calendar and progress charts
- Optional account (Google or email) to back up progress and sync it across devices
- Installable on your home screen and usable offline

**Open the app: https://jkbestboy.github.io/Kanji/**

## Install on your phone

Open the link, then:
- **iPhone (Safari):** Share → "Add to Home Screen"
- **Android (Chrome):** menu ⋮ → "Install app"

## Run locally

The app needs a small web server (opening `index.html` directly won't load the data):

```
python3 -m http.server 8000
```

Then open http://localhost:8000

## Updating

After changing files, bump the cache version (`kanji-vNN`) at the top of `sw.js` so installed copies download the new version.

## Accounts

Accounts use Firebase Authentication and Cloud Firestore. The project settings are in `firebase-config.js` and the database security rules in `firestore.rules` (each user can only read and write their own backup).

## Sources and licenses

- Stroke order: [KanjiVG](https://kanjivg.tagaini.net/) (CC BY-SA 3.0)
- Kanji readings and meanings: KANJIDIC2, [EDRDG](https://www.edrdg.org/) (CC BY-SA 4.0)
- Vocabulary: JLPT lists from [open-anki-jlpt-decks](https://github.com/jamsinclair/open-anki-jlpt-decks) (MIT), meanings from JMdict / EDRDG (CC BY-SA 4.0)
- Grammar explanations and example sentences: written for this app

Content is shared under CC BY-SA 4.0.
