import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'
import Router from "next/router";
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
import CustomNavbar from "../CustomNavbar"


const store = configureStore();

class Layout extends React.Component {

  onRedirect = (path) => {
    Router.replace(path)
  };

  render() {
    return (
      <Provider store={ store }>
        <div>
          <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>

            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                  integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                  crossOrigin="anonymous"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
                  integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
                  crossOrigin="anonymous"/>
          </Head>

          <CustomNavbar/>

          <div className="container">
            {this.props.children}
          </div>
        </div>
      </Provider>
    );
  }
}

Layout.propTypes = {
    children: PropTypes.any,
};

export default Layout;
