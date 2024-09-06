import { z } from 'zod';

export const tareaSchema = z.object({
    texto: z.string().min(3, {
        message: 'La tarea debe contener al menos 3 caracteres',
    }).max(5, {
        message: 'Máximo 5 caracteres'
    }),
});