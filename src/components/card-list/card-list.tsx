import { Monster } from "../../App";
import { Card } from "../card/Card";

import "./card-list.css";

type cardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: cardListProps) => (
  <div className='card-list'>
    {monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
export default CardList;
