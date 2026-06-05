export interface LearningOutcome {
  title: string;
  description: string;
}

export interface RoutineItem {
  time: string;
  activity: string;
}

export interface Subject {
  name: string;
  icon: string;
}

export interface Program {
  slug: string;
  name: string;
  ageRange: string;
  shortDescription: string;
  heroImageKey?: string;
  themeColor: 'primary' | 'secondary' | 'accent';
  overview: string;
  outcomes: LearningOutcome[];
  dailyRoutine: RoutineItem[];
  subjects: Subject[];
  whyChooseText: string;
}

export const programs: Program[] = [
  {
    slug: 'playgroup',
    name: 'Playgroup',
    ageRange: '2–3 years',
    shortDescription: 'A gentle introduction to school life focusing on socialization, sensory play, and early language development.',
    themeColor: 'secondary',
    overview: 'Our Playgroup program is designed to be your child\'s first step into a structured learning environment away from home. We focus on creating a warm, nurturing space where toddlers feel safe to explore, socialize, and express themselves through guided play.',
    outcomes: [
      { title: 'Social Development', description: 'Learning to share, take turns, and interact positively with peers.' },
      { title: 'Sensory Exploration', description: 'Discovering the world through touch, sight, sound, and movement.' },
      { title: 'Basic Motor Skills', description: 'Developing coordination through running, jumping, and simple crafts.' },
      { title: 'Early Communication', description: 'Building vocabulary through songs, stories, and expressions.' }
    ],
    dailyRoutine: [
      { time: '09:00 AM', activity: 'Arrival & Free Play' },
      { time: '09:30 AM', activity: 'Circle Time & Songs' },
      { time: '10:00 AM', activity: 'Sensory Activities' },
      { time: '10:45 AM', activity: 'Snack Time' },
      { time: '11:15 AM', activity: 'Outdoor Play' },
      { time: '12:00 PM', activity: 'Departure' }
    ],
    subjects: [
      { name: 'Sensory Play', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>' },
      { name: 'Music & Movement', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>' },
      { name: 'Art', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>' }
    ],
    whyChooseText: 'Playgroup at Gurukul Children Academy provides the perfect balance of care and early learning. Our low student-to-teacher ratio ensures your toddler receives personalized attention, while our thoughtfully designed environment encourages natural curiosity.'
  },
  {
    slug: 'nursery',
    name: 'Nursery',
    ageRange: '3–4 years',
    shortDescription: 'Building confidence and essential motor skills through guided play-based learning and creative activities.',
    themeColor: 'primary',
    overview: 'In Nursery, children begin to develop independence and foundational cognitive skills. Our curriculum blends structured learning with imaginative play, helping children understand routines, follow multi-step instructions, and begin their journey with phonics and numbers.',
    outcomes: [
      { title: 'Pre-Reading Skills', description: 'Phonemic awareness and recognizing letters and sounds.' },
      { title: 'Fine Motor Control', description: 'Holding pencils correctly, using scissors, and precise coloring.' },
      { title: 'Emotional Regulation', description: 'Learning to express feelings appropriately and self-soothe.' },
      { title: 'Creative Expression', description: 'Using imagination in role-play, art, and storytelling.' }
    ],
    dailyRoutine: [
      { time: '09:00 AM', activity: 'Arrival & Welcome' },
      { time: '09:30 AM', activity: 'Phonics & Literacy' },
      { time: '10:15 AM', activity: 'Creative Arts' },
      { time: '11:00 AM', activity: 'Snack Break' },
      { time: '11:30 AM', activity: 'Numeracy Play' },
      { time: '12:15 PM', activity: 'Outdoor Games' },
      { time: '01:00 PM', activity: 'Departure' }
    ],
    subjects: [
      { name: 'Language Arts', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>' },
      { name: 'Numeracy', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
      { name: 'EVS', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M12 3a9 9 0 0 0 9 9H3a9 9 0 0 0 9-9Z"/></svg>' }
    ],
    whyChooseText: 'Our Nursery program gently transitions children into a more structured academic environment without losing the joy of play. We focus heavily on emotional security, ensuring every child feels confident to participate and learn.'
  },
  {
    slug: 'lkg',
    name: 'LKG',
    ageRange: '4–5 years',
    shortDescription: 'Developing foundational literacy, numeracy, and cognitive problem-solving skills in a structured environment.',
    themeColor: 'accent',
    overview: 'Lower Kindergarten (LKG) is where reading and writing truly begin. The program is structured to develop strong cognitive abilities, logical thinking, and clear communication. Children engage in hands-on activities that make complex concepts easy to grasp.',
    outcomes: [
      { title: 'Reading Fluency', description: 'Blending sounds to read simple words and short sentences.' },
      { title: 'Number Sense', description: 'Counting, sorting, and understanding basic mathematical concepts.' },
      { title: 'Independent Learning', description: 'Completing tasks with minimal supervision and taking initiative.' },
      { title: 'Environmental Awareness', description: 'Understanding the world around them, seasons, and nature.' }
    ],
    dailyRoutine: [
      { time: '08:30 AM', activity: 'Morning Assembly' },
      { time: '09:00 AM', activity: 'Language & Writing' },
      { time: '10:00 AM', activity: 'Math & Logic' },
      { time: '10:45 AM', activity: 'Snack Break' },
      { time: '11:15 AM', activity: 'EVS / Science' },
      { time: '12:00 PM', activity: 'Physical Education' },
      { time: '01:00 PM', activity: 'Departure' }
    ],
    subjects: [
      { name: 'English', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>' },
      { name: 'Mathematics', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M9 12h6"/><path d="M12 9v6"/></svg>' },
      { name: 'General Knowledge', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>' }
    ],
    whyChooseText: 'Our LKG curriculum is meticulously planned to build a strong academic foundation. We use multi-sensory teaching methods that cater to different learning styles, ensuring that no child is left behind in their educational journey.'
  },
  {
    slug: 'ukg',
    name: 'UKG',
    ageRange: '5–6 years',
    shortDescription: 'Preparing for primary school success with advanced phonics, basic math concepts, and independent learning.',
    themeColor: 'secondary',
    overview: 'Upper Kindergarten (UKG) is the crucial bridge to primary education. Here, children refine their academic skills, learn to construct full sentences, solve basic arithmetic, and develop the focus required for formal schooling. We build the confidence needed for Grade 1.',
    outcomes: [
      { title: 'Advanced Literacy', description: 'Reading paragraphs and writing complete, structured sentences.' },
      { title: 'Basic Arithmetic', description: 'Addition, subtraction, and understanding time and money.' },
      { title: 'Critical Thinking', description: 'Solving puzzles, logical reasoning, and answering "why" questions.' },
      { title: 'Social Responsibility', description: 'Understanding rules, teamwork, and classroom etiquette.' }
    ],
    dailyRoutine: [
      { time: '08:30 AM', activity: 'Morning Assembly' },
      { time: '09:00 AM', activity: 'Advanced Reading & Writing' },
      { time: '10:00 AM', activity: 'Arithmetic & Problem Solving' },
      { time: '10:45 AM', activity: 'Snack Break' },
      { time: '11:15 AM', activity: 'Science Experiments' },
      { time: '12:00 PM', activity: 'Extracurriculars (Art/Music/Dance)' },
      { time: '01:00 PM', activity: 'Departure' }
    ],
    subjects: [
      { name: 'English Literacy', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>' },
      { name: 'Mathematics', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M9 12h6"/><path d="M12 9v6"/></svg>' },
      { name: 'Computer Basics', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>' }
    ],
    whyChooseText: 'Our UKG program is recognized for effectively preparing children for the rigorous demands of Primary school. Graduates of our UKG program consistently demonstrate higher reading levels and better classroom adaptability.'
  },
  {
    slug: 'primary',
    name: 'Primary (Grades 1-5)',
    ageRange: '6–11 years',
    shortDescription: 'Fostering independent thinking, strong academics, and character development through a comprehensive curriculum.',
    themeColor: 'primary',
    overview: 'Our Primary wing offers a robust, well-rounded education. Moving beyond basic literacy and numeracy, students dive into complex subjects, project-based learning, and comprehensive assessments. We aim to shape inquisitive, knowledgeable, and responsible students.',
    outcomes: [
      { title: 'Academic Excellence', description: 'Mastery of core subjects: English, Math, Science, and Social Studies.' },
      { title: 'Digital Literacy', description: 'Proficiency in using technology for learning and research.' },
      { title: 'Leadership Skills', description: 'Taking initiative through group projects and class responsibilities.' },
      { title: 'Holistic Growth', description: 'Balanced development through sports, arts, and cultural activities.' }
    ],
    dailyRoutine: [
      { time: '08:00 AM', activity: 'Assembly & Homeroom' },
      { time: '08:30 AM', activity: 'Core Academic Subjects' },
      { time: '10:30 AM', activity: 'Recess' },
      { time: '11:00 AM', activity: 'Science & Social Studies' },
      { time: '12:30 PM', activity: 'Lunch Break' },
      { time: '01:00 PM', activity: 'Specialists (Computers/Library/PE)' },
      { time: '02:30 PM', activity: 'Departure' }
    ],
    subjects: [
      { name: 'Core Academics', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>' },
      { name: 'Science & Lab', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v2"/><path d="M15 2v2"/><path d="M12 2v2"/><path d="M4.5 12.5A4.5 4.5 0 0 1 9 8h6a4.5 4.5 0 0 1 4.5 4.5v.5a4.5 4.5 0 0 1-4.5 4.5h-6A4.5 4.5 0 0 1 4.5 13v-.5Z"/><path d="M12 22v-4.5"/></svg>' },
      { name: 'Sports & PE', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>' }
    ],
    whyChooseText: 'Our Primary program doesn\'t just teach subjects; it teaches students how to learn. With state-of-the-art facilities, a comprehensive library, and dedicated subject experts, we ensure your child is ready for the challenges of higher education.'
  }
];

export const getProgramBySlug = (slug: string): Program | undefined => {
  return programs.find((p) => p.slug === slug);
};

export const getRelatedPrograms = (slug: string): { previous?: Program; next?: Program } => {
  const index = programs.findIndex((p) => p.slug === slug);
  if (index === -1) return {};
  
  return {
    previous: index > 0 ? programs[index - 1] : undefined,
    next: index < programs.length - 1 ? programs[index + 1] : undefined
  };
};
