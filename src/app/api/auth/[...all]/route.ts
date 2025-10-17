import { auth } from "@/lib/auth"; // path to your auth.ts file
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);
