function CategoriesChips({ category, isChosen, onClick }) {
  // const { name, slug, url } = category;
  return (
    <div>
      <div
        onClick={onClick}
        className={`${
          isChosen ? "bg-purple-500 text-white" : null
        } border border-purple-300 cursor-pointer hover:bg-purple-100 hover:text-black p-2 px-4 rounded-md`}
      >
        <h1 className="chip-title"> {category.name} </h1>
      </div>
    </div>
  );
  s;
}
export default CategoriesChips;
