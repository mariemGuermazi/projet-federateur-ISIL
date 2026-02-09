# Product Backlog

**Project:** Project Portfolio Dashboard  
**Product Owner:** Haythem Ghazouani  
**Last Updated:** 2026-01-28

---

## 📊 Backlog Overview

| Priority | ID | User Story | Story Points | Sprint | Status |
|:--------:|:--:|------------|:------------:|:------:|:------:|
| 🔴 High | US-001 | As a manager, I want to view all projects so I can track portfolio status | 5 | Sprint 1 | ✅ Done |
| 🔴 High | US-002 | As a manager, I want to see project details so I can make informed decisions | 3 | Sprint 1 | ✅ Done |
| 🔴 High | US-003 | As a developer, I want a REST API to access project data programmatically | 8 | Sprint 1 | ✅ Done |
| 🟡 Medium | US-004 | As a manager, I want to see employee assignments so I can manage resources | 5 | Sprint 2 | ✅ Done |
| 🟡 Medium | US-005 | As a user, I want frontend-backend integration for real-time data | 8 | Sprint 2 | ✅ Done |
| 🟡 Medium | US-006 | As a user, I want persistent data storage so information isn't lost | 5 | Sprint 3 | ✅ Done |
| 🟡 Medium | US-007 | As a DevOps engineer, I want containerized deployment for consistency | 8 | Sprint 3 | ✅ Done |
| 🟢 Low | US-008 | As a user, I want a polished UI with modern styling for better UX | 5 | Sprint 4 | ✅ Done |
| 🟢 Low | US-009 | As a user, I want form validation to prevent data entry errors | 3 | Sprint 4 | ✅ Done |
| 🟢 Low | US-010 | As a DevOps engineer, I want CI/CD pipelines for automated quality checks | 5 | Sprint 4 | ✅ Done |

---

## 📝 Detailed User Stories

### US-001: View All Projects
**As a** manager  
**I want** to view all projects in a dashboard  
**So that** I can track the overall portfolio status at a glance

**Acceptance Criteria:**
- [ ] Dashboard displays a list of all projects
- [ ] Each project card shows: name, status, and budget
- [ ] Projects are sortable by status or name
- [ ] Loading state is displayed while fetching data

**Story Points:** 5  
**Priority:** High  
**Sprint:** 1

---

### US-002: View Project Details
**As a** manager  
**I want** to see detailed information about a specific project  
**So that** I can make informed decisions about resource allocation

**Acceptance Criteria:**
- [ ] Clicking a project reveals detailed information
- [ ] Details include: description, start date, end date, assigned employees
- [ ] Budget utilization is clearly displayed

**Story Points:** 3  
**Priority:** High  
**Sprint:** 1

---

### US-003: REST API for Project Data
**As a** developer  
**I want** a well-documented REST API  
**So that** I can integrate project data into other systems

**Acceptance Criteria:**
- [ ] GET `/api/projects` returns all projects
- [ ] GET `/api/projects/{id}` returns a specific project
- [ ] GET `/api/employees` returns all employees
- [ ] Responses follow JSON:API or similar standard format
- [ ] Error responses include meaningful messages

**Story Points:** 8  
**Priority:** High  
**Sprint:** 1

---

### US-004: Employee Assignment View
**As a** manager  
**I want** to see which employees are assigned to each project  
**So that** I can manage team resources effectively

**Acceptance Criteria:**
- [ ] Project details page shows assigned employees
- [ ] Employee cards display name, role, and department
- [ ] Empty state is shown if no employees are assigned

**Story Points:** 5  
**Priority:** Medium  
**Sprint:** 2

---

### US-005: Frontend-Backend Integration
**As a** user  
**I want** the frontend to fetch real data from the backend  
**So that** I see accurate, up-to-date information

**Acceptance Criteria:**
- [ ] Frontend uses Axios to call backend API
- [ ] CORS is properly configured
- [ ] Error handling displays user-friendly messages
- [ ] Loading spinners appear during data fetch

**Story Points:** 8  
**Priority:** Medium  
**Sprint:** 2

---

### US-006: Persistent Data Storage
**As a** user  
**I want** my data to persist across application restarts  
**So that** I don't lose important project information

**Acceptance Criteria:**
- [ ] PostgreSQL database is configured
- [ ] Data survives container restarts via volume mapping
- [ ] Initial seed data is loaded on first startup

**Story Points:** 5  
**Priority:** Medium  
**Sprint:** 3

---

### US-007: Containerized Deployment
**As a** DevOps engineer  
**I want** the entire stack to run in Docker containers  
**So that** deployment is consistent across environments

**Acceptance Criteria:**
- [ ] Backend runs in its own container
- [ ] Frontend runs in its own container (Nginx)
- [ ] Database runs in its own container
- [ ] `docker-compose up` starts the full stack

**Story Points:** 8  
**Priority:** Medium  
**Sprint:** 3

---

### US-008: Modern UI Styling
**As a** user  
**I want** a visually appealing, modern interface  
**So that** using the application is a pleasant experience

**Acceptance Criteria:**
- [ ] Dark mode theme implemented
- [ ] Glassmorphism effects on cards
- [ ] Smooth hover transitions
- [ ] Responsive design for mobile devices

**Story Points:** 5  
**Priority:** Low  
**Sprint:** 4

---

### US-009: Form Validation
**As a** user  
**I want** form inputs to be validated  
**So that** I am prevented from submitting incorrect data

**Acceptance Criteria:**
- [ ] Required fields are marked and enforced
- [ ] Email fields validate format
- [ ] Numeric fields accept only valid numbers
- [ ] Validation errors are displayed inline

**Story Points:** 3  
**Priority:** Low  
**Sprint:** 4

---

### US-010: CI/CD Pipeline
**As a** DevOps engineer  
**I want** automated build and test pipelines  
**So that** code quality is maintained automatically

**Acceptance Criteria:**
- [ ] GitHub Actions workflow triggers on push to main
- [ ] Java backend builds successfully
- [ ] React frontend builds successfully
- [ ] Docker images build successfully
- [ ] Failed builds block merging

**Story Points:** 5  
**Priority:** Low  
**Sprint:** 4

---

## 📈 Velocity Tracking

| Sprint | Planned Points | Completed Points | Velocity |
|:------:|:--------------:|:----------------:|:--------:|
| Sprint 1 | 16 | 16 | 100% |
| Sprint 2 | 13 | 13 | 100% |
| Sprint 3 | 13 | 13 | 100% |
| Sprint 4 | 13 | 13 | 100% |

**Average Velocity:** 13.75 points/sprint

---

## 🔄 Backlog Refinement Notes

### Session 1 (Week 1)
- Initial backlog created with 10 user stories
- Priorities assigned based on technical dependencies
- Story points estimated using Planning Poker

### Session 2 (Week 3)
- US-006 and US-007 combined into Sprint 3 for infrastructure sprint
- Added acceptance criteria for CI/CD story

### Session 3 (Week 5)
- Confirmed all stories are complete
- Retrospective feedback incorporated for future projects
