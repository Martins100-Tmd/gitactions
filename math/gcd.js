"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gcd = gcd;
function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b);
}
