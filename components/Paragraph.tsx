interface ParagraphProps {}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => (
  <p className="hidden max-w-2xl pt-10 text-2xl lg:inline-block leading-10">
    {children}
  </p>
);
export default Paragraph;
