import Link from "next/link";
import Image from "next/image";
interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => (
  <div className="flex content-center justify-center align-middle">
    <nav className="fixed inset-x-0 z-10 bg-white opacity-90 space-x-0">
      <div className="flex justify-center lg:space-x-24">
        {buttons.map((but, ind) => (
          <NavigationButton key={ind} name={but.name} dest={but.dest} />
        ))}
      </div>
    </nav>
    <div className="pt-16 bg-gray-50 md:hidden lg:hidden">
    <Image
      src={"/joy_logo.png"}
      objectFit="contain"
      layout="fixed"
      width={375}
      height={100}
    />
    </div>
    <div className="pb-20"></div>
    <div className="hidden pt-20 md:visible lg:inline-block">
      <Image
        src={"/header.png"}
        objectFit="contain"
        layout="fixed"
        width={1400}
        height={283}
      />
    </div>
  </div>
);

interface NavigationButtonProps {
  name: string;
  dest: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ name, dest }) => (
  <div className="flex items-center inline-block h-14 lg:h-20 hover:underline">
    <Link href={dest}>
      <a className="text-center w-28 lg:w-36 text-l lg:text-2xl">{name}</a>
    </Link>
  </div>
);
const buttons = [
  {
    name: "About",
    dest: "/about",
  },
  {
    name: "Home",
    dest: "/",
  },
  {
    name: "Get Involved",
    dest: "/getInvolved",
  },
];

export default Navigation;
