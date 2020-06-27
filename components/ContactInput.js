import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const ContactInput = (props) => {

let [ name, setName ] = useState('');
let [ number, setNumber ] = useState('');

  return (
    <View style={styles.insertContact}> 
        <View style={styles.sectionTextInput}>
            <Text style={{ alignSelf: 'center' }}>Insira o nome:</Text>
            <TextInput style={styles.nameTextInput} onChangeText={name => setName(name)} value={name} placeholder="Exemplo: Ariel" />
        </View>
        <View style={styles.sectionTextInput}>
            <Text style={{ alignSelf: 'center' }}>Insira o número:</Text>
            <TextInput maxLength={11} style={styles.numberTextInput} onChangeText={number => setNumber(number)} value={number} placeholder="Exemplo: 11912345678" />
        </View>
        <View style={{ marginBottom: 10 }} > 
          <Button color="#6b4d00" title="Adicionar contatos" onPress={() => props.onAddContact(name, number) }/>
        </View>
        <View>
          <Button color="#c79000" title="Limpar Contatos" onPress={() => props.onDeleteAll() }/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    insertContact: {
      justifyContent: 'space-around'
    },
    numberTextInput: {
      padding: 10,
      borderWidth: 1,
      borderColor: 'transparent',
      borderBottomColor: '#B0BEC5',
      marginLeft: 10,
      marginBottom: 10
    },
    nameTextInput: {
      padding: 10,
      borderWidth: 1,
      borderColor: 'transparent',
      borderBottomColor: '#B0BEC5',
      marginLeft: 10
    },
    sectionTextInput: {
      flexDirection: 'row',
      padding: 10
    }
  });
export default ContactInput;