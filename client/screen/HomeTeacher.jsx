import React from "react";
import { View, Text } from "react-native";
import { Container, Button, Icon, Right, Left, Header, DeckSwiper, Card, CardItem, Thumbnail, Body } from "native-base";
import PersonalDataHome from "../components/PersonalDataHome";
import Ionicon from "react-native-vector-icons/Ionicons";


export default function HomeTeacherScreen() {

    const temporaryData = [
        {
            sks: 5,
            time: "10.00",
            role: "Dosen"
          },
          {
            sks: 5,
            time: "10.00",
            role: "Dosen"
          },
          {
            sks: 5,
            time: "10.00",
            role: "Dosen"
          },
          {
            sks: 5,
            time: "10.00",
            role: "Dosen"
          },
      ];

      const cards = [
        {
          text: 'Card One',
          name: 'One',
          image: require('../assets/banner-civika.png'),
        },
        {
          text: 'Card One',
          name: 'Two',
          image: require('../assets/banner-civika2.png'),
        },
        {
          text: 'Card One',
          name: 'Three',
          image: require('../assets/banner-civika3.png'),
        },
        {
          text: 'Card One',
          name: 'Four',
          image: require('../assets/banner-civika4-min.png'),
        }
        
      ];


  return (
  
    <Container style={{ backgroundColor: "#f9f7f7" }}>
    <PersonalDataHome data={temporaryData} />
    <View style={{flex: 1}}>

    <View style={{ flex: 1, flexDirection: "row"}}>
         <View style={{ flex: 1}}>

        </View>
    <View style={{ flex: 1}}>
        <Button large Icon style={{backgroundColor:"#112d4e", alignSelf: "center", marginVertical: 15, width: 60, justifyContent: "center"}} >
          <Ionicon name='easel' size={30} color="#dbe2ef"/>
        </Button>
        <Text style={{alignSelf:"center"}}>UKT</Text>
    </View>
    <View style={{ flex: 1}}>
    
    </View> 
    </View>

    <View style={{flex:1.5}}>
        <DeckSwiper
          dataSource={cards}
          renderItem={item =>
                <Image style={{ height: 185, width: 380, flex:1, alignSelf:"center"}} source={item.image} />
          }
        />
      </View>

        
    </View>
  </Container>
  );
}
