export type AidProfile = { territory?: string; stage?: string; form?: string; sector?: string; type?: string };
export type AidForScoring = { territory: string; stages: string[]; forms: string[]; sectors: string[]; type: string; status?: string; urgencyLevel?: "immediate" | "upcoming" | "watch" };

export function scoreAid(a: AidForScoring, f: AidProfile) {
  let score = 0;
  if (f.territory && (a.territory === f.territory || a.territory === "France")) score += 30;
  if (f.stage && (a.stages.includes(f.stage) || a.stages.includes("Tous stades"))) score += 22;
  if (f.form && (a.forms.includes(f.form) || a.forms.includes("Toutes formes"))) score += 18;
  if (f.sector && (a.sectors.includes(f.sector) || a.sectors.includes("Tous secteurs"))) score += 15;
  if (f.type && (f.type === "Tous types" || a.type === f.type)) score += 10;
  if (a.status === "À demander") score += 5;
  if (a.urgencyLevel === "immediate") score += 8;
  else if (a.urgencyLevel === "upcoming") score += 4;
  return score;
}
