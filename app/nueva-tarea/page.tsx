import { NuevaTareaForm } from "@/components/NuevaTareaForm";

export default async function NuevaTareaPage() {
    return (
        <>
            <h1 className="text-3xl uppercase mb-5">Crear nueva tarea</h1>
            <NuevaTareaForm />
        </>
    )
}