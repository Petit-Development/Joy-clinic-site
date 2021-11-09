interface PSectionProps {}

const PSection: React.FC<PSectionProps> = ({}) => (
  <div className="items-start flexjustify-around lg:flex lg:pt-10">
    <div className="flex justify-center lg:text-left lg:flex-col lg:justify-start">
      <TitledHeader text="Prevention" />
      <p className="hidden max-w-2xl pt-10 text-2xl lg:inline-block leading-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et aliquam sed
        varius fringilla sed quis. Sapien porttitor risus laoreet arcu. Tempus
        commodo augue et amet eleifend. Sodales massa mollis sodales nunc,
        tellus at commodo diam arcu.
      </p>
    </div>

    <div className="flex justify-center lg:filter lg:drop-shadow-xl lg:ml-24 mt-7 ">
      <img
        className="object-cover lg:border-4 lg:border-black"
        src="/prevention.jpg"
        height={300}
        width={700}
      />
    </div>
    <p className="pt-5 pl-4 pr-4 text-xl text-center lg:hidden">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et aliquam sed
      varius fringilla sed quis. Sapien porttitor risus laoreet arcu. Tempus
      commodo augue et amet eleifend. Sodales massa mollis sodales nunc, tellus
      at commodo diam arcu.
    </p>
  </div>
);
export default PSection;

const TitledHeader = ({text} : {text: string}) => (
  <h1 className="text-2xl border-b-2 border-red-400 lg:h-14 lg:text-4xl">
    {text}
  </h1>
);
