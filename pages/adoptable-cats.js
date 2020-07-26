import { useState, useEffect } from "react";
import styled from "styled-components";

import Layout from "components/Layout";
import FilterCompound, {
  useFilterCompound,
} from "components/compounds/FilterCompound";

const S = {};

S.Layout = styled(Layout)``;

S.HeadingBlock = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: ${(p) => p.theme.size[32]};

  h1 {
    font-size: 3.875rem;
    font-weight: 300;
    color: ${(p) => p.theme.color.primary.main};
    margin-right: ${(p) => p.theme.size[32]};
  }

  svg {
    fill: ${(p) => p.theme.color.primary.main};
    width: ${(p) => p.theme.size[48]};
    height: ${(p) => p.theme.size[48]};
  }
`;

const filterOptions = [
  { key: "allCats", text: "All Cats" },
  { key: "femaleCats", text: "Female Cats" },
  { key: "maleCats", text: "Male Cats" },
  { key: "specialNeedsCats", text: "Special Needs Cats" },
];

const AdoptableCats = () => {
  const [activeOption, handleFilterClick] = useFilterCompound(filterOptions);

  return (
    <S.Layout>
      <S.HeadingBlock>
        <h1>Adoptable Cats</h1>

        <svg viewBox="0 0 48 45" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.2428 15C25.3509 15 17.2284 15.1856 12 23.0578V15C12 10.0369 7.96312 6 3 6C1.34344 6 0 7.34344 0 9C0 10.6566 1.34344 12 3 12C4.65375 12 6 13.3463 6 15V39C6 42.3094 8.69063 45 12 45H28.5C29.3288 45 30 44.3288 30 43.5V42C30 40.3434 28.6566 39 27 39H24L36 30V43.5C36 44.3288 36.6712 45 37.5 45H40.5C41.3288 45 42 44.3288 42 43.5V24.1744C41.0353 24.4247 40.0416 24.6 39 24.6C33.2053 24.6 28.3575 20.4703 27.2428 15V15ZM42 6H36L30 0V12.6C30 17.5706 34.0294 21.6 39 21.6C43.9706 21.6 48 17.5706 48 12.6V0L42 6ZM35.25 13.5C34.4212 13.5 33.75 12.8288 33.75 12C33.75 11.1712 34.4212 10.5 35.25 10.5C36.0788 10.5 36.75 11.1712 36.75 12C36.75 12.8288 36.0788 13.5 35.25 13.5ZM42.75 13.5C41.9212 13.5 41.25 12.8288 41.25 12C41.25 11.1712 41.9212 10.5 42.75 10.5C43.5788 10.5 44.25 11.1712 44.25 12C44.25 12.8288 43.5788 13.5 42.75 13.5Z" />
        </svg>
      </S.HeadingBlock>

      <div>
        <FilterCompound
          options={filterOptions}
          activeOption={activeOption}
          handleFilterClick={handleFilterClick}
        ></FilterCompound>
      </div>
    </S.Layout>
  );
};

export default AdoptableCats;