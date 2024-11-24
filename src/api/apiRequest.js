import axios from "axios";

// Axios 기본 설정
const axiosInstance = axios.create({
  baseURL: "https://app-sdk-api.dosi.world/v1", // 기본 URL 설정
  timeout: 5000, // 요청 시간 초과 설정 (ms)
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    // 필요에 따라 인증 토큰 추가
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // 오류 처리 (예: 토큰 만료 시 로그아웃 처리)
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Please log in again.");
      // 로그아웃 처리 등 필요 시 작성
    }
    return Promise.reject(error);
  }
);

// 공통 API 함수
const apiRequest = async (method, url, data = null, params = null) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
      params,
    });
    return response.data;
  } catch (error) {
    console.error("API 호출 오류:", error.message);
    throw error;
  }
};

export default apiRequest;
