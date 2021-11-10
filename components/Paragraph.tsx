interface ParagraphProps {}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => (
  <p className="max-w-2xl pt-5 text-xl lg:leading-10">
    {children}
  </p>
);
export default Paragraph;
