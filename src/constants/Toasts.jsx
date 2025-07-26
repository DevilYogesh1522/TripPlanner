// src/constants/Toasts.jsx
import toast from "react-hot-toast";

export const WarningToast = (message) => {
  toast.error(message, {
    duration: 3000,
    position: 'top-right',
    style: {
      backgroundColor: '#FFFBE6', // Light yellow
      color: '#DAA520', // Dark yellow text
      border: '1px solid #FFD700', // Gold border
    },
    icon: '⚠️',
  });
};

export const ErrorToast = (message) => {
  toast.error(message, {
    duration: 3000,
    position: 'top-right',
    style: {
      backgroundColor: '#FEE2E2', // Light red
      color: '#DC2626', // Dark red text
      border: '1px solid #EF4444', // Red border
    },
    icon: '🚫',
  });
};

export const SuccessToast = (message) => {
  toast.success(message, {
    duration: 3000,
    position: 'top-right',
    style: {
      backgroundColor: '#F0FFF4', // Light green
      color: '#22C55E', // Dark green text
      border: '1px solid #4CAF50', // Green border
    },
    icon: '✅',
  });
};