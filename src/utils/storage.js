import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTES_STORAGE_KEY = 'PURONOTES_NOTES';

export const saveNotesToStorage = async (notes) => {
  try {
    const jsonValue = JSON.stringify(notes);
    await AsyncStorage.setItem(NOTES_STORAGE_KEY, jsonValue);
  } catch (e) {
    console.error('Failed to save notes:', e);
  }
};

export const loadNotesFromStorage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(NOTES_STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Failed to load notes:', e);
    return [];
  }
};