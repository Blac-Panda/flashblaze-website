/**@jsx jsx */
import { Link, jsx } from 'theme-ui';

const About = () => {
  // Month starts from 0
  const birthday = new Date(1997, 1, 6);
  const ageDiff = new Date(Date.now() - birthday.getTime());
  const age = Math.abs(ageDiff.getUTCFullYear() - 1970);

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: ['container', 'container', 'container'],
        p: [5, 5, 3],
        mt: [7, 7, 8],
      }}
    >
      <div>
        <h2>About me</h2>
        <div>
          <p>
            I'm a Software Engineer and Product Manager, currently galivanting the surface of the earth trying to find purpose and have fun along the way.
          </p>
          <p>
            I have a lot of interest in tech start-ups, I host free advisory and insight
            <Link
              href="https://oyefesotunmise.typeform.com/to/qIyFPczq"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="book session"
            >
              {' '}sessions.
            </Link>
          </p>
          <p>
            In my spare time, I like to play around with Figma, you can check out some of my designs 
            <Link
              href="https://www.behance.net/oyefesotunmise"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="book session"
            >
              {' '}here.
            </Link>
          </p>
        </div>
      </div>

      <div sx={{ mt: 7 }}>
        <h2>Work</h2>
        <ul>
          <li>
            <Link
              href="https://rdre.me"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Rdre link"
            >
              Rdre
            </Link>
            {' '}- a custom URL shortner that also provides user with detailed link statistics and social media engagement statistics.
          </li>
          <li>
            <Link
              href="https://www.urbanyooba.com/yoodict"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Urbanyooba link"
            >
              Urbanyooba
            </Link>
            {' '}- an urban dictionary for keep track of slangs and social media trends. 
          </li>
          <li>
            <Link
              href="https://www.figma.com/proto/apqRbLxNvAYJxlPsUjvhqm/Untitled?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Help2Find link"
            >
              Help2Find
            </Link>
            {' '}- an open source platform to connect NGO with cases of missing persons across the country. 
          </li>
          <li>
            <Link
              href="https://stardome-wl.azurewebsites.net/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Stardome link"
            >
              Stardome
            </Link>
            {' '}- a competitive gaming platform for organizing tournaments. 
          </li>
          <li>
            <Link
              href="https://"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Rdre link"
            >
              WaveUs
            </Link>
            {' '}- a cross-platform logistics application with realtime user tracking.
          </li>
          <li>
            <Link
              href="https://panda-live.herokuapp.com/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Panda Clothing link"
            >
              Panda Clothing
            </Link>
            {' '}- An online clothing store, with payment via Stripe (This was my first React + Redux project).
          </li>
        </ul>
      </div>

      <div sx={{ mt: 7 }}>
        <h2>Writing</h2>
        <ul>
          <li>
            For all my articles both technical and non-technical, I do a decent amount of blogging in the
            <Link
              href="https://codexplorer.me/posts"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Help2Find link"
            >
              {' '}blog-section.
            </Link>
          </li>
          <li>
            For non-technical/product articles, check out my 
            <Link
              href="https://medium.com/tunmise-oyefesos-blog"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Medium link"
            >
              {' '}Medium Publication.
            </Link>
          </li>
          <li>
            I also work with some pretty amazing people to curate great stuff on culture and politics in Nigeria at  
            <Link
              href="https://medium.com/@mikiomaokilo"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="RM Medium link"
            >
              {' '}RadioMonkeys Podcast.
            </Link>
          </li>
          <li>
            I was featured on the   
            <Link
              href="https://codengine.gq/codexplorer.html"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="RM Medium link"
            >
              {' '}CodEngine Blog
            </Link>
            {' '}earlier this year (2020).
          </li>
        </ul>
      </div>

      <div sx={{ mt: 7 }}>
        <h2>Speaking</h2>
        <ul>
          <li>
            Watch my talk on 'Intro to Virtual Machines and Containers' at the Microsoft Student Learn Ambassadors, UNILAG online session
            <Link
              href="https://web.microsoftstream.com/video/9d658b53-5b53-47e2-a6c3-370376ab7508"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Azure talk link"
            >
              {' '}here.
            </Link>
          </li>
          <li>
            Watch my talk on 'No-code related opportunities in tech'
            <Link
              href="https://stdntpartners-my.sharepoint.com/personal/tolu_david_studentambassadors_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ftolu%5Fdavid%5Fstudentambassadors%5Fcom%2FDocuments%2FEventPublic%2FMLSA%20LAUTECH%20EVENT%2D20210605%5F100745%2DMeeting%20Recording%2Emp4&parent=%2Fpersonal%2Ftolu%5Fdavid%5Fstudentambassadors%5Fcom%2FDocuments%2FEventPublic&originalPath=aHR0cHM6Ly9zdGRudHBhcnRuZXJzLW15LnNoYXJlcG9pbnQuY29tLzp2Oi9nL3BlcnNvbmFsL3RvbHVfZGF2aWRfc3R1ZGVudGFtYmFzc2Fkb3JzX2NvbS9FU0F0Xzd6d3RlbEVnQklZZWV2TVo2NEJNeFY3bkMxc0pUUWljWE15ZXNheUJnP3J0aW1lPWxESDY0TDgxMlVn"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Nocode talk link"
            >
              {' '}here.
            </Link>
          </li>
          <li>
            I regularly go on the RadioMonkeys Podcast to rant about Nigeria,
            <Link
              href="https://audiomack.com/radio-monkeys"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="AudioMack link"
            >
              {' '}join hundreds of other weekly listeners.
            </Link>
          </li>
        </ul>
      </div>
      
      <div sx={{ mt: 7 }}>
        <h2>Misc</h2>
        <ul>
          <li>
            I like to give free advice and insights to start-ups, feel free to 
            <Link
              href="https://oyefesotunmise.typeform.com/to/qIyFPczq"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Azure talk link"
            >
              {' '}book a session.
            </Link>
          </li>
          <li>
            When I'm not working, I'm either taking very long walks or sleeping.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
