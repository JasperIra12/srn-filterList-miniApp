import React from 'react';
import { FilterListMAPP } from 'srn-filter-list';

const App = () => {
  const data = [
    { id: 1, value: 'Green Valley', text: 'Restaurant', isSelected: false },
    { id: 2, value: 'Super Mart', text: 'Grocery', isSelected: false },
    { id: 3, value: 'Pizza Palace', text: 'Pizza Shop', isSelected: false },
    { id: 4, value: 'Angels Burger', text: 'Bread Shop', isSelected: false },
  ];

  return (
    <>
      <FilterListMAPP
        dataIn={{
          multiSelect: false,
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
