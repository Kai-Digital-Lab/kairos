import { atom } from 'nanostores';

// 1. 定義專案資料介面 (共用)
export interface ProjectData {
    title: string;
    description: string;
    fullDescription: string; // Modal 裡顯示的詳細說明
    tags: string[];
    image: string; // CSS class for gradient
    link: string;
}

// 2. 狀態：目前選中的專案 (null 代表沒選/關閉)
export const activeProject = atom<ProjectData | null>(null);