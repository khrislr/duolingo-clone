import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

const items = [
  {
    id: 1,
    label: "Learn",
    href: "/learn",
    iconSrc: "/learn.svg",
  },
  {
    id: 2,
    label: "Leaderboard",
    href: "/leaderboard",
    iconSrc: "/leaderboard.svg",
  },
  {
    id: 3,
    label: "Quests",
    href: "/quests",
    iconSrc: "/quests.svg",
  },
  {
    id: 4,
    label: "Shop",
    href: "/shop",
    iconSrc: "/shop.svg",
  },
];

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href={"/learn"}>
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src={"./mascot.svg"} alt="lingo icon" height={40} width={40} />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        {items.map((item, key) => (
          <SidebarItem
            key={item.id}
            label={item.label}
            iconSrc={item.iconSrc}
            href={item.href}
          />
        ))}
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
