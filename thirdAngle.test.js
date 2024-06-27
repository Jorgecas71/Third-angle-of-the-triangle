import { describe, it, expect } from "vitest";
import { thirdAngle } from "./thirdAngle";

describe('thirdAngle', () => {
    it('should return 90 when angles are 30 and 60', () => {
        expect(thirdAngle(30, 60)).toBe(90);
    });

    it('should return 60 when angles are 60 and 60', () => {
        expect(thirdAngle(60, 60)).toBe(60);
    });

    it('should return 59 when angles are 43 and 78', () => {
        expect(thirdAngle(43, 78)).toBe(59);
    });

    it('should return 150 when angles are 10 and 20', () => {
        expect(thirdAngle(10, 20)).toBe(150);
    });

    it('should return error when the first angle is 0', () => {
        expect(() => thirdAngle(0, 60)).toThrow('A angle cant be 0');
    });

    it('should return error when the second angle is 0', () => {
        expect(() => thirdAngle(60, 0)).toThrow('A angle cant be 0');
    });

    it('should return error when both angles are 0', () => {
        expect(() => thirdAngle(0, 0)).toThrow('A angle cant be 0');
    });

})