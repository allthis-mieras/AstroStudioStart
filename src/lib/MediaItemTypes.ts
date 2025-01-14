export interface MediaItem {
  type: "image" | "video" | "embed";
  src?: string;
  alt?: string;
  title?: string;
  id?: string;
  service?: string;
  params?: string;
  thumbnail?: string;
  ratio?: string;
  autoscale?: boolean;
  widget?: boolean;
  size?: string;
  sources?: string[];
  description?: string;
  subtitle?: string;
  thumb?: string;
  showCaption?: boolean;
}