import styled from '@emotion/styled';
import { useState } from 'react';
import { FaClock, FaDollarSign, FaWalking } from 'react-icons/fa';
import { MdTimer } from 'react-icons/md';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  width: 300px;
`;
const Title = styled.h2`
  font-size: 1.2em;
  margin-bottom: 10px;
`;
const Clearall = styled.div`
    float:right;
    color: #00aaff;
    cursor: pointer;
    font-size: 0.9em;
`;
const Option = styled.div`
    width:350px;
    display:flex;
    margin-top:40px;
    align-items:center;
`;
const Radio = styled.input`
    left:0;
    // width:10px;
    flex:50px;
`;
const Checkbox = styled.input`
    left:0;
    // width:10px;
    flex:50px;
`;
const Lable = styled.div`
flex:250px;
`;
const Icon = styled.div`
    color: #00aaff;
    margin-right:20px;
    flex:50px;
`;
const Sortby = ({ label, value, icon, checked, onChange }) => (
    <Option>
        <Radio
            type="radio"
            name="sortby"
            value={value}
            checked={checked}
            onChange={onChange}
        >
        </Radio>
        <Lable>{label}</Lable>
        <Icon>{icon}</Icon>
    </Option>
);
const Divider = styled.div`
  margin: 20px 0;
  border-bottom: 1px solid #e0e0e0;
`;

export default function Filter() {
    const [sortBy, setSortBy] = useState('');
    const [filters, setFilters] = useState({
        'verified': false,
      });
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };
    const handleClearAll = () => {
        setSortBy('');
        setFilters({
            'verified': false,
        })
    }
    const handleFilterChange = (e) => {
        setFilters({
          ...filters,
          [e.target.value]: e.target.checked,
        });
      };
    return (
        <div>
            <Container>
                <Title>
                    Sort By
                    <Clearall onClick={handleClearAll}>Clear All</Clearall>
                </Title>
                <Sortby
                    label="Earliest departure"
                    value="earliest"
                    icon={<FaClock />}
                    checked={sortBy === 'earliest'}
                    onChange={handleSortChange}
                />
                <Sortby
                    label="Lowest price"
                    value="lowest"
                    icon={<FaDollarSign />}
                    checked={sortBy === 'lowest'}
                    onChange={handleSortChange}
                />
                <Sortby
                    label="Close to departure point"
                    value="departurePoint"
                    icon={<FaWalking />}
                    checked={sortBy === 'departurePoint'}
                    onChange={handleSortChange}
                />
                <Sortby
                    label="Close to arrival point"
                    value="arrivalPoint"
                    icon={<FaWalking />}
                    checked={sortBy === 'arrivalPoint'}
                    onChange={handleSortChange}
                />
                <Sortby
                    label="Shortest ride"
                    value="shortest"
                    icon={<MdTimer />}
                    checked={sortBy === 'shortest'}
                    onChange={handleSortChange}
                />
                <Divider />
                <Title>Trust and Safety</Title>
                <Option>
                    <Checkbox
                        type="checkbox"
                        value="verified"
                        checked={filters['verified']}
                        onChange={handleFilterChange}
                    />
                    <Lable>Verified Profile</Lable>
                    <Icon><VerifiedUserIcon/></Icon>
                </Option>
            </Container>
        </div>
    );
}