export const AIDES_ENTREPRISES_EXPORT_URL = "https://data.cquest.org/dge_aides_entreprises/aides.json";

export type SourceSyncPreview = {
  sourceId: string;
  sourceUrl: string;
  checkedAt: string;
  contentType: string | null;
  contentLength: string | null;
  status: number;
};

export async function inspectAidesEntreprisesExport(): Promise<SourceSyncPreview> {
  const response = await fetch(AIDES_ENTREPRISES_EXPORT_URL, {
    method: "HEAD",
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) {
    throw new Error(`Aides-Entreprises export unavailable (${response.status})`);
  }

  return {
    sourceId: "aides-entreprises-open-data",
    sourceUrl: AIDES_ENTREPRISES_EXPORT_URL,
    checkedAt: new Date().toISOString().slice(0, 10),
    contentType: response.headers.get("content-type"),
    contentLength: response.headers.get("content-length"),
    status: response.status,
  };
}
