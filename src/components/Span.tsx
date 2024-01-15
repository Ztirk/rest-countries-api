import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Span({ children }: Props) {
  return <span className="font-600 text-dark-blue-element dark:text-white(dark-mode-text&light-mode-element)">{children}</span>;
}
