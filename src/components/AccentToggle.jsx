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
      role="switch"
      onClick={toggle}
      aria-checked={red}
      aria-label={red ? "Red accent on. Switch to silver." : "Silver accent on. Switch to red."}
      data-testid="accent-toggle"
      className="accent-toggle"
    >
      <span className="accent-knob" aria-hidden="true" />
    </button>
  );
};
