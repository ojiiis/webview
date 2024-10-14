import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Image,Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
const { width, height } = Dimensions.get('window');
export default function App() {
  const [loading, setLoading] = useState(true); // State to track loading status

  return (
    <View style={styles.container}>
      {loading && (
        // Show the loading image or ActivityIndicator while the WebView is loading
        <View style={styles.loadingContainer}>
          <Image
            source={require('./assets/before-load.png')} // Replace with your loading image URL
            style={{width:width,height:height,resizeMode: 'cover'}}
            
          />
          {/* Or you can use a spinner (ActivityIndicator) */}
          {/* <ActivityIndicator size="large" color="#0000ff" /> */}
        </View>
      )}
      <WebView
        source={{ uri: 'http://ojiiis.github.io/ops/' }} // Your website URL
        onLoadStart={() => setLoading(true)}  // Show loader when loading starts
        onLoadEnd={() => setLoading(false)}   // Hide loader when loading ends
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',  // Optional background color while loading
  },
 
});
