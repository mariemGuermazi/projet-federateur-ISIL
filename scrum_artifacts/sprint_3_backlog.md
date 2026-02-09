# Sprint 3 Backlog

**Sprint Goal:** Enable persistent data storage and containerized deployment for production-ready infrastructure.

**Sprint Duration:** Week 5-6  
**Sprint Capacity:** 13 Story Points  
**Scrum Master:** [Student Name]  
**Development Team:** 3-4 members

---

## 📋 Sprint Backlog Items

### US-006: Persistent Data Storage (5 SP)
| Task ID | Task Description | Assignee | Estimate | Status |
|:-------:|------------------|:--------:|:--------:|:------:|
| T-006.1 | Add PostgreSQL dependency to pom.xml | Dev 1 | 1h | ✅ Done |
| T-006.2 | Configure `application.properties` for PostgreSQL | Dev 1 | 1h | ✅ Done |
| T-006.3 | Create database initialization script | Dev 1 | 2h | ✅ Done |
| T-006.4 | Update DataSeeder to check for existing data | Dev 2 | 2h | ✅ Done |
| T-006.5 | Test data persistence across restarts | QA | 2h | ✅ Done |

### US-007: Containerized Deployment (8 SP)
| Task ID | Task Description | Assignee | Estimate | Status |
|:-------:|------------------|:--------:|:--------:|:------:|
| T-007.1 | Create `Dockerfile` for Spring Boot backend | Dev 2 | 2h | ✅ Done |
| T-007.2 | Create multi-stage `Dockerfile` for React frontend | Dev 3 | 3h | ✅ Done |
| T-007.3 | Configure Nginx for SPA routing | Dev 3 | 2h | ✅ Done |
| T-007.4 | Create `docker-compose.yml` with all services | Dev 2 | 3h | ✅ Done |
| T-007.5 | Configure volume mapping for database persistence | Dev 2 | 1h | ✅ Done |
| T-007.6 | Test full stack with `docker-compose up` | QA | 2h | ✅ Done |
| T-007.7 | Document startup instructions in README | Dev 1 | 1h | ✅ Done |

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
- **Dev 1:** Adding PostgreSQL to pom.xml. Researching JDBC configuration.
- **Dev 2:** Starting backend Dockerfile.
- **Dev 3:** Reading Nginx multi-stage build documentation.

### Day 3
- **Dev 1:** Database connection working locally. Testing with Docker next.
- **Dev 2:** Backend Dockerfile complete. Moving to compose file.
- **Dev 3:** Frontend Dockerfile with Nginx serving static files.

### Day 5
- **Dev 1:** DataSeeder updated. Testing persistence.
- **Dev 2:** docker-compose.yml ready. Testing inter-service communication.
- **Dev 3:** Nginx config fixed for SPA routing.

### Day 7
- **All:** Full stack running in containers.
- **QA:** Testing persistence after container restart.

---

## ✅ Definition of Done (Sprint 3)

- [x] PostgreSQL data persists across container restarts
- [x] All three containers start with single command
- [x] Frontend accessible at localhost:3000
- [x] Backend API accessible at localhost:8080
- [x] README updated with Docker instructions
- [x] No data loss after `docker-compose down && docker-compose up`

---

## 🔄 Sprint Retrospective Action Items

| What went well? | What could improve? | Action Item |
|-----------------|---------------------|-------------|
| Docker learning curve overcome | Initial PostgreSQL issues | Add troubleshooting guide |
| Good documentation | Health checks missing | Add health endpoints in Sprint 4 |
| Persistence working | Long build times | Optimize Dockerfile caching |
