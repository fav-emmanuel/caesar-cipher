export function caesarCipher(text: string, shift: number, mode: 'encode' | 'decode' = 'encode'): string {
    const effectiveShift = mode === 'encode' 
        ? ((shift % 26) + 26) % 26 
        : ((26 - (shift % 26)) + 26) % 26;

    return text
        .split('')
        .map(char => {
            const code = char.charCodeAt(0);

            // Handle Uppercase Letters (A-Z: 65-90)
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code - 65 + effectiveShift) % 26) + 65);
            }
            
            // Handle Lowercase Letters (a-z: 97-122)
            if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + effectiveShift) % 26) + 97);
            }

            // Return non-alphabetic characters unchanged
            return char;
        })
        .join('');
}

// --- Execution & Verification ---
const message = "Hello, World!";
const shiftAmount = 3;

const encoded = caesarCipher(message, shiftAmount, 'encode');
const decoded = caesarCipher(encoded, shiftAmount, 'decode');

console.log("=== Road to 25: Tier 1 Caesar Cipher (TypeScript) ===");
console.log(`Original Message : ${message}`);
console.log(`Encoded Message  : ${encoded}`); 
console.log(`Decoded Message  : ${decoded}`); 
