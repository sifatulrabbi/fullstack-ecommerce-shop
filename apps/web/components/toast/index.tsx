import React from "react";
import {FaTimes} from "react-icons/fa";

interface Props {
  message: string;
  severity?: "error" | "ok" | "warn";
  show?: boolean;
}

export const Toast: React.FC<Props> = ({message, severity, show}) => {
  const [active, setActive] = React.useState(show);

  React.useEffect(() => {
    setActive(show);
  }, [show]);

  return (
    <div
      className={`toast ${severity ? severity : "neutral"} ${
        show ? "show" : "hide"
      }`}
    >
      <p className="toast-text">{message}</p>
    </div>
  );
};
