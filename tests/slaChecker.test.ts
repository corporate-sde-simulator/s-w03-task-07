import { SlaChecker } from "../src/slaChecker";
import { ComplianceReport } from "../src/complianceReport";

describe("Client SLA compliance checker", () => {
    test("should process valid input", () => {
        const obj = new SlaChecker();
        expect(obj.process({ key: "val" })).not.toBeNull();
    });
    test("should handle null", () => {
        const obj = new SlaChecker();
        expect(obj.process(null)).toBeNull();
    });
    test("should track stats", () => {
        const obj = new SlaChecker();
        obj.process({ x: 1 });
        expect(obj.getStats().processed).toBe(1);
    });
    test("support should work", () => {
        const obj = new ComplianceReport();
        expect(obj.process({ data: "test" })).not.toBeNull();
    });
});
