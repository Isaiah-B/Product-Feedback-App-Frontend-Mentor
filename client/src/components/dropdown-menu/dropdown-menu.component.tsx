import { ReactComponent as CheckIcon } from '../../assets/shared/icon-check.svg';

import useClickOutside from '../../hooks/useClickOutside';

import { DropdownMenuContainer, DropdownMenuItem } from './dropdown-menu.styles';

interface DropdownMenuProps {
  items: string[],
  selected: string,
  onClickOutside?: () => void,
  handleSelect: (itemName: string) => void,
}

function DropdownMenu({
  items,
  selected,
  onClickOutside,
  handleSelect,
}: DropdownMenuProps) {
  let ref = null;

  if (onClickOutside) {
    ref = useClickOutside(onClickOutside) as React.RefObject<HTMLUListElement>;
  }

  return (
    <DropdownMenuContainer ref={ref}>
      {
        items.map((item) => (
          <li key={item}>
            <DropdownMenuItem type="button" onClick={() => handleSelect(item)}>
              {item}
              {
                selected === item
                  ? <CheckIcon />
                  : null
              }
            </DropdownMenuItem>
          </li>
        ))
      }
    </DropdownMenuContainer>
  );
}

export default DropdownMenu;
