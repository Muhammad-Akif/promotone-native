import {Box, Text} from '..'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign as Icon } from '@expo/vector-icons'
import {Theme} from '../Theme'
import { BoxProps } from '@shopify/restyle'

type HeaderProps = BoxProps<Theme> & {
    onBack: ()=>void
}

const Header = ({onBack, ...props} : HeaderProps) => (
    <Box flexDirection='row' paddingTop={'l'} {...props}>
        <Box paddingLeft={'l'} width={50} justifyContent='center' alignItems='center'>
          <TouchableOpacity
            onPress={onBack}
          >
            <Icon
              size={21}
              name="left"
              color='black'
            />
          </TouchableOpacity>
        </Box>
        <Box flexDirection='row' flexGrow={1} justifyContent='center'>
          <Text variant="logo">Promotone.</Text>
        </Box>
        <Box paddingRight='l' width={50}/>
      </Box>
)

export default Header;