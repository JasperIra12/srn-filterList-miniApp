import React from 'react';
import { FilterListMAPP } from 'srn-filter-list';

const App = () => {
  const data = [
    { name: 'Green Valley', buttonName: 'Restaurant', isSelected: false },
    { name: 'Super Mart', buttonName: 'Grocery', isSelected: false },
    { name: 'Pizza Palace', buttonName: 'Pizza Shop', isSelected: false },
    { name: 'Angels Burger', buttonName: 'Bread Shop', isSelected: false },
  ];

  return (
    <>
      <FilterListMAPP
        dataIn={{
          activeButtonStyle: { backgroundColor: 'pink', borderColor: 'purple' },
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
