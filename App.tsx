import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text >Tomimatus ! </Text>
      <Button title={'Click me'} />
      <StatusBar style="auto" />
    </View>
  );
}

type ButtonProps = {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity >
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'red',
    color: 'white',
  }

});
