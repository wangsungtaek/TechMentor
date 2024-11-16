import "./ComButton.css";

const ComButton = ({ text, type, block, disable, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        ComButton ComButton_${type}
        ${block ? "ComButton_block" : ""}
      `}
    >
      {text}
    </button>
  );
};

export default ComButton;
