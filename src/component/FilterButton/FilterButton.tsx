import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
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

const FilterButton = ({ dataIn, dataLoad, dataOut }: Props) => {
  const { handlePress, handleAllSelect, buttonList, allIsSelect } =
    useViewModel({
      dataIn,
      dataLoad,
      dataOut,
    });

  const renderItem = ({ item, i }: any) => {
    return (
      <TouchableOpacity
        key={i}
        style={[
          {
            ...(item.text === 'All' && !dataIn.sameWidth ? { width: 60 } : {}),
            ...(dataIn.sameWidth ? { width: 90 } : {}),
          },
          item.isSelected
            ? [styles.activeButtonDefaultStyle, dataIn.activeButtonStyle]
            : [styles.inActiveButtonDefaultStyle, dataIn.inActiveButtonStyle],
        ]}
        onPress={() => handlePress(item)}
      >
        <Text
          style={
            item.isSelected
              ? [dataIn.activeButtonTextStyle]
              : [dataIn.inActiveButtonTextStyle]
          }
        >
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  };

  const allButton = {
    text: 'All',
    isSelected: allIsSelect || buttonList.every((button) => button.isSelected),
    onPress: handleAllSelect,
    style:
      allIsSelect === true
        ? [styles.activeButtonDefaultStyle, dataIn.activeButtonStyle]
        : [styles.inActiveButtonDefaultStyle, dataIn.inActiveButtonStyle],
  };

  return (
    <View style={{ padding: 20 }}>
      {dataIn.showAllButton ? (
        <FlatList
          horizontal
          data={[allButton, ...buttonList]}
          renderItem={renderItem}
        />
      ) : (
        <FlatList horizontal data={buttonList} renderItem={renderItem} />
      )}
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
    height: 30,
    justifyContent: 'center',
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
    height: 30,
    justifyContent: 'center',
  },
});

export default FilterButton;
