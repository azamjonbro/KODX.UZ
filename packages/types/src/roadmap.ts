export interface RoadmapStep {
  id: string;
  roadmapId: string;
  title: string;
  description: string;
  order: number;
  courseId?: string | null;
}

export interface Roadmap {
  id: string;
  slug: string;
  title: string;
  description: string;
  level: string;
  steps: RoadmapStep[];
}
