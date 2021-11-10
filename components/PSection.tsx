interface PSectionProps {
  title: string;
  alt?: boolean;
  image: string;
}

const PSection: React.FC<PSectionProps> = ({
  title,
  alt = false,
  image,
  children,
}) => {
  const flippedOrdering = {
    initial: alt ? "lg:flex-row-reverse" : "",
    align: alt ? "lg:text-right pl-24 " : "",
    margined: alt ? "lg:mx-24" : "",
  };
  return (
    <div
      className={`${flippedOrdering.initial} items-start justify-center lg:flex lg:pt-10`}
    >
      <div
        className={`flex justify-center ${flippedOrdering.align} lg:flex-col lg:justify-start`}
      >
        <TitledHeader text={title} />
        {children}
      </div>

      <div className="flex justify-center lg:filter lg:drop-shadow-xl lg:ml-24 mt-7 ">
        <img
          className="self-start object-cover place-self-start place-content-start lg:border-4 lg:border-black"
          src={image}
          height={300}
          width={700}
        />
      </div>
      <p className="pt-5 pl-4 pr-4 text-xl text-center lg:hidden">{children}</p>
    </div>
  );
};
export default PSection;

const TitledHeader = ({ text }: { text: string }) => (
  <h1 className="text-2xl border-b-2 border-red-400 lg:h-14 lg:text-4xl">
    {text}
  </h1>
);
