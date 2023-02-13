import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import type {
  FilterListDataIn,
  FilterListDataLoad,
  FilterListDataOut,
} from 'src/types';
import { useViewModel } from './useViewModel';

type Props = {
  dataIn: FilterListDataIn;
  dataLoad: FilterListDataLoad;
  dataOut: FilterListDataOut;
};

const FilterScreen = ({ dataIn, dataLoad, dataOut }: Props) => {
  const { handlePress, buttons } = useViewModel({
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
        renderItem={({ item }) => (
          <TouchableOpacity
            style={
              item.isSelected === true
                ? [
                    {
                      ...(item.buttonName === 'All' && !dataIn.sameWidth
                        ? { width: 60 }
                        : {}),
                      ...(dataIn.sameWidth ? { width: 90 } : {}),
                    },
                    styles.activeButtonDefaultStyle,
                    dataIn.activeButtonStyle,
                  ]
                : [
                    {
                      ...(item.buttonName === 'All' && !dataIn.sameWidth
                        ? { width: 60 }
                        : {}),
                      ...(dataIn.sameWidth ? { width: 90 } : {}),
                    },
                    styles.inActiveButtonDefaultStyle,
                    dataIn.inActiveButtonStyle,
                  ]
            }
            onPress={() => handlePress(item)}
          >
            <Text
              style={
                item.isSelected === true
                  ? [dataIn.activeButtonStyle]
                  : [dataIn.inActiveButtonTextStyle]
              }
            >
              {item.buttonName}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  activeButtonDefaultStyle: {
    marginBottom: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#B2D465',
    borderWidth: 1,
    borderColor: '#B2D465',
  },
  inActiveButtonDefaultStyle: {
    marginBottom: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderColor: '#B2D465',
  },
});
export default FilterScreen;
