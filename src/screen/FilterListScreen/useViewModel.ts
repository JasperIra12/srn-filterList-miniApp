import { useState } from 'react';
import type { FilterListDataLoad, FilterListDataOut, FilterListDataIn } from 'src/types';

type Props = {
    dataIn: FilterListDataIn
    dataLoad: FilterListDataLoad;
    dataOut: FilterListDataOut;
};

export const useViewModel = ({ dataIn, dataLoad, dataOut }: Props) => {
    const [data, setData] = useState(dataLoad);
    const [allIsSelected, setAllIsSelected] = useState(false);

    const handlePress = (item: any) => {
        let updatedData = [];
        if (item.buttonName === 'All') {
            updatedData = data.map(selected => ({ ...selected, isSelected: !allIsSelected }));
            allIsSelected ? dataOut([]) : dataOut(updatedData);

            if (!allIsSelected) {
                setData(
                    updatedData.map(selected => ({
                        ...selected,
                        isSelected: selected.buttonName !== 'All'
                    }))
                );
            }
        } else {
            updatedData = data.map((selected: any) => {
                if (selected.buttonName === item.buttonName) {
                    return { ...selected, isSelected: !selected.isSelected };
                }
                if (selected.buttonName === 'All') {
                    return { ...selected, isSelected: false };
                }
                return selected;
            });

            // Check if multiselect is not enabled, then return the selected item
            if (!dataIn.multiSelect) {
                const selectedItem = updatedData.find(selected => selected.isSelected === true);
                dataOut(selectedItem || {});
                if (!selectedItem) {
                    setData(updatedData);
                } else {
                    setData(
                        updatedData.map(selected => ({
                            ...selected,
                            isSelected: selected.buttonName === item.buttonName
                        }))
                    );
                }
            } else {
                dataOut(updatedData.filter(selected => selected.isSelected === true));
                setData(updatedData);
            }
        }

        const allButtonsSelected = updatedData.every(
            (selected: any) => selected.buttonName !== 'All' && selected.isSelected === true
        );
        setAllIsSelected(allButtonsSelected);
    };


    const buttons = dataIn.showAllButton
        ? [{ buttonName: 'All', isSelected: allIsSelected }, ...data]
        : data;

    return {
        handlePress,
        buttons,
        allIsSelected
    };
};