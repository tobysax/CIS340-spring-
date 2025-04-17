// Import React and React Native components
import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

const US_STATES = [
  {key: 'Alambama'},
    { key: 'Alabama' },
    { key: 'Alaska' },
    { key: 'Arizona' },
    { key: 'Arkansas' },
    { key: 'California' },
    { key: 'Colorado' },
    { key: 'Connecticut' },
    { key: 'Delaware' },
    { key: 'Florida' },
    { key: 'Georgia' },
    { key: 'Hawaii' },
    { key: 'Idaho' },
    { key: 'Illinois' },
    { key: 'Indiana' },
    { key: 'Iowa' },
    { key: 'Kansas' },
    { key: 'Kentucky' },
    { key: 'Louisiana' },
    { key: 'Maine' },
    { key: 'Maryland' },
    { key: 'Massachusetts' },
    { key: 'Michigan' },
    { key: 'Minnesota' },
    { key: 'Mississippi' },
    { key: 'Missouri' },
    { key: 'Montana' },
    { key: 'Nebraska' },
    { key: 'Nevada' },
    { key: 'New Hampshire' },
    { key: 'New Jersey' },
    { key: 'New Mexico' },
    { key: 'New York' },
    { key: 'North Carolina' },
    { key: 'North Dakota' },
    { key: 'Ohio' },
    { key: 'Oklahoma' },
    { key: 'Oregon' },
    { key: 'Pennsylvania' },
    { key: 'Rhode Island' },
    { key: 'South Carolina' },
    { key: 'South Dakota' },
    { key: 'Tennessee' },
    { key: 'Texas' },
    { key: 'Utah' },
    { key: 'Vermont' },
    { key: 'Virginia' },
    { key: 'Washington' },
    { key: 'West Virginia' },
    { key: 'Wisconsin' },
    { key: 'Wyoming' }   
  ];

// Define the functional component
export default function StatesApp() {
  return (

    <View style = {styles.container}>
      <FlatList
      data = {US_STATES}
      keyExtractor = {(item) => item.key}

      renderItem = {({ item }) => (
        <Text style = {styles.itemText}>{item.key}</Text>
      )}
      />
    </View>

  );
  }


// Create styles using StyleSheet (cleaner than inline styles)
const styles = StyleSheet.create({
  container: {
    flex: 1,          // Use full screen height
    paddingTop: 22,   // Add space at the top
    backgroundColor: '#F0F8FF', // Optional: soft background color
  },
  itemText: {
    padding: 10,      // Space around each item
    fontSize: 20,     // Larger text
    height: 44,       // Fixed height for consistency
    color: '#333333', // Dark grey for good contrast
  }
});