// Mock Frappe SDK to prevent API errors and loop in development
const noop = () => Promise.resolve({ message: [], data: [] });
const noopGet = { 
  get: noop, 
  post: noop, 
  put: noop, 
  delete: noop,
  getLoggedInUser: () => Promise.resolve('Guest'),
  logout: noop,
};

export const call = noopGet;
export const db = {
  get_list: noop,
  get_doc: () => Promise.resolve({}),
  getDoc: () => Promise.resolve({}),
};

export const frappe = {
  call,
  db,
  request: noop,
};

export const auth = noopGet;

export const useFrappeAuth = () => ({
  currentUser: 'Guest',
  logout: () => {},
  login: () => Promise.resolve(),
  isLoading: false,
});

export const useFrappeGetDocList = () => ({ data: [], isLoading: false, mutate: noop });
export const useFrappeGetDoc = () => ({ data: {}, isLoading: false, mutate: noop });
