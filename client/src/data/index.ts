// Import topics data
import topicsRaw from './topics.json';

export interface Topic {
  id: number;
  title: string;
  level: string[];
  interest_areas: string[];
  location: string[];
  time_required: string;
  methods_allowed: string[];
  description: string;
  suitability: string;
  main_methods: string;
  possible_sites: string;
  key_references: Array<{ title: string; source: string }>;
}

export const topics: Topic[] = topicsRaw as Topic[];

export default topics;
