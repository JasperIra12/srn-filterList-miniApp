import type { StyleProp, ViewStyle } from 'react-native';

export type FilterListDataIn = {
    showAllButton?: boolean
    multiSelect?: boolean
    containerStyle?: StyleProp<ViewStyle>
    sameWidth?: boolean
    activeButtonStyle?: StyleProp<ViewStyle>
    inActiveButtonStyle?: StyleProp<ViewStyle>

};