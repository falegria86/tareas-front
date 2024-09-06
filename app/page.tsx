import { getTareas } from "@/actions/tareasActions";
import { Tarea } from "@/components/Tarea";

export default async function Home() {
  const tareas = await getTareas();

  return (
    <>
      <main>
        <h1 className="text-center uppercase mb-5 text-3xl">Tareas</h1>

        {tareas && tareas.length > 0 ? tareas.map(tarea => (
          <Tarea
            key={tarea.id}
            tarea={tarea}
          />
        )) : (
          <div className="text-center">
            No hay tareas.
          </div>
        )}
      </main>
    </>
  );
}