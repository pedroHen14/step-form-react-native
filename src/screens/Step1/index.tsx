import React, { useContext } from "react";
import { View } from "react-native";
import { globalStyles } from "../../styles";
import { Button, TextInput } from 'react-native-paper';
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/core";
import { StepRegisterContext } from "../../contexts";

export const Step1 = () => {
  const navigation = useNavigation();
  const { register, setRegister } = useContext(StepRegisterContext);

  const handleNextStep = () => {
    
  }

  return(
    <View style={globalStyles.container}>
      <TextInput label="E-mail" mode="outlined" style={globalStyles.input} />
      <TextInput secureTextEntry label="Senha" mode="outlined" style={globalStyles.input} />
      <Button mode="contained" onPress={() => handleNextStep()}>Próximo</Button>
    </View>
  );
}