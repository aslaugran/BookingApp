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
      <View style={styles.tourcard}>
        {/* <Image source={{uri: this.state.main_photo}}
          style={styles.tourimage} /> */}
        <Text style={styles.tourname}>
          {this.state.data.length>0?this.state.data[this.props.tour.i].name: null}
        </Text>
      </View>
    );
  }
}

// class BookingApp extends Component {
//   constructor (){
//     super();
//     this.getCategories();
//         this.state = {
//           data: []
//         }
//     }
//
//     getCategories (){
//         return fetch('http://localhost:3001/daytours/categories')
//           .then((response) => response.json())
//           .then((responseJson) => {
//             this.setState ({data: responseJson});
//             return responseJson.categories;
//           })
//           .catch((error) => {
//             console.error(error);
//           });
//       }
//   render() {
//           const routes = [
//             {title: 'Our Day Tours Selection', index: 0},
//             {title: 'Adventure',  index: 1},
//           ];
//           return (
//       <Navigator style={styles.navigator}
//       initialRoute={routes[0]}
//       initialRouteStack={routes}
//       renderScene={(route, navigator) =>
//         <TouchableHighlight onPress={() => {
//           if (route.index === 0) {
//             navigator.push(routes[1]);
//           } else {
//             navigator.pop();
//           }
//         }}>
//         <Text style={styles.categoryheading}>{route.title}</Text>
//         </TouchableHighlight>
//       }
//       style={{padding: 100}}
//     />
//   );
//       }
// }


// Styles
const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
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
