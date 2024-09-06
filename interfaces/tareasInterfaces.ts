export interface GetTareas {
    id: number;
    todo: string;
    fecha_creacion: Date;
}

export interface APIResponse {
    codigo: string;
    mensaje: string;
}
