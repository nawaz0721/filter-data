function CategoriesChips({ category, isChosen, onClick }) {
  return (
    <div>
      <div
        onClick={onClick}
        className={`${
          isChosen ? "bg-yellow-500 text-black" : null
        } border border-purple-300 cursor-pointer hover:bg-yellow-100 hover:text-black p-2 px-4 rounded-md`}
      >
        <h1 className="chip-title"> {category.name} </h1>
      </div>
    </div>
  );
  s;
}
export default CategoriesChips;
