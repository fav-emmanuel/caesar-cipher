# Tier 1: Caesar Cipher Encoder / Decoder (TypeScript)

Part of the **Road to 25** portfolio initiative (`docs/tier1/ts-caesar-cipher.md`).

## 🎯 Project Overview
A robust command-line Caesar Cipher encryption and decryption utility built in **TypeScript**. It shifts alphabetical characters while strictly preserving case formatting, spaces, and punctuation.

---

## 🛠️ Development Journey & Engineering Log

### 1. The Language Pivot
While initial Tier 1 planning considered Python for this utility, the project was deliberately refactored to **TypeScript** to strengthen static typing fundamentals, interface design, and modern JavaScript runtime execution (`ts-node` / Node.js ES modules).

### 2. Troubleshooting & Configuration Hurdles
Building this tool from scratch in VS Code brought valuable configuration lessons:
* **The `ts-node` Config Barrier:** Running `npx ts-node main.ts` initially triggered configuration lookup errors (`findAndReadConfig`) because a `tsconfig.json` wasn't present in the root directory.
* **Local vs Global Binaries:** Encountered command resolution blocks when `tsc` wasn't globally linked, teaching proper local package management (`npm install typescript --save-dev`).
* **Resolution:** Solved by structuring the workspace with a proper TypeScript compiler configuration, ensuring seamless type checking and execution.

---

## 🚀 How to Run

1. Install dependencies:
   ```bash
   npm install
