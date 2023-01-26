export interface Todo {
    id: number,
    descrizione: string,
    completato: boolean
}

export type task = Omit<Todo, 'id' | 'completato'>