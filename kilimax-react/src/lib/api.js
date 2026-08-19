const BASE = "/api";

async function request(path, { method = "GET", body, token } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();

  if (!res.ok) {
    const msg = data.message || data.errors?.[0]?.msg || "Something went wrong";
    throw new Error(msg);
  }

  return data;
}

export const api = {
  // Auth
  signup: (data) => request("/auth/signup", { method: "POST", body: data }),
  signin: (data) => request("/auth/signin", { method: "POST", body: data }),
  me: (token) => request("/auth/me", { token }),

  // Products
  getProducts: (params) => request(`/products?${new URLSearchParams(params)}`),
  getProduct: (id) => request(`/products/${id}`),
  createProduct: (data, token) => request("/products", { method: "POST", body: data, token }),
  updateProduct: (id, data, token) => request(`/products/${id}`, { method: "PUT", body: data, token }),
  deleteProduct: (id, token) => request(`/products/${id}`, { method: "DELETE", token }),

  // Partners
  submitPartner: (data) => request("/partners", { method: "POST", body: data }),
  getPartners: (token, params) => request(`/partners?${new URLSearchParams(params || {})}`, { token }),

  // Stories
  getStories: (params) => request(`/stories?${new URLSearchParams(params || {})}`),
};
