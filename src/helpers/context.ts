import { createContext, useContext } from "react";

export type PathManager = {
    path: string,
    setPath: (c: string) => void
}
export const PathContext = createContext<PathManager>({
    path: '#',
    setPath: () => {}
});

export const usePathContext = () => useContext(PathContext);