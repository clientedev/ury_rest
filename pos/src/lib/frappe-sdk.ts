// Mock Frappe SDK to prevent API errors and loop in development
const noop = () => Promise.resolve({ message: [], data: [] });

export const frappe = {
  call: noop,
  db: {
    get_list: noop,
    get_doc: () => Promise.resolve({}),
  },
  request: noop,
};

export const useFrappeAuth = () => ({
  currentUser: 'Guest',
  logout: () => {},
  login: () => Promise.resolve(),
  isLoading: false,
});

export const useFrappeGetDocList = () => ({ data: [], isLoading: false, mutate: noop });
export const useFrappeGetDoc = () => ({ data: {}, isLoading: false, mutate: noop });
