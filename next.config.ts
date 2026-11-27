import type { NextConfig } from "next";

// learn.zuply.co.kr 와 zuply.co.kr/learn 를 public/learn 의 정적 레슨 페이지로 연결
const LEARN_HOST = [{ type: "host" as const, value: "learn.zuply.co.kr" }];

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", has: LEARN_HOST, destination: "/learn/index.html" },
        { source: "/:topic([a-z0-9-]+)", has: LEARN_HOST, destination: "/learn/:topic/index.html" },
        { source: "/learn", destination: "/learn/index.html" },
        { source: "/learn/:topic([a-z0-9-]+)", destination: "/learn/:topic/index.html" },
      ],
    };
  },
};

export default nextConfig;
