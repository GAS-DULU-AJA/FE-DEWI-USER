import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { login } from "../api/login";
import type { LoginPayload } from "../types";
import { useAuthStore } from "@/stores/useAuthStore";

export function useLogin() {
  const setAuth = useAuthStore((s) => s.setAuth);
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
    onSuccess: (data) => {
      setAuth(data.user, data.token);
      router.push("/");
    },
  });
}
