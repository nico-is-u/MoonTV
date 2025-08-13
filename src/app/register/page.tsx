/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// const [enableRegister, setEnableRegister] = useState(false);

// setEnableRegister(
//   Boolean((window as any).RUNTIME_CONFIG?.ENABLE_REGISTER)
// );


// // enableRegister

{/* <button
  type='button'
  onClick={handleRegister}
  disabled={!password || !username || loading}
  className='flex-1 inline-flex justify-center rounded-lg bg-blue-600 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50'
  >
  {loading ? '注册中...' : '注册'}
</button> */}

function RegisterPageClient() {
  const router = useRouter();

  // 去注册页面
  const goLogin = () => {
    router.push('/login');
  };

  return (
    <div className='relative min-h-screen flex items-center justify-center px-4 overflow-hidden'>
      <div className='absolute top-4 left-4'>
        <h1 className="text-xl font-semibold cursor-pointer" onClick={goLogin}>
          <span className="text-gray-500 dark:text-gray-400"> &lt; 用户登录 </span>
        </h1>
      </div>

      {/* 标题 */}
      <div className='text-center mb-6 sm:mb-8'>
        <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-2'>
          很抱歉，用户注册内测中
        </h1>
        <div className='w-12 sm:w-16 h-1 bg-red-500 mx-auto rounded-full'></div>
      </div>

    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterPageClient />
    </Suspense>
  );
}