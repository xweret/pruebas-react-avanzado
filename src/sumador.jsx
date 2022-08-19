function UserCard({name, saldo, married, addres}) {
  console.log(name);
  return (
    <div>
      <h1>{name}</h1>
      <p>Su Saldo es de {saldo}💵</p>
      <p>{married ? "is married" : "is single"}</p>
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
