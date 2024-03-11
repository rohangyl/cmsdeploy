import React, { createContext, useContext, useState } from 'react';

const ClaimContext = createContext();

export const ClaimProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  return (
    <ClaimContext.Provider value={{ userId, setUserId }}>
      {children}
    </ClaimContext.Provider>
  );
};

export const useClaimContext = () => {
  const context = useContext(ClaimContext);
  if (!context) {
    throw new Error('useClaimContext must be used within a ClaimProvider');
  }
  return context;
};
