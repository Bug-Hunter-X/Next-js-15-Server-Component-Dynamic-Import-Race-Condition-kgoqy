// bug.js
async function MyServerComponent() {
  const promises = Array.from({ length: 5 }, (_, i) => 
    fetch(`/api/data?id=${i + 1}`).then((res) => res.json())
  );

  const data = await Promise.all(promises); //Fixed Line
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default MyServerComponent;

// bugSolution.js
async function MyServerComponent() {
  const data = [];
  for (let i = 0; i < 5; i++) {
    const res = await fetch(`/api/data?id=${i + 1}`);
    const item = await res.json();
    data.push(item);
  }
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default MyServerComponent;