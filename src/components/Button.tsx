import * as React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import {
    SpacingProps,
    BorderProps,
    BackgroundColorProps,
    VariantProps,
    createRestyleComponent,
    createVariant,
} from '@shopify/restyle';

import Text from './Text';
import Box from './Box';
import { Theme } from './Theme';

const buttonVariant = createVariant({ themeKey: 'buttonVariants' });
const ButtonContainer = createRestyleComponent<
    VariantProps<Theme, 'buttonVariants'> & React.ComponentProps<typeof Box>,
    Theme
>([buttonVariant], Box);

type Props = SpacingProps<Theme> &
    VariantProps<Theme, 'buttonVariants'> &
    BorderProps<Theme> &
    BackgroundColorProps<Theme> &
    {
        onPress?: () => void;
        label?: string;
        loading?: boolean;
        disabled?: boolean;
    };

 const Button = ({
    onPress=()=>{},
    label,
    disabled = false,
    loading = false,
    variant = 'primary',
    ...rest
}: Props) => {
    const textVariant = ('button_' + variant) as Partial<
        keyof Omit<Theme['textVariants'], 'defaults'>
    >;

    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={{width:'100%'}}>
            <ButtonContainer
                variant={variant}
                width='100%'
                {...rest}>
                {loading ? (
                    <ActivityIndicator color="#000" />
                ) : (
                        <Text
                            variant={textVariant}>
                            {label}
                        </Text>
                )}
            </ButtonContainer>
        </TouchableOpacity>
    );
};

export default Button;