interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => (
  <nav className="fixed inset-x-0 bg-gray-100 opacity-75">
    {buttons.map((but) => (
      <NavigationButton name={but.name} dest={but.dest} />
    ))}
  </nav>
);

interface NavigationButtonProps {
  name: string;
  dest: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({}) => (
  <div>Sup</div>
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
