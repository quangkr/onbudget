import React from "react";
import cn from "classnames";
import { connect } from "react-redux";

import { ToastNotification } from "carbon-components-react";

import { deleteNotification } from "./NotificationActions";

const Notification = ({
  id,
  subtitle = "",
  type = "info",
  deleteThisNotification,
}) => {
  const handleDelete = () => {
    deleteThisNotification(id);
  };

  const title = type[0].toUpperCase() + type.substr(1);

  return (
    <ToastNotification
      className={cn("Notification", `Notification--${type}`)}
      kind={type}
      lowContrast
      role="alert"
      title={title}
      subtitle={subtitle}
      caption={false}
      onCloseButtonClick={handleDelete}
    />
  );
};

const mapDispatchToProps = {
  deleteThisNotification: deleteNotification,
};

export default connect(null, mapDispatchToProps)(Notification);