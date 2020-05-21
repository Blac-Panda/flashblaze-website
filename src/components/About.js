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
            I'm a Software Engineer who likes to work with{' '}
            <b>React</b>, but I also love exploring other tools.
            Hence the nickname codeXplorer. Check out my various projects on{' '}
            <Link
              href="https://github.com/Blac-Panda"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="GitHub"
            >
              GitHub
            </Link>
            . <br />I am also curious about data structures and algorithms{' '}
            , check out my data structures and algorithms projects{' '}
            <Link
              href="https://github.com/Blac-Panda/Udacity-DSA-Nanodegree"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="yts-downloader link"
            >
            created during my Nanodegree. 
            </Link>{' '}
            I'm currently the open-source admin of a gaming platform for west-african gamers called {' '}
            Stardome. You can find the repo{' '}
            <Link
              href="https://github.com/Stardome-Team/Stardome-Web"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Hacker News Reader link"
            >
              on Github
            </Link>{' '}
          </p>
          <p>
            When I'm not coding, you could find me co-hosting the {' '}
            <Link
              href="https://www.twitter.com/radiomonkeysng"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Hacker News Reader link"
            >
              Radio Monkeys Podcast
            </Link>{' '}
          </p>
        </div>
      </div>

      <div sx={{ mt: 7 }}>
        <h2>Contact me</h2>
        <p>
          Get in touch:{' '}
          <Link href="mailto:oyefesotunmise@gmail.com">
            <i>oyefesotunmise@gmail.com</i>
          </Link>
        </p>
        <p>Find me here:</p>
        <ul>
          <li>
            <Link
              href="https://github.com/Blac-Panda"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="GitHub link"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/oluwatunmise-oyefeso/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="LinkedIn link"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="https://instagram.com/oyefeso_"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Instagram link"
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/oyefesotunmise"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Twitter link"
            >
              Twitter
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
