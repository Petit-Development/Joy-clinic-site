import Head from "next/head";
import Main from "../components/Main";
import Navigation from "../components/navigation";
import Paragraph from "../components/Paragraph";
import PSection from "../components/PSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joy Clinic - Home</title>
        <meta
          name="description"
          content="Joy Clinic, bringing help to underrepresented communities in Oklahoma"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Main>
        {sections.map((item, index) => (
          <PSection
            alt={index % 2 == 1}
            key={index}
            title={item.title}
            image={item.image}
          >
            {item.child}
          </PSection>
        ))}
      </Main>
    </div>
  );
}

const sections = [
  {
    title: "Prevention",
    image: "/prevention.jpg",
    child: (
      <Paragraph>
        J.O.Y. The Free Resources Clinic believes in Prevention. It is a
        healthcare choice that will answer questions/concerns with possible
        solutions and will make the health journey a healing one from inside and
        out. As we understand, healing is a process just as prevention is a
        process but when we prevent a disease early on, healing becomes
        something of the past.
      </Paragraph>
    ),
  },
  {
    title: "Intervention",
    image: "/intervention.jpg",
    child: (
      <Paragraph>
        At J.O.Y. The Free Resources Clinic, lnc., it refers to actions taken by
        our volunteers and health professional to directly provide service or
        support to at-need individuals.
      </Paragraph>
    ),
  },
  {
    title: "Advocacy",
    image: "/advocacy.jpg",
    child: (
      <Paragraph>
        At J.O.Y. The Free Resources Clinic. Inc., we seriously take this role -
        advocate and fight for the rights of those vulnerables and work to
        obtain needed resources by convincing others of the legitimate needs and
        rights of "the least of these" members of our community.
      </Paragraph>
    ),
  },
];
