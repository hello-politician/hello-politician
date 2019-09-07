import MPCard from "./MPCard";

const MPList = ({ mpList }) =>
  mpList && mpList.map(mp => <MPCard key={mp.id} mp={mp} />);

export default MPList;
