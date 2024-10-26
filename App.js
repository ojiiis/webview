import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" />
      <SafeAreaView style={styles.container}>
        <WebView
          source={{ uri: 'http://ojiiis.github.io/ops/' }} // Your website URL
          style={{ flex: 1 }}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});
