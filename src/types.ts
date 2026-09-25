export type HopPolicy =
  | "watermark"
  | "pack-bound"
  | "none-extra"
  | "look-cone"
  | "room-bound"
  | "block-bound";

export type AtlasKind = "earth" | "dual" | "sky" | "floor+origin" | "range";

export type TonePrimary = "graphic" | "spoilers" | "dim-charts" | "reverence";

export type HopState = "safe" | "sealed" | "unborn" | "extra";

export interface Manifest {
  id: string;
  productName: string;
  hopPolicy: HopPolicy;
  tonePrimary: TonePrimary;
  nouns: {
    discover: string;
    atlas: string;
    packs: string;
    activity: string;
    search: string;
    record: string;
    path: string;
    defaultPack: string;
  };
  rails: [string, string, string];
  atlas: { kind: AtlasKind; layers: string[]; listNeverEmpty: string[] };
  watermarkUnit?: string;
}

export interface RecordItem {
  id: string;
  title: string;
  type: string;
  summary: string;
  body: string;
  layer?: string;
  firstAppearsIn?: number;
  spoilersAfter?: number;
  assigned?: boolean;
  geo?: { label: string; lat: number; lng: number };
  outgoing: string[];
  sensitivity?: string[];
}

export interface Corpus {
  manifest: Manifest;
  records: RecordItem[];
  clockMax?: number;
}
