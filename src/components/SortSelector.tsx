import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string;
}

const SortSelector = ({ onSelectedSortOrder, selectedSortOrder }: Props) => {
  const sortOrders = [
    { label: "Relevance", value: "" },
    { label: "Popularity", value: "-metacritic" },
    { label: "Name", value: "name" },
    { label: "Rating", value: "-rating" },
    { label: "Added Date", value: "-added" },
    { label: "Released Date", value: "-released" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By:{" "}
        {
          sortOrders.find((sortOrder) => sortOrder.value === selectedSortOrder)
            ?.label
        }
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            key={sortOrder.value}
            onClick={() => onSelectedSortOrder(sortOrder.value)}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
