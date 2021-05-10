import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const MyContext = createContext();

function Provider({ children }) {
  const [user, setUser] = useState();
  const [validate, setValidate] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [score, setScore] = useState(0);
  const [ask, setAsk] = useState(0);

  const value = {
    user,
    setUser,
    validate,
    setValidate,
    redirect,
    setRedirect,
    score,
    setScore,
    ask,
    setAsk,
  };

  return (
    <MyContext.Provider value={ value }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MyContext, Provider };
