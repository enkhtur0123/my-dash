"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { allNav, NavItem } from "./allnav";

const Sidebar = () => {
  const pathname = usePathname();

  const [filteredNav, setAllNav] = useState<NavItem[]>([]);

  useEffect(() => {
    const navs = getNav("admin");
    setAllNav(navs);
  }, []);

  const getNav = (role: String) => {
    const finalNavs: NavItem[] = [];

    for (let i = 0; i < allNav.length; i++) {
      if (role === allNav[i].role) {
        finalNavs.push(allNav[i]);
      }
    }
    return finalNavs;
  };
  return (
    <div>
      <div
        className={`fixed duration-200 ${"visible"} w-screen h-screen bg-[#8cbce780] top-0 left-0 z-10`}
      ></div>

      <div
        className={`w-[260px] fixed bg-[#e6e7fb] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${"left-0"} `}
      >
        <div className="h-[70px] flex justify-center items-center">
          <Link href="/" className="w-[180px] h-[50px] relative">
            <Image
              src="/logo.svg"
              alt="Logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>

        <div className="px-[16px]">
          <ul>
            {filteredNav.map((n, i) => (
              <li key={i}>
                <Link
                  href={n.path}
                  className={`${
                    pathname === n.path
                      ? "bg-blue-600 shadow-indigo-500/50 text-white duration-500"
                      : "text-[#030811] font-bold duration-200 "
                  } px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 `}
                >
                  <span>{n.icon}</span>
                  <span>{n.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
