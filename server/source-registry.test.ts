import { describe, expect, it } from "vitest";
import { sourceRegistry } from "../shared/sourceRegistry";

describe("source registry", () => {
  it("keeps provenance metadata for every registered source", () => {
    expect(sourceRegistry.length).toBeGreaterThan(0);
    for (const source of sourceRegistry) {
      expect(source.officialUrl).toMatch(/^https:\/\//);
      expect(source.checkedAt).toMatch(/^2026-\d{2}-\d{2}$/);
      expect(source.supports.length).toBeGreaterThan(0);
      expect(source.notes.length).toBeGreaterThan(10);
    }
  });

  it("contains the authenticated Aides-Entreprises source and an open fallback export", () => {
    expect(sourceRegistry.find(source => source.id === "aides-entreprises-api")?.access).toBe("connected");
    expect(sourceRegistry.find(source => source.id === "aides-entreprises-open-data")?.access).toBe("open");
  });
});
