import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Progress = ({ location: { pathname } }) => {
  const isFirstStep = pathname === '/';
  const isSecondStep = pathname === '/second';
  const isThirdStep = pathname === '/third';
  const isUsersList = pathname === '/userlist';

  return (
    <React.Fragment>
      <div className='steps'>
        <div className={`${isFirstStep ? 'step active' : 'step'}`}>
          <div>1</div>
          <div>
            {isSecondStep || isThirdStep ? (
              <Link to='/'>Step 1</Link>
            ) : (
              'Step 1'
            )}
          </div>
        </div>
        <div className={`${isSecondStep ? 'step active' : 'step'}`}>
          <div>2</div>
          <div>{isThirdStep ? <Link to='/second'>Step 2</Link> : 'Step 2'}</div>
        </div>
        <div className={`${pathname === '/third' ? 'step active' : 'step'}`}>
          <div>3</div>
          <div>Step 3</div>
        </div>
        <div className={`${isUsersList ? 'step active' : 'step'}`}>
          <div>4</div>
          <div>
            {isUsersList ? (
              <Link to='/'>Go to First Page</Link>
            ) : (
              'Go to First Page'
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Progress);
