// Question Data
const questionsData = {
    
        math: [
          // Chapter 1: Number System
          { question: "1. प्राकृतिक संख्याएँ क्या हैं?", options: ["1, 2, 3, 4", "0, 1, 2, 3", "1, 3, 5, 7", "1, 4, 7, 8"], answer: 0 },
          { question: "2. -5 और 4 के बीच LCM क्या होगा?", options: ["-20", "20", "5", "10"], answer: 1 },
          { question: "3. दशमलव 0.75 को भिन्न रूप में कैसे लिखेंगे?", options: ["3/4", "1/4", "1/2", "2/3"], answer: 0 },
          { question: "4. √25 का मान क्या है?", options: ["4", "5", "6", "3"], answer: 1 },
          { question: "5. पूर्णांक में कौन सा अंक शामिल नहीं है?", options: ["-1", "0", "2", "1.5"], answer: 3 },
      
          // Chapter 2: Polynomials
          { question: "1. x² + 3x + 2 का गुणनफल क्या होगा?", options: ["x² + 6x + 6", "x² + 4x + 2", "x² + 2x + 2", "x² + 3x + 1"], answer: 0 },
          { question: "2. एक बहुपद (polynomial) के गुणनखंड का योग क्या होता है?", options: ["सभी को जोड़ना", "किसी को घटाना", "जोड़ने के बाद गुणा करना", "गुणा के बाद जोड़ना"], answer: 0 },
          { question: "3. x² - 9 का सही कारक क्या है?", options: ["(x - 3)(x + 3)", "(x - 9)(x + 9)", "(x - 6)(x + 6)", "(x - 4)(x + 4)"], answer: 0 },
          { question: "4. बहुपद का डिग्री (degree) क्या है?", options: ["जो सबसे बड़ा घातांक होता है", "सबसे छोटी शक्ति", "जो समीकरण का उत्तर होता है", "जो सबसे बड़ी वैरिएबल होती है"], answer: 0 },
          { question: "5. x³ + 3x² - 4 का सबसे बड़ा गुणांक क्या है?", options: ["3", "-4", "1", "0"], answer: 0 },
      
          // Chapter 3: Linear Equations in Two Variables
          { question: "1. x + 2y = 6 के लिए y की मान निकालें, जब x = 2 हो?", options: ["2", "1", "3", "0"], answer: 1 },
          { question: "2. रैखिक समीकरण किसे कहा जाता है?", options: ["जिनमें दो या अधिक वैरिएबल होते हैं", "जिनमें एक ही वैरिएबल होता है", "जिनमें सिर्फ एक उत्तर होता है", "जो क्यूबिक होते हैं"], answer: 0 },
          { question: "3. यदि 2x + 3y = 12 और 4x - y = 9 हो, तो x और y के मान क्या होंगे?", options: ["x = 3, y = 2", "x = 1, y = 3", "x = 2, y = 3", "x = 5, y = 1"], answer: 0 },
          { question: "4. 3x + 5y = 10 का y के लिए मान क्या है?", options: ["y = (10 - 3x)/5", "y = 3x - 10", "y = (3x + 10)/5", "y = 10x/5"], answer: 0 },
          { question: "5. रैखिक समीकरण में दो वैरिएबल क्या होते हैं?", options: ["x और y", "x और z", "y और z", "a और b"], answer: 0 },
      
          // Chapter 4: Quadratic Equations
          { question: "1. x² + 5x + 6 = 0 के हल क्या हैं?", options: ["x = -1, -6", "x = -2, -3", "x = 1, -6", "x = -3, 6"], answer: 1 },
          { question: "2. गुणात्मक समीकरण का सामान्य रूप क्या है?", options: ["ax² + bx + c = 0", "a + b + c = 0", "ax + by = 0", "ax² = c"], answer: 0 },
          { question: "3. x² - 4x + 4 = 0 का हल क्या होगा?", options: ["x = 2", "x = -2", "x = 1", "x = -1"], answer: 0 },
          { question: "4. एक रैखिक समीकरण और एक गुणात्मक समीकरण के अंतर क्या हैं?", options: ["गुणात्मक में x² होता है", "रैखिक में x² नहीं होता है", "गुणात्मक में 0 होता है", "रैखिक में कोई हल नहीं होता"], answer: 1 },
          { question: "5. समीकरण x² - 9 = 0 का हल क्या होगा?", options: ["x = 3, -3", "x = 2, -3", "x = 1, -3", "x = 5, -2"], answer: 0 },
      
          // Chapter 5: Arithmetic Progression
          { question: "1. एक अंकगणितीय श्रेणी का सामान्य रूप क्या होता है?", options: ["a, a+d, a+2d", "a, a+d, a+3d", "d, d+1, d+2", "a, b, c"], answer: 0 },
          { question: "2. यदि a = 2 और d = 3 हो, तो पहले 5 पदों का योग क्या होगा?", options: ["50", "45", "40", "35"], answer: 1 },
          { question: "3. यदि एक अंकगणितीय श्रेणी में पहला पद 3 और सामान्य अंतर 5 है, तो 7वां पद क्या होगा?", options: ["35", "40", "30", "25"], answer: 0 },
          { question: "4. एक अंकगणितीय श्रेणी में nth पद का सूत्र क्या होता है?", options: ["a + (n-1)d", "a + (n+1)d", "a(n-1)", "nd"], answer: 0 },
          { question: "5. अगर कोई अंकगणितीय श्रेणी 2, 5, 8, ... है, तो उसका सामान्य अंतर क्या है?", options: ["3", "2", "5", "1"], answer: 0 },
      
          // Chapter 6: Triangles
          { question: "1. त्रिकोण के तीन कोणों का योग क्या होता है?", options: ["90°", "180°", "360°", "270°"], answer: 1 },
          { question: "2. समद्विबाहु त्रिकोण में कौन सा गुण होता है?", options: ["दो समान भुजाएँ", "तीन अलग-अलग भुजाएँ", "सभी कोण 90°", "कोण 60° होते हैं"], answer: 0 },
          { question: "3. समकोण त्रिकोण का कोण क्या होता है?", options: ["90°", "60°", "120°", "180°"], answer: 0 },
          { question: "4. त्रिकोण के क्षेत्रफल का सूत्र क्या है?", options: ["1/2 × आधार × ऊँचाई", "आधार × ऊँचाई", "आधार²", "आधार + ऊँचाई"], answer: 0 },
          { question: "5. समानांतर भुजाओं वाला त्रिकोण कौन सा है?", options: ["समद्विबाहु त्रिकोण", "विभाजन त्रिकोण", "आयताकार त्रिकोण", "किसी भी त्रिकोण"], answer: 0 },
      
          // Chapter 7: Coordinate Geometry
          { question: "1. Cartesian समन्वय में कौन सा बिंदु (x, y) है?", options: ["(1, 2)", "(0, 0)", "(1, 3)", "(2, 3)"], answer: 1 },
          { question: "2. x और y के बीच रेखीय समीकरण का रूप क्या होता है?", options: ["x + y = 0", "x + y = 1", "y = x", "x² + y² = 1"], answer: 0 },
          { question: "3. यदि बिंदु (3, 4) है, तो उसका x-कोऑर्डिनेट क्या है?", options: ["3", "4", "7", "6"], answer: 0 },
          { question: "4. Cartesian plane पर x-अक्ष और y-अक्ष के बीच कोण क्या होता है?", options: ["90°", "180°", "45°", "60°"], answer: 0 },
          { question: "5. रेखा y = 2x + 1 का y-निर्देशांक (intercept) क्या है?", options: ["0", "1", "2", "3"], answer: 1 },
      
          // Chapter 8: Circles
          { question: "1. वृत्त के व्यास की लम्बाई कितनी होती है?", options: ["2r", "r", "πr", "πr²"], answer: 0 },
          { question: "2. वृत्त का क्षेत्रफल का सूत्र क्या है?", options: ["πr²", "2πr", "πr", "2r²"], answer: 0 },
          { question: "3. यदि वृत्त का व्यास 10 cm है, तो उसकी परिधि क्या होगी?", options: ["31.4 cm", "62.8 cm", "50 cm", "15.7 cm"], answer: 0 },
          { question: "4. वृत्त के किसी रेखा का एक हिस्सा क्या कहलाता है?", options: ["सामयिक", "व्यास", "लंबवत रेखा", "कमान"], answer: 3 },
          { question: "5. वृत्त की परिधि का सूत्र क्या है?", options: ["2πr", "πr²", "πd", "2πd"], answer: 0 },
      
          // Chapter 9: Areas of Parallelograms and Triangles
          { question: "1. समान्तर चतुर्भुज का क्षेत्रफल का सूत्र क्या है?", options: ["आधार × ऊँचाई", "आधार × लंबाई", "आधार²", "आधार + ऊँचाई"], answer: 0 },
          { question: "2. त्रिकोण के क्षेत्रफल का सामान्य सूत्र क्या है?", options: ["1/2 × आधार × ऊँचाई", "आधार × ऊँचाई", "आधार × 2", "2 × आधार"], answer: 0 },
          { question: "3. समान्तर रेखाएँ कब होती हैं?", options: ["जब कभी नहीं मिलतीं", "जब हमेशा मिलतीं हैं", "जब एक-दूसरे को काटतीं हैं", "जब समांतर दिशा में होतीं हैं"], answer: 0 },
          { question: "4. अगर एक त्रिकोण का आधार 8 cm और ऊँचाई 5 cm हो, तो उसका क्षेत्रफल क्या होगा?", options: ["20 cm²", "40 cm²", "30 cm²", "10 cm²"], answer: 0 },
          { question: "5. त्रिकोण और समान्तर चतुर्भुज का क्षेत्रफल में अंतर क्या है?", options: ["समान्तर चतुर्भुज के लिए ऊँचाई होती है", "त्रिकोण के लिए आधार नहीं होता", "समान्तर चतुर्भुज का क्षेत्रफल आधा होता है", "दोनों एक ही होते हैं"], answer: 0 },
      
          // Chapter 10: Surface Areas and Volumes
          { question: "1. आयताकार बेलन की सतह का क्षेत्रफल क्या होता है?", options: ["2πr² + 2πrh", "πr²h", "πr²", "2πrh"], answer: 0 },
          { question: "2. घन के क्षेत्रफल का सूत्र क्या है?", options: ["6a²", "4a²", "2a²", "a²"], answer: 0 },
          { question: "3. एक गोलाकार बेलन की वॉल्यूम का सूत्र क्या है?", options: ["πr²h", "2πr²", "πr", "πr² + 2rh"], answer: 0 },
          { question: "4. घन के आयतन का सूत्र क्या है?", options: ["a³", "2a²", "a²", "a + b"], answer: 0 },
          { question: "5. कोई त्रिविमीय आकार का वॉल्यूम क्या होता है?", options: ["घन", "गोलाकार बेलन", "कोण", "समय"], answer: 1 },
      
          // Chapter 11: Statistics
          { question: "1. माध्यांक (mean) का तरीका क्या है?", options: ["सभी संख्याओं का योग", "सभी संख्याओं को जोड़कर संख्या से भाग देना", "अधिकतम संख्या का योग", "न्यूनतम संख्या का योग"], answer: 1 },
          { question: "2. संख्याओं का मानक विचलन क्या है?", options: ["सर्वाधिक संख्या", "आधार का मान", "माध्यांक से अंतर", "न्यूनतम अंतर"], answer: 2 },
          { question: "3. एक समूह में सबसे अधिक आवृत्ति वाले तत्व को क्या कहा जाता है?", options: ["माध्यांक", "मोड", "माध्य", "मेजर"], answer: 1 },
          { question: "4. सांख्यिकीय अनुक्रम का योग क्या होता है?", options: ["अधिकतम संख्या", "कुल योग", "माध्यांक", "न्यूनतम संख्या"], answer: 1 },
          { question: "5. डेटा का मध्यांक क्या होता है?", options: ["आधार की संख्या", "मध्य स्थिति", "माध्यांक", "अधिकतम मूल्य"], answer: 1 },
      
          // Chapter 12: Probability
          { question: "1. संभावना क्या होती है?", options: ["संभावना के भाग", "संख्याओं का योग", "सामान्य गुणांक", "जो संभाव्यता होती है"], answer: 0 },
          { question: "2. एक सिक्का उछालने पर संभावना क्या होगी कि वह सिर दिखाएगा?", options: ["1/2", "1/3", "1/4", "1/6"], answer: 0 },
          { question: "3. एक डाइस के किसी भी अंक को उछालने की संभावना क्या होगी?", options: ["1/2", "1/6", "1/3", "1/4"], answer: 1 },
          { question: "4. एक कार्ड से लाल रंग का कार्ड निकालने की संभावना क्या होगी?", options: ["1/4", "1/2", "1/3", "1/6"], answer: 0 },
          { question: "5. जब किसी घटना की संभावना 1 होती है, तो क्या होगा?", options: ["घटना निश्चित रूप से होगी", "घटना नहीं होगी", "घटना असंभव होगी", "घटना अनिश्चित होगी"], answer: 0 },
        ]
      
      ,
      science: [
        // रासायनिक अभिक्रियाएँ और समीकरण
        { question: "पानी का रासायनिक सूत्र क्या है?", options: ["H₂O", "O₂", "CO₂", "H₂"], answer: 0 },
        { question: "ज्वलन प्रक्रिया में कौन सा तत्व आवश्यक है?", options: ["नाइट्रोजन", "हाइड्रोजन", "ऑक्सीजन", "कार्बन"], answer: 2 },
        { question: "रासायनिक समीकरण को संतुलित क्यों किया जाता है?", options: ["द्रव्यमान संतुलित करने के लिए", "ऊर्जा संतुलित करने के लिए", "अणु संतुलित करने के लिए", "द्रव्यमान और ऊर्जा संतुलित करने के लिए"], answer: 0 },
        { question: "साबुन बनाने की प्रक्रिया को क्या कहते हैं?", options: ["सैपोनिफिकेशन", "पॉलिमराइजेशन", "अपचय", "विस्थापन"], answer: 0 },
        { question: "ऊष्माक्षेपी प्रक्रिया में क्या होता है?", options: ["ऊष्मा उत्सर्जित होती है", "ऊष्मा अवशोषित होती है", "ऊष्मा स्थिर रहती है", "कोई प्रभाव नहीं"], answer: 0 },
    
        // अम्ल, क्षार और लवण
        { question: "NaOH का सामान्य नाम क्या है?", options: ["सोडियम हाइड्रॉक्साइड", "सोडियम बाइकार्बोनेट", "सोडियम क्लोराइड", "सोडियम सल्फेट"], answer: 0 },
        { question: "तेजाब और क्षार का मिश्रण बनाने पर क्या बनता है?", options: ["लवण", "पानी", "दोनों", "कोई नहीं"], answer: 2 },
        { question: "HCl और NaOH की प्रतिक्रिया में क्या उत्पाद बनते हैं?", options: ["NaCl और H₂O", "H₂ और O₂", "Na₂ और Cl₂", "NaOH"], answer: 0 },
        { question: "किस प्रकार का अम्ल हमेशा जल में घुलता है?", options: ["सजग अम्ल", "असंयोजक अम्ल", "आधारीय अम्ल", "मजबूत अम्ल"], answer: 3 },
        { question: "मिट्टी की अम्लीयता को सुधारने के लिए कौन सा पदार्थ उपयोग किया जाता है?", options: ["चूना", "सोडा", "नमक", "चारकोल"], answer: 0 },
    
        // धातु और अधातु
        { question: "धातु के प्रमुख गुण क्या हैं?", options: ["चमक और चालकता", "भंगुरता और गैर-चालकता", "भंगुरता और चमक", "चालकता और गैर-चालकता"], answer: 0 },
        { question: "कौन सी अधातु बिजली की सुचालक है?", options: ["हीलियम", "ग्रेफाइट", "सल्फर", "फॉस्फोरस"], answer: 1 },
        { question: "धातुओं के ऑक्साइड का स्वभाव कैसा होता है?", options: ["अम्लीय", "क्षारीय", "तटस्थ", "दोनों"], answer: 1 },
        { question: "किस धातु को तरल रूप में पाया जाता है?", options: ["सोडियम", "पारा", "एल्युमीनियम", "जिंक"], answer: 1 },
        { question: "धातु के जंग लगने की प्रक्रिया क्या कहलाती है?", options: ["क्षरण", "अपघटन", "जंग", "पॉलिमराइजेशन"], answer: 2 },
    
        // कार्बन और उसके यौगिक
        { question: "कार्बन के किस यौगिक का उपयोग पेट्रोलियम गैस में होता है?", options: ["मिथेन", "एथेन", "प्रोपेन", "ब्यूटेन"], answer: 3 },
        { question: "शुद्ध कार्बन का कौन सा रूप है?", options: ["हीरा", "ग्रेफाइट", "दोनों", "कोई नहीं"], answer: 2 },
        { question: "कार्बन में कितने संयोजकता इलेक्ट्रॉन होते हैं?", options: ["4", "2", "6", "8"], answer: 0 },
        { question: "कार्बन का प्रमुख यौगिक कौन सा है?", options: ["कार्बन डाइऑक्साइड", "कार्बन मोनोऑक्साइड", "कार्बन टेट्राक्लोराइड", "कार्बन फाइबर"], answer: 0 },
        { question: "कार्बन के कितने प्रकार के संयोजकता होते हैं?", options: ["एक", "दो", "तीन", "चार"], answer: 2 },
    
        // आवर्त सारणी
        { question: "आवर्त सारणी का पहला तत्व कौन सा है?", options: ["हाइड्रोजन", "हीलियम", "लिथियम", "ऑक्सीजन"], answer: 0 },
        { question: "आधुनिक आवर्त सारणी में कितने आवर्त हैं?", options: ["7", "8", "9", "10"], answer: 0 },
        { question: "आवर्त सारणी के समूह संख्या कितनी होती है?", options: ["18", "8", "10", "12"], answer: 0 },
        { question: "आवर्त सारणी में तत्व किस आधार पर रखे गए हैं?", options: ["परमाणु संख्या", "परमाणु भार", "रासायनिक गुण", "कोई नहीं"], answer: 0 },
        { question: "सबसे अधिक विद्युतीय ऋणात्मकता किस तत्व की होती है?", options: ["फ्लोरीन", "हाइड्रोजन", "ऑक्सीजन", "कार्बन"], answer: 0 },
        { question: "दर्पण के फोकस और सतह के बीच की दूरी क्या कहलाती है?", options: ["फोकल लंबाई", "वक्रता त्रिज्या", "दर्पण की दूरी", "छवि की दूरी"], answer: 0 },
        { question: "उत्तल दर्पण की मुख्य विशेषता क्या है?", options: ["वास्तविक प्रतिबिंब", "आभासी प्रतिबिंब", "छोटी छवि", "बड़ी छवि"], answer: 1 },
        { question: "अपवर्तन का नियम क्या है?", options: ["प्रकाश सीधी रेखा में चलता है", "किरणें हमेशा अपवर्तित होती हैं", "सिनθ₁/सिनθ₂ = स्थिर", "प्रकाश कभी अपवर्तित नहीं होता"], answer: 2 },
        { question: "अपवर्तन सूचकांक का सूत्र क्या है?", options: ["c/v", "v/c", "1/v", "c"], answer: 0 },
        { question: "दृष्टि दोष को किस प्रकार से ठीक किया जाता है?", options: ["उत्तल लेंस", "अवतल लेंस", "दोनों", "कोई नहीं"], answer: 1 },
    
        // मानवीय आँख और रंगबिरंगा संसार (The Human Eye and the Colourful World)
        { question: "मानव आँख का लेंस किस प्रकार का होता है?", options: ["उत्तल", "अवतल", "समानांतर", "कोई नहीं"], answer: 0 },
        { question: "वर्ण विक्षेपण (dispersion) का मुख्य कारण क्या है?", options: ["विभिन्न तरंगदैर्घ्य", "प्रकाश की तीव्रता", "अपवर्तन का परिवर्तन", "प्रकाश की ऊर्जा"], answer: 2 },
        { question: "इंद्रधनुष कितने रंगों से बनता है?", options: ["5", "6", "7", "8"], answer: 2 },
        { question: "निकट दृष्टि दोष को कैसे ठीक किया जाता है?", options: ["उत्तल लेंस", "अवतल लेंस", "समानांतर लेंस", "कोई नहीं"], answer: 1 },
        { question: "दृष्टि का न्यूनतम कोण क्या है?", options: ["22 डिग्री", "25 सेंटीमीटर", "1°", "5°"], answer: 2 },
    
        // विद्युत (Electricity)
        { question: "विद्युत धारा का SI मात्रक क्या है?", options: ["वोल्ट", "एम्पीयर", "ओम", "कूलॉम्ब"], answer: 1 },
        { question: "ओम का नियम किसे व्यक्त करता है?", options: ["I = V/R", "V = IR", "R = IV", "P = VI"], answer: 1 },
        { question: "किसी चालक का प्रतिरोध किस पर निर्भर करता है?", options: ["लंबाई", "पारध्रुवता", "वोल्टता", "तापमान"], answer: 0 },
        { question: "1 किलोवाट घंटा ऊर्जा कितने जूल के बराबर है?", options: ["3.6 x 10⁶ जूल", "3.6 x 10³ जूल", "360 जूल", "3600 जूल"], answer: 0 },
        { question: "किसी परिपथ में विद्युत धारा को मापने के लिए कौन सा उपकरण उपयोग किया जाता है?", options: ["वोल्टमीटर", "एम्पीयरमीटर", "ओममीटर", "गैल्वेनोमीटर"], answer: 1 },
    
        // विद्युच्चुम्बकत्व (Magnetic Effects of Electric Current)
        { question: "किसने विद्युत धारा के चुम्बकीय प्रभाव की खोज की?", options: ["ओम", "फैराडे", "ओयस्टेड", "न्यूटन"], answer: 2 },
        { question: "सोलोनॉइड क्या है?", options: ["चुम्बकीय पदार्थ", "लंबा तार", "लूप वाला तार", "प्रकाश स्रोत"], answer: 2 },
        { question: "विद्युत चुम्बकीय प्रेरण का SI मात्रक क्या है?", options: ["वोल्ट", "एम्पीयर", "हेनरी", "टेस्ला"], answer: 2 },
        { question: "चुम्बकीय क्षेत्र रेखाएँ कभी आपस में क्यों नहीं मिलतीं?", options: ["वे समानांतर होती हैं", "उनका दिशात्मक गुण होता है", "वे समान बल उत्पन्न करती हैं", "दोनों"], answer: 1 },
        { question: "इलेक्ट्रिक मोटर में किस ऊर्जा का रूपांतरण होता है?", options: ["यांत्रिक से विद्युत ऊर्जा", "विद्युत से यांत्रिक ऊर्जा", "प्रकाश से विद्युत ऊर्जा", "रासायनिक से विद्युत ऊर्जा"], answer: 1 },
    
        // ऊर्जा के स्रोत (Sources of Energy)
        { question: "सौर ऊर्जा का मुख्य स्रोत क्या है?", options: ["सूरज", "पवन", "जल", "कोयला"], answer: 0 },
        { question: "परमाणु ऊर्जा का मुख्य ईंधन कौन सा है?", options: ["यूरेनियम", "कोयला", "पेट्रोल", "गैस"], answer: 0 },
        { question: "पवन ऊर्जा को उत्पन्न करने के लिए क्या आवश्यक है?", options: ["पवन टर्बाइन", "हवा की गति", "दोनों", "कोई नहीं"], answer: 2 },
        { question: "जैविक ऊर्जा के स्रोत कौन से हैं?", options: ["कोयला", "तेल", "पेट्रोलियम", "जैव ईंधन"], answer: 3 },
        { question: "गैस टरबाइन में किस गैस का उपयोग होता है?", options: ["हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन", "सिंथेटिक गैस"], answer: 3 },
        { question: "पौधों में भोजन बनाने की प्रक्रिया को क्या कहते हैं?", options: ["श्वसन", "प्रकाश संश्लेषण", "पाचन", "निष्कासन"], answer: 1 },
        { question: "रक्त किस प्रकार का ऊतक है?", options: ["एपिथीलियल", "स्नायु", "सहायक", "पेशी"], answer: 2 },
        { question: "मनुष्य के शरीर में पाचन क्रिया का आरंभ कहाँ से होता है?", options: ["आमाशय", "ग्रसनी", "मुख", "आहार नाल"], answer: 2 },
        { question: "श्वसन क्रिया का अंतिम उत्पाद क्या है?", options: ["ग्लूकोज", "ऑक्सीजन", "कार्बन डाइऑक्साइड और पानी", "नाइट्रोजन"], answer: 2 },
        { question: "निष्कासन प्रणाली का मुख्य अंग कौन सा है?", options: ["गुर्दे", "हृदय", "यकृत", "फेफड़े"], answer: 0 },
    
        // आनुवंशिकता और जैव विकास (Heredity and Evolution)
        { question: "डीएनए का पूरा नाम क्या है?", options: ["डायनेमिक न्यूक्लिक एसिड", "डिऑक्सीराइबोज़ न्यूक्लिक एसिड", "डाईन्यूक्लियर एसिड", "डायहाइड्रेट न्यूक्लिक एसिड"], answer: 1 },
        { question: "लिंग निर्धारण में कौन सा गुणसूत्र भूमिका निभाता है?", options: ["X", "Y", "दोनों X और Y", "कोई नहीं"], answer: 2 },
        { question: "मेण्डल के किस नियम को संतान में लक्षणों के पृथक्करण का कारण माना जाता है?", options: ["विभाजन का नियम", "समानता का नियम", "स्वतंत्र वर्गीकरण का नियम", "प्रधानता का नियम"], answer: 0 },
        { question: "जैव विकास का अध्ययन किसने किया?", options: ["चार्ल्स डार्विन", "ग्रेगर मेंडल", "लुई पाश्चर", "एडवर्ड जेनर"], answer: 0 },
        { question: "डीएनए की डबल हेलिक्स संरचना का पता किसने लगाया?", options: ["वाटसन और क्रिक", "मेंडल", "लुई पाश्चर", "डार्विन"], answer: 0 },
    
        // पर्यावरणीय प्रबंधन (Sustainable Management of Natural Resources)
        { question: "संसाधनों का सतत प्रबंधन किसका लक्ष्य है?", options: ["मुनाफा बढ़ाना", "प्राकृतिक संसाधनों का संरक्षण", "औद्योगिक विकास", "कोई नहीं"], answer: 1 },
        { question: "पुनर्चक्रण का मुख्य उद्देश्य क्या है?", options: ["नया उत्पाद बनाना", "कचरे को नष्ट करना", "ऊर्जा की बचत", "पुनः उपयोग करना"], answer: 3 },
        { question: "पानी की बचत के लिए कौन सा उपाय सबसे उपयुक्त है?", options: ["अधिक पानी उपयोग करना", "पुनः उपयोग करना", "तालाब बनाना", "पानी का आयात"], answer: 1 },
        { question: "कौन सा जीव प्राथमिक उपभोक्ता है?", options: ["शेर", "हिरण", "पौधे", "बाज"], answer: 1 },
        { question: "पारिस्थितिकी तंत्र में सबसे ऊपरी स्तर पर कौन सा जीव होता है?", options: ["उत्पादक", "शाकाहारी", "मांसाहारी", "अपघटक"], answer: 2 },
    
        // हमारे पर्यावरण (Our Environment)
        { question: "पारिस्थितिकी तंत्र का मुख्य घटक कौन सा है?", options: ["जैविक घटक", "अजैविक घटक", "दोनों", "कोई नहीं"], answer: 2 },
        { question: "ओजोन परत का मुख्य कार्य क्या है?", options: ["पृथ्वी को गर्म करना", "अतिबैंगनी किरणों से रक्षा करना", "ऑक्सीजन उत्पन्न करना", "CO2 को अवशोषित करना"], answer: 1 },
        { question: "अपघटक का कार्य क्या है?", options: ["ऊर्जा प्रदान करना", "सजीवों को मारना", "अपशिष्ट पदार्थों को विघटित करना", "संसाधन प्रबंधन"], answer: 2 },
        { question: "ऑक्सीजन चक्र में कौन सा कारक प्रमुख है?", options: ["पानी", "प्रकाश संश्लेषण", "कार्बन डाइऑक्साइड", "नाइट्रोजन"], answer: 1 },
        { question: "बायोमास का मुख्य स्रोत क्या है?", options: ["पौधे", "जानवर", "खनिज", "गैस"], answer: 0 },
      
      ],
    
        hindi: [
          // 1. हिंदी साहित्य - कवि और लेखक
          { question: "कविता 'गीतांजलि' के लेखक कौन हैं?", options: ["रवींद्रनाथ ठाकुर", "सुमित्रानंदन पंत", "जयशंकर प्रसाद", "हरिवंश राय बच्चन"], answer: 0 },
          { question: "भारत में 'पद्मश्री' पुरस्कार किसे दिया जाता है?", options: ["कवि", "लेखक", "संगीतकार", "सभी"], answer: 3 },
          { question: "महात्मा गांधी के प्रिय कवि कौन थे?", options: ["रवींद्रनाथ ठाकुर", "कबीर", "तुलसीदास", "सूरदास"], answer: 1 },
          { question: "रवींद्रनाथ ठाकुर का साहित्यिक नाम क्या था?", options: ["गुरुदेव", "कवि बिष्णु", "कवि पं. नेहरू", "सुमित्रानंदन पंत"], answer: 0 },
          { question: "कबीर के किस दोहे को प्रसिद्ध माना जाता है?", options: ["दूसरों का दुःख", "मन की बात", "पोथी पढ़ि-पढ़ि जग मुआ", "निंदक नियरे राखिए"], answer: 2 },
      
          // 2. हिंदी व्याकरण - संज्ञा, सर्वनाम, क्रिया
          { question: "हिंदी में संज्ञा किसे कहते हैं?", options: ["किसी कार्य का नाम", "किसी वस्तु, व्यक्ति, या स्थान का नाम", "किसी विशेषता का नाम", "सभी"], answer: 1 },
          { question: "हिंदी में सर्वनाम किसे कहते हैं?", options: ["नाम", "किसी वस्तु का नाम", "किसी व्यक्ति या वस्तु के स्थान पर आने वाला शब्द", "किसी कार्य का नाम"], answer: 2 },
          { question: "क्रिया के किस रूप में कार्य की स्थिति व्यक्त की जाती है?", options: ["काल", "वचन", "लिंग", "रूप"], answer: 0 },
          { question: "हिंदी में 'उत्तम' का अर्थ क्या है?", options: ["अच्छा", "बेहतर", "उच्च", "सर्वोत्तम"], answer: 3 },
          { question: "वह स्कूल जा रहा है। इसमें क्रिया क्या है?", options: ["स्कूल", "जा", "रहा", "है"], answer: 1 },
      
          // 3. हिंदी साहित्य - कथा साहित्य, नाटक, उपन्यास
          { question: "हिंदी के प्रसिद्ध उपन्यासकार कौन हैं?", options: ["प्रेमचंद", "गोविंद बल्लभ पंत", "शंकर पाटिल", "चंद्रधर शर्मा गुलेरी"], answer: 0 },
          { question: "नाटक 'आंधी' के लेखक कौन हैं?", options: ["नदीम शाह", "धर्मवीर भारती", "जयशंकर प्रसाद", "रवींद्रनाथ ठाकुर"], answer: 1 },
          { question: "भारत में सबसे पहला हिंदी उपन्यास कौन सा था?", options: ["काशी का लहठ", "गोदान", "चंद्रकांता", "वृद्धि का साथी"], answer: 2 },
          { question: "नाटक 'उदयपुर' के लेखक कौन हैं?", options: ["नदीम शाह", "धर्मवीर भारती", "कृपाराम", "विवेक"], answer: 1 },
          { question: "किस काव्य में संस्कृत और हिंदी दोनों का मिश्रण है?", options: ["दृष्टांत", "नाटक", "गीता", "काव्य"], answer: 3 },
      
          // 4. हिंदी कविता और गद्य (Poetry and Prose)
          { question: "'आत्मकथा' का लेखक कौन है?", options: ["अज्ञेय", "प्रेमचंद", "कृष्णनाथ", "आचार्य महाप्रकाश"], answer: 1 },
          { question: "गद्य लेखन के प्रमुख लेखक कौन हैं?", options: ["जवाहरलाल नेहरू", "आचार्य चतुरसेन", "मैक्समूलर", "कैलाशनाथ"], answer: 1 },
          { question: "कविता 'नदी का जीवन' किसने लिखी है?", options: ["सुमित्रानंदन पंत", "रवींद्रनाथ ठाकुर", "जयशंकर प्रसाद", "सूर्यकांत त्रिपाठी"], answer: 3 },
          { question: "सुमित्रानंदन पंत की कविता का मुख्य विषय क्या था?", options: ["प्रकृति", "शब्द-रचनाएँ", "आध्यात्मिकता", "भक्ति"], answer: 0 },
          { question: "कवि 'सूरदास' की प्रसिद्ध रचनाएँ क्या हैं?", options: ["रामायण", "गीतांजलि", "सूरसागर", "उपनिषद"], answer: 2 },
      
          // 5. हिंदी वर्तनी और भाषा
          { question: "हिंदी में वर्तनी की महत्वपूर्ण विशेषता क्या है?", options: ["वर्णमाला का ज्ञान", "स्वर का सही प्रयोग", "व्यंजन का सही प्रयोग", "सभी"], answer: 3 },
          { question: "हिंदी शब्दों में उच्चारण का सही तरीका क्या होता है?", options: ["वाक्य का सही चयन", "शब्दों की मेलजोल", "ध्वनि का उच्चारण", "व्याकरण"], answer: 2 },
          { question: "हिंदी में लिंग का क्या महत्व है?", options: ["शब्द का भेद", "नाम का रूप", "स्वर का उपयोग", "सभी"], answer: 1 },
          { question: "हिंदी के भाषा में कितने प्रकार के वचन होते हैं?", options: ["एक", "दो", "तीन", "चार"], answer: 1 },
          { question: "हिंदी में 'स्मृति' का अर्थ क्या है?", options: ["याद रखना", "सोच विचार", "विशेषण", "किसी चीज का नाम"], answer: 0 },
      
          // 6. हिंदी में समास (Compounds in Hindi)
          { question: "हिंदी में 'समास' का क्या अर्थ है?", options: ["शब्दों का मिश्रण", "शब्दों का भेद", "शब्दों का रूप", "शब्दों का उच्चारण"], answer: 0 },
          { question: "'समास' का उदाहरण क्या है?", options: ["रामायण", "स्वागत", "तिरस्कार", "विक्रम"], answer: 1 },
          { question: "हिंदी में 'संकीर्ण समास' का क्या अर्थ है?", options: ["दो शब्दों का मेल", "समूहों का समास", "शब्द का विशेषण", "लिंग का समास"], answer: 0 },
          { question: "हिंदी में 'द्विगु' समास किसे कहते हैं?", options: ["दो शब्दों का समास", "तीन शब्दों का समास", "चार शब्दों का समास", "सभी"], answer: 0 },
          { question: "हिंदी में 'तद्धित समास' का क्या मतलब है?", options: ["शब्दों का उपसर्ग", "किसी विशेष वचन का समास", "किसी विशेष रूप का समास", "दूसरे शब्द का प्रयोग"], answer: 1 },
      
          // 7. हिंदी साहित्य - साहित्यिक विशेषताएँ
          { question: "हिंदी में 'काव्य' का मुख्य उद्देश्य क्या है?", options: ["भावनाओं की अभिव्यक्ति", "धर्म का प्रचार", "सांस्कृतिक संरक्षण", "विज्ञान का प्रचार"], answer: 0 },
          { question: "साहित्य की विशेषता क्या होती है?", options: ["शब्दों का संयोजन", "सृजनात्मकता", "मनोरंजन", "ज्ञान का प्रसार"], answer: 1 },
          { question: "साहित्य के किस रूप को 'भावुक' कहा जाता है?", options: ["कविता", "काव्य", "गीत", "नाटक"], answer: 0 },
          { question: "किसे 'काव्य-धर्मी' कहा जाता है?", options: ["कवि", "लेखक", "प्रोफेसर", "शिक्षक"], answer: 0 },
          { question: "कवि का कार्य क्या होता है?", options: ["ध्यान लगाना", "भावनाओं को व्यक्त करना", "निवेदन करना", "लिखना"], answer: 1 },
      
          // 8. हिंदी में अपठित गद्य
          { question: "अपठित गद्य का उद्देश्य क्या है?", options: ["शब्दों का प्रयोग", "समीक्षा", "पाठ का गहन अध्ययन", "सभी"], answer: 2 },
          { question: "संचार का कौन सा रूप 'समझ' बढ़ाता है?", options: ["कविता", "गद्य", "गीत", "नाटक"], answer: 1 },
          { question: "क्या 'अपठित गद्य' में मुख्य उद्देश्य वर्णन नहीं होता?", options: ["सही", "गलत", "समझ नहीं आता", "व्याख्या"], answer: 1 },
          { question: "अपठित गद्य का उदाहरण क्या है?", options: ["संज्ञा", "वर्णमाला", "कविता", "विज्ञान"], answer: 2 },
          { question: "हिंदी गद्य के कौन से दो रूप होते हैं?", options: ["उपन्यास और कथा", "कविता और गद्य", "संज्ञा और क्रिया", "वचन और लिंग"], answer: 0 },
        ]
      
      ,
      english: [
        // 1. English Grammar - Parts of Speech
        { question: "Which of the following is a noun?", options: ["quickly", "happiness", "blue", "run"], answer: 1 },
        { question: "Identify the verb in the following sentence: 'She reads books every day.'", options: ["reads", "books", "she", "day"], answer: 0 },
        { question: "Which is a pronoun?", options: ["car", "they", "beautiful", "quickly"], answer: 1 },
        { question: "Which of the following is an adjective?", options: ["quick", "run", "she", "happily"], answer: 0 },
        { question: "Choose the correct preposition: 'She is sitting ___ the table.'", options: ["on", "in", "under", "behind"], answer: 0 },
    
        // 2. Tenses
        { question: "Which tense is used in the sentence: 'I will go to school tomorrow.'?", options: ["Present Continuous", "Past Simple", "Future Simple", "Present Perfect"], answer: 2 },
        { question: "Identify the tense: 'She has been working all day.'", options: ["Present Perfect", "Present Continuous", "Past Continuous", "Present Perfect Continuous"], answer: 3 },
        { question: "Choose the correct form: 'I ___ my homework yesterday.'", options: ["have done", "had done", "do", "did"], answer: 1 },
        { question: "Which sentence is in the past perfect tense?", options: ["He had finished the work before she came.", "He finishes the work.", "He will finish the work.", "He is finishing the work."], answer: 0 },
        { question: "What is the tense of this sentence: 'She is reading a book.'?", options: ["Present Continuous", "Present Perfect", "Past Continuous", "Future Continuous"], answer: 0 },
    
        // 3. Sentence Structure
        { question: "Choose the correct sentence.", options: ["I goes to school", "I go to school", "I going to school", "I gone to school"], answer: 1 },
        { question: "Identify the type of sentence: 'Close the door!'", options: ["Interrogative", "Imperative", "Exclamatory", "Declarative"], answer: 1 },
        { question: "Which of the following is a compound sentence?", options: ["I like tea and she likes coffee.", "She ran quickly.", "He reads books.", "He is very smart."], answer: 0 },
        { question: "What type of sentence is: 'Why did you leave so early?'", options: ["Exclamatory", "Interrogative", "Imperative", "Declarative"], answer: 1 },
        { question: "Which of the following is a complex sentence?", options: ["I went to the store", "I went to the store because I needed milk", "I like reading", "I am going to school"], answer: 1 },
    
        // 4. Active and Passive Voice
        { question: "Change to passive voice: 'He writes a letter.'", options: ["A letter is written by him.", "A letter was written by him.", "A letter will be written by him.", "A letter is being written by him."], answer: 0 },
        { question: "Change to active voice: 'The book was read by me.'", options: ["I read the book.", "The book reads me.", "I am reading the book.", "I have read the book."], answer: 0 },
        { question: "Choose the passive form: 'They have built a house.'", options: ["A house has been built by them.", "A house is being built by them.", "A house was built by them.", "A house will be built by them."], answer: 0 },
        { question: "Which is the passive form of: 'They are making dinner.'?", options: ["Dinner is being made by them.", "Dinner has been made by them.", "Dinner is made by them.", "Dinner will be made by them."], answer: 0 },
        { question: "Choose the correct passive form: 'She sings a song.'", options: ["A song is sung by her.", "A song was sung by her.", "A song will be sung by her.", "A song is being sung by her."], answer: 0 },
    
        // 5. Reported Speech
        { question: "Direct speech: 'I am going to the market,' she said. Indirect speech?", options: ["She said that she was going to the market.", "She said that I am going to the market.", "She said that she is going to the market.", "She says that she was going to the market."], answer: 0 },
        { question: "Direct speech: 'Do your homework,' the teacher said. Indirect speech?", options: ["The teacher told to do your homework.", "The teacher told us to do our homework.", "The teacher told us to do your homework.", "The teacher tells us to do our homework."], answer: 1 },
        { question: "Direct speech: 'I have finished my work,' he said. Indirect speech?", options: ["He said that he finished his work.", "He said that he has finished his work.", "He said that he had finished his work.", "He said that he will finish his work."], answer: 2 },
        { question: "Direct speech: 'I will help you,' she said. Indirect speech?", options: ["She says that she will help me.", "She said that she will help me.", "She said that she would help me.", "She said that I would help her."], answer: 2 },
        { question: "Direct speech: 'It is raining,' he said. Indirect speech?", options: ["He said that it is raining.", "He said that it was raining.", "He said that it will rain.", "He says that it is raining."], answer: 1 },
    
        // 6. Reading Comprehension
        { question: "What is the main idea of the passage?", options: ["Summary", "Conclusion", "Theme", "Analysis"], answer: 2 },
        { question: "Who is the protagonist of the passage?", options: ["The main character", "The villain", "The narrator", "None"], answer: 0 },
        { question: "What is the tone of the passage?", options: ["Sad", "Joyful", "Neutral", "Angry"], answer: 1 },
        { question: "Which statement is true according to the passage?", options: ["Statement 1", "Statement 2", "Statement 3", "Statement 4"], answer: 0 },
        { question: "What was the author trying to convey through this passage?", options: ["Message", "Moral", "Learning", "Opinion"], answer: 1 },
    
        // 7. Vocabulary - Synonyms and Antonyms
        { question: "What is the synonym of 'Happy'?", options: ["Sad", "Joyful", "Angry", "Bored"], answer: 1 },
        { question: "What is the antonym of 'Brave'?", options: ["Courageous", "Fearful", "Strong", "Bold"], answer: 1 },
        { question: "What is the synonym of 'Quick'?", options: ["Fast", "Slow", "Heavy", "Light"], answer: 0 },
        { question: "What is the antonym of 'Simple'?", options: ["Easy", "Hard", "Difficult", "Plain"], answer: 2 },
        { question: "What is the synonym of 'Bright'?", options: ["Dim", "Dark", "Shiny", "Faint"], answer: 2 },
    
        // 8. Idioms and Phrases
        { question: "What does the idiom 'Break the ice' mean?", options: ["To start a conversation", "To break something", "To cause a problem", "To end a meeting"], answer: 0 },
        { question: "What does the idiom 'A blessing in disguise' mean?", options: ["A hidden gift", "A curse", "A misfortune", "A good opportunity"], answer: 3 },
        { question: "What does the idiom 'Bite the bullet' mean?", options: ["To endure pain", "To bite something", "To argue", "To be brave"], answer: 0 },
        { question: "What does the idiom 'Hit the nail on the head' mean?", options: ["To miss the target", "To speak clearly", "To make a mistake", "To be accurate"], answer: 3 },
        { question: "What does the idiom 'Cost an arm and a leg' mean?", options: ["Cheap", "Expensive", "Affordable", "None of the above"], answer: 1 },
    
        // 9. Punctuation
        { question: "Which sentence is correctly punctuated?", options: ["I have finished my homework.", "I have finished my homework", "I have finished, my homework.", "I have, finished my homework."], answer: 0 },
        { question: "Choose the correct punctuation: 'She said ___ I am going to the market.'", options: [".", "!", ",", "?"], answer: 3 },
        { question: "Which sentence requires a comma?", options: ["I went to the market", "I went, to the market", "I went to the market, and then to the store.", "None"], answer: 2 },
        { question: "Which is the correct punctuation for this sentence: 'Where are you going ___'", options: ["!", "?", ".", ","], answer: 1 },
        { question: "Which punctuation mark should be used for an exclamation?", options: [".", ",", "!", "?"], answer: 2 }
      ],
  };
  
  let currentSubject = "";
  let currentScore = 0;
  
  // Load Subject Questions
  function loadSubject(subject) {
    currentSubject = subject;
    const quizContainer = document.getElementById("quiz-container");
    const submitBtn = document.getElementById("submit-btn");
    const result = document.getElementById("result");
  
    quizContainer.innerHTML = "";
    result.innerHTML = "";
    submitBtn.classList.remove("hidden");
  
    const questions = questionsData[subject];
    questions.forEach((q, index) => {
      const questionBlock = document.createElement("div");
      questionBlock.classList.add(
        "mb-6",
        "p-4",
        "border",
        "rounded-lg",
        "bg-gray-50",
        "shadow-sm"
      );
  
      questionBlock.innerHTML = `
        <h2 class="text-lg font-semibold mb-4">${index + 1}. ${
        q.question
      }</h2>
        ${q.options
          .map(
            (option, i) =>
              `<label class="block mb-2">
                <input class="mr-2" type="radio" name="question-${index}" value="${i}">
                ${option}
              </label>`
          )
          .join("")}
      `;
      quizContainer.appendChild(questionBlock);
    });
  }
  
  // Evaluate Quiz
  function evaluateQuiz() {
    const questions = questionsData[currentSubject];
    let score = 0;
  
    questions.forEach((q, index) => {
      const selectedOption = document.querySelector(
        `input[name="question-${index}"]:checked`
      );
  
      const questionBlock = document.querySelectorAll("#quiz-container > div")[
        index
      ];
      const allOptions = questionBlock.querySelectorAll("label");
  
      // Highlight answers
      allOptions.forEach((option, i) => {
        if (i === q.answer) {
          option.classList.add("bg-green-500", "p-2" , "rounded-md" ,"text-green-600", "font-bold"); // Correct option
        }
        if (selectedOption && parseInt(selectedOption.value) === i) {
          if (parseInt(selectedOption.value) !== q.answer) {
            option.classList.add("bg-red-500", "p-2" , "rounded-md" , "text-red-600", "font-bold"); // Incorrect selected
          }
        }
      });
  
      // Increment score if correct
      if (selectedOption && parseInt(selectedOption.value) === q.answer) {
        score++;
      }
    });
  
    currentScore = score;
  
    // Display result
    document.getElementById("result").innerHTML = `
      <p class="text-green-500">You scored <span class="font-bold">${score}/${questions.length}</span>!</p>
    `;
  }
  