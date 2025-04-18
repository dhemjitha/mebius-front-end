function CategoryButton({ category, isSelected, onClick }) {
  return (
    <button 
      onClick={() => onClick(category._id)}
      className={`border rounded-full px-4 py-2 transition-colors ${
        isSelected 
          ? 'bg-black text-white border-black' 
          : 'border-black text-black hover:bg-gray-100'
      }`}
    >
      {category.name}
    </button>
  );
}

export default CategoryButton; 