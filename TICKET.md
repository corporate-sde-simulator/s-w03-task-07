# FINSERV-4142: Build SLA compliance checker for client accounts

**Status:** In Progress · **Priority:** High
**Sprint:** Sprint 25 · **Story Points:** 5
**Reporter:** Vikrant Singh (Client Success Lead) · **Assignee:** You (Intern)
**Labels:** `backend`, `typescript`, `sla`, `feature`
**Task Type:** Feature Ship

---

## Description

The SLA checker can define SLA contracts, but has **no compliance evaluation logic**. Implement the `ComplianceReport` that evaluates actual metrics against SLA targets and generates compliance reports.

## Acceptance Criteria

- [ ] `evaluate()` compares actual vs target metrics
- [ ] Compliance status: compliant, at_risk (>80% of limit), breached
- [ ] Penalty calculations for SLA breaches
- [ ] Monthly compliance report generation
- [ ] All unit tests pass
