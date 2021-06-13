export default interface Cached<T> {
    <K extends keyof T>(key:K):T[K] | null;
    <K extends keyof T, V extends T[K]>(key:K, value:V):Cached<T>;
}
