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

export default function SuppliedForm() {
  const [loading, setloading] = useState(false);
  const [supplierName, setsupplierName] = useState(null);
  const [serialNumber, setserialNumber] = useState(null);
  const [purchaseOrderNumber, setpurchaseOrderNumber] = useState(null);

  const [invoiceNoteNumber, setinvoiceNoteNumber] = useState(null);
  const [description, setdescription] = useState(null);
  const [quantityOrdered, setquantityOrdered] = useState(0);
  const [codeNumber, setcodeNumber] = useState(null);
  const [inspectionReport, setinspectionReport] = useState(null);
  const [quantityPassed, setquantityPassed] = useState(null);
  const [quantityReceived, setquantityReceived] = useState(null);
  const [remarks, setremarks] = useState(null);
  const [receivedBy, setreceivedBy] = useState(null);
  const [InspectionName, setInspectionName] = useState(null);

  const create = async () => {
    try {
      if (
        !supplierName ||
        !serialNumber ||
        !purchaseOrderNumber ||
        !invoiceNoteNumber ||
        !description ||
        !quantityOrdered ||
        !codeNumber ||
        !inspectionReport ||
        !quantityPassed ||
        !quantityReceived ||
        !remarks ||
        !receivedBy ||
        !InspectionName
      )
        return alert("Please enter all fields");

      await firebase.database().ref("received-goods").push({
        supplierName,
        serialNumber,
        purchaseOrderNumber,
        invoiceNoteNumber,
        description,
        quantityOrdered,
        codeNumber,
        inspectionReport,
        quantityPassed,
        quantityReceived,
        remarks,
        receivedBy,
        InspectionName,
      });

      alert("Data has been stored successfully");
    } catch (error) {
      alert("Something went wrong");
    } finally {
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
        <Text style={styles.brandViewText}>Supply Form</Text>
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
            Fill the supply form below
          </Text>

          {/* form inpits */}
          <View style={{ marginTop: 50 }}>
            <View style={styles.input}>
              <Text style={styles.text}>Suppliers Name</Text>
              <Input
                size={"2xl"}
                onChangeText={(e) => setsupplierName(e)}
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Serial Number</Text>
              <Input
                size={"2xl"}
                onChangeText={(e) => setserialNumber(e)}
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Purchase Order Number</Text>
              <Input
                size={"2xl"}
                onChangeText={(e) => setpurchaseOrderNumber(e)}
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Invoice Note Number</Text>
              <Input
                size={"2xl"}
                onChangeText={(e) => setinvoiceNoteNumber(e)}
                style={{
                  borderRadius: 10,
                }}
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
              <Text style={styles.text}>Quantity Ordered</Text>
              <Input
                size={"2xl"}
                onChangeText={(e) => setquantityOrdered(e)}
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Code Number</Text>
              <Input
                size={"2xl"}
                onChangeText={(e) => setcodeNumber(e)}
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Inspection Report</Text>
              <Input
                size={"2xl"}
                onChangeText={(e) => setinspectionReport(e)}
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Quantity Passed</Text>
              <Input
                size={"2xl"}
                onChangeText={(e) => setquantityPassed(e)}
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Quantity Received</Text>
              <Input
                size={"2xl"}
                onChangeText={(e) => setquantityReceived(e)}
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Remarks</Text>
              <Input
                size={"2xl"}
                onChangeText={(e) => setremarks(e)}
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Received By</Text>
              <Input
                size={"2xl"}
                onChangeText={(e) => setreceivedBy(e)}
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>

            <View style={styles.input}>
              <Text style={styles.text}>Inspection Name</Text>
              <Input
                size={"2xl"}
                onChangeText={(e) => setInspectionName(e)}
                style={{
                  borderRadius: 10,
                }}
                placeholderTextColor={"#000"}
                placeholder="..."
              ></Input>
            </View>
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
