"use client";
import { useEffect } from "react";

export default function EmojiCursor() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d")!;
    ctx.font = "48px serif";
    ctx.fillText("🛹", 0, 48);
    const url = canvas.toDataURL();

    const cursorValue = `url(${url}) 16 40, auto`;

   
    document.body.style.cssText += `cursor: ${cursorValue} !important`;

    
    const style = document.createElement("style");
    style.id = "emoji-cursor-style";
    style.innerHTML = `
      *, *:hover, *:focus, *:active,
      a, a:hover, button, button:hover,
      input, textarea, select, [role="button"] {
        cursor: url(${url}) 16 40, auto !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.style.cursor = "auto";
      document.getElementById("emoji-cursor-style")?.remove();
    };
  }, []);

  return null;
}