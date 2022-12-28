import React from "react";
import Header from './Layout/Header'
import Layout from './Layout/Layout'
import MainPage from './Main/MainPage'
import Form from './Form/Form'

const Bannerify = () => {
  return (
    <React.Fragment>
      <Header />
      <Layout>
        <MainPage />
        <Form />
      </Layout>
    </React.Fragment>
  );
};

export default Bannerify;
