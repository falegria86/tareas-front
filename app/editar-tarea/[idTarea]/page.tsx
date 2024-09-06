import { getTareaById } from "@/actions/tareasActions"
import { EditarTareaForm } from "@/components/EditarTareaForm";

export default async function EditarTareaPage({ params }: { params: { idTarea: number } }) {
    const tarea = await getTareaById(params.idTarea);

    return (
        <>
            <h1 className="text-4xl uppercase mb-8">Editar tarea</h1>

            {tarea ? (
                <EditarTareaForm
                    tarea={tarea}
                    idTarea={params.idTarea}
                />
            ) : (
                <div>
                    No existe tarea con ese ID.
                </div>
            )}
        </>
    )
}