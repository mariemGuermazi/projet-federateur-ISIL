# Definition of Done (DoD)

**Project:** ShareBox – Object Sharing Web Application  
**Version:** 1.0  
**Last Updated:** 2026-02-16

---

## ✅ Code Level DoD

### For Each Task
- [ ] Code compiles without errors
- [ ] Backend API endpoints work correctly (Node.js / Express)
- [ ] Frontend components display correctly (Angular)
- [ ] Code follows project coding standards (naming, formatting)
- [ ] No hard-coded passwords, database credentials, or secrets
- [ ] Environment variables used for configuration (.env file)

---

## ✅ User Story Level DoD

### Functional Requirements
- [ ] All acceptance criteria are completed
- [ ] Feature works correctly in development environment
- [ ] Frontend and backend communicate correctly via REST API
- [ ] Data is correctly stored and retrieved from SQL database
- [ ] No console errors in browser or server

### Quality Requirements
- [ ] Code reviewed and approved by at least one team member
- [ ] All reviewer comments addressed
- [ ] Feature demonstrated to Product Owner (if required)

---

## ✅ Sprint Level DoD

### Integration
- [ ] All Sprint Backlog items meet User Story DoD
- [ ] Frontend and backend integrate correctly
- [ ] Database operations work correctly (CRUD)
- [ ] Authentication system works correctly
- [ ] No regression in existing features
- [ ] Application starts successfully

### Documentation
- [ ] README updated if new setup steps required
- [ ] API documentation updated (if new endpoints)
- [ ] Code comments added for complex logic

### Testing
- [ ] Manual testing completed for all user stories
- [ ] Edge cases and error scenarios tested
- [ ] Cross-browser testing (Chrome, Firefox minimum)

---

## ✅ Release Level DoD

### Deployment Readiness
- [ ] All Sprint DoD criteria met
- [ ] CI/CD pipeline passes (build, test, Docker)
- [ ] No critical or high-severity bugs open
- [ ] Performance acceptable under normal load

### Final Checks
- [ ] Version number updated (if applicable)
- [ ] Release notes prepared
- [ ] Demo environment updated
- [ ] Stakeholder sign-off obtained

---

## 🚫 Common DoD Violations

| Violation | Why It Matters | Prevention |
|-----------|----------------|------------|
| Skipping code review | Bugs slip through | Require PR approvals |
| Committing directly to main | Breaks CI/CD | Branch protection rules |
| Hard-coded localhost URLs | Breaks in production | Use environment variables |
| Missing error handling | Poor UX on failures | Mandatory try-catch blocks |
| No loading states | Confusing UX | Add spinners/skeletons |

---

## 📊 DoD Checklist Template

Use this checklist when closing a user story:

```markdown
## DoD Checklist for US-XXX

### Code
- [ ] Compiles without errors
- [ ] Follows coding standards
- [ ] No secrets in code

### Quality
- [ ] All acceptance criteria met
- [ ] Code reviewed and approved
- [ ] Merged to main

### Testing
- [ ] Works in development
- [ ] Works in Docker
- [ ] No console errors

### Documentation
- [ ] README updated (if needed)
- [ ] Comments added (if needed)
```

---

## 🔄 DoD Evolution

The Definition of Done should evolve as the team matures:

| Sprint | DoD Additions |
|:------:|---------------|
| Sprint 1 | Basic code and review requirements |
| Sprint 2 | Error handling and loading state requirements |
| Sprint 3 | Docker compatibility requirements |
| Sprint 4 | CI/CD pipeline pass requirements |

---

*This document is maintained by the Scrum Team and reviewed at each Sprint Retrospective.*
