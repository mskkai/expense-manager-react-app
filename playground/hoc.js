console.log("HOC");

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Information</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private Info. Please don't share!!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Not authenticated.</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <div>
    <AdminInfo isAdmin={true} info="There are the private details" />
    <AuthInfo
      isAuthenticated={true}
      info="There are the authenticated details"
    />
  </div>,

  document.getElementById("app")
);
