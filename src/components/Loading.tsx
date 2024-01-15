export default function Loading() {
  return (
    <div
      className={`font-800 flex justify-center
      dark:text-white(dark-mode-text&light-mode-element)
      bg-very-light-gray(light-mode-background) dark:bg-very-dark-blue(dark-mode-background)`}
    >
      Loading . . .
    </div>
  );
}
