// Mock Frappe SDK to prevent API errors and loop in development
const noop = () => Promise.resolve({ message: [], data: [] });

// Realistic mock data
const mockCategories = [
  { name: 'Entradas' },
  { name: 'Pratos Principais' },
  { name: 'Bebidas' },
  { name: 'Sobremesas' }
];

const mockPosProfile = {
  pos_profile: 'Default POS',
  name: 'Default POS',
  restaurant: 'Default Restaurant',
  currency: 'BRL',
  waiter: 'Administrator',
  cashier: 'Administrator',
  company: 'My Company'
};

const mockGet = (path: string) => {
  if (path === 'ury.ury_pos.api.getPosProfile') {
    return Promise.resolve({ message: mockPosProfile });
  }
  if (path === 'ury.ury_pos.api.getMenuCourses') {
    return Promise.resolve({ message: mockCategories });
  }
  return Promise.resolve({ message: [], data: [] });
};

const noopGet = { 
  get: mockGet, 
  post: noop, 
  put: noop, 
  delete: noop,
  getLoggedInUser: () => Promise.resolve('Administrator'),
  logout: noop,
};

export const call = noopGet;
export const db = {
  get_list: (path: string) => {
    if (path === 'URY Menu Course') return Promise.resolve(mockCategories);
    return Promise.resolve([]);
  },
  get_doc: (doctype: string) => {
    if (doctype === 'POS Profile') return Promise.resolve(mockPosProfile);
    return Promise.resolve({});
  },
  getDoc: (doctype: string) => {
    if (doctype === 'POS Profile') return Promise.resolve(mockPosProfile);
    return Promise.resolve({});
  },
  getDocList: (doctype: string) => {
    if (doctype === 'URY Menu Course') return Promise.resolve(mockCategories);
    return Promise.resolve([]);
  },
};

export const frappe = {
  call,
  db,
  request: noop,
};

export const auth = noopGet;

export const useFrappeAuth = () => ({
  currentUser: 'Administrator',
  logout: () => {},
  login: () => Promise.resolve(),
  isLoading: false,
});

export const useFrappeGetDocList = () => ({ data: mockCategories, isLoading: false, mutate: noop });
export const useFrappeGetDoc = () => ({ data: mockPosProfile, isLoading: false, mutate: noop });
