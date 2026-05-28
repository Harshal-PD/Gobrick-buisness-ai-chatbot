// Default Configuration Data (Trained specifically on AdiShila Shungite Catalogue)
const defaultFAQs = [
    {
        question: "What is Shungite and where does it come from?",
        answer: "Shungite is a rare, 2-billion-year-old carbon-rich mineral formed during the Precambrian era. AdiShila sources all its authentic raw Shungite directly from Karelia, Russia—the only place on Earth where this unique mineral deposit is found.",
        keywords: "shungite, karelia, russia, origin, mineral, source, age, history"
    },
    {
        question: "Are AdiShila Shungite products genuine and authentic?",
        answer: "Absolutely. AdiShila is the first brand to bring authentic Karelian Shungite to the Indian market, adapted for Vedic, Vastu, and Ayurvedic traditions. Every product comes with QR authenticity verification for quality assurance.",
        keywords: "authentic, genuine, real, fake, test, quality, qr, verify, certification"
    },
    {
        question: "What are the benefits of Shungite (like EMF shielding)?",
        answer: "Shungite is the only natural mineral containing Fullerenes (C60), which have documented radiation-shielding properties. It is highly effective at absorbing EMF (electromagnetic field) radiation from phones and electronics, and is used for clearing negative energies and Vastu correction.",
        keywords: "benefits, emf, radiation, shield, shielding, fullerene, c60, protection, energy"
    },
    {
        question: "Tell me about the Kavach Shield - OM (Phone Sticker).",
        answer: "The Kavach Shield OM (Category: EMF Protection) is a polished 25mm Shungite phone plate (2.5–3.0mm thick, 4–6g) with laser-engraved lines filled with gold paint. It adheres to any phone case via 3M VHB tape, providing EMF absorption and sacred protection. Wholesale: ₹800 (MOQ 25+), Suggested MRP: ₹1,499. Retailer Margin: 46.6%.",
        keywords: "kavach, shield, om, phone, sticker, tape, mobile, case"
    },
    {
        question: "Tell me about the Vastu Dosh Pyramid.",
        answer: "The Vastu Dosh Pyramid (Category: Vastu Shastra) is a polished Shungite pyramid (base 40-50mm, height 30-40mm, 60-120g) with a 2-3mm copper foil band. Shungite absorbs negative energy, while the copper band conducts Prana. Ideal for room corners, routers, and desks. Wholesale: ₹1,100, Suggested MRP: ₹2,199. Retailer Margin: 50.0%.",
        keywords: "vastu, pyramid, dosh, copper, router, corner, office, desk"
    },
    {
        question: "Tell me about the Rudra-Shila Raksha Mala.",
        answer: "The Rudra-Shila Raksha Mala (Category: Personal Protection) is a wrist mala made of 26 polished 8mm Shungite beads and 1 genuine Mukhi Rudraksha, totaling 27 beads (a sacred Vedic number matching the 27 Nakshatras). It features a stretchable (16–20 cm) elastic cord and is unisex. Wholesale: ₹900, Suggested MRP: ₹1,499. Retailer Margin: 40.0%.",
        keywords: "rudra, mala, raksha, wrist, bracelet, beads, rudraksha, nakshatra"
    },
    {
        question: "Tell me about the Amrit Jal Shuddhi Set.",
        answer: "The Amrit Jal Shuddhi Set (Category: Ayurveda Wellness) is a water purification set consisting of 300g of washed Shungite chips in a cotton/jute drawstring pouch with a copper coin. Designed to purify 3 liters of water (100g/L) by absorbing impurities and ionizing it per Ayurveda's Tamra Jal tradition. Drop into any vessel and soak 6-8 hours. Wholesale: ₹950, Suggested MRP: ₹1,999. Retailer Margin: 52.5%.",
        keywords: "amrit, jal, water, purification, filter, clean, shuddhi, chips, coin, tamra"
    },
    {
        question: "Tell me about the Shila Raksha Pendant - OM.",
        answer: "The Shila Raksha Pendant OM (Category: Jewellery) is a polished 30-35mm Shungite disc pendant (5-6mm thick, 8-12g) with a gold-painted OM engraving. It comes with an adjustable waxed cotton cord (~50cm) and is worn at the throat chakra for continuous EMF shielding. Wholesale: ₹700, Suggested MRP: ₹1,299. Retailer Margin: 46.1%.",
        keywords: "pendant, necklace, jewellery, shila, throat, chakra, neck"
    },
    {
        question: "What are your wholesale terms, MOQ, and shipping details?",
        answer: "Wholesale prices are exclusive of 18% GST (HS code 6815.99). The Minimum Order Quantity (MOQ) is 25 pcs per SKU for first orders, and 10 pcs per SKU for reorders. Shipping takes 5-7 business days pan-India, and is free for orders above ₹25,000. Insured against transit damage.",
        keywords: "wholesale, terms, moq, shipping, delivery, days, price, gst, order"
    },
    {
        question: "Can I order samples and how are they charged?",
        answer: "Yes! Samples are available at ₹500 per SKU plus shipping. This sample fee is fully refundable upon placing your first official wholesale order. Payments are processed via Bank transfer, UPI, or Razorpay (50% advance, 50% on dispatch).",
        keywords: "sample, samples, cost, buy, order sample, payment, razorpay, upi"
    }
];

const defaultPromptText = `You are AdiShila's automated customer support agent. You represent AdiShila, a brand bringing authentic Karelian Shungite to the Indian market, adapted for Vedic, Vastu, and Ayurvedic traditions.
Your tone is helpful, friendly, professional, and knowledgeable.
Your primary goal is to help retailers and wellness store owners with their queries about our wholesale Shungite products, specifications, margins, minimum orders (MOQ), and shipping.

Here is the current trained Knowledge Base:
[KNOWLEDGE_BASE_DYNAMICS]

[WORKFLOW & CONVERSATION RULES]
- When a user asks about wholesale pricing, specifications, shipping, or specific products (Kavach Shield, Vastu Pyramid, Rudra Mala, Amrit Jal, Pendant), reply using the information above.
- If the user shows interest in placing a wholesale order (MOQ 25 pcs/SKU), requesting samples (₹500/SKU + shipping), or territory partnerships, guide them to capture their lead details. Say: "I would be happy to help you set up a wholesale account or request product samples! Could you please share your Name and Email so our partnership team can contact you?"
- If the user gives their Name and Email, confirm it and say: "Thanks! We've captured your details. An AdiShila representative will reach out to you within 24 hours to discuss your wholesale inquiry."
- Keep your answers concise, clear, and well-formatted. Use bullet points for list items.`;

// App State variables
let faqs = [];
let leads = [];
let systemPrompt = "";
let modelConfig = {
    model: "gemini-2.5-flash",
    temperature: 0.3
};
let apiKey = "";

// Chatbot Flow Variables
let leadState = 'idle'; // idle | awaiting_name | awaiting_email
let tempLead = { name: '', email: '', query: '' };
let chatHistory = []; // Array of { role: 'user'|'model', text: '', time: '' }

// Initializer
function initApp() {
    // Load FAQs
    const savedFAQs = localStorage.getItem('adishila_faqs');
    if (savedFAQs) {
        faqs = JSON.parse(savedFAQs);
    } else {
        faqs = [...defaultFAQs];
        localStorage.setItem('adishila_faqs', JSON.stringify(faqs));
    }

    // Load Leads
    const savedLeads = localStorage.getItem('adishila_leads');
    if (savedLeads) {
        leads = JSON.parse(savedLeads);
    } else {
        leads = [];
        localStorage.setItem('adishila_leads', JSON.stringify(leads));
    }

    // Load System Prompt
    const savedPrompt = localStorage.getItem('adishila_prompt');
    if (savedPrompt) {
        systemPrompt = savedPrompt;
    } else {
        systemPrompt = defaultPromptText;
        localStorage.setItem('adishila_prompt', systemPrompt);
    }

    // Load Model Config
    const savedConfig = localStorage.getItem('adishila_config');
    if (savedConfig) {
        modelConfig = JSON.parse(savedConfig);
    }

    // Load API Key
    apiKey = localStorage.getItem('adishila_api_key') || "";

    // Set UI inputs
    document.getElementById('system-instructions-textarea').value = systemPrompt;
    document.getElementById('input-temperature').value = modelConfig.temperature;
    document.getElementById('temp-val').innerText = modelConfig.temperature;
    document.getElementById('select-model').value = modelConfig.model;
    document.getElementById('gemini-api-key-input').value = apiKey;

    // Update Status Badge
    updateApiStatusUI();

    // Render Lists
    renderFAQs();
    renderLeads();
    
    // Add Welcome message to Chatbot
    resetChat();
}

// Render FAQs in Grid
function renderFAQs() {
    const faqGrid = document.getElementById('faq-list-grid');
    faqGrid.innerHTML = '';

    faqs.forEach((faq, index) => {
        const card = document.createElement('div');
        card.className = 'faq-card';
        
        // keywords split
        const keywordTags = faq.keywords.split(',').map(kw => kw.trim()).filter(kw => kw.length > 0);
        let tagsHtml = '';
        keywordTags.slice(0, 3).forEach(tag => {
            tagsHtml += `<span class="faq-keyword-tag">${tag}</span>`;
        });

        card.innerHTML = `
            <div class="faq-card-body">
                <h3>${escapeHtml(faq.question)}</h3>
                <p>${escapeHtml(faq.answer)}</p>
            </div>
            <div class="faq-card-footer">
                <div class="faq-keywords">
                    ${tagsHtml}
                </div>
                <div class="faq-card-actions">
                    <button class="faq-action-btn" id="edit-faq-btn-${index}" title="Edit FAQ">
                        <i class="ph ph-pencil-simple"></i>
                    </button>
                    <button class="faq-action-btn btn-delete" id="delete-faq-btn-${index}" title="Delete FAQ">
                        <i class="ph ph-trash"></i>
                    </button>
                </div>
            </div>
        `;
        
        // Attach event listeners to buttons
        card.querySelector(`#edit-faq-btn-${index}`).addEventListener('click', () => openEditFaqModal(index));
        card.querySelector(`#delete-faq-btn-${index}`).addEventListener('click', () => deleteFaqItem(index));
        
        faqGrid.appendChild(card);
    });
}

// Render Leads inside Table
function renderLeads() {
    const tbody = document.getElementById('leads-table-body');
    const placeholder = document.getElementById('no-leads-placeholder');
    const badge = document.getElementById('lead-count-badge');

    tbody.innerHTML = '';
    badge.innerText = leads.length;

    if (leads.length === 0) {
        placeholder.style.display = 'flex';
        document.getElementById('leads-table').style.display = 'none';
        return;
    }

    placeholder.style.display = 'none';
    document.getElementById('leads-table').style.display = 'table';

    // Sort by timestamp descending
    const sortedLeads = [...leads].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    sortedLeads.forEach(lead => {
        const tr = document.createElement('tr');
        const formattedDate = new Date(lead.timestamp).toLocaleString();
        
        tr.innerHTML = `
            <td>${formattedDate}</td>
            <td><strong>${escapeHtml(lead.name)}</strong></td>
            <td><a href="mailto:${escapeHtml(lead.email)}" style="color:var(--accent-gold); text-decoration:none;">${escapeHtml(lead.email)}</a></td>
            <td>${escapeHtml(lead.query)}</td>
            <td><span class="lead-status new">New</span></td>
        `;
        tbody.appendChild(tr);
    });
}

// Tab Switching Mechanism
window.switchTab = function(tabName) {
    const tabs = ['workflow', 'knowledge', 'prompt', 'leads'];
    
    tabs.forEach(tab => {
        const btn = document.getElementById(`tab-btn-${tab}`);
        const content = document.getElementById(`content-${tab}`);
        
        if (tab === tabName) {
            btn.classList.add('active');
            content.classList.add('active');
        } else {
            btn.classList.remove('active');
            content.classList.remove('active');
        }
    });
};

// API Key Logic
window.toggleApiModal = function(show) {
    const modal = document.getElementById('api-modal-backdrop');
    if (show) {
        modal.classList.add('active');
    } else {
        modal.classList.remove('active');
    }
};

window.saveApiKey = function() {
    const val = document.getElementById('gemini-api-key-input').value.trim();
    if (val) {
        apiKey = val;
        localStorage.setItem('adishila_api_key', apiKey);
        toggleApiModal(false);
        updateApiStatusUI();
        appendSystemMessage("Gemini API connected successfully. Running in Live AI mode.");
    } else {
        alert("Please enter a valid API key.");
    }
};

window.removeApiKey = function() {
    apiKey = "";
    localStorage.removeItem('adishila_api_key');
    document.getElementById('gemini-api-key-input').value = "";
    toggleApiModal(false);
    updateApiStatusUI();
    appendSystemMessage("API key disconnected. Fallback to Offline Matcher mode.");
};

function updateApiStatusUI() {
    const badge = document.getElementById('api-status-badge');
    const dot = badge.querySelector('.status-dot');
    const text = document.getElementById('status-mode-text');

    if (apiKey) {
        dot.className = 'status-dot online';
        text.innerText = "Live AI Mode (" + modelConfig.model + ")";
    } else {
        dot.className = 'status-dot offline';
        text.innerText = "Offline Matcher Mode";
    }
}

// FAQ Modal and Operations
window.toggleFaqModal = function(show) {
    const modal = document.getElementById('faq-modal-backdrop');
    if (show) {
        modal.classList.add('active');
    } else {
        modal.classList.remove('active');
    }
};

window.openAddFaqModal = function() {
    document.getElementById('faq-modal-title').innerText = "Add Trained FAQ";
    document.getElementById('edit-faq-index').value = "-1";
    document.getElementById('faq-question-input').value = "";
    document.getElementById('faq-answer-textarea').value = "";
    document.getElementById('faq-keywords-input').value = "";
    toggleFaqModal(true);
};

window.openEditFaqModal = function(index) {
    const faq = faqs[index];
    document.getElementById('faq-modal-title').innerText = "Edit Trained FAQ";
    document.getElementById('edit-faq-index').value = index;
    document.getElementById('faq-question-input').value = faq.question;
    document.getElementById('faq-answer-textarea').value = faq.answer;
    document.getElementById('faq-keywords-input').value = faq.keywords;
    toggleFaqModal(true);
};

window.saveFaqItem = function() {
    const index = parseInt(document.getElementById('edit-faq-index').value);
    const q = document.getElementById('faq-question-input').value.trim();
    const a = document.getElementById('faq-answer-textarea').value.trim();
    const k = document.getElementById('faq-keywords-input').value.trim();

    if (!q || !a) {
        alert("Question and Answer are required.");
        return;
    }

    const item = { question: q, answer: a, keywords: k };

    if (index === -1) {
        faqs.push(item);
    } else {
        faqs[index] = item;
    }

    localStorage.setItem('adishila_faqs', JSON.stringify(faqs));
    renderFAQs();
    toggleFaqModal(false);
    appendSystemMessage("Knowledge Base updated and synchronized with chatbot memory.");
};

window.deleteFaqItem = function(index) {
    if (confirm("Are you sure you want to delete this FAQ?")) {
        faqs.splice(index, 1);
        localStorage.setItem('adishila_faqs', JSON.stringify(faqs));
        renderFAQs();
        appendSystemMessage("FAQ removed. Chatbot memory refreshed.");
    }
};

// System Prompt Config Operations
window.savePromptSettings = function() {
    const promptText = document.getElementById('system-instructions-textarea').value;
    const tempVal = parseFloat(document.getElementById('input-temperature').value);
    const modelVal = document.getElementById('select-model').value;

    systemPrompt = promptText;
    modelConfig = { model: modelVal, temperature: tempVal };

    localStorage.setItem('adishila_prompt', systemPrompt);
    localStorage.setItem('adishila_config', JSON.stringify(modelConfig));
    updateApiStatusUI();
    alert("Chatbot setup and parameters saved successfully!");
};

window.resetDefaultPrompt = function() {
    if (confirm("Reset prompt instructions to the factory default?")) {
        systemPrompt = defaultPromptText;
        document.getElementById('system-instructions-textarea').value = systemPrompt;
        localStorage.setItem('adishila_prompt', systemPrompt);
    }
};

// Lead Management
function saveLead(name, email, query) {
    const lead = {
        name,
        email,
        query,
        timestamp: new Date().toISOString()
    };
    leads.push(lead);
    localStorage.setItem('adishila_leads', JSON.stringify(leads));
    renderLeads();
}

window.clearLeads = function() {
    if (confirm("Are you sure you want to purge all captured leads? This cannot be undone.")) {
        leads = [];
        localStorage.setItem('adishila_leads', JSON.stringify(leads));
        renderLeads();
    }
};

window.exportLeadsCsv = function() {
    if (leads.length === 0) {
        alert("No leads available to export.");
        return;
    }
    
    let csv = "Timestamp,Name,Email,Inquiry Details\n";
    leads.forEach(lead => {
        const date = new Date(lead.timestamp).toLocaleString().replace(/,/g, '');
        const name = lead.name.replace(/"/g, '""');
        const email = lead.email.replace(/"/g, '""');
        const query = lead.query.replace(/"/g, '""');
        csv += `"${date}","${name}","${email}","${query}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "adishila_leads_export.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// Chatbot UI Messaging Functions
function getFormattedTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function appendChatMessage(role, text) {
    const container = document.getElementById('chat-messages-container');
    const msg = document.createElement('div');
    msg.className = `message-bubble ${role === 'user' ? 'outgoing' : 'incoming'}`;
    
    let formattedText = escapeHtml(text).replace(/\n/g, '<br>');
    
    if (text.includes('- ') || text.includes('* ')) {
        const lines = text.split('\n');
        let htmlList = '';
        let inList = false;
        
        lines.forEach(line => {
            if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
                if (!inList) {
                    htmlList += '<ul>';
                    inList = true;
                }
                htmlList += `<li>${escapeHtml(line.trim().substring(2))}</li>`;
            } else {
                if (inList) {
                    htmlList += '</ul>';
                    inList = false;
                }
                htmlList += (line ? escapeHtml(line) + '<br>' : '<br>');
            }
        });
        if (inList) htmlList += '</ul>';
        formattedText = htmlList;
    }

    msg.innerHTML = `
        <div class="message-content">${formattedText}</div>
        <span class="message-time">${getFormattedTime()}</span>
    `;
    
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
    
    chatHistory.push({ role: role === 'user' ? 'user' : 'model', text: text, time: getFormattedTime() });
}

function appendSystemMessage(text) {
    const container = document.getElementById('chat-messages-container');
    const msg = document.createElement('div');
    msg.className = 'message-bubble system';
    msg.innerHTML = `<div class="message-content"><i class="ph ph-info"></i> ${escapeHtml(text)}</div>`;
    
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
}

function showTypingIndicator() {
    const container = document.getElementById('chat-messages-container');
    const indicator = document.createElement('div');
    indicator.className = 'message-bubble incoming typing-indicator-bubble';
    indicator.id = 'typing-indicator';
    indicator.innerHTML = `
        <div class="typing-indicator">
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
        </div>
    `;
    container.appendChild(indicator);
    container.scrollTop = container.scrollHeight;
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) {
        indicator.remove();
    }
}

// Chat controls
window.clearChatHistory = function() {
    if (confirm("Reset current preview conversation?")) {
        resetChat();
    }
};

function resetChat() {
    const container = document.getElementById('chat-messages-container');
    container.innerHTML = '';
    chatHistory = [];
    leadState = 'idle';
    tempLead = { name: '', email: '', query: '' };
    
    appendChatMessage('bot', "Hello! Welcome to AdiShila Wholesale Partner Support. I'm your AI assistant.\n\nHow can I help you today? I can answer questions about our authentic Karelian Shungite product specifications, wholesale margins, minimum order quantities (MOQ), Pan-India shipping, and sample kits!");
}

// Quick Reply clicks
window.sendQuickReply = function(text) {
    document.getElementById('chat-user-input').value = text;
    submitChatMessage();
};

window.handleChatKeyPress = function(e) {
    if (e.key === 'Enter') {
        submitChatMessage();
    }
};

window.submitChatMessage = async function() {
    const input = document.getElementById('chat-user-input');
    const text = input.value.trim();
    if (!text) return;
    
    input.value = "";
    appendChatMessage('user', text);
    
    showTypingIndicator();
    
    const delay = Math.random() * 500 + 600;
    setTimeout(async () => {
        await processResponse(text);
    }, delay);
};

// Response Processing Orchestrator
async function processResponse(userText) {
    removeTypingIndicator();

    // 1. LEAD CAPTURE SYSTEM (Takes precedence)
    if (leadState === 'awaiting_name') {
        tempLead.name = userText;
        leadState = 'awaiting_email';
        appendChatMessage('bot', `Thank you, ${userText}! Can you also please share your contact Email Address?`);
        return;
    }
    
    if (leadState === 'awaiting_email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userText)) {
            showTypingIndicator();
            setTimeout(() => {
                removeTypingIndicator();
                appendChatMessage('bot', "That doesn't look like a valid email address format. Please enter a valid email (e.g. yourname@domain.com) so we can reach out to you.");
            }, 500);
            return;
        }
        
        tempLead.email = userText;
        saveLead(tempLead.name, tempLead.email, tempLead.query);
        leadState = 'idle';
        appendChatMessage('bot', `Perfect, ${tempLead.name}! I have registered your wholesale partnership interest and saved your contact information (${userText}).\n\nOne of our partnership representatives will reach out to you within 24 hours. Is there anything else I can help you with?`);
        return;
    }

    // 2. LEAD CAPTURE TRIGGERS (Detecting intent to order bulk or request samples)
    const lowerText = userText.toLowerCase();
    const leadKeywords = ['wholesale order', 'place order', 'request samples', 'buy samples', 'bulk quote', 'stockist', 'become partner', 'territory partnership', 'catalog pricing', 'distributor'];
    const matchesLeadIntent = leadKeywords.some(kw => lowerText.includes(kw));

    if (matchesLeadIntent) {
        leadState = 'awaiting_name';
        tempLead.query = userText;
        appendChatMessage('bot', "I would be happy to coordinate a custom wholesale catalog quote, sample kit dispatch, or exclusive territory partnership agreement for you!\n\nTo assign this to our partnership coordinators, what is your Name?");
        return;
    }

    // 3. OFFLINE OR LIVE AI ROUTING
    if (apiKey) {
        try {
            const aiResponse = await callGeminiAPI(userText);
            appendChatMessage('bot', aiResponse);
        } catch (error) {
            console.error("Gemini API Error: ", error);
            const fallbackResponse = matchLocalFAQ(userText);
            appendChatMessage('bot', `[API Connection Error - Fallback Mode active] ${fallbackResponse}`);
        }
    } else {
        const localResponse = matchLocalFAQ(userText);
        appendChatMessage('bot', localResponse);
    }
}

// Offline Matching Engine
function matchLocalFAQ(userText) {
    const text = userText.toLowerCase();
    let bestMatchIndex = -1;
    let highestScore = 0;

    faqs.forEach((faq, index) => {
        let score = 0;
        
        if (text.includes(faq.question.toLowerCase())) {
            score += 10;
        }

        const keywordList = faq.keywords.split(',').map(kw => kw.trim().toLowerCase());
        keywordList.forEach(kw => {
            if (kw.length > 0 && text.includes(kw)) {
                score += 2;
                const regex = new RegExp(`\\b${kw}\\b`, 'i');
                if (regex.test(text)) {
                    score += 1.5;
                }
            }
        });

        if (score > highestScore) {
            highestScore = score;
            bestMatchIndex = index;
        }
    });

    if (highestScore >= 2 && bestMatchIndex !== -1) {
        return faqs[bestMatchIndex].answer;
    }

    return "I'm sorry, I didn't quite catch that. I am trained to handle AdiShila Wholesale queries. Try asking about:\n\n- **Kavach Phone Shield**\n- **Vastu Dosh Pyramid**\n- **Rudra-Shila Raksha Mala**\n- **Amrit Jal Water Set**\n- **Wholesale MOQ & Shipping**\n- **Ordering Samples**\n\nIf you want to reach our team directly, type 'Request Call' or 'Contact support'!";
}

// Live Gemini 2.5 Flash API Caller
async function callGeminiAPI(userText) {
    let faqInject = "";
    faqs.forEach((faq, index) => {
        faqInject += `\nFAQ ${index + 1}: ${faq.question}\nAnswer: ${faq.answer}\nKeywords: ${faq.keywords}\n`;
    });

    const fullPrompt = systemPrompt.replace("[KNOWLEDGE_BASE_DYNAMICS]", faqInject);
    const contents = [];
    const recentHistory = chatHistory.slice(-8);
    
    recentHistory.forEach(turn => {
        contents.push({
            role: turn.role,
            parts: [{ text: turn.text }]
        });
    });

    contents.push({
        role: "user",
        parts: [{ text: userText }]
    });

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelConfig.model}:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents: contents,
            systemInstruction: {
                parts: [{ text: fullPrompt }]
            },
            generationConfig: {
                temperature: modelConfig.temperature,
                maxOutputTokens: 800
            }
        })
    });

    if (!response.ok) {
        const errorJson = await response.json().catch(() => ({}));
        throw new Error(errorJson.error?.message || `HTTP error ${response.status}`);
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        return data.candidates[0].content.parts[0].text;
    } else {
        throw new Error("Invalid response format received from Gemini API");
    }
}

// Helper utility: Escape HTML string
function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
