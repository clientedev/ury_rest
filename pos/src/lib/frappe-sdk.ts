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
  company: 'My Company',
  roles: [{ role: 'Administrator' }]
};

const mockUser = {
  name: 'Administrator',
  full_name: 'Usuário Admin',
  roles: [{ role: 'Administrator' }]
};

const mockOrders = [
  {
    name: 'PED-001',
    customer: 'Cliente Padrão',
    posting_date: '2026-01-22',
    posting_time: '16:00:00',
    status: 'Draft',
    rounded_total: 50.0,
    grand_total: 50.0,
    waiter: 'Administrator',
    items: [
      { item_code: 'PROD001', item_name: 'Hambúrguer Clássico', rate: 25.0, qty: 2, amount: 50.0 }
    ]
  }
];

const mockGet = (path: string, params?: any) => {
  if (path === 'ury.ury_pos.api.getPosProfile') {
    return Promise.resolve({ message: mockPosProfile });
  }
  if (path === 'ury.ury_pos.api.getMenuCourses') {
    return Promise.resolve({ message: mockCategories });
  }
  if (path === 'ury.ury_pos.api.getOrders') {
    return Promise.resolve({ 
      message: { 
        data: mockOrders,
        hasNextPage: false,
        totalCount: 1
      } 
    });
  }
  if (path.includes('frappe.client.get') && path.includes('POS+Invoice')) {
    return Promise.resolve({ message: mockOrders[0] });
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
  get_doc: (doctype: string, name?: string) => {
    if (doctype === 'POS Profile') return Promise.resolve(mockPosProfile);
    if (doctype === 'User') return Promise.resolve(mockUser);
    return Promise.resolve({});
  },
  getDoc: (doctype: string, name?: string) => {
    if (doctype === 'POS Profile') return Promise.resolve(mockPosProfile);
    if (doctype === 'User') return Promise.resolve(mockUser);
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
