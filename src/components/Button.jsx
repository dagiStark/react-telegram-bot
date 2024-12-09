import PropTypes from "prop-types";

function Button({ title, type, disable, onClick }) {
  return (
    <button
      className={`w-10 font-medium text-center border-0 outline-none rounded-lg cursor-pointer shadow-custom
        ${
          type === "add"
            ? "bg-green-500"
            : type === "remove"
            ? "bg-red-500"
            : type === "checkout" && "bg-blue-500"
        }
        `}
      disabled={disable}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  disable: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
