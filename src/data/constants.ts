export const SIMILAR_QUESTIONS = [
  {
    title: "Why is water liquid at room temperature?",
    answer: "Water remains liquid at room temperature due to hydrogen bonding between molecules..."
  },
  {
    title: "What determines the melting point of metals?",
    answer: "The melting point of metals depends on the strength of metallic bonding..."
  }
];

export const KNOWLEDGE_AREAS = [
  "Physics", "Chemistry", "Biology", "Mathematics", "Engineering",
  "Computer Science", "Medicine", "Psychology", "Economics", "History"
];

export const MOTIVATION_OPTIONS = [
  { value: "curiosity", label: "Personal curiosity" },
  { value: "academic", label: "Academic research" },
  { value: "professional", label: "Professional work" },
  { value: "education", label: "Teaching/Learning" },
  { value: "other", label: "Other" }
];

export const GRANULARITY_LABELS: { [key: number]: string } = {
  1: "Brief overview with key points",
  2: "Moderate detail with examples",
  3: "Balanced explanation with context",
  4: "Detailed analysis with supporting evidence",
  5: "Comprehensive deep-dive with technical details"
};

export const STATIONS = [
  { id: 0, label: "Start" },
  { id: 1, label: "Spellcheck" },
  { id: 2, label: "Already Answered" },
  { id: 3, label: "Expert Selection" },
  { id: 4, label: "Knowledge Areas" },
  { id: 5, label: "Motivation" },
  { id: 6, label: "Granularity" }
];

// Expert profiles
export const EXPERT_PROFILES = [
  {
    id: "dr_chen",
    name: "Dr. Sarah Chen",
    title: "Professor of Physical Chemistry",
    institution: "MIT",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    bio: "Specializes in molecular behavior and phase transitions in metals and liquids.",
    specializations: ["Physical Chemistry", "Phase Transitions", "Molecular Physics", "Materials Science"],
    relevantKeywords: ["mercury", "liquid", "temperature", "metals", "phase", "molecular"]
  },
  {
    id: "prof_rodriguez",
    name: "Prof. Miguel Rodriguez",
    title: "Senior Researcher",
    institution: "Stanford University",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    bio: "Expert in thermodynamics and material properties at various temperatures.",
    specializations: ["Thermodynamics", "Materials Engineering", "Heat Transfer", "Metallurgy"],
    relevantKeywords: ["temperature", "thermodynamics", "materials", "properties", "heat"]
  },
  {
    id: "dr_kim",
    name: "Dr. Janet Kim",
    title: "Associate Professor",
    institution: "Harvard University",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b820?w=100&h=100&fit=crop&crop=face",
    bio: "Research focuses on atomic structure and bonding in metallic elements.",
    specializations: ["Atomic Physics", "Chemical Bonding", "Quantum Mechanics", "Spectroscopy"],
    relevantKeywords: ["atomic", "bonding", "metallic", "quantum", "structure"]
  },
  {
    id: "prof_thompson",
    name: "Prof. David Thompson",
    title: "Department Head",
    institution: "University of Cambridge",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    bio: "Leading researcher in condensed matter physics and phase behavior.",
    specializations: ["Condensed Matter Physics", "Phase Behavior", "Statistical Mechanics"],
    relevantKeywords: ["condensed matter", "phase", "statistical", "physics"]
  },
  {
    id: "dr_patel",
    name: "Dr. Priya Patel",
    title: "Senior Scientist",
    institution: "Oxford University",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    bio: "Specializes in heavy metals and their unique physical properties.",
    specializations: ["Heavy Metals", "Toxicology", "Environmental Chemistry", "Analytical Chemistry"],
    relevantKeywords: ["heavy metals", "mercury", "toxicology", "environmental", "analytical"]
  },
  {
    id: "prof_wagner",
    name: "Prof. Klaus Wagner",
    title: "Research Director",
    institution: "Max Planck Institute",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    bio: "Expert in computational modeling of molecular interactions and phase transitions.",
    specializations: ["Computational Chemistry", "Molecular Modeling", "Phase Transitions", "Simulation"],
    relevantKeywords: ["computational", "modeling", "simulation", "molecular", "interactions"]
  },
  {
    id: "dr_jones",
    name: "Dr. Emma Jones",
    title: "Professor of Chemistry",
    institution: "Yale University",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    bio: "Research in inorganic chemistry with focus on metallic elements and compounds.",
    specializations: ["Inorganic Chemistry", "Metallic Compounds", "Crystallography", "X-ray Analysis"],
    relevantKeywords: ["inorganic", "metallic", "compounds", "crystallography", "elements"]
  },
  {
    id: "prof_liu",
    name: "Prof. Wei Liu",
    title: "Chair of Physics Department",
    institution: "Caltech",
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
    bio: "Leading expert in solid-state physics and electronic properties of materials.",
    specializations: ["Solid State Physics", "Electronic Properties", "Band Theory", "Quantum Materials"],
    relevantKeywords: ["solid state", "electronic", "properties", "quantum", "materials"]
  },
  {
    id: "dr_martinez",
    name: "Dr. Carlos Martinez",
    title: "Research Professor",
    institution: "UC Berkeley",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
    bio: "Specializes in surface science and interfacial phenomena in liquid metals.",
    specializations: ["Surface Science", "Interfacial Phenomena", "Liquid Metals", "Electrochemistry"],
    relevantKeywords: ["surface", "interfacial", "liquid metals", "electrochemistry"]
  }
];

// Helper function to get relevant experts based on question content
export const getExpertsForQuestion = (question: string): typeof EXPERT_PROFILES => {
  const questionLower = question.toLowerCase();
  const relevantExperts = EXPERT_PROFILES.filter(expert => 
    expert.relevantKeywords.some(keyword => 
      questionLower.includes(keyword.toLowerCase())
    )
  );
  
  // If we have relevant experts, return them, otherwise return a random selection
  if (relevantExperts.length > 0) {
    return relevantExperts;
  }
  
  // Return a random selection of 3-5 experts if no specific matches
  const shuffled = [...EXPERT_PROFILES].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.floor(Math.random() * 3) + 3);
};

// Helper function to get semantically related knowledge areas
export const getSemanticKnowledgeAreas = (selectedExpert: any): string[] => {
  if (!selectedExpert) {
    // Return 2 random areas if no expert selected
    const shuffled = [...KNOWLEDGE_AREAS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }
  
  // Map expert specializations to knowledge areas
  const expertToAreaMapping: { [key: string]: string[] } = {
    "Physical Chemistry": ["Chemistry", "Physics"],
    "Phase Transitions": ["Physics", "Chemistry"],
    "Molecular Physics": ["Physics", "Chemistry"],
    "Materials Science": ["Engineering", "Physics"],
    "Thermodynamics": ["Physics", "Engineering"],
    "Materials Engineering": ["Engineering", "Physics"],
    "Metallurgy": ["Engineering", "Chemistry"],
    "Atomic Physics": ["Physics"],
    "Chemical Bonding": ["Chemistry", "Physics"],
    "Quantum Mechanics": ["Physics", "Mathematics"],
    "Condensed Matter Physics": ["Physics"],
    "Heavy Metals": ["Chemistry", "Medicine"],
    "Toxicology": ["Medicine", "Chemistry"],
    "Environmental Chemistry": ["Chemistry", "Biology"],
    "Computational Chemistry": ["Chemistry", "Computer Science"],
    "Inorganic Chemistry": ["Chemistry"],
    "Solid State Physics": ["Physics", "Engineering"]
  };
  
  const relevantAreas = new Set<string>();
  
  selectedExpert.specializations.forEach((spec: string) => {
    const areas = expertToAreaMapping[spec] || [];
    areas.forEach(area => relevantAreas.add(area));
  });
  
  // Convert semantic areas to array
  let result = Array.from(relevantAreas);
  
  // Always add exactly 2 random categories
  const remainingAreas = KNOWLEDGE_AREAS.filter(area => !result.includes(area));
  const shuffledRemaining = remainingAreas.sort(() => 0.5 - Math.random());
  
  // Add 2 random areas
  result.push(...shuffledRemaining.slice(0, 2));
  
  return result.slice(0, 8); // Limit to 8 areas total
};
