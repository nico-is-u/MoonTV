'use client';

import Link from 'next/link';

import { BackButton } from './BackButton';
import { useSite } from './SiteProvider';
import { ThemeToggle } from './ThemeToggle';
import { UserMenu } from './UserMenu';
import { useLayoutEffect, useState } from 'react';

interface MobileHeaderProps {
  showBackButton?: boolean;
}

/* 写的非常粗糙，待优化 */
import { getAuthInfoFromBrowserCookie } from '@/lib/auth';
interface AuthInfo {
  username?: string;
  role?: 'owner' | 'admin' | 'user';
}

const MobileHeader = ({ showBackButton = false }: MobileHeaderProps) => {

  /* 写的非常粗糙，待优化 */
  const [authInfo, setAuthInfo] = useState<AuthInfo | null>(null);

  useLayoutEffect(() => {
    /* 写的非常粗糙，待优化 */
    if (typeof window !== 'undefined') {
      const auth = getAuthInfoFromBrowserCookie();
      setAuthInfo(auth);
    }
  }, []);

  const { siteName } = useSite();
  return (
    <header className='md:hidden relative w-full bg-white/70 backdrop-blur-xl border-b border-gray-200/50 shadow-sm dark:bg-gray-900/70 dark:border-gray-700/50'>
      <div className='h-12 flex items-center justify-between px-4'>
        {/* 左侧：返回按钮和设置按钮 */}
        <div className='flex items-center gap-2'>
          {showBackButton && <BackButton />}
        </div>

        {/* 右侧按钮 */}
        <div className='flex items-center gap-2'>
          {/* 主题切换，暂时屏蔽 */}
          {/* <ThemeToggle /> */}
          <UserMenu />
        </div>
      </div>

      {/* 中间：Logo（绝对居中） */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Link
          href='/'
          className='text-2xl font-bold text-orange-600 tracking-tight hover:opacity-80 transition-opacity'
        >
          {/* 非常粗糙，待优化 */}
          {authInfo?.username === 'jiajia' ? '佳佳和东东' : siteName}
        </Link>
      </div>
    </header>
  );
};

export default MobileHeader;
