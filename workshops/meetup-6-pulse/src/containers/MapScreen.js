class MapScreen extends Component {
    render() {
      return (
        <View style={styles.mainView}>
          <Header headerText="Pulse friends"/>
          <Map />
        </View>
      )
    }
}

const styles = StyleSheet.create({
    mainView: {
      flex: 1
    }
  });

export default MapScreen;