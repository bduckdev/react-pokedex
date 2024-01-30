import { useRef } from "react";

function SearchBar({ setName }) {
  const inputRef = useRef();

  function formHandler(e) {
    e.preventDefault();
    const value = inputRef.current.value.toLowerCase();
    setName(value);
  }

  return (
    <form
      className="flex justify-center gap-4 my-8"
      onSubmit={(e) => formHandler(e)}
    >
      <input
        type="text"
        className="border-2 border-nord3 rounded-md p-2 bg-nord6"
        placeholder="Search for a Pokemon"
        ref={inputRef}
      />
      <button
        className="border-2 rounded-lg border-nord3 p-2 bg-nord6"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
export default SearchBar;
