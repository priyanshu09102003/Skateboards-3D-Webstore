"use client";
import { useEffect } from "react";

export default function EmojiCursor() {
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "custom-cursor-style";
    style.innerHTML = `
      *, *:hover, *:focus, *:active,
      a, a:hover, button, button:hover,
      input, textarea, select, [role="button"] {
        cursor: url('/custom-cursor.cur') 0 0, auto !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.getElementById("custom-cursor-style")?.remove();
    };
  }, []);

  return null;
}