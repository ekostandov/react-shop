import PropTypes from 'prop-types';
import Header from 'App/Header/Header';
import Main from 'App/Main/Main';
import Footer from 'App/Footer/Footer';

const MainLayout = ({ children }) => (
  <div className='App'>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
