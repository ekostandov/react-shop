import PropTypes from 'prop-types';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import Footer from 'components/Footer/Footer';

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
