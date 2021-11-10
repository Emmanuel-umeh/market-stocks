import { Checkbox, Input } from "native-base";
import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { firebase } from "../firebase";
import { Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../redux/action/auth.actions";

const LoginScreen = ({ navigation }) => {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();
  const login = async () => {
    try {
      setloading(true);
      if (!email || !password) {
        alert("Please enter a valid email and password!!");
        setloading(false);
        return;
      }
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log({ result });
      dispatch(authenticateUser(result.user));
      setloading(false);
    } catch (error) {
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
          height: hp(40),
        }}
        source={require("../assets/images/background4.jpg")}
      >
        <View style={styles.brandView}>
          <Text style={styles.brandViewText}>Stock Market</Text>
          {/* <Text style={styles.brandViewText}>Stock Market</Text> */}
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
            Welcome
          </Text>

          {/* form inpits */}
          <View style={{ marginTop: 50 }}>
            <View
              style={{
                borderColor: "#4632A1",
              }}
            >
              <Text style={styles.text}>Email</Text>
              <Input
                size={"2xl"}
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="enter valid email"
                keyboardType="email-address"
                onChangeText={(e: any) => {
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
                style={{
                  borderRadius: 10,
                }}
                size={"2xl"}
                placeholder="pass"
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

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Signup");
                  }}
                >
                  <Text style={{ color: "#000", alignSelf: "flex-end" }}>
                    Dont have an account?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* login and socials */}
          <Button
            onPress={login}
            buttonStyle={styles.loginBtn}
            containerStyle={styles.loginBtn}
            loading={loading}
            title={"Login"}
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
    color: "whitesmoke",
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

export default LoginScreen;
