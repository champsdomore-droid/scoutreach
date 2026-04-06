# Clief Notes Instructor Kit

Welcome. This folder is your workspace for building a course in the Clief Notes community. It contains everything you need: the writing style, the lesson format, a course planning template, and a sample lesson showing what "done" looks like.

## How to use this

**Step 1: Read the context folder.**

Before you write anything, read these four files:

- `context/STYLE_GUIDE.md` — How we write. Voice, rules, what to avoid.
- `context/LESSON_TEMPLATE.md` — The structure every lesson page follows.
- `context/COURSE_OUTLINE_TEMPLATE.md` — How to plan your course before writing lessons.
- `context/SAMPLE_LESSON.md` — A completed lesson so you can see the format in action.

**Step 2: Plan your course.**

Copy the course outline template into the `working/` folder and fill it out. This includes your course title, audience, lesson list, connection map, and one sample lesson. This outline is what gets reviewed before you start writing full lessons.

**Step 3: Submit your outline.**

Post your completed outline in the #instructor-applications channel on Discord. Jake or a mod will review it in the thread. Expect feedback and questions. That is the process working.

**Step 4: Build your lessons.**

Once approved, write your lessons one at a time using the lesson template. Draft in `working/`, move finished versions to `output/`. If you are using Claude or another AI to help write, point it at this folder. The `CLAUDE.md` file at the root tells it how to behave, what style to use, and where to find the templates.

## Using this with Claude

If you have Claude Pro or Claude Code, this folder works as a project workspace. Claude will read the `CLAUDE.md` file and the context folder, then write lesson content in your voice using the correct template. Give it an outline or a transcript and it will produce a lesson page ready to paste into Skool.

If you are using the Claude web interface (claude.ai), you can paste the contents of `CLAUDE.md` and `context/STYLE_GUIDE.md` into a Claude Project as custom instructions. Then paste the lesson template into the conversation when you start writing.

## Folder structure

```
instructor-kit/
├── CLAUDE.md                  — AI workspace instructions
├── README.md                  — You are here
├── context/
│   ├── STYLE_GUIDE.md         — Writing voice and rules
│   ├── LESSON_TEMPLATE.md     — Lesson page structure
│   ├── COURSE_OUTLINE_TEMPLATE.md — Course planning template
│   └── SAMPLE_LESSON.md       — Example of a finished lesson
├── working/                   — Your drafts and works in progress
└── output/                    — Finished lessons ready to paste
```

## Questions

If something in this kit is unclear or missing, post in the Discord. We will update the kit based on real questions from real instructors.
