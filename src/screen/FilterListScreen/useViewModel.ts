import { useState } from 'react';
import type { FilterListDataLoad, FilterListDataOut, FilterListDataIn } from 'src/types';

type Props = {
    dataIn: FilterListDataIn
    dataLoad: FilterListDataLoad;
    dataOut: FilterListDataOut;
};

export const useViewModel = ({ dataIn, dataLoad, dataOut }: Props) => {
    const [data, setData] = useState(dataLoad)

    const handlePress = (item: string) => {
        const updatedData = data.map((selected: any) => {
            if (item === 'All') {
                const { isSelected } = selected
                if (isSelected) {
                    return selected
                } else {
                    return { ...selected, isSelected: !isSelected };
                }
            } else if (dataIn.multiSelect) {
                if (selected.buttonName === item) {
                    return { ...selected, isSelected: !selected.isSelected };
                }
                return selected;
            } else {
                if (selected.buttonName !== item && selected.isSelected === true) {
                    return { ...selected, isSelected: false };
                }
                if (selected.buttonName === item) {
                    return { ...selected, isSelected: !selected.isSelected };
                }
                return selected;
            }
        });
        setData(updatedData);
        console.log(item)
    };

    const buttons = dataIn.showAllButton
        ? [{ buttonName: 'All', isSelected: false }, ...data]
        : data;

    return {
        handlePress,
        buttons
    };
};
