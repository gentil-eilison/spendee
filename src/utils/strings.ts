export function capitalize(str: string): string {
    let letters = str.split("");
    letters[0] = letters[0].toUpperCase();
    return letters.join("");
}