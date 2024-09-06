"use client"

import { useState } from "react";
import { GetTareas } from "@/interfaces/tareasInterfaces";
import { actualizarTarea } from "@/actions/tareasActions";
import { useRouter } from "next/navigation";

interface Props {
    tarea: GetTareas;
    idTarea: number;
}

export const EditarTareaForm = ({ tarea, idTarea }: Props) => {
    const router = useRouter();
    const [tareaValue, setTareaValue] = useState(tarea.todo);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const respuesta = await actualizarTarea(idTarea, { texto: tareaValue });

        if (respuesta.codigo === '200 OK') {
            router.refresh();

            setTimeout(() => {
                router.push('/');
            }, 200);
        } else {
            console.error('Algo falló');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={tareaValue}
                onChange={(e) => setTareaValue(e.target.value)}
                placeholder="Editar tarea..."
                className="py-2 px-4 border border-gray-400 bg-gray-800 rounded-sm mr-2"
            />
            <button
                type="submit"
                className="py-2 px-8 rounded-sm bg-green-600 hover:bg-green-800">
                Actualizar Tarea
            </button>
        </form>
    )
}