import React from "react";
import Cat from "../../interface/Cat";
import "./index.css";
import { fetchCatList } from "../../services/catService";
export const Gallery = () => {
  const [cats, setCats] = React.useState<Cat[]>([]);
  async function fetchAPI() {
    let response = await fetchCatList();
    setCats(response);
  }
  React.useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <div>
      <div>
        <div className="flex flex-wrap gap-1 min-height-90">
          {cats &&
            cats.map((cat) => (
              <img
                className="item rounded"
                key={cat.id}
                src={cat.url}
                alt="cat"
              />
            ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => fetchAPI()}
            className="rounded bg-black mt-2 p-2 text-white hover transition duration-1000 hover:scale-110"
          >
            Render new Gallery
          </button>
        </div>
      </div>
    </div>
  );
};
