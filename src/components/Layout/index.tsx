import { useState, useEffect } from 'react';
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useRouter } from 'next/router';

export const Layout = ({ children }: any) => {
  const { pathname } = useRouter();
  const [activeTab, setActiveTab] = useState<string>('');

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  return (
    <>
      <Header activeTab={activeTab} />
        {children}
      <Footer />
    </>
  );
};