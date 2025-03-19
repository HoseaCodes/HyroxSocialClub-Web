"use client";

import Privacy from '@/components/legal/Privacy';
import React, { useState } from 'react';

const TermsPage = () => {
  const [activeTab, setActiveTab] = useState('terms');

  return (
    <Privacy activeTab={activeTab} setActiveTab={setActiveTab} />
  );
};

export default TermsPage;