import { useRouter } from "next/router";
import React from "react";

type Props = {
  text: string;
  Icon: any;
  active?: boolean;
};

export default function SidebarLink({ text, Icon, active }: Props) {
  const router = useRouter();
  return (
    <div
      className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${
        active && "font-extrabold"
      }`}
      onClick={() => active && router.push("/")}
    >
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
}
