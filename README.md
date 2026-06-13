# 🚀 CareerPilot AI

  <p align="center">
    <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white"/>
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
    <img src="https://img.shields.io/badge/LangGraph-1C3C3C?style=for-the-badge"/>
    <img src="https://img.shields.io/badge/Groq_LLaMA_3.3-FF6B6B?style=for-the-badge"/>
    <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
  </p>

  <p align="center">
    An <strong>agentic AI system</strong> built with NestJS and LangGraph that autonomously analyzes CV–job fit, detects skill gaps, and generates tailored cover letters using Groq LLaMA 3.3 70B.
  </p>

  ---

  ## ✨ Features

  - 📄 **CV–Job Fit Analysis** — AI scores alignment between a CV and job description
  - 🔍 **Skill Gap Detection** — Identifies missing skills and recommends learning paths
  - ✉️ **Cover Letter Generation** — Produces personalized, role-specific cover letters
  - 🤖 **Agentic Workflow** — LangGraph orchestrates multi-step AI reasoning autonomously
  - 🔐 **JWT Authentication** — Secure, token-based user access
  - 📖 **Swagger Docs** — Full API documentation at `/api/docs`

  ---

  ## 🛠️ Tech Stack

  | Layer | Technology |
  |-------|-----------|
  | Framework | NestJS (TypeScript) |
  | AI Orchestration | LangGraph |
  | AI Model | Groq API — LLaMA 3.3 70B |
  | Database | MongoDB + Mongoose |
  | Auth | JWT + Passport.js |
  | Docs | Swagger / OpenAPI |

  ---

  ## 🚀 Getting Started

  ```bash
  git clone https://github.com/BismaAbbasi/CareerPilot-AI.git
  cd CareerPilot-AI
  npm install
  ```

  ### Environment Variables

  ```env
  PORT=3000
  MONGODB_URI=your_mongodb_uri
  JWT_SECRET=your_jwt_secret
  GROQ_API_KEY=your_groq_api_key
  ```

  ```bash
  npm run start:dev
  ```

  API: `http://localhost:3000` | Swagger: `http://localhost:3000/api/docs`

  ---

  ## 📡 Core Endpoints

  | Method | Endpoint | Description | Auth |
  |--------|----------|-------------|------|
  | POST | `/auth/register` | Register user | ❌ |
  | POST | `/auth/login` | Login and get JWT | ❌ |
  | POST | `/career/analyze` | Analyze CV vs job description | ✅ |
  | POST | `/career/cover-letter` | Generate personalized cover letter | ✅ |
  | GET | `/career/history` | Retrieve past analyses | ✅ |

  ---

  ## 📄 License

  [MIT](LICENSE)
  