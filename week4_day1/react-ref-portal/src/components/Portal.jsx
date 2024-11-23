import ReactDOM from "react-dom";

const Portal = ({ target, text }) => {
  return ReactDOM.createPortal(<div> Selam Sena {text} </div>, target);
};

export default Portal;
