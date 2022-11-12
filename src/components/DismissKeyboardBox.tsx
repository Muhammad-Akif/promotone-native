import { BoxProps } from '@shopify/restyle';
import React from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import Box from './Box'
import { Theme } from './Theme';

type DismissKeyboardBoxProps  = BoxProps<Theme> & {
  children: JSX.Element[],
}

const DismissKeyboardBox = ({ children, ...props }: DismissKeyboardBoxProps) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <Box {...props}>
      {children}
    </Box>
  </TouchableWithoutFeedback>
);

export default DismissKeyboardBox