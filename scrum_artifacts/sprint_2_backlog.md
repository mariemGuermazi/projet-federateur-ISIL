# Sprint 2 Backlog

**Sprint Goal:** Enable full frontend-backend integration with employee data visibility.

**Sprint Duration:** Week 3-4  
**Sprint Capacity:** 13 Story Points  
**Scrum Master:** [Student Name]  
**Development Team:** 3-4 members

---

## 📋 Sprint Backlog Items

### US-004: Employee Assignment View (5 SP)
| Task ID | Task Description | Assignee | Estimate | Status |
|:-------:|------------------|:--------:|:--------:|:------:|
| T-004.1 | Add `@ManyToMany` relationship between Project and Employee | Dev 1 | 2h | ✅ Done |
| T-004.2 | Update DataSeeder with project-employee assignments | Dev 1 | 1h | ✅ Done |
| T-004.3 | Create `EmployeeCard` React component | Dev 3 | 2h | ✅ Done |
| T-004.4 | Display employees in ProjectDetail component | Dev 3 | 2h | ✅ Done |
| T-004.5 | Add empty state for projects with no employees | Dev 3 | 1h | ✅ Done |

### US-005: Frontend-Backend Integration (8 SP)
| Task ID | Task Description | Assignee | Estimate | Status |
|:-------:|------------------|:--------:|:--------:|:------:|
| T-005.1 | Install and configure Axios in React | Dev 3 | 1h | ✅ Done |
| T-005.2 | Create `api.js` service module | Dev 3 | 2h | ✅ Done |
| T-005.3 | Implement loading state with spinner | Dev 3 | 1h | ✅ Done |
| T-005.4 | Implement error handling with user-friendly messages | Dev 3 | 2h | ✅ Done |
| T-005.5 | Add environment variable for API base URL | Dev 2 | 1h | ✅ Done |
| T-005.6 | Test integration in development mode | QA | 2h | ✅ Done |
| T-005.7 | Fix any CORS or network issues | Dev 2 | 2h | ✅ Done |

---

## 📊 Sprint Burndown

```
Day 1:  █████████████ 13 SP
Day 2:  ███████████   11 SP
Day 3:  █████████      9 SP
Day 4:  ███████        7 SP
Day 5:  █████          5 SP
Day 6:  ███            3 SP
Day 7:  █              1 SP
Day 8:  ░              0 SP ✅
```

---

## 📝 Daily Scrum Notes

### Day 1
- **Dev 1:** Adding ManyToMany relationship. Need to research cascade options.
- **Dev 2:** Preparing API configuration.
- **Dev 3:** Installing Axios and creating service module.

### Day 3
- **Dev 1:** Relationship working. Seeder updated.
- **Dev 2:** Environment variables configured.
- **Dev 3:** Loading spinner implemented. Starting error handling.

### Day 5
- **Dev 1:** Reviewing code. No blockers.
- **Dev 2:** Testing integration. Found minor CORS issue with credentials.
- **Dev 3:** Error messages displaying correctly.

### Day 7
- **All:** Integration testing complete.
- **QA:** All test cases passed.

---

## ✅ Definition of Done (Sprint 2)

- [x] Employees display on project detail pages
- [x] API calls use Axios with proper error handling
- [x] Loading spinners appear during data fetch
- [x] Environment variables used for configuration
- [x] No console errors or warnings
- [x] Peer code review completed

---

## 🔄 Sprint Retrospective Action Items

| What went well? | What could improve? | Action Item |
|-----------------|---------------------|-------------|
| Axios integration smooth | Environment variables were confusing | Add `.env.example` file |
| Good error handling | No loading skeleton for cards | Implement skeleton loaders in Sprint 4 |
| Team velocity stable | Missing documentation | Update README with API docs |
