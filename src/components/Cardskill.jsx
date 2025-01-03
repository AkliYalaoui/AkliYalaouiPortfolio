const Cardskill = ({ children }) => {
  return (
    <article
      className="p-3 rounded shadow-inner w-64 m-1 border border-gray-600 transform transition hover:scale-105"
      style={{ backgroundColor: "rgb(14, 14, 14)" }}
    >
      {children}
    </article>
  );
};

export default Cardskill;
