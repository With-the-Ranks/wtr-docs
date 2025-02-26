import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Spoke Texters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Documentation on how to navigate Spoke as a texter
      </>
    ),
    url: 'docs/category/spoke-texters'
  },
  {
    title: 'Spoke Admins',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        How to configure and run campaigns as a Spoke admin
      </>
    ),
    url: 'docs/category/spoke-admin'
  },
];

function Feature({Svg, title, description, url}) {
  return (
    <a className={clsx('col col--6')} href={url}>
      <div>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p className='text--center'>{description}</p>
        </div>
      </div>
    </a>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
