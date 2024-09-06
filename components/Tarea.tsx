"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteTarea } from "@/actions/tareasActions";
import { GetTareas } from "@/interfaces/tareasInterfaces";

interface Props {
    tarea: GetTareas;
}

export const Tarea = ({ tarea }: Props) => {
    const router = useRouter();

    const handleDelete = async (id: number) => {
        const respuesta = await deleteTarea(id);

        if (respuesta.codigo === '200 OK') {
            router.refresh();
            console.log(respuesta.mensaje)
        }
    }

    return (
        <div className="flex">
            <Link href={`/editar-tarea/${tarea.id}`}>
                <div key={tarea.id} className="w-96 hover:bg-slate-700 px-2 cursor-pointer mb-2 border-b border-b-gray-400 pb-2">
                    {tarea.todo}
                </div>
            </Link>

            <button onClick={() => handleDelete(tarea.id)} className="text-red-500">X</button>
        </div>
    )
}