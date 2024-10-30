import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    useColorScheme,
    Image,
    ScrollView,
    Button,
} from 'react-native';

// type NamePrps = {
//     name: string
// }

// const MyName = (props: NamePrps) => {
//     const [isMe, setIsMe] = useState(false);
//     return (
//         <View>
//             <Text>I am {isMe ? `${props.name}` : '.....'}</Text>
//             <Button
//                 onPress={() => {
//                     setIsMe(true);
//                 }}
//                 title={isMe ? 'Thank you!' : 'Are you Isshan'}
//             />
//         </View>
//     );
// };

const imageUrl = 'https://img.freepik.com/free-vector/flat-design-pixel-art-character-element-collection_23-2149752919.jpg';
const imageArray = new Array(300).fill(imageUrl);

function AppPro(): JSX.Element {
    // const isDarkMode = useColorScheme() === 'dark';
    // const name = 'ishhan';

    return (
        <>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://img.freepik.com/premium-photo/cute-little-boy-cartoon-character-vector-illustration-flat-style_994418-88843.jpg'
                    }} alt="" />

                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://img.freepik.com/premium-photo/boy-flat-cartoon-character-illustration_620650-2072.jpg'
                    }} alt="" />

                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://img.freepik.com/premium-vector/cute-boy-cartoon-character-vector-illustration-kids-people-concept_1142-110040.jpg'
                    }} alt="" />

                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://img.freepik.com/premium-vector/cute-little-girl-cartoon-character-vector-illustration-flat-style_1142-105692.jpg'
                    }} alt="" />

                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://img.freepik.com/premium-vector/angry-little-girl-cartoon-character-vector-illustration-cute-little-girl-casual-clothes_1057-182860.jpg'
                    }} alt="" />
            </View>

            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                    <Image
                        style={styles.image_horizontal}
                        source={{
                            uri: 'https://static.vecteezy.com/system/resources/thumbnails/047/093/880/small/christmas-and-new-year-celebration-set-family-members-or-friends-getting-vector.jpg'
                        }} alt="" />
                    <Image
                        style={styles.image_horizontal}
                        source={{
                            uri: 'https://img.freepik.com/premium-vector/banner-with-office-colleagues-work-break-cartoon-vector-illustration-isolated_181313-2476.jpg'
                        }} alt="" />
                </ScrollView>
            </View>

            <View>
                <Text style={styles.headertext}>
                    Vertical Scroll
                </Text>
            </View>
            <View style={styles.vertical_scroll_view}>
                <ScrollView contentContainerStyle={styles.verticalScrollContent}>
                    {
                        imageArray.map((url, index) => (
                            <Image
                                style={styles.image_vertical}
                                source={{ uri: url }}
                                key={index}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    headertext: {
        marginTop: 5,
        marginLeft: 5,
        color: "white",
        fontSize: 30
    },
    container: {
        margin: 10,
        flex: 0,
        flexDirection: 'row',
        gap: 5
    },
    image: {
        borderRadius: 10,
        width: 64, // Set your desired width
        height: 64, // Set your desired height
    },
    scrollView: {
        borderRadius: 10,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
    },
    image_horizontal: {
        borderRadius: 10,
        width: 330, // Set your desired width
        height: 64,
        marginLeft: 5,
    },
    vertical_scroll_view: {
        margin: 10,
        flex: 1,
        alignItems: 'center',
    },
    verticalScrollContent: {
        paddingBottom: 20, // Add padding to ensure last item is not cut off
    },
    image_vertical: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: 300,
        height: 200,
        margin: 10,
    }
});

export default AppPro;
