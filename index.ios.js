/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 // PUSHING TO GIT

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
  Modal,
  Navigator,
  TouchableHighlight
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

// Tours List inside Category // ÁSA

class TourList extends Component {
constructor (){
    super();
    this.getCategories();
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
      <View>
            {this.state.data.map (res => <TourCard category={res}/>)}
      </View>
    )

  }
}


// Buttons
let baseComponent = {}
const onButtonPress = () => {
  console.log (baseComponent);
  baseComponent.setState({scenes: "Adventue"});

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





// MODAL // ÁSA & HERMANN

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


// // Tour Search
//
// class TourSearch extends Component {
//   state = {
//     searchingTour: '',
//   };
//
//   searchTours (value) {
//     this.state.searchingTour = value;
//     console.log(value);
//     this.setState(this.state);
//   }
//
//
//   render() {
//     return (
//     <TextInput
//       style={styles.textInput}
//       onChangeText={this.searchTours.bind(this)}>
//     </TextInput>
//     )
//
//   }
// }



// Tour Tour CategoryCard // SSM

class TourCategoryCard extends Component {
  constructor (){
        super();
        const onButtonPress = () => {
        Alert.alert('Button has been pressed!');
        };
  }

  render() {
    return (
        <View style={styles.tourcategorycard}>
          <Image source={{uri: this.props.category.photo}}
            style={styles.categoryimage} />
            <Text style={styles.categoryname}>
              {this.props.category.name}
            </Text>
            <Text style={styles.categorynumber}>
              {this.props.category.total}
            </Text>
            <View style={styles.buttoncontainer}>
            <Button
          onPress={onButtonPress}
          title="More Info"
          accessibilityLabel="More Information"
          color='white'
        />
        </View>
          </View>
    )

  }
}

// Tour Tours Category // SSM

class ToursCategory extends Component {
  constructor (){
        super();
        const onButtonPress = () => {
        Alert.alert('Button has been pressed!');
        this.state.scenes({scenes: 'Adventure'});
        };
  }

  render(){
    return (
        <View style={styles.tourcategorycard}>
          <Image source={{uri: this.props.category.photo}}
            style={styles.categoryimage} />
            <Text style={styles.categoryname}>
              {this.props.category.name}
            </Text>
            <Text style={styles.categorynumber}>
              {this.props.category.total}
            </Text>
            <View style={styles.buttoncontainer}>
            <Button
          onPress={onButtonPress}
          title="More Info"
          accessibilityLabel="More Information"
          color='white'
        />
        </View>
          </View>
    )

  }
}

class TourSingleModal extends Component {
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    return (
  <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <ScrollView>
          <View>
            <Image source={{uri: 'https://www.re.is/media/tour-headers/640/RE04Mobile.jpg'}}
              style={styles.singletourimage} />
              <TouchableHighlight onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}><Text style={styles.closemodals}>X</Text>
              </TouchableHighlight>
            <Text style={styles.singetourname}>The Golden Circle</Text>
            <View style={styles.singletourwrap}>
            <Text style={styles.singletourintro}>Glacier hike through a
            wonderland of ice sculptures</Text>
            <View style={styles.line}></View>
            <View style={styles.infoleft}>
              <Text style={styles.singletourprice}>24.900 ISK</Text>
            </View><View style={styles.inforight}>
              <Text style={styles.toursingleduration}>Duration: 8 hours</Text>
            </View>
            <Text style={styles.toursingledec}>The Golden Circle tour allows you to visit some of Iceland’s most stunning sights, starting with the Geysir geothermal area where the Strokkur geyser shoots a column of water up to 30 metres (98 ft.) into the air every 4-8 minutes in a thrilling display of nature’s forces. The visit continues with Gullfoss (Golden Falls) waterfall, created by the river Hvítá, which tumbles and plunges into a crevice some 32 m (105 ft.) deep. The Golden Circle tour also includes the historical and geological wonder that is Thingvellir National Park, where the American and Eurasian tectonic plates are pulling apart at a rate of a few centimetres per year. Additionally, the tour includes a visit to the idyllic Friðheimar greenhouse cultivation centre, where you can learn about the magic behind growing delicious, pesticide-free tomatoes and cucumbers with the aid of the geothermal heat that Iceland has in abundance.</Text>
          </View>
          </View>
         </ScrollView>
         <View style={styles.booknow}>
           <Button
         onPress={onButtonPress}
         title="Book Now"
         accessibilityLabel="More Information"
         color='white'
         fontSize='26'
       />
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

      </View>
    );
  }
}


// MAIN - Base Component

class BookingApp extends Component {
  constructor (){
    super();
    this.getCategories();
    this.state = {
      data: [],
      scenes: ""
    }
    baseComponent = this;
  }

// Kalla á allar ferðir í Adventure flokk - Ása og Hermann
changeData (data){
  this.setState({data: data});
}

getScene (){
  if (!this.state.scenes) {
    return(
      <View style={styles.maincontainer}>
        <Text style={styles.categoryheading}>Our Day Tours Selection</Text>
        <Text style={styles.categoryintro}>Experience Iceland with our trusted guidance</Text>
        <Swiper>
          {this.state.data.map (res => <TourCategoryCard key={res.total} category={res}/>)}
        </Swiper>
      </View>
    )
  } else if (this.state.scenes === "Adventue"){
    return(
      <View style={styles.maincontainer}>
        <Text style={styles.categoryheading}>Adventure</Text>
        <Text style={styles.categoryintro}>Experience Iceland with our trusted guidance</Text>
        {this.state.data.map ((res, i) => {
          res.i=i;
          return <TourCard tour={res} changedata={this.changeData}/>
          })
        }
      </View>
    )
  }
}

getCategories (){
  return fetch('http://localhost:3001/daytours/categories')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState ({data: responseJson});
      return responseJson.categories;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return this.getScene()
  }
}

// Tour Card inní Adventure - Ása

class TourCard extends Component {
  constructor (){
    super();
    this.state={
      data: []
    }
  }
  componentDidMount (){
    return fetch('http://localhost:3001/daytours')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: responseJson});
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <ScrollView style={styles.tourcard}>
        {/* <Image source={{uri: this.state.main_photo}}
          style={styles.tourimage} /> */}
        <Text style={styles.tourname}>
          {this.state.data.length>0?this.state.data[this.props.tour.i].name: null}
        </Text>
      </ScrollView>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  //TourCardStyle
  tourcard: {
    width: 313,
    height: 190,
    borderRadius: 10,
    marginBottom: 20,
   backgroundColor: '#6C6C6C',
  },
  tourname: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 25,
    color: '#fff',
    textAlign: 'left',
    marginTop: 60,
    marginLeft: 20,
  },
  maincontainer: {
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  booknow: {
    height: 68,
    width: 375,
    backgroundColor: '#81C17D',
    paddingTop: 15,
  },
  line: {
    width: 313,
    height: 3,
    backgroundColor: '#fe5c5c',
    marginBottom: 5,
    marginTop: 5,
  },
  infoleft: {
    width: 155,
  },
  inforight: {
    width: 155,
  },
  singletourwrap: {
    padding: 32,
  },
  singletourintro: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 26,
    color: "#6c6c6c",
  },
  singletourprice: {
    fontSize: 16,
    color: "#6c6c6c",
    fontWeight: '900',
    textAlign: 'left',
  },
  toursingleduration: {
    fontSize: 16,
    color: "#6c6c6c",
  },
  toursingledec: {
    fontSize: 17,
    color: "#6c6c6c",
    lineHeight: 25,
    paddingTop: 15,
  },
  closemodals: {
    color: 'black',
    fontSize: 20,
    position: 'relative',
    left: 20,
    paddingTop: 5,
  },
  singletourimage: {
    width: 600,
    padding: 0,
    height: 250,
  },
  singetourname: {
    fontSize: 30,
    fontWeight: '900',
    position: 'absolute',
    right: 110,
    top: 60,
    width: 250,
    color: 'white',
    backgroundColor: 'transparent',
  },
  buttoncontainer: {
    backgroundColor: '#4A4A4A',
    width: 250,
    height: 60,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingTop: 10,
  },
  categoryintro: {
    fontSize: 17,
    width: 250,
    lineHeight: 20,
    paddingBottom: 25,
  },
  categoryheading: {
    fontSize: 31,
    color: '#6c6c6c',
    lineHeight: 32,
    width: 250,
    fontWeight: 'bold',
    paddingTop: 150,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
  },
  tourcategorycard: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 360,
  },
  categoryimage: {
    width: 250,
    height: 300,
  },
  categoryname: {
    fontSize: 30,
    lineHeight: 29,
    fontWeight: 'bold',
    position: 'absolute',
    left: 96,
    top: 32,
    color: 'white',
    width: 180,
  },
  categorynumber: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    right: 96,
    top: 245,
  }
});

AppRegistry.registerComponent('BookingApp', () => BookingApp);
