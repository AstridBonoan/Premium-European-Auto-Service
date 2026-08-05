import { useScrollProgress } from '../../hooks';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed left-0 top-0 z-[60] h-0.5 w-full bg-transparent"
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
    >
      <div className="h-full bg-gold transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
    </div>
  );
}
