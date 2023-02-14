import { useState } from 'react';
import type { FilterListDataLoad, FilterListDataOut, FilterListDataIn } from 'src/types';

type Props = {
    dataIn: FilterListDataIn;
    dataLoad: FilterListDataLoad;
    dataOut: FilterListDataOut;
};

export const useViewModel = ({ dataIn, dataLoad, dataOut }: Props) => {
    const [data, setData] = useState(dataLoad);
    const [allIsSelect, setAllIsSelect] = useState(false)


    const handleMultiSelect = (item: any) => {
        const updatedData = data.map((selected: any) => {
            if (selected.text === item.text) {
                return { ...selected, isSelected: !selected.isSelected };
            }
            return selected;
        });

        dataOut(updatedData.filter((selected) => selected.isSelected === true));
        setData(updatedData);
    };

    const handleSingleSelect = (item: any) => {
        const updatedData = data.map((selected: any) => ({
            ...selected,
            isSelected: selected.text === item.text && !selected.isSelected,
        }));

        const selectedItem = updatedData.find((selected) => selected.isSelected === true);

        if (allIsSelect && selectedItem && selectedItem.text !== 'All') {
            setAllIsSelect(false);
        }

        dataOut(selectedItem || {});
        setData(updatedData);
    };


    const handleAllSelect = () => {
        if (dataIn.multiSelect) {
            if (data.every((item) => item.isSelected)) {
                // if all items are selected, unselect all and set all button to inactive
                const updatedData = data.map((selected: any) => ({
                    ...selected,
                    isSelected: false,
                }));
                dataOut([]);
                setData(updatedData);
            } else {
                // if any item is unselected, select all and set all button to active
                const updatedData = data.map((selected: any) => ({
                    ...selected,
                    isSelected: true,
                }));
                dataOut(updatedData);
                setData(updatedData);
            }
        } else {
            if (allIsSelect) {
                setAllIsSelect(false);
                const updatedData = data.map((selected: any) => ({
                    ...selected,
                    isSelected: false,
                }));
                dataOut([]);
                setData(updatedData);
            } else {
                const updatedData = data.map((selected: any) => ({
                    ...selected,
                    isSelected: selected.text === 'All',
                }));
                setAllIsSelect(true);
                dataOut([{ id: 0, text: "All", isSelected: true, value: 'All' }]);
                setData(updatedData);
            }
        }
    };


    const handlePress = (item: any) => {
        if (item.text === 'All') {
            handleAllSelect();
        } else if (dataIn.multiSelect) {
            handleMultiSelect(item);
        } else {
            handleSingleSelect(item);

        }
    };

    const buttonList = data.map((item: any) => ({
        text: item.text,
        isSelected: item.isSelected,
    }));

    return {
        handlePress,
        buttonList,
        handleAllSelect,
        allIsSelect
    };
};
