import MPCard from "./MPCard";
import styled from "styled-components";

const listMPs = [
  {
    id: 1,
    name: "Anahila Kanongata'a-Suisuiki",
    electorate: "Mount Albert",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ardern_Cropped.png/220px-Ardern_Cropped.png"
  },
  {
    id: 2,
    name: "Jacinda Ardern",
    electorate: "Mount Albert",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ardern_Cropped.png/220px-Ardern_Cropped.png"
  },
  {
    id: 3,
    name: "Jacinda Ardern",
    electorate: "Mount Albert",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ardern_Cropped.png/220px-Ardern_Cropped.png"
  },
  {
    id: 4,
    name: "Jacinda Ardern",
    electorate: "Mount Albert",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ardern_Cropped.png/220px-Ardern_Cropped.png"
  }
];

const MPList = ({ mpList }) => (
  <>{listMPs && listMPs.map(mp => <MPCard key={mp.id} mp={mp} />)}</>
);

export default MPList;
