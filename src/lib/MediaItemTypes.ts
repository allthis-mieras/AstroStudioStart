// Definitie van MediaItem
export type MediaItem = 
  | MediaImageItem
  | MediaVideoItem
  | MediaEmbedItem;

// Type voor een afbeelding
export interface MediaImageItem {
  type: "image";
  src: string;           // URL naar de afbeelding
  alt?: string;          // Beschrijvende alternatieve tekst
  title?: string;        // Titel van de afbeelding
}

// Type voor een video
export interface MediaVideoItem {
  type: "video";
  sources: string[];     // Lijst van video-URL's
  title: string;         // Titel van de video
  description?: string;  // Beschrijving van de video
  subtitle?: string;     // Ondertitel van de video
  thumb?: string;        // Thumbnail URL
  size?: "full" | "page" | "inline" | "large"; // Grootte van de video
  showCaption?: boolean; // Optie om een bijschrift te tonen
}

// Type voor een embed
export interface MediaEmbedItem {
  type: "embed";
  service: "youtube" | "vimeo" | string; // Embed-dienst (YouTube, Vimeo, etc.)
  id: string;           // ID van de video of content
  title: string;        // Titel van de embed
  params?: string; // Extra parameters voor de embed URL
  thumbnail?: string;   // Optionele thumbnail
  ratio?: "16:9" | "4:3" | "1:1" | "9:16" | "21:9" | string; // Aspect ratio
  autoscale?: boolean;  // Optie om de embed te schalen
  widget?: boolean;     // Optie om een widget-modus te gebruiken
}