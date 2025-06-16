import './ShinyText.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  return (
    <h3 className={className}>
      <span
        className={`shiny-text${disabled ? ' disabled' : ''}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {text}
      </span>
    </h3>
  );
};

export default ShinyText;
