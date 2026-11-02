"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function BackBtn({ alternative, text }: { alternative: string; text: string }) {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    setCanGoBack(window.history.length > 1);
  }, []);

  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (canGoBack) {
      window.history.back();
    } else {
      router.push(alternative);
    }
  };

  return (
    <p className="text-sm text-muted-foreground mb-4">
      <a
        href={alternative}
        onClick={handleBackClick}
        className="hover:underline"
      >
        ← {canGoBack ? "Назад" : text}
      </a>
    </p>
  );
}

export default BackBtn;
