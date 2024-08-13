import React, { useState } from 'react';
import { FaClock, FaDollarSign, FaWalking } from 'react-icons/fa';
import { MdTimer } from 'react-icons/md';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  width: 300px;
`;

const Title = styled.h2`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const ClearAll = styled.span`
  color: #00aaff;
  cursor: pointer;
  font-size: 0.9em;
  float: right;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 150px;
`;

const Radio = styled.input`
  margin-right: 150px;
`;

const Icon = styled.div`
  margin-left: 100px;
  color: #00aaff;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Divider = styled.div`
  margin: 20px 0;
  border-bottom: 1px solid #e0e0e0;
`;

const SortBy = ({ label, value, icon, checked, onChange }) => (
  <Option>
    <Radio
      type="radio"
      name="sortby"
      value={value}
      checked={checked}
      onChange={onChange}
    />
    {label}
    <Icon>{icon}</Icon>
  </Option>
);

const FilterOption = ({ label, value, count, checked, onChange }) => (
  <Option>
    <Checkbox
      type="checkbox"
      value={value}
      checked={checked}
      onChange={onChange}
    />
    {label}
    <span style={{ marginLeft: 'auto' }}>{count}</span>
  </Option>
);

const FilterComponent = () => {
  const [sortBy, setSortBy] = useState('');
  const [filters, setFilters] = useState({
    '12:01 - 18:00': false,
    'After 18:00': false,
  });

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.value]: e.target.checked,
    });
  };

  const handleClearAll = () => {
    setSortBy('');
    setFilters({
      '12:01 - 18:00': false,
      'After 18:00': false,
    });
  };

  return (
    <Container>
      <Title>
        Sort by
        <ClearAll onClick={handleClearAll}>Clear all</ClearAll>
      </Title>
      <SortBy
        label="Earliest departure"
        value="earliest"
        icon={<FaClock />}
        checked={sortBy === 'earliest'}
        onChange={handleSortChange}
      />
      <SortBy
        label="Lowest price"
        value="lowest"
        icon={<FaDollarSign />}
        checked={sortBy === 'lowest'}
        onChange={handleSortChange}
      />
      <SortBy
        label="Close to departure point"
        value="departurePoint"
        icon={<FaWalking />}
        checked={sortBy === 'departurePoint'}
        onChange={handleSortChange}
      />
      <SortBy
        label="Close to arrival point"
        value="arrivalPoint"
        icon={<FaWalking />}
        checked={sortBy === 'arrivalPoint'}
        onChange={handleSortChange}
      />
      <SortBy
        label="Shortest ride"
        value="shortest"
        icon={<MdTimer />}
        checked={sortBy === 'shortest'}
        onChange={handleSortChange}
      />
      <Divider />
      <Title>Departure time</Title>
      <FilterOption
        label="12:01 - 18:00"
        value="12:01 - 18:00"
        count={13}
        checked={filters['12:01 - 18:00']}
        onChange={handleFilterChange}
      />
      <FilterOption
        label="After 18:00"
        value="After 18:00"
        count={8}
        checked={filters['After 18:00']}
        onChange={handleFilterChange}
      />
    </Container>
  );
};

export default FilterComponent;
