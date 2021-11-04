import Link from "next/link";
import Image from "next/image";
interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => (
  <div className="flex content-center justify-center align-middle">
    <nav className="fixed inset-x-0 opacity-75 space-x-0">
      <div className="flex justify-center lg:space-x-24 md:space-x-12 space-x-10 ">
        {buttons.map((but, ind) => (
          <NavigationButton key={ind} name={but.name} dest={but.dest} />
        ))}
      </div>
    </nav>
    {
      //<NavigationButton name={''} dest={''} />
    }
    <div className="invisible py-24 lg:visible sm:invisible">
      <div className="">
        <Image
          className="rounded-2xl"
          src={"/header.png"}
          objectFit="contain"
          layout="fixed"
          width={1400}
          height={283}
        />
      </div>
    </div>
  </div>
);

interface NavigationButtonProps {
  name: string;
  dest: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ name, dest }) => (
  <div className="flex items-center h-14 lg:h-20 hover:underline">
    <Link href={dest}>
      <a className="text-4xl lg:text-2xl md:text-2xl sm:text-xl">{name}</a>
    </Link>
  </div>
);
const buttons = [
  {
    name: "Home",
    dest: "/",
  },
  {
    name: "About",
    dest: "/about",
  },
  {
    name: "Gallery",
    dest: "/gallery",
  },
  {
    name: "Get Involved",
    dest: "/getInvolved",
  },
];

export default Navigation;
