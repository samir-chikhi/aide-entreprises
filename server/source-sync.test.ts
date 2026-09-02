import { describe, expect, it, vi } from "vitest";
import { AIDES_ENTREPRISES_EXPORT_URL, inspectAidesEntreprisesExport } from "./sourceSync";

describe("Aides-Entreprises source sync", () => {
  it("uses the public open-data export URL", () => {
    expect(AIDES_ENTREPRISES_EXPORT_URL).toBe("https://data.cquest.org/dge_aides_entreprises/aides.json");
  });

  it("returns provenance metadata for a healthy export", async () => {
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(null, {
        status: 200,
        headers: { "content-type": "application/json", "content-length": "53818430" },
      }),
    );

    const preview = await inspectAidesEntreprisesExport();
    expect(fetchMock).toHaveBeenCalledWith(AIDES_ENTREPRISES_EXPORT_URL, expect.objectContaining({ method: "HEAD" }));
    expect(preview).toMatchObject({ sourceId: "aides-entreprises-open-data", status: 200, contentType: "application/json" });
    fetchMock.mockRestore();
  });
});
