import Item from "../Item/Item";

const History = (props) => {
  const render = props.data.items.map((i) => {
    return <Item name={i.name} amount={i.amount} />;
  });
  return render;
};

export default History;
