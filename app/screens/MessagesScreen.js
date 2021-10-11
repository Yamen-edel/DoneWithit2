import React,{useState} from 'react' // useState is a hook
import { FlatList, SafeAreaView,StyleSheet,Platform,StatusBar, View } from 'react-native'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [ // This is an array of objects to pull data from, this is temporary until we hook it up with a backend
    {
        id: 1,
        title: 'Yamen Edel',
        description: 'Hey ! Is this item still available?',
        image : require('../../app/mosh.jpg')
    },
    
    {
        id: 2,
        title: 'Henry Smith',
        description: 'I am interested in this item, when can you post it ?',
        image : require('../../app/mosh.jpg')
    }
]




export default function MessagesScreen() {

    const [messages, setMessages] =useState(initialMessages); // messages represents first element in the array , setMessages represents the updated array after changes
    const [refreshing, setRefreshing ] = useState(false);
    const handleDelete = message => { // function component
        // Delete the message from messages
        setMessages(messages.filter(m => m.id !== message.id)); // new array that will store all messages except the one we selected/deleted); // update and re-render the data
        console.log(message.id)

    };
    return (
        <SafeAreaView style={styles.screen}>
        <FlatList
        data = {initialMessages} // this prop is set to an array of objects
            keyExtractor={message => message.id.toString()} // pass a function to extract a unique key for each object in array
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}

                        onPress={() => console.log("Message selected", item)}
                        // renderRightActions={ListItemDeleteAction} // with this current syntax we cannot set its props, below is the fix
                         renderRightActions={() =>
                             <ListItemDeleteAction onPress={() => handleDelete(item)} />
                         }
                    />}
                ItemSeparatorComponent={ListItemSeparator} // passing a reference to a funcion.  ListItemSeparator is a reusable component
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image : require('../../app/mosh.jpg')
                        }
                    ])
                }}
                />
        </SafeAreaView>
        
    )

    
}
const styles = StyleSheet.create({
    screen: {
        paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0 // because SafeAreaView doesn't work on android, we apply this logic which says the value of the paddingTop is equal the statusBar height otherwise set it to 0
    }
})

