import type { StyleProp, ViewStyle } from 'react-native';

export type FilterListDataIn = {
    showAllButton?: boolean
    multiSelect?: boolean
    containerStyle?: StyleProp<ViewStyle>
    sameWidth?: true
    activeColor?: string
    inActiveColor?: string
    buttonBorderColor?: string

};