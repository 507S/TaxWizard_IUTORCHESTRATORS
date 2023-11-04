import { Button, Result } from "antd";
import { NavLink } from "react-router-dom";

export default function PasswordRecoveryEmailNotFoundLayout() {
  return (
    <Result
      status="warning"
      title="Email Not Found."
      subTitle="Sorry, We didn't found any registered email with this provided data. Please make sure you have provided the right email."
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
