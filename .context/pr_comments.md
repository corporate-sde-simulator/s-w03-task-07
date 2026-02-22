# PR Review - Client SLA compliance checker (by Sneha Jain)

## Reviewer: Ravi Iyer
---

**Overall:** Good foundation but critical bugs need fixing before merge.

### `slaChecker.ts`

> **Bug #1:** Uptime percentage calculation includes planned maintenance windows as downtime
> This is the higher priority fix. Check the logic carefully and compare against the design doc.

### `complianceReport.ts`

> **Bug #2:** SLA tier lookup matches first tier found instead of the client specific contracted tier
> This is more subtle but will cause issues in production. Make sure to add a test case for this.

---

**Sneha Jain**
> Acknowledged. I have documented the issues for whoever picks this up.
