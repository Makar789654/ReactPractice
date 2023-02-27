export default function Card({ item }) {
  return (
    <div className="characters" key={item.id}>
    <li>
      <img src={item.image} />
      {item.name} 
      {item.gender}
    </li>
  </div>
  );
}
// const newRick = data?.results.filter((item) => item.name.toLowerCase().includes(searchName.toLowerCase())).map((item) => (
//   <div className="characters" key={item.id}>
//     <li>
//       <img src={item.image} />
//       {item.name} 
//       {item.gender}
//     </li>
//   </div>
// ));