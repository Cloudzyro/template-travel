import { destinations, type Tour } from "../data/site";

export const money = (n: number) => `$${n.toLocaleString("en-US")}`;

// "2027-05-16" becomes "May 16, 2027" (read as a calendar date, never shifted by time zone)
export function longDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}
export function shortDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
}
export function monthOf(iso: string) {
  return Number(iso.split("-")[1]);
}
export function endDate(iso: string, days: number) {
  const [y, m, d] = iso.split("-").map(Number);
  const end = new Date(Date.UTC(y, m - 1, d + days - 1));
  return end.toISOString().slice(0, 10);
}

export const destinationName = (id: string) => destinations.find((d) => d.id === id)?.name ?? id;
export const fromPrice = (t: Tour) => Math.min(...t.departures.map((d) => d.price));

export const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function spacesText(n: number) {
  if (n === 0) return "Full, waitlist open";
  if (n <= 3) return `${n} ${n === 1 ? "space" : "spaces"} left`;
  return `${n} spaces`;
}

// "April 4 to 11, 2027" or "May 30 to June 6, 2027"
export function dateRange(startIso: string, days: number) {
  const endIso = endDate(startIso, days);
  const [sy, sm] = startIso.split("-").map(Number);
  const [ey, em, ed] = endIso.split("-").map(Number);
  const start = longDate(startIso).replace(`, ${sy}`, "");
  if (sy === ey && sm === em) return `${start} to ${ed}, ${ey}`;
  return `${start} to ${longDate(endIso)}`;
}
