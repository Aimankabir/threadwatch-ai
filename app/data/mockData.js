/* ============================================================
   ThreadWatch AI — Mock Data
   Realistic Bangladesh RMG industry data
   ============================================================ */

window.MOCK = (function () {

  // ---------- Factories ----------
  const factories = [
    { id: 'F-001', name: 'Garmentex BD Ltd.', location: 'Gazipur', workers: 4200, deptCount: 8, health: 87, status: 'Excellent' },
    { id: 'F-002', name: 'NRB Textile & Apparel', location: 'Narayanganj', workers: 3100, deptCount: 6, health: 62, status: 'Needs Attention' },
    { id: 'F-003', name: 'Sunshine Knitwear', location: 'Savar', workers: 5400, deptCount: 9, health: 91, status: 'Excellent' },
    { id: 'F-004', name: 'Apex Garments Pvt.', location: 'Tongi', workers: 2700, deptCount: 5, health: 48, status: 'Critical' },
    { id: 'F-005', name: 'Delta Apparels Ltd.', location: 'EPZ, Dhaka', workers: 6800, deptCount: 10, health: 79, status: 'Good' },
    { id: 'F-006', name: 'Padma Fashions', location: 'Gazipur', workers: 2200, deptCount: 5, health: 71, status: 'Good' },
    { id: 'F-007', name: 'Crescent Export Ltd.', location: 'Chittagong', workers: 3500, deptCount: 7, health: 55, status: 'Needs Attention' },
  ];

  // ---------- Categories ----------
  const categories = [
    'Delayed Salary', 'Overtime Abuse', 'Unsafe Machinery', 'Harassment',
    'Fire Safety', 'Workplace Injury', 'Child Labor Concern', 'No Clean Water',
    'Bathroom Access', 'Health Hazard', 'Verbal Abuse', 'Discrimination',
    'Forced Labor', 'No Protective Gear', 'Mental Stress'
  ];

  // ---------- Departments ----------
  const departments = [
    'Sewing', 'Cutting', 'Finishing', 'Quality Check', 'Dyeing',
    'Printing', 'Packing', 'Maintenance', 'Warehouse', 'Ironing'
  ];

  // ---------- Sample Bangla & English complaints ----------
  // F-001 Garmentex (87 / Excellent) — mostly minor; one elevated issue
  // F-002 NRB Textile (62 / Needs Attention) — salary + overtime issues
  // F-003 Sunshine Knitwear (91 / Excellent) — very few, mostly resolved
  // F-004 Apex Garments (48 / Critical) — heavy violations, safety + abuse
  // F-005 Delta Apparels (79 / Good) — moderate issues, mostly resolved
  // F-006 Padma Fashions (71 / Good) — moderate, harassment-leaning
  // F-007 Crescent Export (55 / Needs Attention) — fire + health hazards
  const seedComplaints = [
    // -------- F-001 Garmentex (Excellent, 87) — 5 complaints, mostly minor
    { text: 'আমাদের তিন মাস ধরে বেতন দেয় নাই।', lang: 'bn', category: 'Delayed Salary', severity: 'Critical', sentiment: 'Angry', urgency: 'High', affected: 20, factory: 'F-001', dept: 'Sewing', status: 'Open', days: 1 },
    { text: 'The sewing machine keeps shaking and sparks appear when running.', lang: 'en', category: 'Unsafe Machinery', severity: 'Critical', sentiment: 'Fear', urgency: 'High', affected: 8, factory: 'F-001', dept: 'Sewing', status: 'Open', days: 0 },
    { text: 'Dyeing chemicals smell is causing headaches and dizziness.', lang: 'en', category: 'Health Hazard', severity: 'Medium', sentiment: 'Worried', urgency: 'Medium', affected: 9, factory: 'F-001', dept: 'Dyeing', status: 'Open', days: 3 },
    { text: 'প্যাকিং সেকশনে শব্দ অনেক বেশি, কানে ব্যথা করে।', lang: 'bn', category: 'Health Hazard', severity: 'Medium', sentiment: 'Worried', urgency: 'Medium', affected: 7, factory: 'F-001', dept: 'Packing', status: 'Open', days: 6 },
    { text: 'We are forced to work 12 hours overtime without pay.', lang: 'en', category: 'Overtime Abuse', severity: 'High', sentiment: 'Frustrated', urgency: 'High', affected: 15, factory: 'F-001', dept: 'Finishing', status: 'Open', days: 1 },

    // -------- F-002 NRB Textile (Needs Attention, 62) — salary + overtime
    { text: 'Salary is consistently 2 weeks late. HR keeps saying "next week".', lang: 'en', category: 'Delayed Salary', severity: 'High', sentiment: 'Angry', urgency: 'High', affected: 28, factory: 'F-002', dept: 'Sewing', status: 'Open', days: 4 },
    { text: 'নতুন অর্ডারের জন্য প্রতি সপ্তাহে ১৫ ঘণ্টা ওভারটাইম।', lang: 'bn', category: 'Overtime Abuse', severity: 'High', sentiment: 'Frustrated', urgency: 'High', affected: 22, factory: 'F-002', dept: 'Cutting', status: 'Open', days: 2 },
    { text: 'No clean drinking water on the 3rd floor. We have to buy water ourselves.', lang: 'en', category: 'No Clean Water', severity: 'Medium', sentiment: 'Sad', urgency: 'Medium', affected: 18, factory: 'F-002', dept: 'All', status: 'In Review', days: 5 },
    { text: 'Supervisor publicly humiliates workers who make mistakes.', lang: 'en', category: 'Mental Stress', severity: 'High', sentiment: 'Sad', urgency: 'Medium', affected: 12, factory: 'F-002', dept: 'Quality Check', status: 'Open', days: 3 },
    { text: 'We asked for masks in the dust section, but nothing happened.', lang: 'en', category: 'No Protective Gear', severity: 'Medium', sentiment: 'Worried', urgency: 'Medium', affected: 10, factory: 'F-002', dept: 'Cutting', status: 'In Review', days: 6 },
    { text: 'Last month salary was paid in full only after workers protested.', lang: 'en', category: 'Delayed Salary', severity: 'High', sentiment: 'Angry', urgency: 'High', affected: 30, factory: 'F-002', dept: 'All', status: 'Resolved', days: 12 },

    // -------- F-003 Sunshine Knitwear (Excellent, 91) — 2 minor, resolved
    { text: 'Ironing section temperature is high, but fans were installed recently.', lang: 'en', category: 'Health Hazard', severity: 'Low', sentiment: 'Neutral', urgency: 'Low', affected: 4, factory: 'F-003', dept: 'Ironing', status: 'Resolved', days: 14 },
    { text: 'Bathroom lock was broken for two days. Fixed within 24 hours of report.', lang: 'en', category: 'Bathroom Access', severity: 'Low', sentiment: 'Neutral', urgency: 'Low', affected: 6, factory: 'F-003', dept: 'All', status: 'Resolved', days: 10 },

    // -------- F-004 Apex Garments (Critical, 48) — heavy violations
    { text: 'Emergency exit is locked from outside. We cannot leave in case of fire.', lang: 'en', category: 'Fire Safety', severity: 'Critical', sentiment: 'Fear', urgency: 'High', affected: 30, factory: 'F-004', dept: 'Warehouse', status: 'Open', days: 0 },
    { text: 'No fire extinguisher in printing section. They removed it last month.', lang: 'en', category: 'Fire Safety', severity: 'Critical', sentiment: 'Fear', urgency: 'High', affected: 14, factory: 'F-004', dept: 'Printing', status: 'Open', days: 1 },
    { text: 'A female worker was touched inappropriately by line manager.', lang: 'en', category: 'Harassment', severity: 'Critical', sentiment: 'Angry', urgency: 'High', affected: 1, factory: 'F-004', dept: 'Sewing', status: 'Open', days: 0 },
    { text: 'Maintenance worker threatened to fire anyone who files complaint.', lang: 'en', category: 'Harassment', severity: 'High', sentiment: 'Fear', urgency: 'High', affected: 6, factory: 'F-004', dept: 'Maintenance', status: 'Open', days: 1 },
    { text: 'একজন নতুন কর্মীকে ১৪ বছরের কম বলে মনে হয়।', lang: 'bn', category: 'Child Labor Concern', severity: 'Critical', sentiment: 'Worried', urgency: 'High', affected: 1, factory: 'F-004', dept: 'Packing', status: 'Open', days: 0 },
    { text: 'ID cards are held by HR so we cannot leave during breaks.', lang: 'en', category: 'Forced Labor', severity: 'High', sentiment: 'Frustrated', urgency: 'High', affected: 35, factory: 'F-004', dept: 'All', status: 'In Review', days: 4 },
    { text: 'No gloves provided when handling chemicals in dyeing section.', lang: 'en', category: 'No Protective Gear', severity: 'High', sentiment: 'Worried', urgency: 'High', affected: 6, factory: 'F-004', dept: 'Dyeing', status: 'Open', days: 1 },
    { text: 'Salary paid but only 60%. HR says "this is the new rate".', lang: 'en', category: 'Delayed Salary', severity: 'Critical', sentiment: 'Angry', urgency: 'High', affected: 40, factory: 'F-004', dept: 'Sewing', status: 'Open', days: 3 },
    { text: 'Workers faint often due to heat. No fans in finishing section.', lang: 'en', category: 'Health Hazard', severity: 'High', sentiment: 'Worried', urgency: 'High', affected: 16, factory: 'F-004', dept: 'Finishing', status: 'Open', days: 3 },
    { text: 'My supervisor is verbally abusive and threatens us in front of everyone.', lang: 'en', category: 'Harassment', severity: 'High', sentiment: 'Sad', urgency: 'High', affected: 5, factory: 'F-004', dept: 'Cutting', status: 'In Review', days: 2 },
    { text: 'আমার পায়ে কাটা পড়েছে, কিন্তু চিকিৎসার ব্যবস্থা করছে না।', lang: 'bn', category: 'Workplace Injury', severity: 'High', sentiment: 'Sad', urgency: 'High', affected: 1, factory: 'F-004', dept: 'Cutting', status: 'Open', days: 2 },

    // -------- F-005 Delta Apparels (Good, 79) — moderate, mostly resolved
    { text: 'Weekly off day was cancelled because of shipment pressure.', lang: 'en', category: 'Overtime Abuse', severity: 'Medium', sentiment: 'Frustrated', urgency: 'Medium', affected: 40, factory: 'F-005', dept: 'All', status: 'Resolved', days: 8 },
    { text: 'Female workers were not allowed breaks during menstruation. Now policy changed.', lang: 'en', category: 'Discrimination', severity: 'High', sentiment: 'Sad', urgency: 'Medium', affected: 18, factory: 'F-005', dept: 'Sewing', status: 'Resolved', days: 11 },
    { text: 'Ironing section is too hot, no ventilation. Better fans installed last week.', lang: 'en', category: 'Health Hazard', severity: 'Medium', sentiment: 'Worried', urgency: 'Medium', affected: 10, factory: 'F-005', dept: 'Ironing', status: 'Resolved', days: 9 },
    { text: 'Mental pressure is high. We are shouted at daily.', lang: 'en', category: 'Mental Stress', severity: 'Medium', sentiment: 'Sad', urgency: 'Medium', affected: 11, factory: 'F-005', dept: 'Quality Check', status: 'In Review', days: 7 },
    { text: 'New dress code is uncomfortable in summer heat.', lang: 'en', category: 'Health Hazard', severity: 'Low', sentiment: 'Neutral', urgency: 'Low', affected: 8, factory: 'F-005', dept: 'All', status: 'Open', days: 1 },

    // -------- F-006 Padma Fashions (Good, 71) — moderate, harassment-leaning
    { text: 'My supervisor is verbally abusive and threatens us in front of everyone.', lang: 'en', category: 'Harassment', severity: 'High', sentiment: 'Sad', urgency: 'High', affected: 5, factory: 'F-006', dept: 'Cutting', status: 'In Review', days: 2 },
    { text: 'Female workers are not allowed to take breaks during menstruation.', lang: 'en', category: 'Discrimination', severity: 'High', sentiment: 'Sad', urgency: 'Medium', affected: 18, factory: 'F-006', dept: 'Sewing', status: 'In Review', days: 5 },
    { text: 'বাথরুমে যেতে দেয় না, শুধু ১০ মিনিট সময় দেয়।', lang: 'bn', category: 'Bathroom Access', severity: 'Medium', sentiment: 'Frustrated', urgency: 'Medium', affected: 12, factory: 'F-006', dept: 'Sewing', status: 'Open', days: 3 },
    { text: 'No clean drinking water available. We have to buy water ourselves.', lang: 'en', category: 'No Clean Water', severity: 'Medium', sentiment: 'Sad', urgency: 'Medium', affected: 25, factory: 'F-006', dept: 'All', status: 'In Review', days: 4 },
    { text: 'Two sewing machines have been broken for 3 weeks. Reported several times.', lang: 'en', category: 'Unsafe Machinery', severity: 'High', sentiment: 'Worried', urgency: 'High', affected: 8, factory: 'F-006', dept: 'Sewing', status: 'Open', days: 6 },
    { text: 'Salary paid on time this month. Thank you to the new accounts officer.', lang: 'en', category: 'Delayed Salary', severity: 'Low', sentiment: 'Happy', urgency: 'Low', affected: 3, factory: 'F-006', dept: 'All', status: 'Resolved', days: 15 },

    // -------- F-007 Crescent Export (Needs Attention, 55) — fire + health
    { text: 'Fire alarm has not been tested in months. Workers are worried.', lang: 'en', category: 'Fire Safety', severity: 'Critical', sentiment: 'Fear', urgency: 'High', affected: 22, factory: 'F-007', dept: 'All', status: 'Open', days: 2 },
    { text: 'No fire extinguisher in finishing section. Last inspection was 2 years ago.', lang: 'en', category: 'Fire Safety', severity: 'High', sentiment: 'Fear', urgency: 'High', affected: 18, factory: 'F-007', dept: 'Finishing', status: 'Open', days: 1 },
    { text: 'Ironing section is too hot, no ventilation, workers getting sick.', lang: 'en', category: 'Health Hazard', severity: 'High', sentiment: 'Worried', urgency: 'High', affected: 10, factory: 'F-007', dept: 'Ironing', status: 'Open', days: 2 },
    { text: 'Dyeing chemicals smell is causing headaches and dizziness.', lang: 'en', category: 'Health Hazard', severity: 'High', sentiment: 'Worried', urgency: 'High', affected: 14, factory: 'F-007', dept: 'Dyeing', status: 'Open', days: 3 },
    { text: 'We are forced to work 14 hours overtime. No extra pay.', lang: 'en', category: 'Overtime Abuse', severity: 'High', sentiment: 'Frustrated', urgency: 'High', affected: 25, factory: 'F-007', dept: 'All', status: 'Open', days: 4 },
    { text: 'Emergency exit in the back is blocked by packed goods.', lang: 'en', category: 'Fire Safety', severity: 'Critical', sentiment: 'Fear', urgency: 'High', affected: 28, factory: 'F-007', dept: 'Warehouse', status: 'Open', days: 0 },
    { text: 'Salary delayed by 10 days. HR says "factory is going through cash flow issues".', lang: 'en', category: 'Delayed Salary', severity: 'High', sentiment: 'Angry', urgency: 'High', affected: 32, factory: 'F-007', dept: 'All', status: 'In Review', days: 6 },
  ];

  // Generate IDs and additional complaints for other factories
  const allComplaints = [];
  seedComplaints.forEach((c, i) => {
    allComplaints.push({
      id: 'C-' + String(1000 + i).padStart(4, '0'),
      text: c.text,
      lang: c.lang,
      category: c.category,
      severity: c.severity,
      sentiment: c.sentiment,
      urgency: c.urgency,
      affected: c.affected,
      factory: c.factory,
      dept: c.dept,
      status: c.status,
      date: new Date(Date.now() - c.days * 86400000).toISOString(),
    });
  });

  // Trend data — last 30 days
  const trendDays = 30;
  const trendLabels = [];
  const trendData = [];
  for (let i = trendDays - 1; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000);
    trendLabels.push(d.toLocaleDateString('en', { month: 'short', day: 'numeric' }));
    trendData.push(Math.floor(40 + Math.sin(i / 3) * 14 + Math.random() * 18));
  }

  const sentimentTrend = trendLabels.map((_, i) => {
    const base = 70 - (i / trendDays) * 12;
    return Math.max(35, Math.min(85, Math.round(base + (Math.random() - 0.5) * 10)));
  });

  // Category aggregation
  const categoryCount = {};
  allComplaints.forEach(c => {
    categoryCount[c.category] = (categoryCount[c.category] || 0) + c.affected;
  });

  // Department risk
  const deptRisk = {};
  allComplaints.forEach(c => {
    if (!deptRisk[c.dept]) deptRisk[c.dept] = { count: 0, score: 0 };
    deptRisk[c.dept].count += c.affected;
    const sev = { Critical: 4, High: 3, Medium: 2, Low: 1 }[c.severity] || 1;
    deptRisk[c.dept].score += sev * c.affected;
  });

  // Lessons
  const lessons = [
    {
      id: 'L1', title: 'Fire Safety at Work', icon: '',
      steps: [
        'If you smell smoke, stay calm and alert nearby workers.',
        'Move quickly to the nearest emergency exit. Do not use elevators.',
        'Go to the assembly point outside the building.',
        'Do not re-enter the building until authorities say it is safe.',
      ],
      quiz: {
        q: 'What should you do if you smell smoke?',
        options: ['Ignore it and continue work', 'Tell supervisor and evacuate', 'Run immediately without telling anyone', 'Hide under the table'],
        correct: 1,
        explain: 'Always alert others first so everyone can evacuate safely. Hiding or ignoring puts lives at risk.',
      },
    },
    {
      id: 'L2', title: 'Electrical Safety', icon: '',
      steps: [
        'Never touch machines with wet hands.',
        'Report any sparks, strange smells, or exposed wires immediately.',
        'Do not overload power outlets with multiple plugs.',
        'Only trained electricians should fix electrical problems.',
      ],
      quiz: {
        q: 'If a sewing machine is sparking, what should you do?',
        options: ['Keep using it carefully', 'Stop, unplug, and report to supervisor', 'Pour water on it', 'Fix it yourself'],
        correct: 1,
        explain: 'Stop the machine, unplug it safely, and report immediately. Water and DIY fixes can cause electrocution.',
      },
    },
    {
      id: 'L3', title: 'Know Your Rights', icon: '',
      steps: [
        'You have the right to a safe workplace.',
        'You have the right to fair wages and overtime pay.',
        'You have the right to report issues without retaliation.',
        'You have the right to join a workers\' welfare committee.',
      ],
      quiz: {
        q: 'Can your employer punish you for filing a complaint?',
        options: ['Yes, they can fire you', 'No, retaliation is illegal', 'Only if complaint is false', 'Only with a warning'],
        correct: 1,
        explain: 'Bangladesh labor law prohibits retaliation against workers who file complaints in good faith.',
      },
    },
    {
      id: 'L4', title: 'First Aid Basics', icon: '',
      steps: [
        'For minor cuts: clean with water, apply antiseptic, cover with bandage.',
        'For burns: cool with running water for 10 minutes, do not apply ice.',
        'For eye exposure to chemicals: rinse with clean water for 15 minutes.',
        'Always report injuries to the first-aid room and your supervisor.',
      ],
      quiz: {
        q: 'What is the first step for a chemical burn?',
        options: ['Apply toothpaste', 'Cool with running water for 10+ minutes', 'Apply oil', 'Cover with cloth immediately'],
        correct: 1,
        explain: 'Cool running water for at least 10 minutes reduces burn damage. Never apply toothpaste, oil, or ice.',
      },
    },
  ];

  // AI Safety Learning progress
  const learningProgress = {
    L1: { done: false, score: 0 },
    L2: { done: false, score: 0 },
    L3: { done: false, score: 0 },
    L4: { done: false, score: 0 },
  };

  // AI Chat KB
  const chatKB = [
    {
      keys: ['overtime', 'জোরপূর্বক', 'ওভারটাইম', 'force', 'extra hours', 'long hours'],
      en: 'Under Bangladesh Labour Act 2006, overtime must be voluntary and paid at 2× your regular rate. Your employer cannot force you to work overtime. If they do, you can report this anonymously through ThreadWatch AI.',
      bn: 'বাংলাদেশ শ্রম আইন ২০০৬ অনুযায়ী, ওভারটাইম স্বেচ্ছায় হতে হবে এবং আপনার সাধারণ মজুরির দ্বিগুণ হারে প্রদান করতে হবে। আপনার নিয়োগকর্তা আপনাকে জোরপূর্বক ওভারটাইম করতে বাধ্য করতে পারে না।',
    },
    {
      keys: ['salary', 'বেতন', 'wage', 'paid', 'payment', 'মজুরি'],
      en: 'Salary must be paid by the 7th of the following month. If your salary is delayed, you can (1) talk to HR, (2) file a complaint with the factory Workers\' Welfare Committee, or (3) report anonymously here. BGMEA can also be contacted.',
      bn: 'পরবর্তী মাসের ৭ তারিখের মধ্যে বেতন প্রদান করতে হবে। বেতন দেরি হলে আপনি (১) এইচআর এর সাথে কথা বলতে পারেন, (২) কারখানা শ্রমিক কল্যাণ কমিটিতে অভিযোগ করতে পারেন, অথবা (৩) এখানে বেনামে রিপোর্ট করতে পারেন।',
    },
    {
      keys: ['harass', 'হয়রানি', 'abuse', 'bully', 'threat', 'অপমান', 'যৌন'],
      en: 'Workplace harassment is a criminal offense in Bangladesh. You have the right to (1) file a complaint with the Internal Complaints Committee, (2) report to BGMEA, or (3) file a case with the Women and Children Repression Prevention Tribunal. You can also report anonymously here — your identity is fully protected.',
      bn: 'কর্মক্ষেত্রে হয়রানি বাংলাদেশে একটি ফৌজদারি অপরাধ। আপনার অধিকার আছে (১) অভ্যন্তরীণ অভিযোগ কমিটিতে অভিযোগ করার, (২) বিজিএমইএ তে রিপোর্ট করার, অথবা (৩) নারী ও শিশু নির্যাতন দমন ট্রাইব্যুনালে মামলা করার।',
    },
    {
      keys: ['fire', 'আগুন', 'smoke', 'burn', 'ধোঁয়া'],
      en: 'If you see fire or smoke: (1) Stay calm, (2) Alert others loudly, (3) Use the nearest emergency exit — never elevators, (4) Go to the assembly point outside, (5) Do not re-enter until fire officials say it is safe. Report any blocked exits or missing extinguishers through ThreadWatch AI.',
      bn: 'আগুন বা ধোঁয়া দেখলে: (১) শান্ত থাকুন, (২) অন্যদের সাচেতন করুন, (৩) নিকটতম জরুরি বহির্গমন পথ ব্যবহার করুন, (৪) বাইরে সমাবেশ স্থলে যান, (৫) দমকল বাহিনী নিরাপদ বলার আগে ভেতরে প্রবেশ করবেন না।',
    },
    {
      keys: ['health center', 'hospital', 'চিকিৎসা', 'bgmea', 'medical', 'doctor'],
      en: 'The BGMEA Health Center is located at 23/1, Panthapath Link Road, Dhaka. Contact: 02-9551292. It provides free medical care for RMG workers. For emergencies, call National Emergency 999.',
      bn: 'বিজিএমইএ স্বাস্থ্য কেন্দ্র ২৩/১, পান্থপথ লিংক রোড, ঢাকায় অবস্থিত। যোগাযোগ: ০২-৯৫৫১২৯২। এটি আরএমজি শ্রমিকদের জন্য বিনামূল্যে চিকিৎসা সেবা প্রদান করে। জরুরি অবস্থায় কল করুন ৯৯৯।',
    },
    {
      keys: ['rights', 'অধিকার', 'law', 'আইন', 'legal'],
      en: 'Your key rights under Bangladesh Labour Act 2006: (1) Minimum wage ৳12,500/month, (2) One weekly day off, (3) Overtime at 2× rate, (4) Safe workplace, (5) Maternity leave, (6) No child labor, (7) Right to form unions, (8) Protection from retaliation.',
      bn: 'বাংলাদেশ শ্রম আইন ২০০৬ এর অধীনে আপনার মূল অধিকার: (১) সর্বনিম্ন মজুরি ৳১২,৫০০/মাস, (২) সাপ্তাহিক ছুটি, (৩) দ্বিগুণ হারে ওভারটাইম, (৪) নিরাপদ কর্মক্ষেত্র, (৫) মাতৃত্বকালীন ছুটি, (৬) শিশু শ্রম নিষিদ্ধ, (৭) ইউনিয়ন গঠনের অধিকার।',
    },
  ];

  // AI Recommendation catalogue
  const recommendations = {
    'Delayed Salary': [
      'Investigate payroll processing immediately.',
      'Notify HR and finance department.',
      'Review payroll records for last 3 months.',
      'Communicate expected payment date to workers.',
      'Escalate to factory owner if HR is unresponsive.',
    ],
    'Overtime Abuse': [
      'Review attendance records and overtime logs.',
      'Ensure overtime is voluntary and paid at 2× rate.',
      'Provide compensatory day off where possible.',
      'Brief supervisors on Bangladesh Labour Act overtime rules.',
    ],
    'Unsafe Machinery': [
      'Stop the machine immediately and lock it out.',
      'Inspect electrical wiring and mechanical parts.',
      'Replace worn-out components before resuming use.',
      'Document inspection and notify maintenance team.',
    ],
    'Harassment': [
      'Open a confidential investigation within 48 hours.',
      'Engage Internal Complaints Committee.',
      'Separate complainant from alleged harasser.',
      'Provide counseling support to affected workers.',
      'Document all actions and outcomes.',
    ],
    'Fire Safety': [
      'Inspect all emergency exits and unlock them.',
      'Check fire extinguishers — refill if expired.',
      'Conduct a fire drill within 7 days.',
      'Repair alarm and detection systems.',
      'Train all workers on evacuation procedures.',
    ],
    'Workplace Injury': [
      'Provide immediate medical care.',
      'File incident report within 24 hours.',
      'Investigate root cause within 48 hours.',
      'Compensate the worker as per labour law.',
    ],
    'Child Labor Concern': [
      'Verify worker age using official documents.',
      'If confirmed, remove the worker immediately.',
      'Report to Department of Inspection for Factories.',
      'Strengthen hiring verification process.',
    ],
    'No Clean Water': [
      'Install water dispensers in each section.',
      'Test water quality monthly.',
      'Communicate water source to workers.',
    ],
    'Bathroom Access': [
      'Review bathroom break policy.',
      'Ensure reasonable access without abuse.',
      'Add facilities if existing ones are insufficient.',
    ],
    'Health Hazard': [
      'Conduct air-quality and noise-level tests.',
      'Improve ventilation in affected sections.',
      'Provide PPE (masks, earplugs, gloves).',
      'Rotate workers to limit exposure.',
    ],
    'Verbal Abuse': [
      'Conduct supervisor training on respectful communication.',
      'Implement zero-tolerance policy for abuse.',
      'Set up anonymous reporting channel.',
    ],
    'Discrimination': [
      'Review anti-discrimination policy.',
      'Conduct awareness training for all staff.',
      'Set up a confidential grievance committee.',
    ],
    'Forced Labor': [
      'Return all personal documents to workers.',
      'Audit recruitment and onboarding processes.',
      'Train HR on labour law compliance.',
    ],
    'No Protective Gear': [
      'Distribute required PPE immediately.',
      'Make PPE part of mandatory uniform check.',
      'Train workers on proper PPE usage.',
    ],
    'Mental Stress': [
      'Engage professional counselor.',
      'Reduce unrealistic production targets.',
      'Train supervisors on mental health awareness.',
      'Provide quiet space for breaks.',
    ],
  };

  return {
    factories,
    categories,
    departments,
    complaints: allComplaints,
    trendLabels,
    trendData,
    sentimentTrend,
    categoryCount,
    deptRisk,
    lessons,
    learningProgress,
    chatKB,
    recommendations,
  };
})();
