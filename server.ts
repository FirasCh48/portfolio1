import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, CERTIFICATIONS, SKILL_CATEGORIES, HACKATHONS, EDUCATION } from "./src/data/portfolioData.js";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoint for Firas's AI Recruiter Assistant
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "Le message est requis." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      
      const systemPrompt = `Tu es l'assistant IA virtuel et représentant de Firas CHABBOUH pour les recruteurs et visiteurs de son portfolio.
Voici toutes les informations vérifiées sur Firas :

Nom : ${PERSONAL_INFO.name}
Titre : ${PERSONAL_INFO.title}
Localisation : ${PERSONAL_INFO.location}
Email : ${PERSONAL_INFO.email}
Téléphone : ${PERSONAL_INFO.phone}
Disponibilité : ${PERSONAL_INFO.availability} (Stage d'été 2026 en Génie Logiciel / IA)
LinkedIn : ${PERSONAL_INFO.linkedin}
GitHub : ${PERSONAL_INFO.github}

Profil & Ambition :
${PERSONAL_INFO.bio}

Expériences Professionnelles :
${JSON.stringify(EXPERIENCES, null, 2)}

Projets Récents :
${JSON.stringify(PROJECTS, null, 2)}

Certifications :
${JSON.stringify(CERTIFICATIONS, null, 2)}

Compétences Techniques :
${JSON.stringify(SKILL_CATEGORIES, null, 2)}

Hackathons & Impact Social :
${JSON.stringify(HACKATHONS, null, 2)}

Formation Académique :
${JSON.stringify(EDUCATION, null, 2)}

Instructions de réponse :
- Réponds toujours de manière ultra-professionnelle, courtoise, enthousiaste et directe aux recruteurs.
- Réponds en français (ou dans la langue de la question s'il pose une question en anglais ou arabe).
- Mets en valeur les points forts de Firas : Génie Logiciel, RAG avec Gemini, FastAPI/React, Unity 3D & IoT, Certifications UI/UX, et son goût pour l'impact social et les hackathons.
- Sois concis et structure les informations si nécessaire avec des tirets.`;

      if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
        const ai = new GoogleGenAI({
          apiKey,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build'
            }
          }
        });
        
        // Prepare contents payload
        const contents = [
          { role: "user", parts: [{ text: `Système: ${systemPrompt}` }] },
          { role: "model", parts: [{ text: "Bonjour ! Je suis l'Assistant Virtuel de Firas Chabbouh. Je suis à votre disposition pour vous présenter son parcours, ses projets en IA/Full-Stack, ses certifications et répondre à vos questions sur son stage d'été 2026." }] }
        ];

        if (Array.isArray(history)) {
          history.forEach((h: { role: string; text: string }) => {
            contents.push({
              role: h.role === "user" ? "user" : "model",
              parts: [{ text: h.text }]
            });
          });
        }

        contents.push({
          role: "user",
          parts: [{ text: message }]
        });

        const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: contents
        });

        const replyText = response.text || "Désolé, je n'ai pas pu traiter votre demande pour le moment.";
        return res.json({ reply: replyText });
      } else {
        // Fallback intelligent response engine if GEMINI_API_KEY is not configured yet
        const lowerMsg = message.toLowerCase();
        let fallbackReply = `Firas CHABBOUH est un étudiant ingénieur en 2e année à l'ISAMM Manouba, spécialisé en Développement Full-Stack et Intégration IA (RAG, LLMs, Gemini API). Il recherche actuellement un stage d'été 2026.`;

        if (lowerMsg.includes("stage") || lowerMsg.includes("dispo") || lowerMsg.includes("recrut") || lowerMsg.includes("contact")) {
          fallbackReply = `Firas est actuellement à la recherche d'un **stage d'été 2026** pour contribuer à des projets innovants alliant IA générative, développement full-stack et impact social.\n\nVous pouvez le contacter directement :\n- **Email** : firas.chabouh@gmail.com\n- **Téléphone** : +216 58 711 570\n- **LinkedIn** : https://linkedin.com/in/firas-chabbouh-23a917235/\n- **GitHub** : https://github.com/FirasCh48`;
        } else if (lowerMsg.includes("projet") || lowerMsg.includes("rag") || lowerMsg.includes("inclusive") || lowerMsg.includes("warshatin")) {
          fallbackReply = `Parmi les projets majeurs de Firas :\n1. **InclusiveJobs** : Plateforme IA de recrutement inclusif basée sur une architecture RAG avec LangChain, Gemini 2.5 Flash, FastAPI et React.\n2. **Warshatin 3D** : Jeu 3D multijoueur sous Unity (C#) couplé à une manette IoT conçue sous SolidWorks et imprimée en 3D.\n3. **DoctorAppointment** : Plateforme de télémédecine et communauté médicale (React, Node.js, MongoDB, React Native).\n4. **FlexiPortfolio** : Système dynamique sans code avec Dashboard Admin et PostgreSQL.`;
        } else if (lowerMsg.includes("certif") || lowerMsg.includes("design") || lowerMsg.includes("ux")) {
          fallbackReply = `Firas détient deux certifications clés en UI/UX :\n- **UI/UX Design Specialist** (Centre Elife Siliana, 2024)\n- **UX Design Certified Professional** (Uxcel, 2026)\nIl applique ces compétences pour concevoir des interfaces ergonomiques et conformes aux normes WCAG.`;
        } else if (lowerMsg.includes("compétence") || lowerMsg.includes("stack") || lowerMsg.includes("tech")) {
          fallbackReply = `Stack technique de Firas :\n- **IA & ML** : LangChain, RAG, Embeddings, API Gemini 2.5 Flash, Python (FastAPI/Flask)\n- **Full-Stack** : React, TypeScript, Node.js, Express, Spring Boot (Java), Angular, C#/.NET\n- **3D & Hardware** : Unity 3D, Blender, Mixamo, SolidWorks, UltiMaker Cura\n- **DevOps & DB** : Docker, MongoDB, PostgreSQL, MySQL, Git, JUnit, Jest`;
        }

        return res.json({ reply: fallbackReply });
      }
    } catch (err: unknown) {
      console.error("Chat API Error:", err);
      return res.status(500).json({ error: "Une erreur est survenue lors du traitement du message." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
