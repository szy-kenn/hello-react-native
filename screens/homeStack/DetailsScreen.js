import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react'
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

const DetailsScreen = () => {

  const navigation = useNavigation();
  const route = useRoute();

  // gets the 2nd argument passed in navigate() in Feed.js
  const { params } = route;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.title,
    })
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text> { params.content } </Text>
    </SafeAreaView>
  )
}

export default DetailsScreen;