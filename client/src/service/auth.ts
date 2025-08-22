import {type AuthResponse, type GetMeResponse, type LogoutResponse, type RefreshResponse, type LoginValues, type RegisterValues } from "../types";

import api from "./axios";
  
  // auth ile alakalı bütün api istekleri
  const authApi = {
    register: (data: RegisterValues) => api.post<AuthResponse>("/auth/register", data),
    login: (data: LoginValues) => api.post<AuthResponse>("/auth/login", data),
    refreshToken: () => api.post<RefreshResponse>("/auth/refresh-token"),
    logout: () => api.post<LogoutResponse>("/auth/logout"),
    getMe: () => api.get<GetMeResponse>("/auth/me"),
  };
  
  export default authApi;