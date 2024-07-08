import React from 'react';

function Button({title, onClick}) {
  return (
    <button type="submit" onClick={onClick} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
      {title}
    </button>
  );
}

export default Button;
