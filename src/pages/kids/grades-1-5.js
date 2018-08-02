import React from 'react';
import styled from 'react-emotion';
import Banner from '../../components/Banner';
import SmallImage from '../../components/SmallImage';
import Breadcrumbs from '../../components/Breadcrumbs';

import kidsLife from './kids-life.png';
import series from './whats-in-the-bible.jpg';

const title = 'Grades 1-5';

const Center = styled.div`
  margin: 0 auto;
`;

const Page = () => (
  <div>
    <Breadcrumbs
      path={[{title: 'Home', url: '/'}, {title: 'Kids'}]}
      title={title}
    />
    <h1>{title}</h1>

    <SmallImage src={kidsLife} />

    <p>
      The goal of Lifestone’s KID’S LIFE ministry is to teach kids truths of the
      Bible with age-appropriate, fun, interactive experiences taught by
      committed volunteers who serve Jesus by  serving you and your kids.
      Lifestone is committed not only to cementing the fundamentals of faith
      into the hearts and minds of children, but also equipping parents and
      getting families talking about Jesus together throughout their week.
    </p>

    <Banner>
      <h2>Current Series</h2>
    </Banner>

    <SmallImage center={true} src={series} />

    <p>
      Calling all 1st-5th graders! Buck Denver and his friends are on an
      adventure through the whole Bible – and you’re invited to come along! Join
      us as we learn all about the Bible, the world’s most important book –what
      it is, who wrote it, and why can we trust it!
    </p>

    <Banner>
      <h2>What to Expect</h2>
    </Banner>

    <p>
      When you walk in the door you’ll see signage directing you to your child’s
      check in. At the check in area, you will be greeted by a volunteer who
      will help you sign in your child. Our desire is for families to worship
      together, so when the worship music begins, your child’s teacher will
      bring children grades K-5 in to worship along side the adults before
      returning to the kids area for their kid-sized Bible lesson.
    </p>

    <p>
      *** Our secure environments are staffed with loving volunteers who have
      all submitted to extensive background checks and interviews.
    </p>
  </div>
);

export default Page;
