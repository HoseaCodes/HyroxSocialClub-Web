"use client";

import Privacy from '@/components/legal/privacy';
import React, { useState } from 'react';

const TermsPage = () => {
  const [activeTab, setActiveTab] = useState('terms');

  return (
    <Privacy activeTab={activeTab} setActiveTab={setActiveTab} />
  );
};

export default TermsPage;