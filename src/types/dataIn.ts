import type { StyleProp, ViewStyle } from 'react-native';

export type FilterListDataIn = {
    showAllButton?: boolean
    multiSelect?: boolean
    sameWidth?: boolean
    activeButtonStyle?: StyleProp<ViewStyle>
    inActiveButtonStyle?: StyleProp<ViewStyle>

};