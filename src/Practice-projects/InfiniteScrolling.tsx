export default function InfiniteScrolling({ list }: { list: number[] }) {
  return (
    <>
      {list.map(() => (
        <div
          className="card"
          style={{
            width: 100,
            height: 100,
            marginBlock: "10px",
            backgroundColor: "red",
          }}
        ></div>
      ))}
      ;
    </>
  );
}
