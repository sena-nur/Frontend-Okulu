import React from "react";
import PropTypes from "prop-types";

function ListItem({ student, count }) {
  return (
    <li>
      {student} {count}
    </li>
  );
}

ListItem.propTypes = {
  student: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default ListItem;
