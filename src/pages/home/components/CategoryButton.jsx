function CategoryButton({ active, onClick, children }) {
  return (
    <button 
      onClick={onClick}
      className={`border rounded-full px-4 py-2 transition-colors ${
        active 
          ? 'bg-black text-white border-black' 
          : 'border-black text-black hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
  );
}

export default CategoryButton; 