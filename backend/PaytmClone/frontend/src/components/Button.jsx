export const Button = ({ name, onClick }) => {
  return (
    <button
      className="bg-black px-24 py-2 text-white rounded-md mt-5 mb-4"
      onClick={onClick}
    >
      {name}
    </button>
  );
};
