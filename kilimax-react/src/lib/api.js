export const DIRECT_RENDER_URL = "https://killimax-backend.onrender.com";

export function getBaseUrl() {
  const envUrl = (DIRECT_RENDER_URL || import.meta.env.VITE_API_URL || "").trim();
  if (!envUrl) return "/api";

  const clean = envUrl.replace(/\/+$/, "");
  return clean.endsWith("/api") ? clean : `${clean}/api`;
}

async function request(path, { method = "GET", body, token, headers: customHeaders } = {}) {
  const base = getBaseUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${base}${normalizedPath}`;

  const headers = {
    "Content-Type": "application/json",
    ...customHeaders,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  let res;
  try {
    res = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch (err) {
    console.error(`[API Network Error] ${method} ${url}:`, err);
    throw new Error(
      "Unable to connect to server. If the server is on Render free tier, it may be waking up (takes ~30-50s). Please try again shortly."
    );
  }

  let data;
  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    try {
      data = await res.json();
    } catch {
      data = {};
    }
  } else {
    const text = await res.text().catch(() => "");
    data = { message: text || `Server returned status ${res.status}` };
  }

  if (!res.ok) {
    const msg = data.message || data.errors?.[0]?.msg || `Request failed with status ${res.status}`;
    throw new Error(msg);
  }

  return data;
}

export const api = {
  getBaseUrl,
  health: () => request("/health"),
  signup: (data) => request("/auth/signup", { method: "POST", body: data }),
  signin: (data) => request("/auth/signin", { method: "POST", body: data }),
  me: (token) => request("/auth/me", { token }),

  getProducts: (params) => {
    const qs = params ? `?${new URLSearchParams(params).toString()}` : "";
    return request(`/products${qs}`);
  },
  getProduct: (id) => request(`/products/${id}`),
  createProduct: (data, token) => request("/products", { method: "POST", body: data, token }),
  updateProduct: (id, data, token) => request(`/products/${id}`, { method: "PUT", body: data, token }),
  deleteProduct: (id, token) => request(`/products/${id}`, { method: "DELETE", token }),

  submitPartner: (data) => request("/partners", { method: "POST", body: data }),
  getPartners: (token, params) => {
    const qs = params ? `?${new URLSearchParams(params).toString()}` : "";
    return request(`/partners${qs}`, { token });
  },

  getStories: (params) => {
    const qs = params ? `?${new URLSearchParams(params).toString()}` : "";
    return request(`/stories${qs}`);
  },
  getStory: (slug) => request(`/stories/${slug}`),
};
