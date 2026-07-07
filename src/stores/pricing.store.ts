import { persistentAtom } from '@nanostores/persistent';

export type Currency = 'usd' | 'twd';

// 使用者偏好的報價幣別，跨頁與重新載入存活。
// 空字串代表尚未選擇：客戶端會改用語系預設（en → usd、zh-tw → twd）。
export const preferredCurrency = persistentAtom<Currency | ''>(
    'kairos-currency',
    '',
);
