import Link from "next/link";
import Image from "next/image";
interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => (
  <div className="flex content-center justify-center align-middle">
    <nav className="fixed inset-x-0 z-10 opacity-90 space-x-0 bg-gray-50">
      <div className="flex justify-center lg:space-x-24 md:space-x-12 space-x-10">
        {buttons.map((but, ind) => (
          <NavigationButton key={ind} name={but.name} dest={but.dest} />
        ))}
      </div>
    </nav>
    <div className="pb-20"></div>
    <div className="hidden pt-24 md:visible lg:inline-block">
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
      <a className="w-20 text-center lg:w-40 text-l lg:text-2xl md:text-2xl">
        {name}
      </a>
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
