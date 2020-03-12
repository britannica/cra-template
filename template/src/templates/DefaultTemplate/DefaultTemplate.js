import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ChildrenProp from '../../prop-types/ChildrenProp';
import styles from './DefaultTemplate.module.scss';

const DefaultTemplate = ({ children }) => (
  <Fragment>
    <Helmet defaultTitle="Britannica Beyond" titleTemplate="%s | Britannica Beyond" />
    <Header className={styles.header} />
    <main className={classnames(styles.content, 'mt-4')}>
      {children}
    </main>
    <Footer className={styles.footer} />
  </Fragment>
);

DefaultTemplate.propTypes = {
  children: ChildrenProp.isRequired,
};

export default DefaultTemplate;
