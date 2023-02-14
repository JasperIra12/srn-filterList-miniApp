import React from 'react';
import type {
  FilterListDataIn,
  FilterListDataLoad,
  FilterListDataOut,
} from './types';
import FilterButton from './component/FilterButton/FilterButton';

type Props = {
  dataLoad: FilterListDataLoad;
  dataIn: FilterListDataIn;
  dataOut: FilterListDataOut;
};

const FilterListMAPP = ({ dataLoad, dataIn, dataOut }: Props) => {
  return <FilterButton dataIn={dataIn} dataLoad={dataLoad} dataOut={dataOut} />;
};

export default FilterListMAPP;
