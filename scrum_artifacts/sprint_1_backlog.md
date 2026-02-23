# Sprint 1 Backlog

**Sprint Goal:** Establish the foundational backend architecture and expose project data via REST API.

**Sprint Duration:** Week 1-2  
**Sprint Capacity:** 16 Story Points  
**Scrum Master:** [Student Name]  
**Development Team:** 3-4 members

---

## 📋 Sprint Backlog Items

| Task ID | User Story | Task Description                    | Type     | Priority | Story Points | Status |
| ------- | ---------- | ----------------------------------- | -------- | -------- | ------------ | ------ |
| T1      | US‑001     | Create `users` table in MySQL       | Backend  | 🔴 High  | 2            | ✅ Done |
| T2      | US‑001     | Implement POST `/register` route    | Backend  | 🔴 High  | 2            | ✅ Done |
| T3      | US‑003     | Hash password using bcrypt          | Backend  | 🔴 High  | 1            | ✅ Done |
| T4      | US‑002     | Implement POST `/login` route       | Backend  | 🔴 High  | 2            | ✅ Done |
| T5      | US‑004     | Generate JWT token on login         | Backend  | 🔴 High  | 2            | ✅ Done |
| T6      | US‑001     | Create Register component (Angular) | Frontend | 🔴 High  | 3            | ✅ Done |
| T7      | US‑002     | Create Login component (Angular)    | Frontend | 🔴 High  | 3            | ✅ Done |
| T8      | US‑002     | Store JWT in localStorage           | Frontend | 🔴 High  | 1            | ✅ Done |
| T9      | US‑004     | Configure `.env` with JWT_SECRET    | Backend  | 🔴 High  | 1            | ✅ Done |

---

## 📊 Sprint Burndown

```
Day 1:  ████████████████ 16 SP
Day 2:  ██████████████   14 SP
Day 3:  ████████████     12 SP
Day 4:  ██████████       10 SP
Day 5:  ████████          8 SP
Day 6:  ██████            6 SP
Day 7:  ████              4 SP
Day 8:  ██                2 SP
Day 9:  ░                 0 SP ✅
```

---

## 📝 Daily Scrum Notes

### Day 1
- **Dev 1:** Started Project entity. No blockers.
- **Dev 2:** Reading Spring Boot documentation.
- **Dev 3:** Setting up React project with Vite.

### Day 3
- **Dev 1:** Completed entities. Moving to repositories.
- **Dev 2:** Stuck on CORS configuration. Will pair with Dev 1.
- **Dev 3:** ProjectList component rendering mock data.

### Day 5
- **Dev 1:** Helping Dev 2 with CORS. Resolved.
- **Dev 2:** All endpoints working. Starting DataSeeder.
- **Dev 3:** Integrating real API data. Minor UI tweaks needed.

### Day 7
- **All:** Code review session. Minor fixes applied.
- **QA:** Starting Postman testing.

### Day 9
- **All:** Sprint deliverables complete. Preparing for Sprint Review.

---

## ✅ Definition of Done (Sprint 1)

- [x] All code committed to `main` branch
- [x] All endpoints return correct JSON structure
- [x] Frontend displays real data from backend
- [x] No console errors in browser DevTools
- [x] Code reviewed by at least one team member
- [x] API tested with Postman collection

---

## 🔄 Sprint Retrospective Action Items

| What went well? | What could improve? | Action Item |
|-----------------|---------------------|-------------|
| Good collaboration | CORS took too long | Document CORS config for future |
| Clean entity design | Late start on frontend | Start frontend in parallel earlier |
| Effective pair programming | No unit tests | Add unit tests in Sprint 2 |
