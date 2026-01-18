
export interface Submission {
  id: string;
  type: 'PARTNERSHIP' | 'REPORT' | 'CONTACT';
  timestamp: string;
  status: 'PENDING' | 'VERIFIED' | 'ARCHIVED';
  data: any;
}

const STORAGE_KEY = 'sparrow_operational_vault';

export const db = {
  // Save a new entry
  save: (type: Submission['type'], data: any) => {
    const vault = db.getAll();
    const newEntry: Submission = {
      id: `OP-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      type,
      timestamp: new Date().toISOString(),
      status: 'PENDING',
      data
    };
    vault.push(newEntry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(vault));
    return newEntry;
  },

  // Get all entries
  getAll: (): Submission[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  // Update status
  updateStatus: (id: string, status: Submission['status']) => {
    const vault = db.getAll();
    const index = vault.findIndex(item => item.id === id);
    if (index !== -1) {
      vault[index].status = status;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(vault));
    }
  },

  // Clear (For reset)
  clear: () => {
    localStorage.removeItem(STORAGE_KEY);
  }
};
