import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedOrder: (sort: string) => void;
  selectedOrder: string;
}

const OrderMenu = ({ onSelectedOrder, selectedOrder }: Props) => {
  const orderBy = [
    { value: "", label: "Relavance" },
    { value: "name", label: "Name" },
    { value: "-name", label: "Name DESC" },
    { value: "-released", label: "Date Released" },
    { value: "-added", label: "Date Added" },
    { value: "-created", label: "Date Created" },
    { value: "-updated", label: "Date Updated" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "Metacritic" },
  ];

  const currentOrder = orderBy.find((order) => order.value === selectedOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentOrder?.label || "Relevance"}
      </MenuButton>

      <MenuList>
        {orderBy.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectedOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default OrderMenu;
