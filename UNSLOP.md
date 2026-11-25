# Unslop pass

Done with the unslop skill (unslop by Damir Sokolovsky, @heydamir, CC BY 4.0) on November 25, 2026.

## Audit

Light slop: built against the direction from the start, so this was polish mode. Signs found:

- Numbers in mixed formats in the dates table: "Apr 4 to April 11, 2027" put a short month next to a long one (`[slug].astro`)
- The terracotta numbered steps on the enquiry page borrowed the route's day stops, diluting the signature (`enquire.astro`)
- The map caption called every number "a night on the route", which wasn't true of the last day (`[slug].astro`)

No gradients on chrome, glows, gradient text, emoji, pill badges, uppercase tracked labels, 700+ weights, italic emphasis, trailing periods on labels, hype words, looping motion or `transition-all` were found.

## Direction

- Product: a small-group walking and rail tour operator, for people choosing a journey, checking dates and asking about a place
- Character: curious, unhurried, well organized
- World: paper maps, contour lines, rail timetables; map-paper neutrals with terracotta as the one accent, the color of a route drawn in pencil
- Moments: the drawn topographic map with the route and its day stops, in the hero and beside every itinerary
- Signature: the route line with numbered day dots, used on the maps and the day-by-day itinerary only

## Changes

- Spacing: no change needed (4px scale, one row height per list, 24 padding in cards)
- Color: enquiry steps moved to muted ink, so terracotta numbers only ever mean a day on a route; terracotta also marks primary buttons and "1 space left"
- Copy: date ranges now read "April 4 to 11, 2027" or "May 30 to June 6, 2027"; the map caption says each number is a day of the journey
- Type: no change needed (Literata at 400 for headlines only, Work Sans at 400 and 500, tabular figures for prices, days and dates)
- Layout: no change needed (split hero with the map, tour rows with a map, text and facts at varied widths, itinerary beside a sticky map)
- Details: no change needed
- Motion: no change needed (color transitions and a small press scale only)

screenshot-2: Highland Glens tour page, the itinerary day by day beside the route map
screenshot-3: Dates and prices for that tour, with spaces left and a full departure
