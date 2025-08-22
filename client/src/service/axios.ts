import axios from "axios";
import {type AuthResponse } from "../types";

const api = axios.create({
    // api adresi
    baseURL: "http://localhost:5001/api",
    // cookie ile saklanan verileri her istekte api a gönderir
    withCredentials: true,
    // api ye gönderilen verilerin tipi
    headers: {
        "Content-Type": "application/json",
    },
});

// her api isteğinden cevap gelince çalışıcak bir arayazılım
// eğer gelen cevap 401 unothorized ise yani access tokenın süresi dolduysa
// refresh endpointine istek atıp access tokenı yenile
// 401 hatası aldığı isteği tekrar gönder
api.interceptors.response.use(
    (res) => res,
    async (err) => {
        console.log("arayazılım", err);
        // hatayı aldığımız api isteği sakla
        const originalReq = err.config;

        // eğer hatanın kodu 401 ise yani acces tokenın süresi dolduysa
        if (err.response.status === 401 && !originalReq._retry && err.response.data.message === "Acces token expired") {
            originalReq._retry = true;

            // access tokenı yenile
            try {
                const res = await api.post<AuthResponse>("/auth/refresh");
                console.log("access token yenilendi", res);

                // yenilenen access token ile orijinal isteği tekrar at
                return api(originalReq); 
            } catch (err) {
                console.log("access token ı yenileme hatası", err);
                // refresh tokenın süresi dolduysa
                await api.post("/auth/logout");

                // login sayfasına yönlendir
                window.location.href = "/login";

                // yeni bir hata aldığında hata döndür
                return Promise.reject(err);
            }
        }

        return Promise.reject(err);
    }
)

export default api;


// her api isteğine acces toke ı ekle