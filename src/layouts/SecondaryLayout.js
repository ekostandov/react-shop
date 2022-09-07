import PropTypes from 'prop-types';
import Main from 'components/Main/Main';

const SecondaryLayout = ({ children }) => (
  <div className='App'>
    <Main>{children}</Main>
  </div>
);

SecondaryLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SecondaryLayout;
