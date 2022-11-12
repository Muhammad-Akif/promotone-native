import Box from './Box'
import {Feather as Icon} from '@expo/vector-icons'
import {Text, TextInput as RNTextInput, TextInputProps as RNTextInputProps, TextInputProps} from 'react-native'
import theme, { Theme } from './Theme'
import {ValidationState} from '../hooks'
import { backgroundColor, BackgroundColorProps, composeRestyleFunctions, createVariant, typography, TypographyProps, useRestyle, VariantProps } from '@shopify/restyle'

const {pristine, valid, invalid} = ValidationState;

const SIZE = theme.borderRadii.m*2

type RestyleProps = VariantProps<Theme, 'textVariants'> & BackgroundColorProps<Theme> & TypographyProps<Theme>
const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
    createVariant({themeKey: 'textVariants'}),
    typography,

])

type Props = RNTextInputProps & {
    icon?: any,
    height?: number,
    name?: string,
    validState?: ValidationState,
    textStyle?: RestyleProps,
    noBorder?: boolean,
}

const TextInput = ({icon, height, name, validState=pristine, textStyle, noBorder,  ...props} : Props) => {
    const sColor: keyof typeof theme.colors = 
        validState === pristine ? 'black' : validState === valid ? 'primary' : 'danger'
    const color = theme.colors[sColor]
    
    const iconAlign = height ? 'flex-end' : 'center'
    const iconMargin = height ? 's' : 'xs';

    let topPad = {};
    if (props.numberOfLines){
        topPad={paddingTop: 'm'}
    }

    const variantProps = textStyle ? useRestyle(restyleFunctions, textStyle) : {}
    
    return (
        <Box 
            flexDirection='row'
            alignItems='center'
            // height={height || 60}
            paddingVertical={'s'}
            borderRadius='s'
            borderWidth={noBorder ? 0 : 1}
            borderColor={sColor}
            paddingEnd='m'
            {...topPad}
        >   
                <Box padding='s'>
                    <Icon name={icon} size={16} color={color}/>
                </Box>
            <Box flexGrow={1}>
                <RNTextInput 
                    underlineColorAndroid="transparent"
                    placeholderTextColor='#151624'
                    {...props}
                    {...variantProps as TextInputProps}
                />
            </Box>
            {(validState === valid || validState === invalid) && (
                <Box 
                    height={SIZE} 
                    width={SIZE} 
                    borderRadius='m'
                    backgroundColor={validState===valid? 'primary' : 'danger'}
                    justifyContent='center'
                    alignItems='center'
                    
                    alignSelf={iconAlign}
                    marginBottom = {iconMargin}
                    >
                    <Icon
                        name={validState === valid ? "check" : "x"}
                        color='white'
                        size={16}
                    />
                </Box>
            )}
        </Box>

    )
}

export default TextInput;