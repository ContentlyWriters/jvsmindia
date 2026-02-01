// components/Portal.js
"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // server side pe render na ho

  return createPortal(children, document.body);
}
