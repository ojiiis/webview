//import { StyleSheet } from 'react-native';
import { StyleSheet,SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
//import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
 
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" />
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: 'http://ojiiis.github.io/ops/' }} // Your website URL
      //  onLoadStart={() => setLoading(true)}  // Show loader when loading starts
     // onLoadEnd={() => setLoading(false)}   // Hide loader when loading ends
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
    alignItems: 'center',
    justifyContent: 'center',
  }
 
});