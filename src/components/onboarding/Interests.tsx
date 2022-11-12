import React, { useState } from "react"
import { StyleSheet, View, Dimensions } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { FlatGrid } from 'react-native-super-grid';
import { ISlideInterface } from "./Slider";
import { Box, Text, Button } from '../../components';

const { width } = Dimensions.get("window");

export default function Interest({onNext}: ISlideInterface) {
    const [items, setItems] = useState([
        { name: 'Sports', selected: false },
        { name: 'Fitness', selected: false },
        { name: 'Technology', selected: false },
        { name: 'Art', selected: false },
        { name: 'Photography', selected: false },
        { name: 'Cooking', selected: false },
        { name: 'Lifestyle', selected: false },
        { name: 'Memes', selected: false },
        { name: 'Business', selected: false },
        { name: 'Food', selected: false },
        { name: 'Video Games', selected: false },
        { name: 'Nature', selected: false },
        { name: 'Animals', selected: false },
        { name: 'Self Care', selected: false },
        { name: 'Beauty', selected: false },
        { name: 'Music', selected: false },
        { name: 'Productivity', selected: false },
        { name: 'Health', selected: false },
    ])
    const [numSelected, setNumSelected] = useState(0);

    const selectHandler = (itemKey: string, selected: boolean) => {
        if (numSelected == 4 && selected) return;
        setNumSelected(selected ? numSelected+1 : numSelected-1);
        const newItems = [...items];
        const index = newItems.findIndex(item => item.name === itemKey);
        newItems[index].selected = selected;

        setItems(newItems);
    };

    return (
        <Box backgroundColor={'white'} height='100%' width={width}>
            <Box flex={1} paddingTop='xl'>
                <Box paddingHorizontal='l' marginBottom={'m'}>
                    <Text variant='header' textAlign='left'>Interests</Text>
                    <Text variant='subheader' textAlign='left'>What best describes your content?</Text>
                </Box>
                <FlatGrid
                    itemDimension={25}
                    maxItemsPerRow={3}
                    data={items}
                    spacing={10}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                    renderItem={({ item }) =>
                        (<InterestRect item={item} selectHandler={selectHandler} />)
                    }
                />

            </Box>
            <View style={styles.footer}>
                {numSelected >= 1 &&
                    <Button
                        // disabled={!username.valid}
                        variant='primary'
                        onPress={onNext}
                        label='All Set!'
                    />
                }
                {numSelected < 1 &&
                    <Button
                    disabled
                    variant='secondary'
                    onPress={onNext}
                    label='Select at least 1 interest'
                />
                }
            </View>
        </Box>
    )
}



const styles = StyleSheet.create({
    footer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        paddingTop: 27,
        paddingBottom: 27,
        paddingLeft: 24,
        paddingRight: 24,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        shadowColor: 'rgb(85, 85, 85)',
        shadowOffset: { width: 0, height: -7 },
        shadowRadius: 17,
        shadowOpacity: 0.25,
    },
})

interface interestRectProps {
    item: {
        name: string,
        selected: boolean
    }

    selectHandler: (arg0: string, arg1: boolean) => void
}

const InterestRect = ({ item, selectHandler }: interestRectProps) => {
    return (
        <TouchableWithoutFeedback style={{
            flex: item.selected ? 1 : 0.33,
            // paddingHorizontal: 15,
            height: 25,
            backgroundColor: item.selected ? '#883FFF' : '#ffffff',
            borderRadius: 16,
            borderWidth: item.selected? 0 : 2,
            borderColor: '#000000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
            onPress={() => { selectHandler(item.name, !item.selected) }}
        >
            <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 15, color: item.selected ? '#ffffff' : '#000000'}}>{item.name}</Text>
        </TouchableWithoutFeedback>
    )
}
