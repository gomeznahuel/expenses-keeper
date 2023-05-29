import React from "react";
import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CardView } from "../../components";
import { LAST_PAYMENTS } from "../../data/lastPayments";
import { Ionicons } from "@expo/vector-icons";

// Redux

import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const expenses = useSelector((state: RootState) => state.expenses);

  return (
    <View style={{ flex: 1, padding: 30 }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <CardView customStyles={styles.cardContainer}>
        <View>
          <Text style={styles.cardTitle}>Current amount</Text>
          <Text style={styles.cardAmount}>
            $ {expenses}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => {}} activeOpacity={0.8} style={styles.buttonCard} >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </CardView>

      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 30 }}>
        <Text>Last movements</Text>
        <Text>View all</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={LAST_PAYMENTS}
          renderItem={({ item }) => (
            <CardView customStyles={{ marginBottom: 10, padding: 14, backgroundColor: "#D9D9D9" }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                  <Ionicons name={item.iconName} size={40} />
                  <View>
                    <Text style={{ fontWeight: "bold", fontSize: 16, color: "black" }}>{item.title}</Text>
                    <Text style={{ color: "gray" }}>{item.date}</Text>
                  </View>
                </View>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  $ {item.ammount}
                </Text>
              </View>
            </CardView>
          )}
          keyExtractor={(item) => item.id}
        />
        
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    minHeight: 100,
    minWidth: 320,
    maxWidth: 330,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    alignSelf: "center",
    marginTop: 2,
    backgroundColor: "#D9D9D9",
  },
  cardTitle: {
    fontSize: 16,
    color: "gray",
  },
  cardAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  buttonCard: {
    backgroundColor: "#201818",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default HomeScreen;
