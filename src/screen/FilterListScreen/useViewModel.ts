import { useState } from 'react';
import _ from 'lodash';
import type { FilterListDataLoad, FilterListDataOut, FilterListDataIn } from 'src/types';

type Props = {
    dataIn: FilterListDataIn;
    dataLoad: FilterListDataLoad;
    dataOut: FilterListDataOut;
};

export const useViewModel = ({ dataIn, dataLoad, dataOut }: Props) => {
    const [data, setData] = useState(dataLoad);
    const [allIsSelected, setAllIsSelected] = useState(false);

    const handlePress = (item: any) => {
        let updatedData = [];
        // If the pressed button is the 'All' button, update the selected status of all buttons
        if (item.buttonName === 'All') {
            updatedData = _.map(data, selected => ({ ...selected, isSelected: !allIsSelected }));
            allIsSelected ? dataOut([]) : dataOut(updatedData);

            // If the 'All' button is not selected, set the data state to have all buttons (except 'All') as selected
            if (!allIsSelected) {
                setData(
                    _.map(updatedData, selected => ({
                        ...selected,
                        isSelected: selected.buttonName !== 'All'
                    }))
                );
            }
        } else {
            // If the pressed button is not the 'All' button, update the selected status of the pressed button
            updatedData = _.map(data, (selected: any) => {
                if (selected.buttonName === item.buttonName) {
                    return { ...selected, isSelected: !selected.isSelected };
                }
                // If the 'All' button is selected, set its selected status to false
                if (selected.buttonName === 'All') {
                    return { ...selected, isSelected: false };
                }
                return selected;
            });

            // If multiselect is not enabled, return the selected item
            if (!dataIn.multiSelect) {
                const selectedItem = _.find(updatedData, selected => selected.isSelected === true);
                dataOut(selectedItem || {});
                if (!selectedItem) {
                    setData(updatedData);
                } else {
                    setData(
                        _.map(updatedData, selected => ({
                            ...selected,
                            isSelected: selected.buttonName === item.buttonName
                        }))
                    );
                }
            } else {
                // If multiselect is enabled, return all selected items
                dataOut(_.filter(updatedData, selected => selected.isSelected === true));
                setData(updatedData);
            }
        }
        // Check if all buttons (except 'All') are selected and update the 'All' button selected status accordingly
        const allButtonsSelected = _.every(
            updatedData,
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
