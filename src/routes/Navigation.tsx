import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from 'react-router-dom';

import { DynamicFormPage, FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterFormikPage, RegisterPage } from '../03-forms/pages/index';
  
import logo from '../logo.svg';
  
  export const Navigation = () => {
    return (
      <div>
        <Router>
          <div className="main-layout">
            <nav>
                <img src={ logo } alt="React Logo" />
              <ul>
                <li>
                  <NavLink to="/register" activeClassName="nav-active" exact>Register Page</NavLink>
                </li>
                <li>
                  <NavLink to="/registerFormikPage" activeClassName="nav-active" exact>Register Formik Page</NavLink>
                </li>
                <li>
                  <NavLink to="/formikBasic" activeClassName="nav-active" exact>Formik Basic</NavLink>
                </li>
                <li>
                  <NavLink to="/formikYup" activeClassName="nav-active" exact>Formik Yup</NavLink>
                </li>
                <li>
                  <NavLink to="/formikComponents" activeClassName="nav-active" exact>Formik Components</NavLink>
                </li>
                <li>
                  <NavLink to="/formikAbstraction" activeClassName="nav-active" exact>Formik Abstraction</NavLink>
                </li>
                <li>
                  <NavLink to="/dynamicFormPage" activeClassName="nav-active" exact>Dynamic Form Page</NavLink>
                </li>
              </ul>
            </nav>
    
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/register">
                <RegisterPage />
              </Route>
              <Route path="/registerFormikPage">
                <RegisterFormikPage />
              </Route>
              <Route path="/formikBasic">
                <FormikBasicPage />
              </Route>
              <Route path="/formikYup">
                <FormikYupPage />
              </Route>
              <Route path="/formikComponents">
                <FormikComponents />
              </Route>
              <Route path="/formikAbstraction">
                <FormikAbstraction />
              </Route>
              <Route path="/dynamicFormPage">
                <DynamicFormPage />
              </Route>
              <Route path="/">
                <h1>Home</h1>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
