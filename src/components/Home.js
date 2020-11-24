/**@jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import { useEffect, useState } from 'react';

import Model from './Model';
import PostCard from './PostCard';

const Home = () => {
  const [meshColor, setMeshColor] = useState('#333333');

  const [colorMode] = useColorMode();
  useEffect(() => {
    if (colorMode === 'default') {
      setMeshColor('#333333');
    } else {
      setMeshColor('#ffffff');
    }
  }, [colorMode, meshColor]);

  return (
    <div>
      <div
        sx={{
          display: 'flex',
          p: [3, 3, 3],
          mt: [8, 8, 8],
          flexDirection: ['column', 'column', 'row'],
          maxWidth: ['container', 'container', 'container'],
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '470px',
            p: 3,
          }}
        >
          <h1>Oyefeso Oluwatunmise</h1>
          <p>
            Some of you call me Supreme Leader. 
          </p>
          <p>
            Currently galivanting the surface of the earth trying to find purpose and have fun along the way.
          </p>
          <p>
            I have a lot of interest in tech start-ups and politics.
          </p>
          <p>
            I promise, I also know how to reverse linked list too.
          </p>
        </div>
        <div css={{ canvas: { outline: 'none' } }}>
          <Model meshColor={meshColor} />
        </div>
      </div>
      <div
        sx={{
          p: 5,
          maxWidth: ['470px', '470px', '470px'],
        }}
      >
        <h3 sx={{ p: 1 }}>Latest Post</h3>
        <PostCard />
      </div>
    </div>
  );
};

export default Home;
