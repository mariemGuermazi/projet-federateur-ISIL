# Definition of Done (DoD)

**Project:** Project Portfolio Dashboard  
**Version:** 1.0  
**Last Updated:** 2026-01-28

---

## 📋 Overview

The Definition of Done (DoD) is a shared understanding within the Scrum Team of what it means for work to be complete. An item is not considered "Done" until all criteria below are satisfied.

---

## ✅ Code Level DoD

### For Each Task
- [ ] Code compiles without errors
- [ ] Code follows project coding standards (naming conventions, formatting)
- [ ] No hard-coded credentials or secrets in code
- [ ] Relevant unit tests written (if applicable)
- [ ] Code committed to feature branch with meaningful commit message

### Commit Message Format
```
<type>(<scope>): <subject>

Examples:
feat(api): add GET endpoint for projects
fix(ui): resolve card overflow on mobile
docs(readme): update installation instructions
```

---

## ✅ User Story Level DoD

### Functional Requirements
- [ ] All acceptance criteria from the user story are met
- [ ] Feature works as expected in development environment
- [ ] Feature works as expected in Docker environment
- [ ] No console errors (browser DevTools or server logs)

### Quality Requirements
- [ ] Code reviewed and approved by at least one team member
- [ ] All reviewer comments addressed
- [ ] Merged to `main` branch via Pull Request
- [ ] Feature demonstrated to Product Owner (if required)

---

## ✅ Sprint Level DoD

### Integration
- [ ] All Sprint Backlog items meet User Story DoD
- [ ] Frontend and backend integrate correctly
- [ ] No regressions in existing functionality
- [ ] Application starts successfully with `docker-compose up`

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
