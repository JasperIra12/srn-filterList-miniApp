import { useState } from 'react';
import type { FilterListDataLoad, FilterListDataOut, FilterListDataIn } from 'src/types';

type Props = {
    dataIn: FilterListDataIn
    dataLoad: FilterListDataLoad;
    dataOut: FilterListDataOut;
};

export const useViewModel = ({ dataIn, dataLoad, dataOut }: Props) => {
    const [activeIndex, setActiveIndex] = useState<number[]>([0]);

    const handlePress = ({ item, index }: any) => {
        if (item.buttonName === 'All') {
            setActiveIndex([0]);
            dataOut([]);
        } else if (dataIn.multiSelect) {
            setActiveIndex([...activeIndex, index]);
            dataOut([item]);
        } else {
            setActiveIndex([index]);
            dataOut([item, index]);
        }
    };

    const buttons = dataIn.showAllButton
        ? [{ buttonName: 'All' }, ...dataLoad]
        : dataLoad;

    return {
        activeIndex,
        handlePress,
        buttons
    };
};
