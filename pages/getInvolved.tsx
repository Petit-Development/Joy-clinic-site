import Head from "next/head";
import Main from "../components/Main";
import Navigation from "../components/navigation";
import Paragraph from "../components/Paragraph";
import PSection from "../components/PSection";

export default function GetInvolved() {
  return (
    <div>
      <Head>
        <title>Joy Clinic - Get Involved</title>
        <meta name="description" content="Get involved with the JOY Clinic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Main>
        <PSection alt={false} title="Get Involved" image="/getInvolved1.jpg">
          <Paragraph>
            <h1>Ways to Get Involved in our Community with J.O.Y.!</h1>
            <ul className="p-8 text-left list-disc">
              <li>
                Volunteer. A great way to meet new people is to take on
                volunteering opportunities in our community events.
              </li>
              <li>
                Sponsor a local team or organization's project of your choice.
              </li>
              <li>
                Give a part of your proceeds/in kind to our local charity.
              </li>
              <li>Join our events.</li>
              <li>Become a mentor to a school or university students.</li>
              <li>Teach our class at a community center.</li>
              <li>Be an ambassador for the Diabetes World Day.</li>
              <li>Visit the elderly suffering a chronic condition.</li>
              <li>Do fundraising for a J.O.Y. project you believe in.</li>
            </ul>
          </Paragraph>
        </PSection>
        <PSection alt={true} title="How to Volunteer" image="/getInvolved2.jpg">
          <Paragraph>
            <ul className="p-8 text-left list-disc lg:p-0 lg:text-right lg:list-none">
              <li>Decide which area you care about.</li>
              <li>Identify the skills and knowledge you can offer.</li>
              <li>Create a volunteer resume.</li>
              <li>Determine how often you can volunteer.</li>
              <li>
                Research volunteer opportunities in our community at risk.
              </li>
              <li>Consider using our volunteer link.</li>
              <li>Get all the relevant details for the volunteer position.</li>
              <li>Engage the Power of Social Media.</li>
              <li>Find Like-Minded People.</li>
            </ul>
          </Paragraph>
        </PSection>
      </Main>
    </div>
  );
}
