import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [loading, setLoading] = useState(true); // State to track loading status

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {loading && (
        // Show the loading image while the WebView is loading
        <View style={styles.loadingContainer}>
          <Image
            source={require('./assets/before-load.png')} // Replace with your loading image
            style={{ width: width, height: height, resizeMode: 'cover' }}
          />
        </View>
      )}
      <WebView
        source={{ uri: 'http://ojiiis.github.io/ops/' }} // Your website URL
        onLoadStart={() => setLoading(true)}  // Show loader when loading starts
        onLoadEnd={() => setLoading(false)}   // Hide loader when loading ends
        style={styles.webView}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',  // Optional background color while loading
  },
  webView: {
    flex: 1,
  },
});
