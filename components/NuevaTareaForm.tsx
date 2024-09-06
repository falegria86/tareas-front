"use client"

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { postTarea } from "@/actions/tareasActions";
import { tareaSchema } from "@/schemas/tareas";

export const NuevaTareaForm = () => {
    const router = useRouter();

    const form = useForm<z.infer<typeof tareaSchema>>({
        resolver: zodResolver(tareaSchema)
    });

    const onSubmit = async (valores: z.infer<typeof tareaSchema>) => {
        const obj = { texto: valores.texto }

        const resp = await postTarea(obj);
        if (resp.codigo === '200 OK') {
            router.refresh();
            router.push('/');
        } else {
            console.log("Falló")
        }
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <input
                placeholder="Nueva tarea..."
                className="text-white py-2 px-4 border border-gray-400 bg-gray-800 rounded-sm mr-2"
                {...form.register('texto')}
            />

            <button
                type="submit"
                className="py-2 px-8 rounded-sm bg-green-600 hover:bg-green-800">
                Crear Tarea
            </button>

            {form.formState.errors.texto && (
                <div className="text-yellow-500">{form.formState.errors.texto.message}</div>
            )}
        </form>
    )
}