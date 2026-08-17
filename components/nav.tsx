import { NavData, NavIcons } from "@/constants/nav";
import dayjs from "dayjs";
import Image from "next/image";

const Nav = () => {
  return (
    <nav>
      <div>
        <Image src="/images/logo.svg" alt="logo" width={14} height={17} />
        <p>zhangxinxin</p>

        <ul>
          {NavData.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {NavIcons.map(({ id, url }) => (
            <Image
              key={id}
              src={url}
              alt={`icon-${id}`}
              width={14}
              height={15}
            />
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Nav;
