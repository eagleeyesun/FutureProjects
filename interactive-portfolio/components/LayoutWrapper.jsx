"use client";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

export default function LayoutWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <>{children}</>;
}