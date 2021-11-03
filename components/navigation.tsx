import Link from "next/link";
interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => (
  <nav className="fixed inset-x-0 bg-gray-100 opacity-75 space-x-0">
    <div className="flex justify-center lg:space-x-24 md:space-x-12 space-x-10 ">
      {buttons.map((but) => (
        <NavigationButton name={but.name} dest={but.dest} />
      ))}
    </div>
  </nav>
);

interface NavigationButtonProps {
  name: string;
  dest: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ name, dest }) => (
  <div className="flex items-center h-14 lg:h-20 hover:underline">
    <Link href={dest}>
      <a className="lg:text-2xl md:text-2xl">{name}</a>
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
