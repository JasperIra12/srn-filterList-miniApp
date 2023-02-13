import type { StyleProp, ViewStyle, TextStyle } from 'react-native';

export type FilterListDataIn = {
    showAllButton?: boolean
    multiSelect?: boolean
    sameWidth?: boolean
    activeButtonStyle?: StyleProp<ViewStyle>
    inActiveButtonStyle?: StyleProp<ViewStyle>
    activeButtonTextStyle?: StyleProp<TextStyle>
    inActiveButtonTextStyle?: StyleProp<TextStyle>
};