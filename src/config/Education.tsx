export interface EducationEntry {
  school: string;
  degree: string;
  location: string;
  endDate: string;
  isCurrent?: boolean;
}

export const education: EducationEntry[] = [
  {
    school: 'Algoma University',
    degree: 'Bachelor of Computer Science',
    location: 'Ontario, Canada',
    endDate: 'Expected 2026',
    isCurrent: true,
  },
];
