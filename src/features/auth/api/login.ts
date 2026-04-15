import api from "@/lib/api";
import type { AuthResponse, LoginPayload } from "../types";

export async function login(payload: LoginPayload): Promise<AuthResponse> {
  return api.post<AuthResponse>("/auth/login", payload);
}
