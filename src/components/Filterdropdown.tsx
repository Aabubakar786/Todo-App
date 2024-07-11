import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import styled from 'styled-components';

interface FilterOption {
  value: 'all' | 'complete' | 'incomplete';
  label: string;
}

interface FilterDropdownProps {
  options: FilterOption[];
  onSelect: (option: FilterOption) => void;
  children?: React.ReactNode;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<FilterOption | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: FilterOption) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <Dropdown>
      <DropdownButton onClick={toggleDropdown}>
        <FaFilter />
        <span>Filter</span>
        <DropdownIcon isOpen={isOpen}>▼</DropdownIcon>
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {options.map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => handleOptionSelect(option)}
              isSelected={selectedOption?.value === option.value}
            >
              <RadioButton checked={selectedOption?.value === option.value} />
              {option.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </Dropdown>
  );
};

const StyledFilterButton: React.FC<any> = ({handleFilterSelect}) => {
  const filterOptions: FilterOption[] = [
    { value: 'all', label: 'All' },
    { value: 'complete', label: 'Completed' },
    { value: 'incomplete', label: 'Incomplete' },
  ];

//   const handleFilterSelect = (option: FilterOption) => {
//     console.log(`Selected filter: ${option.value}`);
//   };

  return (
    <FilterDropdown options={filterOptions} onSelect={handleFilterSelect}>
      <FaFilter className="" />
    </FilterDropdown>
  );
};

export default StyledFilterButton;

// Styled components
const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #f0f0f0;
  border: 1px solid #d0d0d0;
  border-radius: 0.25rem;
  cursor: pointer;
`;

const DropdownIcon = styled.span<{ isOpen: boolean }>`
  margin-left: 0.5rem;
  transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0')});
  transition: transform 0.3s ease;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  width: 200px;
  background-color: #fff;
  border: 1px solid #d0d0d0;
  border-radius: 0.25rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? '#f0f0f0' : 'transparent')};

  &:hover {
    background-color: #f0f0f0;
  }
`;

const RadioButton = styled.div<{ checked: boolean }>`
  width: 16px;
  height: 16px;
  border: 1px solid #d0d0d0;
  border-radius: 50%;
  margin-right: 0.5rem;
  background-color: ${({ checked }) => (checked ? '#007bff' : 'transparent')};
`;