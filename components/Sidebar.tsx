import Image from "next/image";
import React from "react";
import SidebarLink from "./SidebarLink";
import { HomeIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardListIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center lg:items-start lg:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 lg:ml-24">
        <Image src={"https://rb.gy/ogau5a"} width={30} height={30} />
      </div>
      <div className="space-y-0.5 mt-2 mb-1 lg:ml-24">
        <SidebarLink text={"Home"} Icon={HomeIcon} active={true} />
        <SidebarLink text={"Explore"} Icon={HashtagIcon} />
        <SidebarLink text={"Notification"} Icon={BellIcon} />
        <SidebarLink text={"Message"} Icon={InboxIcon} />
        <SidebarLink text={"Bookmarks"} Icon={BookmarkIcon} />
        <SidebarLink text={"List"} Icon={ClipboardListIcon} />
        <SidebarLink text={"Profile"} Icon={UserIcon} />
        <SidebarLink text={"More"} Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="hidden lg:inline ml-auto rounded-full text-white bg-[#1d9bf0] w-56 h-[52px] text-lg font-bold hover:bg-[#1a8cda]">
        Tweet
      </button>
      <div className="text-[#d9d9d9] flex items-center justify-center hoverAnimation lg:ml-auto lg:-mr-5">
        <img
          src="https://www.israelhayom.com/wp-content/uploads/2020/12/yael-shelbia-1023x570.jpg"
          alt="profile photo"
          className="h-10 w-10 rounded-full"
        />
        <div className="hidden lg:inline leading-5">
          <h4 className="font-bold">Darshit vaghasiya</h4>
          <p className="text-[#6e7]"> @darshit patel</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
