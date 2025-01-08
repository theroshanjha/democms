
import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  FlatList,
  ScrollView
} from 'react-native';

import CircularProgress from 'react-native-circular-progress-indicator';
import * as Progress from 'react-native-progress';


const App = ({ }) => {

  const inprogresstasks =
    [{ id: 1, title: "Office Project", desc: "Grocery shopping app design", taskdone: 0.7, bgColor: "#e7f3ff", activeStrokeColor: "pink" },
    { id: 2, title: "Office Project 2", desc: "uber app design", taskdone: 0.5, bgColor: "#ffe9e1", activeStrokeColor: "blue" },
    { id: 3, title: "Office Project 3", desc: "zepto app design", taskdone: 0.2, bgColor: "#e7f3ff", activeStrokeColor: "orange" },
    { id: 4, title: "Office Project 4", desc: "cred app design", taskdone: 0.8, bgColor: "#ffe9e1", activeStrokeColor: "yellow" }
    ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ margin: 15, flex: 1 }}>


        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
          <View style={{ flexDirection: "row" }}>
            <Image style={{ height: 40, width: 40, resizeMode: "contain", borderRadius: 20 }} source={require("./APP/Images/user.png")}></Image>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: "black", fontSize: 14 }}>Hello!</Text>
              <Text style={{ fontWeight: "bold", color: "black", fontSize: 20 }}>Peter Parker</Text>
            </View>
          </View>
          <Image style={{ height: 28, width: 28, resizeMode: "contain" }} source={require("./APP/Images/noti.png")}></Image>
        </View>

        <View style={{ height: 150, backgroundColor: "#5f33e1", marginTop: 20, marginBottom: 10, borderRadius: 20 }}>
          <View style={{ margin: 15, justifyContent: 'space-between', flexDirection: "row" }}>
            <View style={{ flexDirection: "column", justifyContent: "space-between" }}>
              <Text style={{ color: "white", fontSize: 16 }}>{"Your today's task\nalmost done!"}</Text>
              <View style={{ width: 120, height: 40, backgroundColor: "white", borderRadius: 10, justifyContent: "center", marginTop: 30 }}>
                <Text style={{ color: "#7f5ce8", fontWeight: 'bold', textAlign: "center", fontSize: 16 }}>View Task</Text>
              </View>
            </View>

            <View style={{ justifyContent: "center" }}>
              <CircularProgress
                value={80}
                radius={40}
                activeStrokeColor='white'
                inActiveStrokeColor={'#8764ff'}
                inActiveStrokeOpacity={0.2}
                progressValueColor={'#fff'}
                valueSuffix={'%'}
              />
            </View>

            <Image style={{ height: 28, width: 28, resizeMode: "contain" }} source={require("./APP/Images/more.png")}></Image>

          </View>



        </View>


        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>In Progress <Text style={{ color: "blue" }}>4</Text></Text>
        </View>

        <FlatList
          style={{ marginTop: 10 }}
          data={inprogresstasks}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={{ height: 150, width: 220, borderRadius: 20, backgroundColor: item.bgColor, marginLeft: 10, marginBottom: 20 }}>
              <View style={{ justifyContent: "space-evenly", height: 150, marginLeft: 10, marginRight: 10 }}>
                <Text style={{ color: "#999baa", fontSize: 13, fontWeight: "bold" }}>{item.title}</Text>
                <Text style={{ color: "#000", fontSize: 16, fontWeight: "bold" }}>{item.desc}</Text>
                <Progress.Bar progress={item.taskdone} width={200} />
              </View>
            </View>
          )}></FlatList>


        <View style={{ marginTop: 20, marginBottom: 10 }}>
          <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>Task Groups <Text style={{ color: "blue" }}>4</Text></Text>
        </View>

        <FlatList
          data={inprogresstasks}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ height: 80, width: "100%", borderRadius: 20, backgroundColor: "white", marginTop: 10, borderColor: '#f2f2f2', borderWidth: 1}}>
              <View style={{ height: "100%", width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ justifyContent: "center", marginLeft: 10 }}>
                  <Text>{item.title}</Text>
                  <Text>{"20 Tasks"}</Text>
                </View>

                <View style={{ justifyContent: "center", marginRight: 10 }}>
                  <CircularProgress
                    value={80}
                    radius={25}
                    activeStrokeColor={item.activeStrokeColor}
                    inActiveStrokeColor={'#8764ff'}
                    inActiveStrokeOpacity={0.2}
                    progressValueColor={'#000'}
                    valueSuffix={'%'}
                    titleColor={'black'}
                    titleStyle={{ fontWeight: 'bold', fontSize: 16 }}
                  />
                </View>

              </View>

            </View>
          )}></FlatList>







      </View>

      <View style={{ position: "absolute", bottom: 0, height: 60, backgroundColor: "#eee9ff", width: "100%", flexDirection: "row", justifyContent: "space-evenly" }}>
        <Image style={{ height: 24, width: 24, resizeMode: "contain", alignSelf: "center" }} source={require("./APP/Images/home.png")}></Image>
        <Image style={{ height: 24, width: 24, resizeMode: "contain", alignSelf: "center" }} source={require("./APP/Images/to-do-list.png")}></Image>
        <View style={{ height: 70, width: 70, backgroundColor: "#5f33e1", borderRadius: 35, marginTop: -25 , justifyContent:"center"}}>
        <Image style={{ height: 24, width: 24, resizeMode: "contain", alignSelf: "center" }} source={require("./APP/Images/add.png")}></Image>

        </View>
        <Image style={{ height: 24, width: 24, resizeMode: "contain", alignSelf: "center" }} source={require("./APP/Images/writing.png")}></Image>
        <Image style={{ height: 24, width: 24, resizeMode: "contain", alignSelf: "center" }} source={require("./APP/Images/dp.png")}></Image>

      </View>

    </SafeAreaView>
  )
}


export default App;
