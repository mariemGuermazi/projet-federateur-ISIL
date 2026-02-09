# Sprint 1 Backlog

**Sprint Goal:** Establish the foundational backend architecture and expose project data via REST API.

**Sprint Duration:** Week 1-2  
**Sprint Capacity:** 16 Story Points  
**Scrum Master:** [Student Name]  
**Development Team:** 3-4 members

---

## 📋 Sprint Backlog Items

### US-001: View All Projects (5 SP)
| Task ID | Task Description | Assignee | Estimate | Status |
|:-------:|------------------|:--------:|:--------:|:------:|
| T-001.1 | Create `Project` JPA Entity | Dev 1 | 2h | ✅ Done |
| T-001.2 | Create `ProjectRepository` interface | Dev 1 | 1h | ✅ Done |
| T-001.3 | Implement `ProjectController` with GET /projects | Dev 2 | 2h | ✅ Done |
| T-001.4 | Create React `ProjectList` component | Dev 3 | 3h | ✅ Done |
| T-001.5 | Style project cards with CSS | Dev 3 | 2h | ✅ Done |

### US-002: View Project Details (3 SP)
| Task ID | Task Description | Assignee | Estimate | Status |
|:-------:|------------------|:--------:|:--------:|:------:|
| T-002.1 | Implement GET /projects/{id} endpoint | Dev 2 | 1h | ✅ Done |
| T-002.2 | Create `ProjectDetail` React component | Dev 3 | 2h | ✅ Done |
| T-002.3 | Add conditional rendering for details view | Dev 3 | 1h | ✅ Done |

### US-003: REST API for Project Data (8 SP)
| Task ID | Task Description | Assignee | Estimate | Status |
|:-------:|------------------|:--------:|:--------:|:------:|
| T-003.1 | Configure Spring Boot project with dependencies | Dev 1 | 2h | ✅ Done |
| T-003.2 | Create `Employee` JPA Entity | Dev 1 | 2h | ✅ Done |
| T-003.3 | Create `EmployeeRepository` interface | Dev 1 | 1h | ✅ Done |
| T-003.4 | Implement `EmployeeController` with CRUD | Dev 2 | 3h | ✅ Done |
| T-003.5 | Write `DataSeeder` for initial data | Dev 2 | 2h | ✅ Done |
| T-003.6 | Configure CORS for frontend access | Dev 2 | 1h | ✅ Done |
| T-003.7 | Test all endpoints with Postman | QA | 2h | ✅ Done |

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
