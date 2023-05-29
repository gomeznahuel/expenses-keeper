import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { addExpense, subtractExpense } from "../../store/actions/actions";

const ExpenseList: React.FC = () => {
  const [newExpense, setNewExpense] = useState<string>("0"); // State for the new expense value
  const expenses = useSelector((state: RootState) => state.expenses.toString()); // Access the expenses state from the store
  const dispatch = useDispatch(); // Get the dispatch function

  const handleInputChange = (text: string) => {
    setNewExpense(text.replace(/[^0-9]/g, "")); // Update the new expense value in state and allow only numeric input
  };

  const handleAddExpense = () => {
    dispatch(addExpense(parseInt(newExpense, 10))); // Dispatch an action to add the new expense
    setNewExpense("0"); // Reset the new expense value
  };

  const handleSubtractExpense = () => {
    dispatch(subtractExpense(parseInt(newExpense, 10))); // Dispatch an action to add the new expense
    setNewExpense("0"); // Reset the new expense value
  };

  return (
    <View style={{ flex: 1, padding: 30 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
        Agrega o resta gastos y mira el resultado en la pantalla de inicio.
      </Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 20, paddingHorizontal: 10, borderRadius: 5 }}
        keyboardType="numeric"
        value={newExpense.toString()}
        onChangeText={handleInputChange}
        placeholder="Enter the expense value"
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
        <Button title="Add Expense" onPress={handleAddExpense} />
        <Button title="Subtract Expense" onPress={handleSubtractExpense} />
      </View>
    </View>
  );
};

export default ExpenseList;
