import React from "react";
import Header from './Layout/Header'
import Layout from './Layout/Layout'
import MainPage from './Main/MainPage'
import Form from './Form/Form'
const Index = () => {
  return (
    <Fragment>
      <Header />
      <Layout>
        <MainPage />
        <Form />
      </Layout>
    </Fragment>
  );
};

export default Index;
