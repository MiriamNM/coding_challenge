"use client";

import { Amplify } from 'aws-amplify';
import config from '../../lib/amplify-config';
import { useEffect, useState } from 'react';

export default function AmplifyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    try {
      Amplify.configure(config);
      setIsConfigured(true);
    } catch (error) {
      console.error("Error configurando Amplify:", error);
    }
  }, []);

  // 🚀 NO renderizar los hijos hasta que Amplify esté configurado
  if (!isConfigured) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <div>🔧 Configurando Amplify...</div>
      </div>
    );
  }

  return <>{children}</>;
}