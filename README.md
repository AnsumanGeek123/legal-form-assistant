# Legal Form Assist

A platform to help users fill legal forms using regional speech recognition, multi-language support, and chatbot guidance.

---

## 🚀 Tech Stack

- **Frontend:** Next.js (React, TypeScript), Tailwind CSS, Vite
- **Backend:** Node.js, tRPC, Express, TypeScript
- **APIs & Tools:** Bhashini API, Azure OpenAI, Axios, Postman
- **Database:** PostgreSQL, Prisma ORM
- **Authentication:** Firebase/Auth0
- **Notifications:** Twilio (SMS), Nodemailer (Email)
- **DevOps/Infra:** Docker, GitHub Actions, Digital Ocean
- **Testing:** Jest, React Testing Library

---

## 📁 Folder Structure

```
legal-form-assist/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── app.js
│   ├── prisma/
│   │   └── schema.prisma
│   ├── Dockerfile
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   ├── tailwind.config.js
│   ├── Dockerfile
│   └── package.json
│
├── .gitignore
├── docker-compose.yml
└── README.md
```

---

## 🏗️ System Architecture

```mermaid
![image](https://github.com/user-attachments/assets/c5443b8e-fdfb-44d1-992b-fd6b2542e66a)


---

## ✨ Features
- Multi-language and dialect support
- Regional speech-to-text for form filling
- Chatbot and tooltips for legal guidance
- Instructive videos and dummy forms
- Real-time application tracking
- OTP-based authentication
- SMS/Email notifications

---

## 📦 Dependencies
- next, react, react-dom, tailwindcss, typescript, axios, @trpc/server, @prisma/client, express, pg, firebase, openai, nodemailer, twilio, jest

---

## 📝 License
MIT License

---

## 📬 Contact
- **Project Lead:** Ansuman Das (https://www.linkedin.com/in/ansuman-das-90a9a0226/)
- **GitHub:** [github.com/AnsumanGeek123/legal-form-assist](https://github.com/yourusername/legal-form-assist)
- **Issues:** Please use the GitHub issues page for bug reports and feature requests.

## Getting Started
1. Clone the repo
2. Run `docker-compose up --build`
3. Access frontend at `localhost:3000`, backend at `localhost:5000` 
