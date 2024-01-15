import React from "react";

interface Props {
  active: boolean;
  onDismiss: () => void;
}

export default function Backdrop({ active, onDismiss }: Props) {
  return (
    <div
      className={`${
        active
          ? `fixed top-0 left-0 z-20
          h-screen w-screen bg-very-dark-blue(light-mode-text)/0
          `
          : "hidden"
      }`}
      onClick={onDismiss}
    />
  );
}
