import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';

import clsx from 'clsx';

import styles from './styles.module.css';

const features = [
  {
    title: 'Less to Learn',
    content:
      "You don't need to learn and configure many build tools. Instant reloads help you focus on development. When it's time to deploy, your bundles are optimized automatically.",
  },
  {
    title: 'Write components',
    content:
      'React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.',
  },
  {
    title: 'Create user',
    content:
      'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      permalink={'/'}
      description={'Set up a modern web app by running one command.'}
    >
      <div className={clsx('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <img
            className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
            alt="Create React App logo"
            src={useBaseUrl('img/logo.svg')}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.getStarted}>
            <Link
              className="button button--outline button--primary button--lg"
              to={useBaseUrl('blog')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      {features && features.length && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title, content }, idx) => (
                <div key={idx} className={clsx('col col--4', styles.feature)}>
                  <h2>{title}</h2>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
     
    <div className={styles.gettingStartedSection}>
  <div className="container padding-vert--xl">
    <div className="row">
      {/* Get started in seconds */}
      <div className="col col--6">
        <h2>Go full-stack with a framework</h2>
        <p>
        React is a library. It lets you put components together, but it
              doesn’t prescribe how to do routing and data fetching. To build an
              entire app with React, we recommend a full-stack React framework
              like <Link href="https://nextjs.org">Next.js</Link> or{' '}
              <Link href="https://remix.run">Remix</Link>.
        </p>
      
      </div>

      {/* Easy to Maintain */}
      <div className="col col--6">
        <h2>Use the best from every platform</h2>
        <p>
        People love web and native apps for different reasons. React
                lets you build both web apps and native apps using the same
                skills. It leans upon each platform’s unique strengths to let
                your interfaces feel just right on every platform.
        </p>
      </div>
    </div>
  </div>
</div>
</Layout>
  );
}

export default Home;
