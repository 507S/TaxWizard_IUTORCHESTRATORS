
import { Button, Result } from "antd";
import { NavLink } from "react-router-dom";
const PasswordRecoveryResponseLayout = () => (
  <Result
    status="success"
    title="Password Recovered Successfully!"
    subTitle="A new password has been sent to your email. Please don't share it with anyone."
    extra={[
      <>
      
        <NavLink to="/login">
          <Button key="buy" type="primary">
            Go Back
          </Button>
        </NavLink>
      </>,
    ]}
  />
);
export default PasswordRecoveryResponseLayout;
