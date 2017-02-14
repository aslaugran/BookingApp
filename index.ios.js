/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Alert
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


// Tour Search

class TourSearch extends Component {
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

// Tour Booking

class TourBooking extends Component {
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

class ButtonGroup extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
         <Button
           onPress={onButtonPress}
           title="This looks great!"
           accessibilityLabel="This sounds great!"
         />
       </View>
    );
  }
}

// Tour Card

class TourCard extends Component {
  constructor (){
        super();
  }

  render() {
    return (
      <View style={styles.tourcard}>
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
      <ScrollView>
          {this.state.data.map (res => <TourCard tour={res}/>)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tourcategorycard: {
    width: 100,
    height: 450,
  },
  tourimage: {
    width: 300,
    height: 300,
  },
  tourname: {
    fontSize: 24,
    paddingTop: 25,
    textAlign: 'center',
  },
  tourduration: {
    paddingBottom: 25,
  },
  tourcard: {
    backgroundColor: '#f3f3f3',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tourimage: {
    width: 400,
    height: 300,
  },
});

AppRegistry.registerComponent('BookingApp', () => BookingApp);
