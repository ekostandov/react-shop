import PropTypes from 'prop-types';

const Main = ({ children }) => (
  <main className='main'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-3'>Filter</div>
        <div className='col-lg-9'>{children}</div>
      </div>
    </div>
  </main>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
