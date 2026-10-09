// ALL DATA BELOW IS FICTIONAL SAMPLE (DEMO). Replace with verified sources later.
export const PROTESTS = [
  { id: 'p1', issue: 'Sample: Road repair demand', state: 'Sample State A', city: 'Sample City', topic: 'Roads', date: '2026-01-10', status: 'Sample status', organiser: 'Not verified', demands: ['Repair main road', 'Publish repair schedule'], responses: [{ party: 'Local body (sample)', text: 'Sample response text.' }], sources: [], updated: '2026-01-10 10:00' },
  { id: 'p2', issue: 'Sample: Exam schedule concern', state: 'Sample State B', city: 'Sample Town', topic: 'Jobs', date: '2026-01-12', status: 'Sample status', organiser: 'Not verified', demands: ['Clear exam calendar'], responses: [], sources: [], updated: '2026-01-12 09:30' },
]
export const NEWS = [
  { id: 'n1', verified: true, title: 'Sample verified story', summary: 'Example of a story confirmed by two or more credible sources.', published: '2026-01-09', updated: '2026-01-10', sources: [{ name: 'Source 1 (sample)', url: '' }, { name: 'Source 2 (sample)', url: '' }], sides: 'Responses from relevant sides would be listed here.' },
  { id: 'n2', verified: false, title: 'Sample user report', summary: 'Example of an unverified claim. Treat as an allegation, not fact.', published: '2026-01-11', updated: '2026-01-11', sources: [], sides: 'No response available yet.' },
]
export const ISSUES = [
  { id: 'i1', title: 'Sample: Broken streetlights', category: 'Roads', state: 'Sample State A', district: 'Sample District', description: 'Example public report.', status: 'Published (demo)' },
]
export const CATEGORIES = ['Farmers', 'Jobs', 'Education', 'Roads', 'Water and public services']
// Official portals. lastVerified is null until a human checks each link and date.
export const HELP = [
  { cat: 'Roads', name: 'CPGRAMS - Public Grievances Portal', url: 'https://pgportal.gov.in', note: 'Central grievance portal; also covers roads and public services.', lastVerified: null },
  { cat: 'Water and public services', name: 'CPGRAMS - Public Grievances Portal', url: 'https://pgportal.gov.in', note: 'File a grievance about water or other services.', lastVerified: null },
  { cat: 'Farmers', name: 'PM-KISAN', url: 'https://pmkisan.gov.in', note: 'Official scheme site. Check eligibility and dates there.', lastVerified: null },
  { cat: 'Jobs', name: 'National Career Service', url: 'https://www.ncs.gov.in', note: 'Official job portal. Check recruitment dates there.', lastVerified: null },
  { cat: 'Education', name: 'National Scholarship Portal', url: 'https://scholarships.gov.in', note: 'Official scholarship site. Check eligibility there.', lastVerified: null },
]
