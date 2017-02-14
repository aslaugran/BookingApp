/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  StatusBar,
  TextInput,
  Alert,
  Modal
} from 'react-native';


// Tour Category

class TourCategory extends Component {
  constructor (){
        super();
  }

  render() {
    return (
      <View style={styles.tourcategorycard}>
        <Text>
          Adventure Tours
        </Text>
      </View>
    )

  }
}

// Tour Photo Gallery

class TourPhotoGallery extends Component {
  constructor (){
        super();
  }

  render() {
    return (
      <View style={styles.searchtours}>
        <Text>
          Search Tours
        </Text>
      </View>
    )

  }
}

// Tour Details

class TourDetails extends Component {
  constructor (){
        super();
  }

  render() {
    return (
      <View style={styles.searchtours}>
        <Text>
          Search Tours
        </Text>
      </View>
    )

  }
}

// Tour List

class TourList extends Component {
  constructor (){
        super();
  }

  render() {
    return (
      <View style={styles.searchtours}>
        <Text>
          Search Tours
        </Text>
      </View>
    )

  }
}


// Buttons

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

const openModal = (visible) => {
  this.setState({modalVisible: visible});
};

class ButtonGroup extends Component {
  constructor (){
        super();
  }

  state = {
    animationType: 'none',
    modalVisible: false,
    transparent: false,
    selectedSupportedOrientation: 0,
    currentOrientation: 'unknown',
  };


  _setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  render() {
    return (
      <View>
      <Button onPress={this._setModalVisible.bind(this, true)} title='button'>
         Present
       </Button>
     </View>
    )

  }
}

class ModalExample extends React.Component {
  state = {
    animationType: 'none',
    modalVisible: false,
    transparent: false,
    selectedSupportedOrientation: 0,
    currentOrientation: 'unknown',
  };

  _setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  _setAnimationType = (type) => {
    this.setState({animationType: type});
  };

  _toggleTransparent = () => {
    this.setState({transparent: !this.state.transparent});
  };

  render() {
    var modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
    };
    var innerContainerTransparentStyle = this.state.transparent
      ? {backgroundColor: '#fff', padding: 20}
      : null;
    var activeButtonStyle = {
      backgroundColor: '#ddd'
    };

    return (
      <View>
        <Modal
          animationType={this.state.animationType}
          transparent={this.state.transparent}
          visible={this.state.modalVisible}
          onRequestClose={() => this._setModalVisible(false)}
          onOrientationChange={evt => this.setState({currentOrientation: evt.nativeEvent.orientation})}
          >
          <View style={[styles.container, modalBackgroundStyle]}>
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
              <Text>This modal was presented {this.state.animationType === 'none' ? 'without' : 'with'} animation.</Text>
              <Text>It is currently displayed in {this.state.currentOrientation} mode.</Text>
              <Button
                onPress={this._setModalVisible.bind(this, false)}
                style={styles.modalButton}
                title='close'>
                Close
              </Button>
            </View>
          </View>
        </Modal>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Animation Type</Text>
          <Button title='none' onPress={this._setAnimationType.bind(this, 'none')} style={this.state.animationType === 'none' ? activeButtonStyle : {}}>
            none
          </Button>
          <Button title='slide' onPress={this._setAnimationType.bind(this, 'slide')} style={this.state.animationType === 'slide' ? activeButtonStyle : {}}>
            slide
          </Button>
          <Button title='fade' onPress={this._setAnimationType.bind(this, 'fade')} style={this.state.animationType === 'fade' ? activeButtonStyle : {}}>
            fade
          </Button>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowTitle}>Transparent</Text>
        </View>

        <View>
          <Text style={styles.rowTitle}>Supported orientations</Text>
        </View>

        <Button title='present' onPress={this._setModalVisible.bind(this, true)}>
          Present
        </Button>
      </View>
    );
  }
}


// Tour Search

class TourSearch extends Component {
  state = {
    searchingTour: '',
  };

  searchTours (value) {
    this.state.searchingTour = value;
    console.log(value);
    this.setState(this.state);
  }


  render() {
    return (
    <TextInput
      style={styles.textInput}
      onChangeText={this.searchTours.bind(this)}>
    </TextInput>
    )

  }
}

// Tour Card

class TourCategoryCard extends Component {
  constructor (){
        super();
        const onButtonPress = () => {
        Alert.alert('Button has been pressed!');
        };
  }

  render() {
    return (
      <View style={styles.slide}>
        <View style={styles.tourcategorycard}>
          <Image source={{uri: this.props.tour.main_photo}}
            style={styles.tourimage} />
            <Text style={styles.tourname}>
              {this.props.tour.name}
            </Text>
            <Text style={styles.tourduration}>
              Duration: {this.props.tour.duration} hours / Price from {this.props.tour.adult_price} ISK
            </Text>
            <ButtonGroup />
          </View>
      </View>
    )

  }
}


class BookingApp extends Component {
  constructor (){
    super();
    this.getTours();
    this.state = {
      data: []
    }
  }


  getTours (){
    return fetch('http://localhost:3001/daytours')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState ({data: responseJson});
        return responseJson.tours;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
        <TourSearch />,
        <Swiper showsButtons={true}>
          {this.state.data.map (res => <TourCategoryCard tour={res}/>)}
        </Swiper>
    );
  }
}

var swiper = React.createClass({
  render: function() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>

        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    )
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  textInput: {
    textAlign: 'left',
    color: '#555555',
    margin: 5,
    height: 35,
    paddingLeft: 10,
    borderColor: '#f3f3f3',
    backgroundColor: '#f3f3f3',
    borderWidth: 1,
  },
  tourimage: {
    width: 300,
    height: 300,
  },
  tourname: {
    fontSize: 24,
    paddingTop: 15,
    textAlign: 'center',
  },
  tourduration: {
    paddingBottom: 15,
  },
  tourcategorycard: {
    backgroundColor: '#f3f3f3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  tourimage: {
    width: 400,
    height: 400,
  },
});

AppRegistry.registerComponent('BookingApp', () => ModalExample);
