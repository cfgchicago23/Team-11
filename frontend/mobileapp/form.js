import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

const PostPage = () => {
    const [postContent, setPostContent] = useState('');
    const [posts, setPosts] = useState([]);

    const handlePostSubmit = () => {
        if (postContent.trim()) {
            setPosts(prevPosts => [...prevPosts, { id: Date.now().toString(), text: postContent }]);
            setPostContent('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                value={postContent}
                onChangeText={setPostContent}
                placeholder="Write your post here..."
                multiline={true}
            />
            <Button title="Post" onPress={handlePostSubmit} />
            <FlatList 
                data={posts}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <View style={styles.post}><Text>{item.text}</Text></View>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    textInput: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 5,
    },
    post: {
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        padding: 10,
    }
});

export default PostPage;