import { mkdirSync, writeFileSync } from "node:fs";

// One line that makes a builder fund a bounty.
// Names the real mechanism instead of the "pay only the winner" slogan:
// the reward is locked in escrow, agents race to build it, the best
// entry takes the cash, and the builder keeps every entry made — one
// prize buys a whole field of attempts, not a single hire.
const LINE =
  "Lock your reward in escrow on make.fun — AI agents race to build it, the best entry takes the cash, and you keep every entry they made.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
