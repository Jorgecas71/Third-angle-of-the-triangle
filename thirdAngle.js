export function thirdAngle(angle1, angle2) {
    if (angle1 === 0 || angle2 === 0) {
        throw new Error ('A angle cant be 0');
    }
    return 180 - (angle1 + angle2);
    
}