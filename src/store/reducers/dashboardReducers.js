const initialState = {
    err: null,
    busy: false,
    info: null,
    addBusy: false,
    withdraw: [],
    deposit: [],
    invest: [],
    dash: {
      balance: 0,
      totalDeposits: 0,
      totalWithdrawals: 0,
      pendingIncome: 0,
      referals: 0,
      referalCommision: 0,
      affiliateLink: ''
    },
    profile: {
      username: '',
      email: '',
      fname: '',
      lname: '',
      phone: '',
      country: '',
      referalCode: '',
      referals: [],
      referer: '',
      createdAt: ''
    }
  };
  
  export default function dashboardReducer(state = initialState,  action = {}) {
    switch (action.type) {
      case 'LIST_BUSY':
        return { ...state, busy: action.busy };
      case 'GET_LIST':
        return { ...state, [action.list.name]: action.list.data, listErr: null };
      case 'GET_LIST_ERROR':
        return { ...state, listErr: action.err };
      case 'WITHDRAWAL_BUSY':
        return { ...state, addBusy: action.busy };
      case 'ADD_WITHDRAWAL':
        return { ...state, withdraw: [...state.withdraw, action.info], addWithdrawErr: null };
      case 'ADD_WITHDRAWAL_ERROR':
        return { ...state, addWithdrawErr: action.err };
      case 'DEPOSIT_BUSY':
        return { ...state, addBusy: action.busy };
      case 'ADD_DEPOSIT':
        return { ...state, addDepositErr: null };
      case 'ADD_DEPOSIT_ERROR':
        return { ...state, addDepositErr: action.err };
      case 'DASH_BUSY':
        return { ...state, busy: action.busy };
      case 'GET_DASH':
        return { ...state, dash: action.dash, getDashErr: null };
      case 'GET_DASH_ERROR':
        return { ...state, getDashErr: action.err };
      case 'PROFILE_BUSY':
        return { ...state, busy: action.busy };
      case 'GET_PROFILE':
        return { ...state, profile: action.profile, getProfileErr: null };
      case 'GET_PROFILE_ERROR':
        return { ...state, getProfileErr: action.err };
      default:
        return { ...state };
    }
  }