import { Input } from "native-base";
import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import EditScreenInfo from "../components/EditScreenInfo";
import { Loading } from "../components/Loading";
import { Text, View } from "../components/Themed";
import { firebase } from "../firebase";

export default function DailyRecord() {
  const [brandName, setbrandName] = useState(false);
  const [brandCodeNo, setbrandCodeNo] = useState(null);
  const [dailyAmount, setdailyAmount] = useState(null);
  const [quantityOrder, setquantityOrder] = useState(0);

  const [vehicleCodeNo, setvehicleCodeNo] = useState(0);
  const [driverName, setdriverName] = useState(null);

  const [loading, setloading] = useState(false);

  const create = async () => {
    try {
      setloading(true);
      if (
        !brandName ||
        !brandCodeNo ||
        !dailyAmount ||
        !quantityOrder ||
        !driverName ||
        !vehicleCodeNo
      ) {
        setloading(false);
        return alert("Please enter all fields");
      }

      await firebase.database().ref("daily-report").push({
        brandName,
        brandCodeNo,
        dailyAmount,
        quantityOrder,
        driverName,
        vehicleCodeNo,
      });

      alert("Data has been stored successfully");
      setloading(false);
    } catch (error) {
      alert("Something went wrong");
      setloading(false);
    }
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View style={styles.brandView}>
        <Text style={styles.brandViewText}>Computerized Daily </Text>
        <Text style={styles.brandViewText}>Report</Text>
        {/* <Text style={styles.brandViewText}>Stock Market</Text> */}
      </View>

      {loading && <Loading hasBackground={true} />}
      {/* bottom view */}

      <View style={styles.bottomView}>
        <View style={{ padding: 30 }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Fill the ledger below
          </Text>

          {/* form inpits */}
          <View style={{ marginTop: 50 }}>
            <View style={styles.input}>
              <Text style={styles.text}>Brand Name</Text>
              <Input
                size={"2xl"}
                onChangeText={(e) => setbrandName(e)}
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Brand Code Number</Text>
              <Input
                size={"2xl"}
                onChangeText={(e) => setbrandCodeNo(e)}
                keyboardType="decimal-pad"
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Total Amount Today</Text>
              <Input
                size={"2xl"}
                keyboardType="decimal-pad"
                onChangeText={(e) => setdailyAmount(e)}
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Quantity Order</Text>
              <Input
                size={"2xl"}
                keyboardType="decimal-pad"
                onChangeText={(e) => setquantityOrder(e)}
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Vehicle Code Number</Text>
              <Input
                size={"2xl"}
                keyboardType="decimal-pad"
                onChangeText={(e) => setvehicleCodeNo(e)}
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Driver's Name</Text>
              <Input
                size={"2xl"}
                onChangeText={(e) => setdriverName(e)}
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.forgotPassView}>
              <View style={{ flex: 1, marginLeft: -20 }}>
                <View>
                  {/* <Checkbox isChecked={true} color="#4632A1"></Checkbox> */}
                </View>
              </View>
            </View>

            {/* login and socials */}

            <Button
              onPress={create}
              buttonStyle={styles.loginBtn}
              containerStyle={styles.loginBtn}
              loading={loading}
              title={"Submit Form"}
            ></Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },

  brandView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  brandViewText: {
    fontWeight: "bold",
    fontSize: 30,
    textTransform: "uppercase",
    paddingTop: 20,
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: "whitesmoke",
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },

  forgotPassView: {
    height: 50,
    marginTop: 20,
    flexDirection: "row",
  },
  loginBtn: {
    alignSelf: "center",
    backgroundColor: "#4632A1",
    width: wp(50),
    justifyContent: "center",
    shadowOffset: { width: 1, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  input: {
    borderColor: "#4632A1",
    paddingTop: 20,
  },
});
