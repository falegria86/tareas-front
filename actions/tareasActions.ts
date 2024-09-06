"use server";

import { APIResponse, GetTareas } from "@/interfaces/tareasInterfaces";

const url = process.env.DB_URL;

export const getTareas = async () => {
    try {
        const resp = await fetch(`${url}/todos`, { cache: 'no-store' });
        const data: GetTareas[] = await resp.json();

        return data;
    } catch (error) {
        console.log("Error al obtener tareas: ", error);
        return null;
    }
}

export const postTarea = async (body: { texto: string }) => {
    const resp = await fetch(`${url}/todos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })

    const data: APIResponse = await resp.json();
    return data;
}

export const deleteTarea = async (id: number) => {
    const resp = await fetch(`${url}/todos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const data: APIResponse = await resp.json();
    return data;
}

export const getTareaById = async (id: number) => {
    try {
        const resp = await fetch(`${url}/todos/${id}`, { cache: 'no-store' });
        const data: GetTareas = await resp.json();

        return data;
    } catch (error) {
        console.log("Error al obtener tareas: ", error);
        return null;
    }
}

export const actualizarTarea = async (idTarea: number, body: { texto: string }) => {
    const resp = await fetch(`${url}/todos/${idTarea}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })

    const data: APIResponse = await resp.json();
    return data;
}