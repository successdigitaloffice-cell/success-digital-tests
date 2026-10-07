// Success Digital - Central Master Question Bank
// 80 Tests × 20 Questions = 1,600 Unique Questions Total
// Modular storage: data/mahatet1.js, data/mahatet2.js, data/ctet1.js, data/ctet2.js

window.allTestsBank = window.allTestsBank || {};
var allTestsBank = window.allTestsBank;

// Fallback high-yield test bank for safety
const defaultQuizQuestions = [
    { subject: "CDP", type: "IMP", tagText: "Constructivism", question: "शिक्षणात 'ज्ञानरचनावाद' (Constructivism) प्रामुख्याने कशावर भर देतो?", options: ["विद्यार्थ्यांच्या पूर्वज्ञानावर व सक्रिय ज्ञानरचनेवर", "शिक्षकाच्या एकतर्फी व्याख्यानावर", "केवळ पाठांतरावर", "कडक शिस्तीवर"], answer: 0, explanation: "रचनावादानुसार विद्यार्थी स्वतःच्या अनुभवातून आणि विचार प्रक्रियेतून ज्ञानाची रचना करतात." },
    { subject: "Language", type: "Concept", tagText: "Grammar", question: "'शुद्धलेखन' नियमानुसार अचूक शब्द ओळखा.", options: ["आशिर्वाद", "आशीर्वाद", "आशिरवाद", "अशिर्वाद"], answer: 1, explanation: "'आशीर्वाद' या शब्दात 'शी' दीर्घ असून 'वा' वर रफार असतो." },
    { subject: "Maths", type: "IMP", tagText: "Average", question: "एका वर्गातील 30 विद्यार्थ्यांचे सरासरी वय 14 वर्षे आहे, तर एकूण वयाची बेरीज किती?", options: ["400", "420 वर्षे", "450", "480"], answer: 1, explanation: "एकूण बेरीज = सरासरी × संख्या = 14 × 30 = 420 वर्षे." },
    { subject: "EVS/Science", type: "Environment", tagText: "Producers", question: "अन्नसाखळीत (Food Chain) प्राथमिक उत्पादक कोण असतात?", options: ["शाकाहारी प्राणी", "हिरव्या वनस्पती (Green Plants)", "मांसाहारी प्राणी", "विघटक"], answer: 1, explanation: "सूर्यप्रकाशात स्वतःचे अन्न स्वतः तयार करणाऱ्या हिरव्या वनस्पती प्राथमिक उत्पादक असतात." },
    { subject: "Pedagogy", type: "Evaluation", tagText: "CCE", question: "सातत्यपूर्ण सर्वंकष मूल्यमापन (CCE) चा मुख्य उद्देश काय आहे?", options: ["मुलांची भीती घालवून सर्वांगीण विकास घडवणे", "विद्यार्थ्यांना नापास करणे", "केवळ लेखी परीक्षा घेणे", "विद्यार्थ्यांमध्ये अस्वस्थ स्पर्धा वाढवणे"], answer: 0, explanation: "CCE चा उद्देश शैक्षणिक व सह-शैक्षणिक सर्व पैलूंचे सातत्याने मूल्यमापन करून सुधारणा करणे हा आहे." }
];
