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
        } else {
            updatedData = data.map((selected: any) => {
                if (dataIn.multiSelect) {
                    if (selected.buttonName === item.buttonName) {
                        return { ...selected, isSelected: !selected.isSelected };
                    }
                    if (selected.buttonName === 'All') {
                        return { ...selected, isSelected: false };
                    }
                    return selected;
                } else {
                    if (selected.buttonName !== item.buttonName && selected.isSelected === true) {
                        return { ...selected, isSelected: false };
                    }
                    if (selected.buttonName === item.buttonName) {
                        return { ...selected, isSelected: !selected.isSelected };
                    }
                    if (selected.buttonName === 'All') {
                        return { ...selected, isSelected: false };
                    }
                    return selected;
                }
            });
            dataOut(dataIn.multiSelect ? updatedData.filter(selected => selected.isSelected === true) : updatedData.find(selected => selected.isSelected === true));
        }
        setData(updatedData);

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
