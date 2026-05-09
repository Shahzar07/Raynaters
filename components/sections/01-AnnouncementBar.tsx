import { CONTENT } from '@/lib/content';
import { Marquee } from '@/components/ui/Marquee';

const REPEAT = 6;

export default function AnnouncementBar() {
  const items = Array.from({ length: REPEAT }, (_, i) => i);
  return (
    <div className="relative z-[100] border-b border-[#000] bg-accent text-black">
      <Marquee speed="slow" className="py-2.5">
        {items.map((i) => (
          <div key={i} className="flex items-center gap-3">
            <span aria-hidden className="h-1 w-1 rounded-full bg-black" />
            <span className="text-[11px] uppercase tracking-[0.22em] font-medium text-black">
              {CONTENT.announcement.text}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
