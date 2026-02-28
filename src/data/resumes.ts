export interface Resume {
  id: string;
  title: string;
  date: string;
  tags: string[];
  views: number;
  downloads: number;
  score: number;
  expiry: string;
  color: string;
}

export const resumes: Resume[] = [
  {
    id: '1',
    title: 'Tech Resume 2024',
    date: 'Updated Feb 10, 2024',
    tags: ['Frontend', 'React', 'TypeScript'],
    views: 247,
    downloads: 34,
    score: 92,
    expiry: 'No expiry',
    color: '#22c55e',
  },
  {
    id: '2',
    title: 'Full-Stack Developer',
    date: 'Updated Mar 5, 2024',
    tags: ['Full-Stack', 'Node.js', 'React'],
    views: 183,
    downloads: 21,
    score: 85,
    expiry: '30 days',
    color: '#f97316',
  },
  {
    id: '3',
    title: 'Startup-Ready CV',
    date: 'Updated Mar 18, 2024',
    tags: ['Startup', 'Leadership', 'Product'],
    views: 95,
    downloads: 12,
    score: 78,
    expiry: '7 days',
    color: '#f97316',
  },
];
