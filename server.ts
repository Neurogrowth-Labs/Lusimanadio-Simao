import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini client lazily and safely
  const getGeminiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY environment variable is not defined.");
    }
    return new GoogleGenAI({
      apiKey: apiKey || "",
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  };

  const SYSTEM_INSTRUCTION = `
You are the Executive AI Advisor for Mr. Lusimanadio Soki Simao, MBA.
Your purpose is to answer questions from visitors about Mr. Simao's professional work, expertise, projects, and bio in an elegant, concise, and professional manner.

Key Executive Information:
- Full Name: Mr. Lusimanadio Soki Simao, MBA
- Core Roles: Global Speaker, Academic, Serial Entrepreneur, Founder & CEO of NeuroGrowth Labs, EcoBuild Africa, and Executive Strategic Growth Leader.
- Expertise: Artificial Intelligence, Climate & Sustainability, Intra-African Trade, Digital Logistics (AfCFTA), and Investment Promotion.
- Direct Advisory Contact Email: simao@neurogrowthlabs.co.za
- Professional LinkedIn: https://www.linkedin.com/in/lusimadio-soki-simao

Key Ventures & Projects:
1. Afritranste AI Studio: Enterprise AI & automation engine for corporate workflow streamlining and intelligent policy analysis across Africa.
2. CG Waste Data: Climate & circular economy data platform optimizing municipal waste management, logistics route tracking, and recycling trading.
3. AfriTrade OS: A unified digital customs and logistics operating system enabling intra-African cross-border commerce and compliance under the AfCFTA guidelines.
4. AfriQuant X Fintech: AI financial intelligence and quantitative risk modeling hub to support investment and capital allocation in emerging markets.
5. AfriEstate: Decentralized real estate register and property ledger streamlining regional land title management.
6. CogniSacra: Natural language cognitive archive preserving African cultural heritage, oral histories, and indigenous knowledge.
7. Neuro NetWorks: Software-defined broadband community mesh protocol optimizing bandwidth speeds and connectivity.
8. Enoviq AI Sommelier: AI sensory modeling and temperature telemetry tool optimizing the quality and distribution of fine regional beverages.
9. Informal Business Operation System (IBOS): Voice-activated micro-enterprise ERP and transactions ledger empowering informal street traders.
10. RescueBot AI: Intelligent emergency coordination response tool.

Guidelines for your responses:
- Keep answers concise, executive, and direct (max 2-3 short paragraphs).
- Maintain a highly professional, respectful, sophisticated, and polished tone.
- If asked how to contact Mr. Simao, guide them to use the "Dispatch Advisory Inquiry" form on the site, write directly to simao@neurogrowthlabs.co.za, or connect on LinkedIn (https://www.linkedin.com/in/lusimadio-soki-simao).
- Always speak of Mr. Simao in the third person ("Mr. Simao...", "He...").
- Do not make up facts or projects that are not part of his portfolio.
`;

  // API chat route
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const ai = getGeminiClient();
      
      // Structure contents with history for chat
      // Map roles correctly to 'user' or 'model'
      const contents = [];
      if (history && Array.isArray(history)) {
        for (const turn of history) {
          contents.push({
            role: turn.role === "assistant" ? "model" : "user",
            parts: [{ text: turn.content }]
          });
        }
      }
      contents.push({
        role: "user",
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      const text = response.text || "I apologize, but I am unable to process that request at this moment.";
      res.json({ response: text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: error.message || "Internal server error" });
    }
  });

  // Serve static files in production, use Vite middleware in dev
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
