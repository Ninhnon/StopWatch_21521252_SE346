import {StyleSheet, SafeAreaView, View, Platform} from 'react-native';
import StopWatch from './src/components/StopWatch';

const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stopWatchView}>
        <StopWatch />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: isAndroid ? 45 : 0,
  },
  stopWatchView: {
    flex: 1,
  },
});
