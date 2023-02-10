import { Text, View, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import { FilterListMAPP } from 'srn-filter-list';

const App = () => {
  const data = [
    { name: 'Green Valley', buttonName: 'Restaurant' },
    { name: 'Super Mart', buttonName: 'Grocery' },
    { name: 'Pizza Palace', buttonName: 'Pizza Shop' },
    { name: 'Angels Burger', buttonName: 'Bread Shop' },
  ];
  const [dataOutData, setDataOutData] = useState<any>([]);
  const buttonData = (value: any) => {
    if (value.length == 0) {
      setDataOutData(new Array());
    } else if (value.length == 1) {
      setDataOutData([...dataOutData, value[0]]);
    } else {
      setDataOutData([value[0]]);
    }
  };

  return (
    <>
      <FilterListMAPP
        dataIn={{
          // multiSelect: true,
          // showAllButton: true,
          sameWidth: true,
        }}
        dataLoad={data}
        dataOut={(value: any) => buttonData(value)}
      />
      <FlatList
        data={dataOutData}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.name}</Text>
            <Text>{item.buttonName}</Text>
          </View>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
});
export default App;
