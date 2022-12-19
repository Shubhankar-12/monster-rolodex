import { Monster } from "../../App";
import "./card.css";

type cardProps = {
  monster: Monster;
};

export const Card = ({ monster }: cardProps) => (
  <div className='card-container'>
    <img
      alt='monster'
      src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
    />
    <h2> {monster.name} </h2>
    <p> {monster.email} </p>
  </div>
);
