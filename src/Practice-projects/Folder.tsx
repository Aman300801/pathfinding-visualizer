import { useState } from "react";
import "./index.css";

interface Structure {
  name: string;
  children?: Structure[];
  isFolder?: boolean;
}

export default function Folder({ element }: { element: Structure }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="ps-3">
      {element.isFolder && (
        <h1 className="ps-3" onClick={() => setIsOpen(!isOpen)}>
          {element.name}
        </h1>
      )}
      {element.isFolder ? (
        isOpen &&
        element.children?.map((ele) => (
          <>
            <Folder key={ele.name} element={ele} />
          </>
        ))
      ) : (
        <p className="ps-3">{element.name}</p>
      )}
    </div>
  );
}
