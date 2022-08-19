function UserCard({name, saldo, married, addres, greet}) {
  console.log(name, saldo, married,addres, greet);
  return (
    <div>
      <h1>{name}</h1>
      <p>Su Saldo es de {saldo}💵</p>
      <p>{married ? "Is married" : "Is single"}</p>
        <ul>
        <li>
            City: {addres.city}
        </li>
        <li>
            Street: {addres.street}
        </li>
    </ul>
    </div>
   
  );
}

export default UserCard;
