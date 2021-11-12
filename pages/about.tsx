import Head from "next/head";
import Main from "../components/Main";
import Navigation from "../components/navigation";
import Paragraph from "../components/Paragraph";
import PSection from "../components/PSection";

export default function About() {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Joy Clinic, bringing help to underrepresented communities in Oklahoma"
        />
        <title>Joy Clinic - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Main>
        <PSection alt={false} title="About" image="/about.jpg">
          <Paragraph>
            J.O.Y – The Free Resources Clinic is a faith-based organization
            providing free information and health resources to those who are
            either uninsured or underinsured and without access to available
            care services in the Oklahoma City community. It becomes even more
            profound on vulnerability and unmet health care.
          </Paragraph>
        </PSection>
      </Main>
    </div>
  );
}
