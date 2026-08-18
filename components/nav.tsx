"use client";

import { NavData, NavIcons } from "@/constants/nav";
import useWindowStore from "@/store/window";
import dayjs from "dayjs";
import Image from "next/image";

const Nav = () => {
  const { open } = useWindowStore();

  return (
    <nav>
      <div>
        <Image
          className="w-3.75 h-3.75"
          src="/images/logo.svg"
          alt="logo"
          width={14}
          height={14}
        />
        <p>zhangxinxin</p>

        <ul>
          {NavData.map(({ id, name, type }) => (
            <li key={id} onClick={() => open(type)}>
              {name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {NavIcons.map(({ id, url }) => (
            <li key={id}>
              <Image
                className="w-3.75 h-3.75"
                key={id}
                src={url}
                alt={`icon-${id}`}
                width={14}
                height={14}
              />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Nav;
