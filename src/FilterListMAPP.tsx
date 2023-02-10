import React from 'react';
import type {
  FilterListDataIn,
  FilterListDataLoad,
  FilterListDataOut,
} from './types';
import FilterScreen from './screen/FilterListScreen/FilterScreen';

type Props = {
  dataLoad: FilterListDataLoad;
  dataIn: FilterListDataIn;
  dataOut: FilterListDataOut;
};

const FilterListMAPP = ({ dataLoad, dataIn, dataOut }: Props) => {
  return <FilterScreen dataIn={dataIn} dataLoad={dataLoad} dataOut={dataOut} />;
};

export default FilterListMAPP;
