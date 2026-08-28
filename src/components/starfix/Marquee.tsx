type MarqueeProps = {
  items: string[];
};

export function Marquee({ items }: MarqueeProps) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden whitespace-nowrap border-y-2 border-ink bg-ink py-6">
      <div className="animate-marquee gap-8">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8">
            <span className="font-display text-3xl font-black uppercase text-paper md:text-4xl">
              {item}
            </span>
            <span className="font-display text-3xl font-black text-brand md:text-4xl">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
