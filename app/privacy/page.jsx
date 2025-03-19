"use client";

import Privacy from '@/components/legal/Privacy';
import React, { useState } from 'react';

const PrivacyPage = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  return (
    <Privacy activeTab={activeTab} setActiveTab={setActiveTab} />
  );
};

export default PrivacyPage;