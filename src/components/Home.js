import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
import s from '../styles/home.style';

export default function Home() {
  const repoReadmeLink = text => (
    <Interactive
      as="a"
      {...s.link}
      href="https://github.com/rafrex/spa-github-pages#readme"
    >{text}</Interactive>
  );

  return (
    <div>
      <p style={s.p}>Tugce Akin built this app as a freemium and an ad-supported app.</p>
      <p style={s.p}>This page is used to inform visitors regarding my policies with the collection, use, and
            disclosure of Personal Information if anyone decided to use my Service.</p>
      <p style={s.p}>If you choose to use my Service, then you agree to the collection and use of information in
            relation with this policy. The Personal Information that I collect are used for providing and
            improving the Service. I will not use or share your information with anyone except as described
            in this Privacy Policy.</p>

      <h2 style={s.header2}>Information Collection and Use</h2>
      <p style={s.p}>For a better experience while using this Service, I may require you to provide with certain
          personally identifiable information, including but not limited to email.
          The information that I request is will be retained by me and used as described in this privacy policy.</p>
      <p style={s.p}>The app does use third party services that may collect information used to identify you such as Google Analytics.</p>

      <h2 style={s.header2}>Log Data</h2>
      <p style={s.p}>I want to inform you that whenever you use my Service, in case of an error in the app I collect
            data and information (through third party products) on your phone. This data
            may include information such as your devices’s Internet Protocol (“IP”) address, device name,
            operating system version, configuration of the app when utilising my Service, the time and date
            of your use of the Service, and other statistics.</p>

      <h2 style={s.header2}>Cookies</h2>
      <p style={s.p}>Cookies are files with small amount of data that is commonly used an anonymous unique identifier.
            These are sent to your browser from the website that you visit and are stored on your devices’s
                  internal memory.</p>
      <p style={s.p}>The app may use third party code
            and libraries that use “cookies” to collection information and to improve their services.
            If you choose to refuse cookies, you may not be able to use some portions of
            this Service.</p>

      <h2 style={s.header2}>Service Providers</h2>
      <p style={s.p}>I may employ third-party companies and individuals due to the following reasons: To facilitate the Service,
           to provide the Service on my behalf, to perform Service-related services, to assist me in analyzing how the Service is used.</p>
      <p style={s.p}>I want to inform users of this Service that these third parties may have access to your Personal
            Information. The reason is to perform the tasks assigned to them on our behalf. However, they
            are obligated not to disclose or use the information for any other purpose.</p>

      <h2 style={s.header2}>Security</h2>
      <p style={s.p}>I value your trust in providing your Personal Information, thus I am striving to use
            commercially acceptable means of protecting it. But remember that no method of transmission over
            the internet, or method of electronic storage is 100% secure and reliable, and I cannot
            guarantee its absolute security.</p>

      <h2 style={s.header2}>Links to Other Sites</h2>
      <p style={s.p}>This Service may contain links to other sites. I have no control over, and
            assume no responsibility for the content, privacy policies, or practices of any third-party
            sites or services.</p>

      <h2 style={s.header2}>Children’s Privacy</h2>
      <p style={s.p}>This Service do not address anyone under the age of 13. I do not knowingly collect personal
            identifiable information from children under 13. If you
            are a parent or guardian and you are aware that your child has provided personal
            information, please contact me so that I will be able to do necessary actions.</p>

      <h2 style={s.header2}>Changes to This Privacy Policy</h2>
      <p style={s.p}>I may update this Privacy Policy from time to time. Thus, you are advised to review this page
            periodically for any changes.</p>

      <h2 style={s.header2}>Contact</h2>
      <p style={s.p}>If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact
            me at me@tuakin.com.</p>
      {/* <p style={s.p}>
        This is an example single page app built
        with React and React&nbsp;Router using {' '}
        <Code>BrowserRouter</Code>. Navigate with the links below and
        refresh the page or copy/paste the url to test out the redirect
        functionality deployed to overcome GitHub&nbsp;Pages incompatibility
        with single page apps (like this one).
      </p>
      <p style={s.p}>
        Please see the {repoReadmeLink('repo readme')} for instructions on how to
        use this boilerplate to deploy your own single page app using GitHub Pages.
      </p> */}
      {/* <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example"
        >Example page</Interactive>
      </div>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example/two-deep?field1=foo&field2=bar#boom!"
        >Example two deep with query and hash</Interactive>
      </div> */}
    </div>
  );
}
