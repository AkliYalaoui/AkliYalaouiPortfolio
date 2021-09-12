const Cardskill = ({ children }) => {
  return (
    <article
      className="p-3 rounded shadow-inner w-56 m-1 border border-gray-600"
      style={{ backgroundColor: "rgb(14, 14, 14)" }}
    >
      {children}
    </article>
  );
};

export default Cardskill;
