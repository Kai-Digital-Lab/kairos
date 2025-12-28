import { persistentAtom } from '@nanostores/persistent';

// Calculate initial value based on system preference if client-side
let initialTheme = 'light';
if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    initialTheme = 'dark';
}

// 定義 Store，預設值為 detected system preference
// 第一個參數 'pref:mode' 是存入 localStorage 的 key，必須對應 MainLayout 中的 FOUC script
export const themeStore = persistentAtom<string>('pref:mode', initialTheme);

// 監聽狀態改變，並操作 DOM
// 這是 Client-side 邏輯，會在瀏覽器端執行
if (typeof window !== 'undefined') {
    themeStore.subscribe((value) => {
        const root = document.documentElement;
        if (value === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    });
}

// 切換函式
export function toggleTheme() {
    const current = themeStore.get();
    const next = current === 'dark' ? 'light' : 'dark';
    themeStore.set(next);
}