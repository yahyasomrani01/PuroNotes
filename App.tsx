import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/screens/HomeScreen';
import AddOrEditNoteScreen from './src/screens/AddOrEditNoteScreen';
import useNotesStore from './src/store/useNotesStore';

export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
};

export type RootStackParamList = {
  Home: undefined;
  AddOrEditNote: { noteToEdit?: Note };
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const loadNotes = useNotesStore((state) => state.loadNotes);

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#FFFFFF',
              shadowColor: 'transparent',
              elevation: 0,
            },
            headerTintColor: '#1C1C1E',
            headerTitleStyle: {
              fontWeight: '600',
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddOrEditNote"
            component={AddOrEditNoteScreen}
            options={({ route }) => ({
              title: route.params?.noteToEdit ? 'Edit Note' : 'New Note',
              presentation: 'modal',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default App;