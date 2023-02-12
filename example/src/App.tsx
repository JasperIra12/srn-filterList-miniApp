import React from 'react';
import { FilterListMAPP } from 'srn-filter-list';

const App = () => {
  const data = [
    { value: 'Green Valley', buttonName: 'Restaurant', isSelected: false },
    { value: 'Super Mart', buttonName: 'Grocery', isSelected: false },
    { value: 'Pizza Palace', buttonName: 'Pizza Shop', isSelected: false },
    { value: 'Angels Burger', buttonName: 'Bread Shop', isSelected: false },
  ];

  return (
    <>
      <FilterListMAPP
        dataIn={{
          multiSelect: true,
          showAllButton: true,
          sameWidth: true,
        }}
        dataLoad={data}
        dataOut={(value: any) => console.log(value)}
      />
    </>
  );
};

export default App;
