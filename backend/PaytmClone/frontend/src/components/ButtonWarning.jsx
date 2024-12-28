export const ButtonWarning = ({ name, warning, navigate, to }) => {
  return (
    <div>
      <span className="font-medium">{name}</span>
      <button
        className="ml-3 underline"
        onClick={() => {
          navigate(`${to}`);
        }}
      >
        {warning}
      </button>
    </div>
  );
};
