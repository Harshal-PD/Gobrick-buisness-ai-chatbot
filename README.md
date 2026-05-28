# AdiShila AI Shungite Wholesaler Assistant & Sandbox Guide

An enterprise-grade, glassmorphic customer support and lead collection workspace built for **AdiShila**—a premium distributor bringing authentic Karelian Shungite artifacts (EMF protection, Vastu correction, and Ayurvedic wellness sets) to the Indian spiritual and wellness market.

This project is fully self-contained in a single, high-fidelity `index.html` file that serves as both a **Setup & Configuration Dashboard** and an **Interactive Live Chat Widget** for wholesale partners and retailers.

---

## 🚀 Instant Deployment Guide (Get Your Live Link)

Since the project is completely self-contained, you can deploy it and get a live, testable URL in less than 30 seconds for free:

### Option 1: Netlify Drop (Easiest)
1. Open your browser and navigate to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the `index.html` file (located in `d:\Hacks\Gobrick-buisness\`) directly onto the drop area in the browser.
3. Netlify will instantly deploy it and provide you with a live URL (e.g., `https://adishila-shungite-bot.netlify.app`).
4. *Tip:* You can sign up for a free Netlify account to claim this URL so it doesn't expire and to customize the domain name.

### Option 2: GitHub Pages (Permanent)
1. Create a new public repository on GitHub (e.g., `adishila-shungite-chatbot`).
2. Upload the `index.html` file to the root of the repository.
3. Go to **Settings** > **Pages** in your GitHub repository.
4. Select the `main` or `master` branch as the source and click **Save**.
5. Your live link will be generated at `https://<username>.github.io/adishila-shungite-chatbot/`.

---

## 🧠 Chatbot Capabilities & Grounding Data

The AdiShila assistant is pre-trained with **10 distinct custom responses** mapped to critical customer queries:

1. **Shungite Origins:** Explains that AdiShila sources all authentic raw Shungite directly from Karelia, Russia—the only place on Earth where this 2-billion-year-old carbon-rich mineral is deposited.
2. **Authenticity Guarantee:** Highlights that AdiShila is the first brand to bring authentic Karelian Shungite to India, adapted for Vedic/Ayurvedic/Vastu traditions. Every product includes QR authenticity verification.
3. **EMF Radiation Protection:** Details how Shungite is the only natural mineral containing Fullerenes (C60) with documented radiation-shielding properties.
4. **Kavach Shield - OM:** Polished 25mm phone sticker plate (2.5–3.0mm thick, 4–6g) with laser-engraved lines filled with gold paint. Adheres via 3M VHB tape. Wholesale: ₹800 (MOQ 25+), Suggested MRP: ₹1,499.
5. **Vastu Dosh Pyramid:** Polished pyramid (base 40–50mm, height 30–40mm, 60–120g) wrapped in a 2–3mm copper foil band to conduct Prana. Wholesale: ₹1,100, Suggested MRP: ₹2,199.
6. **Rudra-Shila Raksha Mala:** Wrist mala featuring 26 polished 8mm Shungite beads and 1 genuine Mukhi Rudraksha (totaling 27 beads, representing the 27 Nakshatras). Wholesale: ₹900, Suggested MRP: ₹1,499.
7. **Amrit Jal Shuddhi Set:** Water purification kit with 300g of washed Shungite chips and a copper coin. Purifies up to 3 liters of water per Ayurvedic Tamra Jal tradition. Wholesale: ₹950, Suggested MRP: ₹1,999.
8. **Shila Raksha Pendant - OM:** Polished 30–35mm disc pendant (5–6mm thick, 8–12g) with a gold-painted OM engraving on a waxed cotton cord. Wholesale: ₹700, Suggested MRP: ₹1,299.
9. **Wholesale Terms & Shipping:** Details wholesale pricing (excl. 18% GST, HS 6815.99), MOQ of 25 pcs per SKU for first orders (10 pcs for reorders), and 5-7 business days pan-India shipping (free for orders above ₹25,000).
10. **Sample Kits & Payment:** Outlines that sample kits are available at ₹500/SKU + shipping (fully refundable on first wholesale order). Payments processed via Bank transfer, UPI, or Razorpay (50% advance, 50% on dispatch).

---

## 💼 Automated Lead Collection & Workflow

The chatbot features an integrated NLU router and a two-stage lead collection engine:

1. **Intent Analysis:** If a user mentions keywords like *wholesale order, place order, request samples, buy samples, bulk quote, stockist, become partner, territory partnership, catalog pricing, or distributor*, the chatbot intercepts the regular FAQ flow.
2. **Lead Capturing Flow:**
   - **Step 1:** The bot asks for the user's **Name**.
   - **Step 2:** The bot asks for the user's **Email Address** (validated client-side).
   - **Step 3:** The lead is registered, saved in the database (`localStorage`), and displayed in the **Captured Leads** panel of the workspace.
3. **Dashboard Synced:** You can view, manage, and export captured leads (as a `.csv` file) directly from the dashboard tab in real-time.

---

## 🤖 Dual Execution Modes

1. **Offline Matcher Mode (Default):**
   - Works immediately out-of-the-box without any setup.
   - Employs a local scoring engine that evaluates keyword densities and exact matches across the 10+ trained FAQs to trigger appropriate responses instantly.
2. **Live AI Mode (Gemini 2.5 Flash / Pro):**
   - Connects to Google's Gemini models directly from your browser.
   - **How to Activate:** Click the **Configure Gemini API** button in the header, input your Gemini API key, and save.
   - Grounded in your system prompt and the dynamic FAQs, the bot will use advanced cognitive capabilities to hold fluid, natural conversations.

---

## 🛠️ Modifying & Training the Bot

- **To train new answers:** Open `index.html` in your browser, click the **Knowledge Base** tab, and click **Add Custom FAQ** or click Edit on any card. Changes are saved instantly to the local session.
- **To adjust system instructions:** Navigate to the **System Prompt** tab, modify the guidelines, and adjust the **Temperature** slider to control chatbot creativity.
