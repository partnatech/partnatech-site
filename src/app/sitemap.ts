import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.partna.tech/", lastModified: "2024-03-15T13:44:10+00:00", priority: 1.0 },
    {
      url: "https://www.partna.tech/programs",
      lastModified: "2024-03-15T13:44:10+00:00",
      priority: 0.8,
    },
    {
      url: "https://www.partna.tech/learn",
      lastModified: "2024-03-15T13:44:10+00:00",
      priority: 0.8,
    },
    {
      url: "https://www.partna.tech/events",
      lastModified: "2024-03-15T13:44:10+00:00",
      priority: 0.8,
    },
    {
      url: "https://www.partna.tech/programs/data-engineering",
      lastModified: "2024-03-15T13:44:10+00:00",
      priority: 0.8,
    },
    {
      url: "https://www.partna.tech/programs/analytics-engineering",
      lastModified: "2024-03-15T13:44:10+00:00",
      priority: 0.8,
    },
    {
      url: "https://www.partna.tech/programs/data-analytics",
      lastModified: "2024-03-15T13:44:10+00:00",
      priority: 0.8,
    },
    {
      url: "https://www.partna.tech/programs/scholarship",
      lastModified: "2024-03-15T13:44:10+00:00",
      priority: 0.8,
    },
  ];
}
