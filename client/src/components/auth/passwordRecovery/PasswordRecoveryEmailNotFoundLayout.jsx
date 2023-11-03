import { Button, Result } from "antd";
import { NavLink } from "react-router-dom";

export default function PasswordRecoveryEmailNotFoundLayout() {
  return (
    <Result
      status="warning"
      title="There are some problems with your operation."
      extra={
        <NavLink to="/login">
          <Button type="primary" key="console">
            Go Back
          </Button>
        </NavLink>
      }
    />
  );
}
