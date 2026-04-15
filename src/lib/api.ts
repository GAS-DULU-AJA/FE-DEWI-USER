import { API_BASE_URL } from "./config";

export interface ApiError {
  message: string;
  status: number;
}

function getToken(): string | null {
  // Late-import to avoid circular dependency and allow usage in SSR-safe contexts
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { useAuthStore } = require("@/stores/useAuthStore");
    return useAuthStore.getState().token;
  } catch {
    return null;
  }
}

function buildHeaders(
  init?: HeadersInit,
  withAuth = true,
): Record<string, string> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(init as Record<string, string>),
  };

  if (withAuth) {
    const token = getToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  return headers;
}

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    let message = `HTTP Error ${res.status}`;
    try {
      const body = await res.json();
      message = body?.message ?? message;
    } catch {
      // ignore json parse failures
    }
    const error: ApiError = { message, status: res.status };
    throw error;
  }

  // Handle 204 No Content
  if (res.status === 204) return undefined as T;

  return res.json() as Promise<T>;
}

const api = {
  async get<T>(path: string, options?: RequestInit): Promise<T> {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      method: "GET",
      headers: buildHeaders(options?.headers),
    });
    return handleResponse<T>(res);
  },

  async post<T>(
    path: string,
    body?: unknown,
    options?: RequestInit,
  ): Promise<T> {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      method: "POST",
      headers: buildHeaders(options?.headers),
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
    return handleResponse<T>(res);
  },

  async put<T>(
    path: string,
    body?: unknown,
    options?: RequestInit,
  ): Promise<T> {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      method: "PUT",
      headers: buildHeaders(options?.headers),
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
    return handleResponse<T>(res);
  },

  async patch<T>(
    path: string,
    body?: unknown,
    options?: RequestInit,
  ): Promise<T> {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      method: "PATCH",
      headers: buildHeaders(options?.headers),
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
    return handleResponse<T>(res);
  },

  async delete<T>(path: string, options?: RequestInit): Promise<T> {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      method: "DELETE",
      headers: buildHeaders(options?.headers),
    });
    return handleResponse<T>(res);
  },
};

export default api;
