// Type definitions for the project

export interface ImageManifestEntry {
  src: string;
  name: string;
  ext: string;
}

export interface ImageManifest {
  [folder: string]: ImageManifest | ImageManifestEntry[];
}
