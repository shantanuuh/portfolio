"use client";

import { useEffect } from "react";

export function ConsoleMessage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // We use console.info so it survives the production build log stripper
      console.info(
        "%cHOLD UP!",
        "color: red; font-size: 60px; font-weight: bold; text-shadow: 2px 2px 0 #000;"
      );
      console.info(
        "%cThis is a browser feature intended for developers. If someone told you to copy-paste something here to 'hack' something, it is a scam.",
        "color: #fbbf24; font-size: 18px;"
      );
      console.info(
        "%cLooking under the hood? Let's build something together instead: shantanuharkulkar125@gmail.com",
        "color: #4ade80; font-size: 16px; font-weight: bold;"
      );
    }
  }, []);

  return null;
}
