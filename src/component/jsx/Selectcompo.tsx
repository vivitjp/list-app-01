import React from 'react';

const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
  if (!(e.target instanceof HTMLSelectElement)) return;

  if (e.currentTarget.name === "genre") {
    const genre: string = e.currentTarget.value;
    //setGenre(genre);
    //setPageNumber(1);
  }
}

const Selectcompo = () => {
  return (
    <select onChange={handleChange} name="genre" >
      <option value="A">A</option>
      <option value="A">B</option>
      <option value="A">C</option>
    </select>
  )
};

export default Selectcompo;



