import Image from "next/image";
import Link from "next/link";

/**
 * 앱 페이지 사이를 바로 오가는 아이콘 링크 줄.
 * 지원·설명서 페이지가 있는 앱만 넣습니다. 앱을 추가하면 여기와 홈의 APPS 에 함께 넣으세요.
 */
export const APP_LINKS = [
  { slug: "dugeun", name: "Dugeun", icon: "/icons/dugeun.png" },
  { slug: "hueday", name: "Hueday", icon: "/icons/hueday.png" },
  { slug: "chalna", name: "Chalna", icon: "/icons/chalna.png" },
  { slug: "kamusta", name: "Kamusta", icon: "/icons/kamusta.png" },
  { slug: "dailyten", name: "Daily Ten", icon: "/icons/dailyten.png" },
  { slug: "kkujun", name: "Kkujun", icon: "/icons/kkujun.png" },
  { slug: "packly", name: "Packly", icon: "/icons/packly.png" },
  { slug: "nona", name: "Nona", icon: "/icons/nona.png" },
  { slug: "oneuldo", name: "Oneuldo", icon: "/icons/oneuldo.png" },
  { slug: "teumsaenote", name: "Teumsae Note", icon: "/icons/teumsaenote.png" },
  { slug: "pitapat", name: "Pitapat", icon: "/icons/pitapat.png" },
  { slug: "damda", name: "Damda", icon: "/icons/damda.png" },
  { slug: "molip", name: "Molip", icon: "/icons/molip.png" },
] as const;

export function AppIcon({ slug, size = 48, className = "" }: { slug: string; size?: number; className?: string }) {
  const app = APP_LINKS.find((a) => a.slug === slug);
  if (!app) return null;
  return (
    <Image
      src={app.icon}
      alt={app.name}
      width={size}
      height={size}
      className={`rounded-[22%] ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

export function AppNav({ current, label = "Other apps" }: { current: string; label?: string }) {
  return (
    <nav aria-label={label} className="flex items-center gap-3">
      <span className="text-xs text-white/40">{label}</span>
      {APP_LINKS.map((app) => (
        <Link
          key={app.slug}
          href={`/${app.slug}`}
          title={app.name}
          aria-current={app.slug === current ? "page" : undefined}
          className={`rounded-[22%] ring-2 transition-opacity hover:opacity-100 ${
            app.slug === current ? "ring-white/60 opacity-100" : "ring-transparent opacity-60"
          }`}
        >
          <AppIcon slug={app.slug} size={36} />
        </Link>
      ))}
    </nav>
  );
}
