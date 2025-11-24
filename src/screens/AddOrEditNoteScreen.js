import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';

import useNotesStore from '../store/useNotesStore';

const AddOrEditNoteScreen = ({ navigation, route }) => {
  const { noteToEdit } = route.params || {};
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { addNote, updateNote } = useNotesStore();

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title || '');
      setContent(noteToEdit.content || '');
    }
  }, [noteToEdit]);

  useEffect(() => {
    navigation.setOptions({
      title: noteToEdit ? 'Edit Note' : 'New Note',
      headerRight: () => (
        <TouchableOpacity 
          style={styles.saveButton} 
          onPress={handleSave}
          disabled={isSubmitting}
        >
          <Text style={[
            styles.saveButtonText,
            isSubmitting && styles.saveButtonTextDisabled
          ]}>
            {isSubmitting ? 'Saving...' : 'Save'}
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, noteToEdit, title, content, isSubmitting]);

  const handleSave = async () => {
    if (!title.trim() && !content.trim()) {
      Toast.show({
        type: 'error',
        text1: 'Note cannot be empty',
        position: 'bottom',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      if (noteToEdit) {
        // Update existing note
        await updateNote(noteToEdit.id, { title: title.trim(), content: content.trim() });
        Toast.show({
          type: 'success',
          text1: 'Note updated successfully',
          position: 'bottom',
        });
      } else {
        // Add new note
        await addNote({ title: title.trim(), content: content.trim() });
        Toast.show({
          type: 'success',
          text1: 'Note created successfully',
          position: 'bottom',
        });
      }
      
      navigation.goBack();
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Failed to save note',
        position: 'bottom',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Title Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.titleInput}
              placeholder="Note title..."
              placeholderTextColor="#8E8E93"
              value={title}
              onChangeText={setTitle}
              maxLength={200}
              returnKeyType="next"
              autoFocus={!noteToEdit}
            />
            <Text style={styles.charCount}>
              {title.length}/200
            </Text>
          </View>

          {/* Content Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.contentInput}
              placeholder="Start typing your note..."
              placeholderTextColor="#8E8E93"
              value={content}
              onChangeText={setContent}
              multiline
              textAlignVertical="top"
              maxLength={5000}
            />
            <Text style={styles.charCount}>
              {content.length}/5000
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 16,
  },
  inputContainer: {
    marginBottom: 24,
  },
  titleInput: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1C1C1E',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
    marginBottom: 4,
  },
  contentInput: {
    fontSize: 16,
    color: '#48484A',
    lineHeight: 24,
    minHeight: 200,
    textAlignVertical: 'top',
  },
  charCount: {
    fontSize: 12,
    color: '#8E8E93',
    textAlign: 'right',
    marginTop: 4,
  },
  saveButton: {
    marginRight: 16,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
  saveButtonTextDisabled: {
    color: '#C7C7CC',
  },
});

export default AddOrEditNoteScreen;
