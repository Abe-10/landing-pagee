"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../lib/auth";

export default function LoginPage() {
  const { isLoggedIn, login } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (isLoggedIn) {
    router.push("/dashboard");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-8">Login Steam</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="text"
          placeholder="Username"
          className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 rounded p-3 font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}
