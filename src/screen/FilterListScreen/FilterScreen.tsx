import React from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import type {
  FilterListDataIn,
  FilterListDataLoad,
  FilterListDataOut,
} from 'src/types';
import { useViewModel } from './useViewModel';
// import _ from 'lodash';

type Props = {
  dataIn: FilterListDataIn;
  dataLoad: FilterListDataLoad;
  dataOut: FilterListDataOut;
};

const FilterScreen = ({ dataIn, dataLoad, dataOut }: Props) => {
  const { activeIndex, handlePress, buttons } = useViewModel({
    dataIn,
    dataLoad,
    dataOut,
  });

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        style={{
          marginBottom: 20,
        }}
        data={buttons}
        horizontal
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              marginBottom: 15,
              marginHorizontal: 5,
              borderRadius: 10,
              alignItems: 'center',
              padding: 5,
              backgroundColor: activeIndex.includes(index)
                ? dataIn.activeColor || '#B2D465'
                : dataIn.inActiveColor || '#ffffff',
              borderWidth: 1,
              borderColor: dataIn.buttonBorderColor || '#B2D465',
              ...(dataIn.sameWidth ? { width: 90 } : {}),
            }}
            onPress={() => handlePress({ item, index })}
          >
            <Text>{item.buttonName}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default FilterScreen;
