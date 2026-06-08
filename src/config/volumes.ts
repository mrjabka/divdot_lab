export type VolumePhileSort = {
  by: "date" | "order";
  direction: "asc" | "desc";
};
export type VolumeConfig = {
  title: string;
  subtitle?: string;
  listLabel: string;
  postscript?: string[];
  entryPrefix?: string;
  entryLabel?: "index" | "year";
  reverseEntryNumbers?: boolean;
  phileSort?: VolumePhileSort;
};
export const defaultVolumeConfig = (number: number): VolumeConfig => ({
  title: `Volume ${number}`,
  listLabel: `Volume ${number}`,
  phileSort: {
    by: "date",
    direction: "desc"
  },
  postscript: ["  ──[ EOF ]──────────────────────────────────────────────────────────────────//───"]
});
export const volumeConfigs = new Map<number, VolumeConfig>([
  [
    0,
    {
      title: "Biology",
      listLabel: "Volume 0 - Biology",
      phileSort: {
        by: "date",
        direction: "desc"
      },
      postscript: [
        "  ──[ EOF ]──────────────────────────────────────────────────────────────────//───",
        "",
        "  Every pioneer is at the same time (eo ipso) an outsider.",
        "",
        "  Erwin Chargaff"
      ]
    }
  ]
]);
export function volumeConfig(number: number): VolumeConfig {
  return volumeConfigs.get(number) ?? defaultVolumeConfig(number);
}
 
