import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LessonScreen = ({ route }) => {
    const { lesson } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{lesson.title}</Text>
            {lesson.lessons.map((item, index) => (
                <Text key={index} style={styles.lessonText}>{item}</Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    lessonText: {
        fontSize: 16,
        marginVertical: 5,
    },
});

export default LessonScreen;
