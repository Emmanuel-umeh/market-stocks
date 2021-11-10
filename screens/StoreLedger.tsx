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

export default function StoreLedger() {
  const [loading, setloading] = useState(false);
  const [unit, setunit] = useState(null);
  const [description, setdescription] = useState(null);
  const [maximum, setmaximum] = useState(0);

  const [minimum, setminimum] = useState(0);
  const [codeNo, setcodeNo] = useState(null);
  const [reorderLevel, setreorderLevel] = useState(0);
  const [reorderQuantity, setreorderQuantity] = useState(null);
  const [refNo, setrefNo] = useState(null);
  const [cummQuantity, setcummQuantity] = useState(null);
  const [issuedQuantity, setissuedQuantity] = useState(null);

  const create = async () => {
    try {
      setloading(true);
      if (
        !unit ||
        !maximum ||
        !minimum ||
        !codeNo ||
        !description ||
        !reorderLevel ||
        !reorderQuantity ||
        !refNo ||
        !cummQuantity ||
        !issuedQuantity
      ) {
        setloading(false);
        return alert("Please enter all fields");
      }

      await firebase.database().ref("store-ledger").push({
        unit,
        maximum,
        minimum,
        codeNo,
        description,
        reorderLevel,
        reorderQuantity,
        refNo,
        cummQuantity,
        issuedQuantity,
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
        <Text style={styles.brandViewText}>Store Ledger Form</Text>
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
              <Text style={styles.text}>Unit</Text>
              <Input
                size={"2xl"}
                onChangeText={(e) => setunit(e)}
                style={{
                  borderRadius: 10,
                }}
                keyboardType="decimal-pad"
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Description</Text>
              <Input
                size={"2xl"}
                onChangeText={(e) => setdescription(e)}
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Maximum</Text>
              <Input
                size={"2xl"}
                keyboardType="decimal-pad"
                onChangeText={(e) => setmaximum(e)}
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Minimum</Text>
              <Input
                size={"2xl"}
                keyboardType="decimal-pad"
                onChangeText={(e) => setminimum(e)}
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Code No</Text>
              <Input
                size={"2xl"}
                keyboardType="decimal-pad"
                onChangeText={(e) => setcodeNo(e)}
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Reorder Level</Text>
              <Input
                size={"2xl"}
                onChangeText={(e) => setreorderLevel(e)}
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Reorder Quantity</Text>
              <Input
                size={"2xl"}
                onChangeText={(e) => setreorderQuantity(e)}
                style={{
                  borderRadius: 10,
                }}
                keyboardType="decimal-pad"
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Ref No</Text>
              <Input
                size={"2xl"}
                onChangeText={(e) => setrefNo(e)}
                style={{
                  borderRadius: 10,
                }}
                keyboardType="decimal-pad"
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Quantity Issued</Text>
              <Input
                size={"2xl"}
                onChangeText={(e) => setissuedQuantity(e)}
                style={{
                  borderRadius: 10,
                }}
                keyboardType="decimal-pad"
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Cummulative Quantity</Text>
              <Input
                size={"2xl"}
                onChangeText={(e) => setcummQuantity(e)}
                keyboardType="decimal-pad"
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
