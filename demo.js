// सारा डेटा काल्पनिक नमूना (DEMO) है। असली स्रोत जुड़ने पर बदलें।
export const CATEGORIES = ['Farmers', 'Jobs', 'Education', 'Roads', 'Water and public services']
const hi = {
  PROTESTS: [
    { id: 'p1', issue: 'नमूना: सड़क मरम्मत की माँग', state: 'नमूना राज्य ए', city: 'नमूना शहर', topic: 'Roads', date: '2026-01-10', status: 'नमूना स्थिति', organiser: 'सत्यापित नहीं', demands: ['मुख्य सड़क की मरम्मत', 'मरम्मत का समय-सारणी जारी हो'], responses: [{ party: 'स्थानीय निकाय (नमूना)', text: 'नमूना प्रतिक्रिया।' }], sources: [], updated: '2026-01-10 10:00' },
    { id: 'p2', issue: 'नमूना: परीक्षा कार्यक्रम पर चिंता', state: 'नमूना राज्य बी', city: 'नमूना कस्बा', topic: 'Jobs', date: '2026-01-12', status: 'नमूना स्थिति', organiser: 'सत्यापित नहीं', demands: ['साफ़ परीक्षा कैलेंडर'], responses: [], sources: [], updated: '2026-01-12 09:30' },
  ],
  NEWS: [
    { id: 'n1', verified: true, title: 'नमूना सत्यापित खबर', summary: 'दो या अधिक भरोसेमंद स्रोतों से पुष्टि हुई खबर का उदाहरण।', published: '2026-01-09', updated: '2026-01-10', sources: [{ name: 'स्रोत 1 (नमूना)', url: '' }, { name: 'स्रोत 2 (नमूना)', url: '' }], sides: 'संबंधित पक्षों की प्रतिक्रियाएँ यहाँ दिखाई जाएँगी।' },
    { id: 'n2', verified: false, title: 'नमूना उपयोगकर्ता रिपोर्ट', summary: 'असत्यापित दावे का उदाहरण। इसे आरोप मानें, तथ्य नहीं।', published: '2026-01-11', updated: '2026-01-11', sources: [], sides: 'अभी कोई प्रतिक्रिया उपलब्ध नहीं।' },
  ],
  ISSUES: [{ id: 'i1', title: 'नमूना: खराब स्ट्रीटलाइटें', category: 'Roads', state: 'नमूना राज्य ए', district: 'नमूना ज़िला', description: 'नमूना जन-रिपोर्ट।', status: 'प्रकाशित (डेमो)' }],
  HELP: [
    { cat: 'Roads', name: 'CPGRAMS - लोक शिकायत पोर्टल', url: 'https://pgportal.gov.in', note: 'केंद्र का शिकायत पोर्टल। सड़क और जन-सेवाओं की शिकायत भी यहाँ होती है।', lastVerified: null },
    { cat: 'Water and public services', name: 'CPGRAMS - लोक शिकायत पोर्टल', url: 'https://pgportal.gov.in', note: 'पानी या अन्य सेवाओं की शिकायत यहाँ दर्ज करें।', lastVerified: null },
    { cat: 'Farmers', name: 'पीएम-किसान', url: 'https://pmkisan.gov.in', note: 'आधिकारिक योजना साइट। पात्रता और तारीख़ें वहीं जाँचें।', lastVerified: null },
    { cat: 'Jobs', name: 'राष्ट्रीय कैरियर सेवा', url: 'https://www.ncs.gov.in', note: 'आधिकारिक नौकरी पोर्टल। भर्ती की तारीख़ें वहीं जाँचें।', lastVerified: null },
    { cat: 'Education', name: 'राष्ट्रीय छात्रवृत्ति पोर्टल', url: 'https://scholarships.gov.in', note: 'आधिकारिक छात्रवृत्ति साइट। पात्रता वहीं जाँचें।', lastVerified: null },
  ],
}
const en = {
  PROTESTS: [
    { id: 'p1', issue: 'Sample: Road repair demand', state: 'Sample State A', city: 'Sample City', topic: 'Roads', date: '2026-01-10', status: 'Sample status', organiser: 'Not verified', demands: ['Repair main road', 'Publish repair schedule'], responses: [{ party: 'Local body (sample)', text: 'Sample response text.' }], sources: [], updated: '2026-01-10 10:00' },
    { id: 'p2', issue: 'Sample: Exam schedule concern', state: 'Sample State B', city: 'Sample Town', topic: 'Jobs', date: '2026-01-12', status: 'Sample status', organiser: 'Not verified', demands: ['Clear exam calendar'], responses: [], sources: [], updated: '2026-01-12 09:30' },
  ],
  NEWS: [
    { id: 'n1', verified: true, title: 'Sample verified story', summary: 'Example of a story confirmed by two or more credible sources.', published: '2026-01-09', updated: '2026-01-10', sources: [{ name: 'Source 1 (sample)', url: '' }, { name: 'Source 2 (sample)', url: '' }], sides: 'Responses from relevant sides would be listed here.' },
    { id: 'n2', verified: false, title: 'Sample user report', summary: 'Example of an unverified claim. Treat as an allegation, not fact.', published: '2026-01-11', updated: '2026-01-11', sources: [], sides: 'No response available yet.' },
  ],
  ISSUES: [{ id: 'i1', title: 'Sample: Broken streetlights', category: 'Roads', state: 'Sample State A', district: 'Sample District', description: 'Example public report.', status: 'Published (demo)' }],
  HELP: [
    { cat: 'Roads', name: 'CPGRAMS - Public Grievances Portal', url: 'https://pgportal.gov.in', note: 'Central grievance portal; also covers roads and public services.', lastVerified: null },
    { cat: 'Water and public services', name: 'CPGRAMS - Public Grievances Portal', url: 'https://pgportal.gov.in', note: 'File a grievance about water or other services.', lastVerified: null },
    { cat: 'Farmers', name: 'PM-KISAN', url: 'https://pmkisan.gov.in', note: 'Official scheme site. Check eligibility and dates there.', lastVerified: null },
    { cat: 'Jobs', name: 'National Career Service', url: 'https://www.ncs.gov.in', note: 'Official job portal. Check recruitment dates there.', lastVerified: null },
    { cat: 'Education', name: 'National Scholarship Portal', url: 'https://scholarships.gov.in', note: 'Official scholarship site. Check eligibility there.', lastVerified: null },
  ],
}
export const DATA = { hi, en }
