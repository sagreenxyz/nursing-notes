export interface ClinicalCase {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  summary: string;
  phases: number;
}

export const cases: ClinicalCase[] = [
  {
    slug: 'acute-coronary-syndrome',
    title: 'Acute Coronary Syndrome',
    subtitle: 'Chest Pain → STEMI → Post-Cath Recovery',
    category: 'Cardiovascular',
    difficulty: 'Advanced',
    tags: ['STEMI', 'cardiac', 'telemetry', 'PCI', 'chest pain'],
    summary: 'A 58-year-old male presents to the ED with crushing chest pain. The case unfolds through initial assessment, STEMI diagnosis, emergent PCI, and post-catheterization cardiac care.',
    phases: 4,
  },
  {
    slug: 'diabetic-ketoacidosis',
    title: 'Diabetic Ketoacidosis',
    subtitle: 'Hyperglycemia → DKA Crisis → Stabilization',
    category: 'Endocrine',
    difficulty: 'Intermediate',
    tags: ['DKA', 'diabetes', 'insulin', 'fluid resuscitation', 'electrolytes'],
    summary: 'A 24-year-old female with Type 1 DM presents with nausea, vomiting, and altered mental status. The case follows the DKA treatment protocol from diagnosis through resolution and discharge education.',
    phases: 4,
  },
  {
    slug: 'ischemic-stroke',
    title: 'Ischemic Stroke',
    subtitle: 'Sudden Neurological Deficit → tPA → Stroke Rehab',
    category: 'Neurological',
    difficulty: 'Advanced',
    tags: ['CVA', 'tPA', 'neuro assessment', 'NIHSS', 'rehabilitation'],
    summary: 'A 67-year-old female arrives via EMS with sudden left-sided weakness and aphasia. The case covers rapid stroke assessment, tPA administration, neuro monitoring, and early rehabilitation planning.',
    phases: 4,
  },
  {
    slug: 'sepsis',
    title: 'Sepsis & Septic Shock',
    subtitle: 'UTI → SIRS → Septic Shock → MICU',
    category: 'Critical Care',
    difficulty: 'Advanced',
    tags: ['sepsis', 'septic shock', 'MICU', 'vasopressors', 'sepsis bundle'],
    summary: 'A 72-year-old male nursing home resident presents with fever, confusion, and hypotension. The case unfolds through SIRS identification, sepsis bundle activation, ICU escalation, and recovery.',
    phases: 4,
  },
  {
    slug: 'pediatric-asthma',
    title: 'Pediatric Asthma Exacerbation',
    subtitle: 'Acute Wheeze → Status Asthmaticus → Discharge Planning',
    category: 'Pediatric / Respiratory',
    difficulty: 'Intermediate',
    tags: ['asthma', 'pediatric', 'albuterol', 'peak flow', 'respiratory distress'],
    summary: 'An 8-year-old male presents to the pediatric ED with acute onset wheezing and respiratory distress. The case follows escalating treatment, parental education, and safe discharge planning.',
    phases: 3,
  },
  {
    slug: 'postoperative-hip',
    title: 'Post-Operative Hip Replacement',
    subtitle: 'Total Hip Arthroplasty → DVT Complication → Recovery',
    category: 'Orthopedic / Surgical',
    difficulty: 'Intermediate',
    tags: ['post-op', 'THA', 'DVT', 'pain management', 'mobility', 'anticoagulation'],
    summary: 'A 74-year-old female returns from the PACU following an elective right total hip arthroplasty. The case covers post-op assessment, DVT prophylaxis, a DVT complication, and discharge planning.',
    phases: 4,
  },
];
