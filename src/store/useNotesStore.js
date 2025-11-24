import { create } from 'zustand';
import { 
  saveNotesToStorage, 
  loadNotesFromStorage 
} from '../utils/storage';

const useNotesStore = create((set, get) => ({
  notes: [],
  searchQuery: '',
  
  // Load notes from storage
  loadNotes: async () => {
    const notes = await loadNotesFromStorage();
    set({ notes: notes || [] });
  },
  
  // Add new note
  addNote: async (note) => {
    const newNote = {
      ...note,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    
    const updatedNotes = [newNote, ...get().notes];
    set({ notes: updatedNotes });
    await saveNotesToStorage(updatedNotes);
    return newNote;
  },
  
  // Update existing note
  updateNote: async (id, updatedNote) => {
    const updatedNotes = get().notes.map(note =>
      note.id === id 
        ? { ...note, ...updatedNote, updatedAt: new Date().toISOString() }
        : note
    );
    set({ notes: updatedNotes });
    await saveNotesToStorage(updatedNotes);
  },
  
  // Delete note
  deleteNote: async (id) => {
    const updatedNotes = get().notes.filter(note => note.id !== id);
    set({ notes: updatedNotes });
    await saveNotesToStorage(updatedNotes);
  },
  
  // Set search query
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  // Get filtered and sorted notes
  getFilteredNotes: () => {
    const { notes, searchQuery } = get();
    let filtered = notes;
    
    // Filter by search query
    if (searchQuery) {
      filtered = notes.filter(note =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Sort by creation date (newest first)
    return filtered.sort((a, b) => 
      new Date(b.createdAt) - new Date(a.createdAt)
    );
  },
}));

export default useNotesStore;