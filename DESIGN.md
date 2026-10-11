---
name: SYGNATURA
description: A law firm laid out like a court cause list (wokanda), in robe green, graphite and paper white.
colors:
  robe-green: "#134a33"
  robe-green-deep: "#0d3624"
  robe-green-mist: "#e3ece7"
  on-green-muted: "#c4d8cd"
  robe-adwokat: "#2f9e6a"
  robe-radca: "#3c78d8"
  ink: "#14181b"
  ink-2: "#454d52"
  ink-3: "#5f686d"
  graphite: "#16191b"
  paper: "#ffffff"
  stone: "#f0f1ef"
  rule: "#d9dedb"
  error-red: "#b3261e"
typography:
  display:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(40px, 5.4vw, 78px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(34px, 4.6vw, 60px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  reference:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "34px"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "12.5px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(72px, 9vw, 128px)"
  row: "28px"
  control-gap: "12px"
components:
  button-primary:
    backgroundColor: "{colors.robe-green}"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.robe-green-deep}"
  button-white:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "54px"
  button-white-hover:
    backgroundColor: "{colors.robe-green-mist}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "54px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
    height: "54px"
  topic-chip-selected:
    backgroundColor: "{colors.robe-green}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "10px 14px"
    height: "54px"
  step-tag:
    backgroundColor: "{colors.robe-green-mist}"
    textColor: "{colors.robe-green}"
    rounded: "{rounded.none}"
    padding: "4px 10px"
---

# Design System: SYGNATURA

## Overview

**Creative North Star: "The Cause List"**

SYGNATURA is a law firm set out the way a court posts its wokanda: ruled columns, fixed column headers, each matter filed under its repertory letters (GC, C, Ns, RC, P, K). The visual system is the register itself. Information sits in rows separated by hairline rules and opened by a heavy top rule; nothing floats in a card when it can sit in a row. The enquiry form is a file, and a submitted enquiry receives its own case reference ("Sygn.") stamped in large green numerals.

The palette is a committed field of advocate-robe green against graphite and paper white. Green is not an accent sprinkled on white: whole sections (the cause list, the hero strip) are green, and graphite carries the hero, fees and footer. Type is one family, Schibsted Grotesk, worked hard at weight 800 to 900 for headings and repertory marks and left at 400 for reading text. Corners are square everywhere. There are no ornaments, no gavel imagery, no navy-and-gold.

The density is that of a well-kept register: calm, exact, easy to scan on a phone by someone who is stressed. Imagery is restrained to real legal interiors (bound volumes, a library), darkened under a left-weighted graphite scrim so text sits on the dark side.

**Key Characteristics:**
- Ruled-list layout: heavy 3px top rule, 1px hairlines between rows, uppercase column headers.
- Robe green as a full-bleed section field, not a highlight.
- One grotesque family, heavy (800/900) headings and reference marks, regular body.
- Square corners on every surface, control and swatch.
- Repertory letters and step numerals as the dominant typographic marks.
- Alternating section grounds: graphite, green, paper, stone.

## Colors

A two-field palette: robe green and graphite carry whole sections, paper and stone carry reading, and two small robe swatches encode profession.

### Primary
- **Robe Green** (`robe-green`): the committed field. Background of the cause-list section and hero strip, primary buttons, selected topic chips, focus outlines, step numerals, repertory marks on paper, the stamped case reference, input focus border, text selection.
- **Deep Robe Green** (`robe-green-deep`): hover state of primary buttons only.
- **Green Mist** (`robe-green-mist`): pale tint for step duration tags and the hover of white buttons.
- **On-Green Muted** (`on-green-muted`): secondary text on green: column headers, section intros and case descriptions inside the cause list, hero strip labels.

### Secondary
- **Adwokat Robe** (`robe-adwokat`) and **Radca Robe** (`robe-radca`): 12px square swatches with a 2px border that mark a lawyer's profession (advocate vs. legal counsel), matching the colour of the robe's jabot. Used in the cause list, the team roster and its key. They are a legend, never a fill for larger surfaces.

### Neutral
- **Ink** (`ink`): body text on paper, 3px top rules on paper sections, the line button and the segmented control.
- **Ink 2** (`ink-2`): secondary paragraphs, roles, step descriptions.
- **Ink 3** (`ink-3`): tertiary metadata: column headers on paper, field hints, dt labels, demo notes.
- **Graphite** (`graphite`): ground for hero, fees and footer. Text on graphite uses white for headings and light greys (around #c3c9cc) for body.
- **Paper** (`paper`): default page ground, header, form surface.
- **Stone** (`stone`): alternate section ground (team, contact) so paper sections never sit back to back.
- **Rule** (`rule`): hairlines between rows, resting border of inputs and topic chips.
- **Error Red** (`error-red`): invalid field borders, labels and form error text only.

### Named Rules
**The Committed Field Rule.** Robe green is used as whole sections and bands, not as small decorative touches. A page in this system has at least one full-bleed green field.

**The Robe Legend Rule.** The two robe swatches only ever appear as 12px square markers next to a lawyer's name or in the key that explains them.

## Typography

**Display Font:** Schibsted Grotesk (with system-ui, sans-serif)
**Body Font:** Schibsted Grotesk (same family)

**Character:** A single serious grotesque used at the extremes: 800 to 900 for headings, repertory letters, step numbers and the case reference; 400 for reading text at a generous 17px / 1.65. The weight contrast replaces any need for a second family.

### Hierarchy
- **Display** (800, clamp(40px, 5.4vw, 78px), 1.05, -0.03em): the hero headline only, max about 12.5em wide.
- **Headline** (800, clamp(34px, 4.6vw, 60px), 1.05, -0.02em): section titles (h2), balanced wrapping.
- **Title** (800, 20 to 24px, 1.2, -0.01em): row and card titles: roster names, step titles, fee types, FAQ questions (700, 19px).
- **Reference** (900, 34px in the cause list, 56px for step numerals, clamp(40px, 6vw, 68px) for the stamped "Sygn." number): repertory letters and numbers, usually in robe green on paper or white on green.
- **Body** (400, 17px, 1.65; 16px under 640px): paragraphs, measure capped around 28 to 44em.
- **Label** (600, 12.5px, 0.08em, uppercase): column headers of ruled lists and the key names of the hero strip key/value pairs.

### Named Rules
**The Weight Not Family Rule.** Hierarchy comes from weight (400 vs. 800/900) and size inside one family. Do not add a serif or a second display face.

**The Column Header Rule.** Uppercase tracked labels belong to the header row of a ruled list or the key of a key/value pair. They do not sit above section headlines.

## Layout

Content sits in a 1240px wrap with a fluid gutter (clamp(16px, 4vw, 40px)). Sections stack with vertical padding of clamp(72px, 9vw, 128px) (120px cap on fees and FAQ) and alternate grounds: graphite hero, green cause list, paper steps, stone team, graphite fees, paper FAQ, stone contact, graphite footer.

The recurring section grid is asymmetric two-column: title or intro on a narrow column (4fr or 5fr) and the ruled list or form on the wide column (8fr or 7fr), gap clamp(32px, 6vw, 88px). The cause list itself is a five-column ruled grid (repertory, area, typical cases, lawyer, toggle) that collapses to four columns at 1100px and to repertory / content / toggle at 640px, with the header row hidden on mobile.

Rows breathe at 22 to 28px vertical padding. The hero fills the viewport below the 76px sticky header (64px on mobile) and ends in a green four-column key/value strip (two columns under 900px). Breakpoints: 1100px (nav hidden, list reflows), 900px (two-column grids stack), 640px (mobile type and controls).

## Elevation & Depth

The system is flat. Depth comes from ground changes between sections and from rules, not shadows. The single exception is the enquiry form (the "file"), which lifts off the stone ground with a 6px green top edge and one soft, low-spread drop shadow, so it reads as a document laid on the desk.

### Shadow Vocabulary
- **File lift** (`box-shadow: 0 30px 60px -40px rgba(20,24,27,.45)`): the enquiry form and its filed confirmation only.
- **Input focus halo** (`box-shadow: 0 0 0 3px rgba(19,74,51,.18)`): text fields on focus, paired with a robe-green border.

### Named Rules
**The Ruled Not Raised Rule.** Separate content with a 3px top rule and 1px hairlines. Shadows are reserved for the filed document.

## Shapes

Every corner is square (0 radius): buttons, inputs, chips, swatches, the logo mark, images, the segmented control. Borders are structural and thick: 2px on controls, 3px opening rules on lists, 6px top edge on the file. The only round geometry is the loading spinner. Disclosure toggles are square outlined boxes with a drawn plus that rotates to a minus, and the FAQ chevron is drawn from two borders, never a glyph.

## Components

### Buttons
Blunt and rectangular, sized for thumbs.
- **Shape:** square corners (0px), 54px minimum height, 26px horizontal padding, 700 weight 16px, 2px border slot.
- **Primary (green):** robe green fill, white text; hover darkens to deep robe green. Used for the header CTA (46px tall there) and form submit (full width).
- **White:** paper fill, ink text; hover to green mist. Used on dark or green grounds (hero, cause-list entries).
- **Ghost:** transparent with a 2px white border at 75% opacity, white text; hover fills white with ink text. Hero secondary action only.
- **Line:** transparent with 2px ink border; hover fills ink with white text. Used on paper.
- **Loading:** disabled at 70% opacity with a 14px spinning ring after the label.
- **Transitions:** background, color and border over 0.2s on cubic-bezier(.16,1,.3,1).

### Chips (topic picker)
- **Style:** 2-column grid of square tiles, 54px tall, 2px rule border, a green 900-weight repertory code before the label.
- **State:** hover border to ink 3; selected fills robe green with white text and white code; invalid shows error red borders.

### Segmented Control
- Three equal square cells inside a 2px ink border, separated by 2px ink dividers; the checked cell fills ink with white text. Used for yes/no/don't-know questions.

### Cards / Containers
- **Corner Style:** square.
- **Background:** content does not live in cards. The one container is the file (form): paper ground, padding clamp(22px, 3.5vw, 40px), 6px robe-green top border, file-lift shadow.
- **Internal gap:** 22px between form blocks.

### Inputs / Fields
- **Style:** paper fill, 2px rule border, square, 54px minimum height (textarea 132px), 12px 14px padding, 700 15px label above.
- **Hover:** border to ink 3.
- **Focus:** border to robe green plus a 3px translucent green halo.
- **Error:** border and label turn error red; a counter hint turns robe green once valid.

### Navigation
- Solid white sticky header, 76px tall, 1px rule bottom border. Square green logo mark with a 900-weight "S", wordmark in 900 with wide tracking.
- Links 600 15.5px with a 2px transparent bottom border that turns robe green on hover.
- Phone number with a stroked line icon in green, then a compact green button.
- Under 1100px links hide; under 640px the phone collapses to a 44px square bordered icon button.

### Cause List Entry (signature)
The wokanda row. A full-width button row on the green field, 84px minimum height, columns: repertory letters (900, 34px), area name (800), typical cases in on-green muted, the lawyer with a robe swatch, and a 28px square outlined toggle. Hover lightens the row with a 6% white wash. Opening one entry closes the others; the body expands by animating grid-template-rows from 0fr to 1fr over 0.45s, revealing two columns: what the firm does (list with short white dash markers) and what to bring, with a white button that preselects the matching topic in the form.

### Ruled Lists (steps, roster, fees, FAQ, contact facts)
All share the cause-list grammar: a 3px top rule (ink on light grounds, white on dark), 1px hairline row separators, and a fixed left column for the key (step numeral in green 900, repertory marks, fee type, dt label). Step rows carry a green-mist duration tag.

### Filed Confirmation (signature)
After submit, the form is replaced by the same file surface showing "Sygn." and a generated reference number in robe green 900, entering with a 0.6s scale-down "stamp" animation, then a 22px heading, a short paragraph and a line button to file another.

## Do's and Don'ts

### Do:
- **Do** open every list with a 3px rule and separate rows with 1px hairlines (rule colour on light grounds, white at 20 to 35% on dark).
- **Do** give at least one section a full-bleed robe green field and set its secondary text in on-green muted.
- **Do** keep every corner square, including inputs, chips and images.
- **Do** use 800/900 Schibsted Grotesk for headings, repertory letters and numerals, 400 for body at 17px / 1.65.
- **Do** keep controls at 54px minimum height with 2px borders.
- **Do** switch focus outlines to white on graphite and green grounds (3px outline, 3px offset).
- **Do** honour prefers-reduced-motion by collapsing animations and transitions.

### Don't:
- **Don't** introduce rounded corners or pill shapes.
- **Don't** add a serif or second display family.
- **Don't** use navy-and-gold, brass, gavels, scales or icon-tile grids.
- **Don't** wrap content in floating shadowed cards; shadows belong to the filed document only.
- **Don't** put uppercase tracked labels above section headlines.
- **Don't** use the robe swatch colours for anything but profession markers.
