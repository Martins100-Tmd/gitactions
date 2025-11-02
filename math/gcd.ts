export function gcd(a: number, b: number): number {
    [a, b] = [Math.abs(a), Math.abs(b)]
    return b == 0 ? (a) : gcd(b, a % b);
}