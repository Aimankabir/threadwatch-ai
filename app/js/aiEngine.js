/* ============================================================
   ThreadWatch AI — AI Engine
   Client-side deterministic AI simulation
   ============================================================ */

window.AI = (function () {

  // ---------- Bangla & English keyword dictionaries ----------
  const categoryKeywords = {
    'Delayed Salary': {
      en: ['salary', 'wage', 'pay', 'paid', 'payment', 'money', 'tk', 'taka', 'not paying', 'unpaid', 'deduct', 'wrong amount', 'short pay', '70%', 'this month'],
      bn: ['বেতন', 'মজুরি', 'টাকা', 'বেতন দেয়', 'বেতন দেয় নাই', 'বেতন দেয় না', 'মাইনে', 'বকেয়া', 'বেতন হয়নি', 'পেমেন্ট', 'মাইনা'],
    },
    'Overtime Abuse': {
      en: ['overtime', 'extra hours', 'long hours', '12 hours', 'forced', 'without pay', 'off day', 'weekly off', 'no holiday', 'sunday', 'shifts'],
      bn: ['ওভারটাইম', 'অতিরিক্ত', 'জোরপূর্বক', 'ছুটি', 'ছুটি দেয় না', 'বন্ধ নাই', 'রোববার', 'অফিস ছুটি'],
    },
    'Unsafe Machinery': {
      en: ['machine', 'sewing', 'sparks', 'shaking', 'vibration', 'broken', 'dangerous', 'loose', 'no guard', 'electric'],
      bn: ['মেশিন', 'সেলাই', 'স্পার্ক', 'কাঁপা', 'ভাঙা', 'বিপদ', 'বিদ্যুৎ'],
    },
    'Harassment': {
      en: ['abuse', 'harass', 'bully', 'threat', 'shout', 'rude', 'humiliate', 'touch', 'inappropriate', 'in front of', 'slap', 'push', 'verbal', 'sexually'],
      bn: ['হয়রানি', 'অপমান', 'গালি', 'ধমক', 'ভয়', 'যৌন', 'ছোঁয়াছুঁয়ি', 'ধাক্কা', 'চড়'],
    },
    'Fire Safety': {
      en: ['fire', 'smoke', 'burn', 'extinguisher', 'exit', 'locked', 'alarm', 'drill', 'evacuation'],
      bn: ['আগুন', 'ধোঁয়া', 'পোড়া', 'এক্সিট', 'তালা', 'অ্যালার্ম'],
    },
    'Workplace Injury': {
      en: ['injury', 'cut', 'hurt', 'blood', 'wound', 'fell', 'accident', 'broken', 'fracture'],
      bn: ['কাটা', 'রক্ত', 'আঘাত', 'পড়ে গেছে', 'ভাঙা', 'ব্যথা', 'চোট'],
    },
    'Child Labor Concern': {
      en: ['child', 'young', 'school', 'minor', 'age', 'underage', 'looks young'],
      bn: ['বাচ্চা', 'ছোট', 'স্কুল', 'কম বয়স', 'বালক'],
    },
    'No Clean Water': {
      en: ['water', 'drinking', 'thirsty', 'clean water', 'no water', 'buy water'],
      bn: ['পানি', 'পানি নাই', 'পানি কিনতে', 'পানি নেই'],
    },
    'Bathroom Access': {
      en: ['bathroom', 'toilet', 'restroom', 'washroom', '10 minutes', 'break', 'not allowed'],
      bn: ['বাথরুম', 'টয়লেট', 'প্রস্রাব', '১০ মিনিট', 'যেতে দেয় না'],
    },
    'Health Hazard': {
      en: ['faint', 'headache', 'dizzy', 'sick', 'breathing', 'dust', 'smell', 'chemical', 'noise', 'hot', 'ventilation', 'heat'],
      bn: ['মাথা ব্যথা', 'মাথা ঘোরা', 'অসুস্থ', 'শ্বাস', 'ধুলো', 'গন্ধ', 'রাসায়নিক', 'গরম', 'গরম বাতাস'],
    },
    'Verbal Abuse': {
      en: ['yell', 'scream', 'curse', 'insult', 'shout at', 'rude word'],
      bn: ['চিৎকার', 'গালাগালি', 'বকা', 'অপমান'],
    },
    'Discrimination': {
      en: ['discrimination', 'gender', 'menstruation', 'pregnant', 'female', 'women not allowed', 'bias', 'preference'],
      bn: ['বৈষম্য', 'নারী', 'মাসিক', 'গর্ভবতী', 'পুরুষ'],
    },
    'Forced Labor': {
      en: ['forced', 'cannot leave', 'documents held', 'id card', 'passport', 'trapped', 'locked in'],
      bn: ['জোর', 'ফেরত দেয় না', 'আইডি কার্ড', 'পাসপোর্ট'],
    },
    'No Protective Gear': {
      en: ['no gloves', 'no mask', 'no goggles', 'no helmet', 'no ppe', 'no protection', 'unsafe handling'],
      bn: ['গ্লাভস নাই', 'মাস্ক নাই', 'নিরাপত্তা', 'সুরক্ষা'],
    },
    'Mental Stress': {
      en: ['depressed', 'anxiety', 'stress', 'pressure', 'mental', 'crying', 'scared', 'afraid', 'cannot sleep'],
      bn: ['মানসিক', 'চাপ', 'ভয়', 'কান্না', 'ঘুম', 'চিন্তা'],
    },
  };

  const severityKeywords = {
    Critical: ['fire', 'sparks', 'electric', 'shock', 'inappropriate', 'sexually', 'child', 'life', 'die', 'locked', 'burn', 'faint', 'asbestos',
      'আগুন', 'স্পার্ক', 'যৌন', 'বাচ্চা', 'মারা', 'পোড়া', 'অজ্ঞান'],
    High: ['salary', 'wage', 'three months', 'তিন মাস', 'delayed', 'সেলাই', 'sewing machine', 'abuse', 'threat', 'broken', 'cut', 'blood', 'ভাঙা', 'রক্ত', 'প্রহার'],
    Medium: ['forgot', 'sometimes', 'rarely', 'long', 'hot', 'noisy', 'মাঝে মাঝে', 'গরম', 'শব্দ'],
    Low: ['suggestion', 'improve', 'could be better', 'request', 'উন্নতি'],
  };

  const sentimentKeywords = {
    Angry: ['angry', 'unacceptable', 'fed up', 'enough', 'ridiculous', 'তিন মাস', 'রাগ', 'অন্যায়', 'অসহ্য'],
    Fear: ['scared', 'afraid', 'fear', 'panic', 'unsafe', 'danger', 'ভয়', 'আতঙ্ক', 'ভয়ংকর'],
    Sad: ['sad', 'cry', 'depressed', 'hopeless', 'tired', 'exhausted', 'কষ্ট', 'কান্না', 'হতাশ'],
    Frustrated: ['frustrated', 'annoyed', 'fed up', 'why', 'always', 'every day', 'বিরক্ত', 'ক্লান্ত'],
    Worried: ['worried', 'concern', 'concerned', 'health', 'sick', 'headache', 'চিন্তা', 'চিন্তিত', 'অসুস্থ'],
    Neutral: [],
  };

  // ---------- Bangla to English simple dictionary ----------
  const banglaToEnglish = {
    'বেতন': 'salary', 'বেতন দেয় নাই': 'salary not paid', 'বেতন দেয় না': 'salary not paid',
    'মজুরি': 'wage', 'টাকা': 'money', 'আগুন': 'fire', 'ধোঁয়া': 'smoke',
    'ওভারটাইম': 'overtime', 'ছুটি': 'holiday', 'বাথরুম': 'bathroom', 'টয়লেট': 'toilet',
    'মেশিন': 'machine', 'সেলাই': 'sewing', 'কাঁপা': 'shaking', 'স্পার্ক': 'sparks',
    'হয়রানি': 'harassment', 'অপমান': 'insult', 'গালি': 'curse', 'ধমক': 'threat',
    'ভয়': 'fear', 'যৌন': 'sexual', 'ছোঁয়াছুঁয়ি': 'touching', 'ধাক্কা': 'push',
    'পানি': 'water', 'পানি নাই': 'no water', 'পানি নেই': 'no water',
    'কাটা': 'cut', 'রক্ত': 'blood', 'আঘাত': 'injury', 'পড়ে গেছে': 'fell down',
    'ভাঙা': 'broken', 'ব্যথা': 'pain', 'চোট': 'hurt',
    'মাথা ব্যথা': 'headache', 'মাথা ঘোরা': 'dizziness', 'অসুস্থ': 'sick',
    'শ্বাস': 'breathing', 'ধুলো': 'dust', 'গন্ধ': 'smell', 'রাসায়নিক': 'chemical',
    'গরম': 'hot', 'বাতাস': 'air', 'জোর': 'force', 'আইডি কার্ড': 'ID card',
    'গ্লাভস নাই': 'no gloves', 'মাস্ক নাই': 'no mask',
    'বাচ্চা': 'child', 'ছোট': 'small', 'স্কুল': 'school', 'কম বয়স': 'underage',
    'চিন্তা': 'worry', 'চিন্তিত': 'worried', 'কান্না': 'crying',
    'চাপ': 'pressure', 'ঘুম': 'sleep', 'মানসিক': 'mental',
    'অফিস ছুটি': 'weekly off', 'রোববার': 'sunday',
    'যেতে দেয় না': 'not allowed to go', 'মাসিক': 'menstruation',
  };

  function detectLanguage(text) {
    const bnChars = (text.match(/[\u0980-\u09FF]/g) || []).length;
    return bnChars > 5 ? 'bn' : 'en';
  }

  function translateBnToEn(text) {
    let out = text;
    Object.keys(banglaToEnglish).sort((a, b) => b.length - a.length).forEach(bn => {
      out = out.replace(new RegExp(bn, 'g'), banglaToEnglish[bn]);
    });
    return out;
  }

  function scoreCategory(text, lower) {
    const scores = {};
    Object.keys(categoryKeywords).forEach(cat => {
      let score = 0;
      const lang = detectLanguage(text);
      const kws = categoryKeywords[cat][lang] || categoryKeywords[cat].en;
      kws.forEach(kw => {
        const re = new RegExp(kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        const matches = lower.match(re);
        if (matches) score += matches.length * (kw.length > 5 ? 2 : 1);
      });
      scores[cat] = score;
    });
    let best = 'Workplace Injury';
    let bestScore = 0;
    Object.keys(scores).forEach(c => {
      if (scores[c] > bestScore) {
        bestScore = scores[c];
        best = c;
      }
    });
    return { category: best, confidence: Math.min(0.95, 0.4 + bestScore * 0.1) };
  }

  function scoreSeverity(text, lower) {
    const scores = { Critical: 0, High: 0, Medium: 0, Low: 0 };
    Object.keys(severityKeywords).forEach(sev => {
      severityKeywords[sev].forEach(kw => {
        const re = new RegExp(kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        const matches = lower.match(re);
        if (matches) scores[sev] += matches.length * (sev === 'Critical' ? 3 : sev === 'High' ? 2 : 1);
      });
    });
    let best = 'Medium';
    if (scores.Critical > 0) best = 'Critical';
    else if (scores.High > 0) best = 'High';
    else if (scores.Low > scores.Medium * 1.5 && scores.Medium === 0) best = 'Low';
    return best;
  }

  function scoreSentiment(text, lower, lang) {
    const scores = { Angry: 0, Fear: 0, Sad: 0, Frustrated: 0, Worried: 0, Neutral: 0 };
    Object.keys(sentimentKeywords).forEach(s => {
      sentimentKeywords[s].forEach(kw => {
        const re = new RegExp(kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        const matches = lower.match(re);
        if (matches) scores[s] += matches.length;
      });
    });
    let best = 'Neutral';
    let bestScore = 0;
    Object.keys(scores).forEach(s => {
      if (scores[s] > bestScore) { bestScore = scores[s]; best = s; }
    });
    if (best === 'Neutral') {
      best = 'Worried'; // default emotion for workers
    }
    return best;
  }

  function detectUrgency(severity, category) {
    const crit = ['Fire Safety', 'Unsafe Machinery', 'Child Labor Concern', 'Harassment', 'Workplace Injury'];
    const high = ['Delayed Salary', 'Overtime Abuse', 'Forced Labor', 'No Protective Gear', 'Health Hazard'];
    if (severity === 'Critical') return 'High';
    if (severity === 'High' || crit.includes(category)) return 'High';
    if (high.includes(category)) return 'High';
    if (severity === 'Medium') return 'Medium';
    return 'Low';
  }

  function extractRootCause(text, category) {
    const causes = {
      'Delayed Salary': 'Payroll processing delay or cash-flow issue at factory level.',
      'Overtime Abuse': 'Production schedule pressure with insufficient worker coverage.',
      'Unsafe Machinery': 'Aging equipment and inadequate maintenance schedule.',
      'Harassment': 'Lack of supervisor accountability and weak grievance mechanism.',
      'Fire Safety': 'Blocked exits, missing safety equipment, and irregular drills.',
      'Workplace Injury': 'Inadequate machine guarding and rushed production pace.',
      'Child Labor Concern': 'Weak age-verification during hiring.',
      'No Clean Water': 'Inadequate facility provision for workers.',
      'Bathroom Access': 'Overly restrictive policies implemented by line management.',
      'Health Hazard': 'Poor ventilation, chemical exposure, or extreme heat conditions.',
      'Verbal Abuse': 'Supervisor training gap and toxic management culture.',
      'Discrimination': 'Gender-based policy gaps and inadequate awareness.',
      'Forced Labor': 'Document retention and restricted movement.',
      'No Protective Gear': 'PPE not provisioned or enforced.',
      'Mental Stress': 'Excessive production targets and lack of support systems.',
    };
    return causes[category] || 'Pattern requiring further investigation.';
  }

  function summarize(text, lang, category, severity) {
    const t = text.trim();
    const cap = t.charAt(0).toUpperCase() + t.slice(1);
    const trunc = cap.length > 280 ? cap.slice(0, 280) + '...' : cap;
    if (lang === 'bn') {
      return `${severity} পর্যায়ের ${category} বিষয়ে একটি অভিযোগ পাওয়া গেছে: "${trunc}"`;
    }
    return `Detected ${severity} ${category} concern: "${trunc}"`;
  }

  function analyze(rawText) {
    const text = (rawText || '').trim();
    if (!text) return null;
    const lang = detectLanguage(text);
    const lower = text.toLowerCase();
    const { category, confidence } = scoreCategory(text, lower);
    const severity = scoreSeverity(text, lower);
    const sentiment = scoreSentiment(text, lower, lang);
    const urgency = detectUrgency(severity, category);
    const rootCause = extractRootCause(text, category);
    const summary = summarize(text, lang, category, severity);
    const reco = (window.MOCK.recommendations[category] || []).slice(0, 5);
    let translation = null;
    if (lang === 'bn') {
      translation = translateBnToEn(text);
    }
    return {
      text, lang, category, severity, sentiment, urgency, confidence,
      rootCause, summary, recommendations: reco, translation,
    };
  }

  // ---------- Duplicate detection ----------
  function findDuplicate(newComplaint, existing) {
    const same = existing.filter(c => c.category === newComplaint.category);
    if (same.length === 0) return null;
    return same[0];
  }

  // ---------- Factory Health Score ----------
  function computeHealthScore(complaints) {
    if (complaints.length === 0) return 95;
    const sevWeight = { Critical: 8, High: 4, Medium: 2, Low: 1 };
    const totalPenalty = complaints.reduce((sum, c) => sum + (sevWeight[c.severity] || 1), 0);
    const openPenalty = complaints.filter(c => c.status !== 'Resolved').reduce((s, c) => s + (sevWeight[c.severity] || 1) * 0.5, 0);
    const score = Math.max(20, 100 - totalPenalty - openPenalty);
    return Math.round(score);
  }

  function healthGrade(score) {
    if (score >= 85) return { grade: 'Excellent', color: 'good' };
    if (score >= 70) return { grade: 'Good', color: 'good' };
    if (score >= 55) return { grade: 'Needs Attention', color: 'warn' };
    return { grade: 'Critical', color: 'bad' };
  }

  // ---------- Trend detection ----------
  function detectTrends(complaints) {
    const now = Date.now();
    const last7 = complaints.filter(c => now - new Date(c.date).getTime() < 7 * 86400000);
    const prev7 = complaints.filter(c => {
      const t = new Date(c.date).getTime();
      return t >= now - 14 * 86400000 && t < now - 7 * 86400000;
    });
    const byCatLast = {};
    const byCatPrev = {};
    last7.forEach(c => byCatLast[c.category] = (byCatLast[c.category] || 0) + 1);
    prev7.forEach(c => byCatPrev[c.category] = (byCatPrev[c.category] || 0) + 1);
    const trending = Object.keys(byCatLast).filter(c => (byCatLast[c] || 0) > (byCatPrev[c] || 0)).sort((a, b) => (byCatLast[b] || 0) - (byCatLast[a] || 0));
    const sentimentAvg = last7.length > 0 ? last7.reduce((s, c) => s + (sentimentScore(c.sentiment)), 0) / last7.length : 70;
    const prevSent = prev7.length > 0 ? prev7.reduce((s, c) => s + sentimentScore(c.sentiment), 0) / prev7.length : 70;
    return { trending, sentimentAvg: Math.round(sentimentAvg), prevSent: Math.round(prevSent), rising: sentimentAvg < prevSent };
  }

  function sentimentScore(s) {
    return ({ Angry: 25, Fear: 35, Sad: 45, Frustrated: 50, Worried: 60, Neutral: 70 }[s] || 70);
  }

  // ---------- AI Chat response ----------
  function chatReply(query) {
    const q = query.toLowerCase();
    const lang = detectLanguage(query);
    for (const entry of window.MOCK.chatKB) {
      for (const k of entry.keys) {
        if (q.includes(k.toLowerCase())) {
          return lang === 'bn' ? entry.bn : entry.en;
        }
      }
    }
    return lang === 'bn'
      ? 'আমি এই বিষয়ে আপনাকে সাহায্য করতে চাই। অনুগ্রহ করে আরো বিস্তারিত বলুন অথবা অভিযোগ ফর্ম ব্যবহার করুন। আপনি যে কোন সময় ৯৯৯ এ কল করতে পারেন।'
      : 'I want to help. Could you tell me more? You can also submit an anonymous complaint using the form. For emergencies, call 999.';
  }

  // ---------- Smart search ----------
  function smartSearch(query, complaints) {
    const q = query.toLowerCase();
    let results = [];
    if (q.includes('harassment') || q.includes('হয়রানি')) {
      results = complaints.filter(c => c.category === 'Harassment');
    } else if (q.includes('salary') || q.includes('বেতন')) {
      results = complaints.filter(c => c.category === 'Delayed Salary');
    } else if (q.includes('fire') || q.includes('আগুন')) {
      results = complaints.filter(c => c.category === 'Fire Safety');
    } else if (q.includes('safety') || q.includes('নিরাপত্তা')) {
      results = complaints.filter(c => c.category.includes('Machinery') || c.category === 'Fire Safety' || c.category === 'Workplace Injury');
    } else if (q.includes('department') || q.includes('worst') || q.includes('বিভাগ')) {
      const deptCount = {};
      complaints.forEach(c => { deptCount[c.dept] = (deptCount[c.dept] || 0) + c.affected; });
      const sorted = Object.entries(deptCount).sort((a, b) => b[1] - a[1]);
      return { type: 'answer', text: `Worst safety record: <strong>${sorted[0][0]}</strong> with ${sorted[0][1]} complaints. Followed by ${sorted[1][0]} (${sorted[1][1]}) and ${sorted[2][0]} (${sorted[2][1]}).` };
    } else if (q.includes('last week') || q.includes('গত সপ্তাহ')) {
      const cutoff = Date.now() - 7 * 86400000;
      results = complaints.filter(c => new Date(c.date).getTime() >= cutoff);
    } else {
      // generic keyword search
      const tokens = q.split(/\s+/).filter(t => t.length > 3);
      results = complaints.filter(c => tokens.some(t => c.text.toLowerCase().includes(t) || c.category.toLowerCase().includes(t)));
    }
    return { type: 'list', items: results };
  }

  // ---------- Weekly report ----------
  function generateWeeklyReport(complaints, factoryName) {
    const now = Date.now();
    const last7 = complaints.filter(c => now - new Date(c.date).getTime() < 7 * 86400000);
    const byCat = {};
    last7.forEach(c => byCat[c.category] = (byCat[c.category] || 0) + c.affected);
    const topCat = Object.entries(byCat).sort((a, b) => b[1] - a[1])[0];
    const critCount = last7.filter(c => c.severity === 'Critical').length;
    const highCount = last7.filter(c => c.severity === 'High').length;
    const sentAvg = last7.length > 0 ? Math.round(last7.reduce((s, c) => s + sentimentScore(c.sentiment), 0) / last7.length) : 70;
    const resolved = last7.filter(c => c.status === 'Resolved').length;
    const health = computeHealthScore(complaints);
    const trends = detectTrends(complaints);

    const recoList = topCat ? (window.MOCK.recommendations[topCat[0]] || []).slice(0, 4) : [];

    return {
      factory: factoryName,
      total: last7.length,
      critical: critCount,
      high: highCount,
      resolved,
      topCategory: topCat ? topCat[0] : 'None',
      topCategoryCount: topCat ? topCat[1] : 0,
      sentimentScore: sentAvg,
      healthScore: health,
      trends,
      recommendations: recoList,
    };
  }

  function generateComplianceReport(complaints, factory) {
    const total = complaints.length;
    const top = {};
    complaints.forEach(c => top[c.category] = (top[c.category] || 0) + c.affected);
    const topList = Object.entries(top).sort((a, b) => b[1] - a[1]).slice(0, 5);
    const health = computeHealthScore(complaints);
    const reco = [];
    topList.forEach(([cat]) => {
      const list = window.MOCK.recommendations[cat] || [];
      if (list[0]) reco.push(list[0]);
    });
    return {
      factory,
      total,
      topCategoryList: topList,
      healthScore: health,
      resolution: Math.round((complaints.filter(c => c.status === 'Resolved').length / Math.max(1, total)) * 100),
      recommendations: reco,
    };
  }

  // ---------- Priority ranking for inspector ----------
  function rankFactoriesForInspection(factories, complaints) {
    return factories.map(f => {
      const fc = complaints.filter(c => c.factory === f.id);
      const sevWeight = { Critical: 8, High: 4, Medium: 2, Low: 1 };
      const score = fc.reduce((s, c) => s + (sevWeight[c.severity] || 1) * c.affected, 0);
      const crit = fc.filter(c => c.severity === 'Critical').length;
      const sentiment = fc.length > 0 ? Math.round(fc.reduce((s, c) => s + sentimentScore(c.sentiment), 0) / fc.length) : 70;
      const reasons = [];
      if (fc.filter(c => c.category === 'Delayed Salary').length > 0) reasons.push('Wage complaints raised');
      if (sentiment < 50) reasons.push('Negative worker sentiment');
      if (fc.filter(c => c.category === 'Fire Safety').length > 0) reasons.push('Fire safety reports');
      if (fc.filter(c => c.category === 'Unsafe Machinery').length > 0) reasons.push('machinery safety concerns');
      if (fc.filter(c => c.category === 'Harassment').length > 0) reasons.push('Harassment reports');
      const areas = new Set();
      fc.forEach(c => {
        if (c.category === 'Delayed Salary') areas.add('Payroll');
        if (c.category === 'Unsafe Machinery') areas.add('Electrical Safety');
        if (c.category === 'Fire Safety') areas.add('Emergency Exit');
        if (c.category === 'Harassment') areas.add('HR Practices');
        if (c.category === 'Overtime Abuse') areas.add('HR Practices');
      });
      return {
        ...f,
        score,
        critCount: crit,
        sentiment,
        reasons,
        areas: [...areas],
      };
    }).sort((a, b) => b.score - a.score);
  }

  // ---------- "What If?" scenario simulator ----------
  // Estimates projected factory health and complaint reduction if a manager
  // takes a specific action. NOT a guarantee — heuristic projection only.
  function simulateScenario(factoryId, complaints, scenario) {
    const fc = complaints.filter(c => c.factory === factoryId);
    const beforeHealth = computeHealthScore(fc);

    // Decide which complaints this scenario would resolve / soften.
    let surviving = fc.slice();
    let multiplier = 1; // reduction factor applied to remaining complaints
    switch (scenario) {
      case 'resolve_wage':
        surviving = fc.filter(c => c.category !== 'Delayed Salary');
        multiplier = 1; break;
      case 'resolve_safety':
        surviving = fc.filter(c => c.category !== 'Fire Safety' && c.category !== 'Unsafe Machinery');
        multiplier = 1; break;
      case 'resolve_harass':
        surviving = fc.filter(c => c.category !== 'Harassment' && c.category !== 'Discrimination');
        multiplier = 1; break;
      case 'resolve_all':
        surviving = []; multiplier = 0; break;
      case 'reduce_severity':
        surviving = fc.map(c => c.severity === 'Critical'
          ? Object.assign({}, c, { severity: 'High' }) : c);
        multiplier = 0.75; break;
      case 'add_training':
        multiplier = 0.85; break;
      default:
        multiplier = 1;
    }

    // Recompute health from the surviving set, then add a small boost from
    // closing open items (mimics the morale bump after a manager acts).
    const projectedHealth = Math.min(98, Math.round(
      computeHealthScore(surviving) +
      (fc.length - surviving.length) * 1.2
    ));

    const closed = fc.length - surviving.length;
    const complaintReduction = fc.length > 0
      ? Math.round((closed / fc.length) * 100)
      : 0;

    const delta = projectedHealth - beforeHealth;
    let improvement = 'Low';
    if (delta >= 12) improvement = 'High';
    else if (delta >= 6) improvement = 'Medium';

    const grade = healthGrade(projectedHealth);

    // Short human-readable rationale per scenario.
    const rationale = {
      resolve_wage:    'Closes wage delays → reduces worker grievance & sentiment risk.',
      resolve_safety:  'Removes safety hazards → biggest single boost to compliance score.',
      resolve_harass:  'Clears harassment cases → protects culture and retention.',
      resolve_all:     'Empty queue gives a one-time ceiling jump — hard to sustain.',
      reduce_severity: 'Downgrades Critical items → softer penalty on health math.',
      add_training:    'Multiplies future complaint likelihood down by 15%.',
    }[scenario] || 'Generic projection based on complaint delta.';

    return {
      beforeHealth,
      projectedHealth,
      delta,
      complaintReduction,
      improvement, // 'Low' | 'Medium' | 'High'
      grade,       // { grade, color }
      closed,
      remaining: surviving.length,
      rationale,
      multiplier,
    };
  }

  return {
    analyze,
    findDuplicate,
    computeHealthScore,
    healthGrade,
    detectTrends,
    chatReply,
    smartSearch,
    generateWeeklyReport,
    generateComplianceReport,
    rankFactoriesForInspection,
    sentimentScore,
    detectLanguage,
    translateBnToEn,
    simulateScenario,
  };
})();
