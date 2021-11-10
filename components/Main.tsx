interface MainProps {}

const Main: React.FC<MainProps> = ({ children }) => (
  <main className="pb-10 space-y-8 lg:pl-48 lg:pr-48 md:pl-28 md:pr-28">
    {children}
  </main>
);
export default Main;
