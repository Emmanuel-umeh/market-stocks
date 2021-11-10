import { Ionicons } from "@expo/vector-icons";
import { Checkbox, Icon, Input } from "native-base";
import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { firebase } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [email, setemail] = useState(null);
  const [name, setname] = useState(null);
  const [password, setpassword] = useState(null);
  const [loading, setloading] = useState(false);

  const register = async () => {
    try {
      setloading(true);
      if (!email || !name || !password) {
        alert("Please enter all fields");
        setloading(false);
        return;
      }

      console.log({ email, name, password });

      await firebase.auth().createUserWithEmailAndPassword(email, password);
      setloading(false);
    } catch (error: any) {
      console.log({ error });
      alert(error);
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
      <ImageBackground
        style={{
          height: hp(30),
        }}
        source={require("../assets/images/background4.jpg")}
      >
        <View style={styles.brandView}>
          {/* <Ionicons name="arrow-up" size={50} color="#1ff01f" />
          <Ionicons name="arrow-down" size={50} color="red" /> */}
          <Text style={styles.brandViewText}>Get Started</Text>
        </View>
      </ImageBackground>

      {/* bottom view */}

      <View style={styles.bottomView}>
        <View style={{ padding: 40 }}>
          <Text
            style={{
              color: "#4632A1",
              fontSize: 40,
              fontWeight: "bold",
            }}
          >
            Register
          </Text>

          {/* form inpits */}
          <View style={{ marginTop: 50 }}>
            <View
              style={{
                borderColor: "#4632A1",
              }}
            >
              <Text style={styles.text}>Full Name</Text>
              <Input
                size={"2xl"}
                style={{
                  borderRadius: 10,
                }}
                placeholder="John Doe"
                keyboardType="email-address"
                onChangeText={(e: any) => {
                  setname(e);
                }}
              >
                {" "}
              </Input>
            </View>
            <View
              style={{
                borderColor: "#4632A1",
                marginTop: 20,
              }}
            >
              <Text style={styles.text}>Email</Text>
              <Input
                size={"2xl"}
                style={{
                  borderRadius: 10,
                }}
                placeholder="Enter your email"
                keyboardType="email-address"
                onChangeText={(e: any) => {
                  console.log(e);

                  setemail(e);
                }}
              ></Input>
            </View>

            <View
              style={{
                borderColor: "#4632A1",
                marginTop: 20,
              }}
            >
              <Text style={styles.text}>Password</Text>
              <Input
                size={"2xl"}
                style={{
                  borderRadius: 10,
                }}
                secureTextEntry={true}
                keyboardType="email-address"
                onChangeText={(e: any) => {
                  setpassword(e);
                }}
              ></Input>
            </View>
          </View>

          <View style={styles.forgotPassView}>
            <View style={{ flex: 1, marginLeft: -20 }}>
              <View>
                {/* <Checkbox isChecked={true} color="#4632A1"></Checkbox> */}

                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}
                  >
                    <Text style={{ color: "#000", alignSelf: "flex-end" }}>
                      already have an account?
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* login and socials */}

          <Button
            onPress={register}
            buttonStyle={styles.loginBtn}
            containerStyle={styles.loginBtn}
            loading={loading}
            title={"Register"}
          ></Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  brandViewText: {
    color: "#ededed",
    fontWeight: "bold",
    fontSize: 40,
    textTransform: "uppercase",
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: "whitesmoke",
    bottom: 50,
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
});

export default RegisterScreen;
