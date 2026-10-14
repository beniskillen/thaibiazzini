import { useEffect, useState } from "react";

const KEY = "nara-accent";

const storedRed = () => {
  try {
    return localStorage.getItem(KEY) === "red";
  } catch {
    return false;
  }
};

export const AccentToggle = () => {
  const [red, setRed] = useState(
    () => storedRed() || document.documentElement.dataset.accent === "red"
  );

  useEffect(() => {
    document.documentElement.dataset.accent = red ? "red" : "silver";
  }, [red]);

  const toggle = () => {
    setRed((on) => {
      const next = !on;
      try {
        localStorage.setItem(KEY, next ? "red" : "silver");
      } catch {
        /* storage can be unavailable */
      }
      return next;
    });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={red}
      aria-label={red ? "Use the silver accent" : "Use the red accent"}
      data-testid="accent-toggle"
      className="accent-toggle"
    >
      <span className="accent-swatch" aria-hidden="true" />
      <span className="hidden sm:inline">{red ? "Silver" : "Red"}</span>
    </button>
  );
};
