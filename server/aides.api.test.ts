import { describe, expect, it } from "vitest";

describe("Aides-Entreprises API credentials", () => {
  it("accepts the configured headers on the authenticated API entrypoint", async () => {
    const id = process.env.AIDES_ENTREPRISES_ID;
    const key = process.env.AIDES_ENTREPRISES_KEY;
    expect(id, "AIDES_ENTREPRISES_ID doit être configuré").toBeTruthy();
    expect(key, "AIDES_ENTREPRISES_KEY doit être configuré").toBeTruthy();

    const response = await fetch("https://data.aides-entreprises.fr/api", {
      headers: {
        "X-Aidesentreprises-Id": id!,
        "X-Aidesentreprises-Key": key!,
        Accept: "application/json",
      },
    });

    expect(response.status).not.toBe(401);
    expect(response.status).not.toBe(403);
    expect(response.status).toBe(200);
  }, 20000);
});
