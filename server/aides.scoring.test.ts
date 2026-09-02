import { describe, expect, it } from "vitest";
import { scoreAid } from "../shared/aides";

describe("scoreAid", () => {
  it("prioritise une aide nationale compatible et immédiatement actionnable", () => {
    const score = scoreAid(
      { territory: "France", stages: ["Création"], forms: ["Société"], sectors: ["Tous secteurs"], type: "Exonération / allègement", status: "À demander" },
      { territory: "Montauban / Grand Montauban", stage: "Création", form: "Société", sector: "Tous secteurs", type: "Tous types" },
    );
    expect(score).toBe(100);
  });

  it("n’accorde pas les points de correspondance aux critères absents", () => {
    const score = scoreAid(
      { territory: "Occitanie", stages: ["Développement"], forms: ["Association"], sectors: ["Impact social"], type: "Subvention / appel à projets" },
      { territory: "Tarn-et-Garonne", stage: "Création", form: "Société", sector: "Commerce", type: "Tous types" },
    );
    expect(score).toBe(10);
  });

  it("utilise urgencyLevel sans analyser le texte de deadline", () => {
    const base = { territory: "France", stages: ["Création"], forms: ["Société"], sectors: ["Tous secteurs"], type: "Aide", status: "À vérifier" } as const;
    const profile = { territory: "France", stage: "Création", form: "Société", sector: "Tous secteurs", type: "Tous types" };
    expect(scoreAid({ ...base, urgencyLevel: "immediate" }, profile)).toBe(103);
    expect(scoreAid({ ...base, urgencyLevel: "watch" }, profile)).toBe(95);
  });
});
