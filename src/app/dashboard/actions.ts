"use server"

import { Note } from "@/types";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function addTodo(formData: FormData) {
    const supabase = createClient();
    const text = formData.get("note") as string | null

    if (!text) {
        throw new Error("Text is required")
    }

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        throw new Error("User is not logged in")
    }

    const { error } = await supabase.from("dashboard").insert({
        task: text,
        user_id: user.id
    })

    if (error) {
        throw new Error("Error adding note")
    }

    revalidatePath("/dashboard")
}

export async function deleteTodo(id: number) {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        throw new Error("User is not logged in")
    }

    const { error } = await supabase.from("dashboard").delete().match({
        user_id: user.id,
        id: id
    })

    if (error) {
        throw new Error("Error deleting task")
    }

    revalidatePath("/todos")
}

export async function updateTodo(todo: Note) {


    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        throw new Error("User is not logged in")
    }

    const { error } = await supabase.from("dashboard").update(todo).match({
        user_id: user.id,
        id: todo.id
    })

    if (error) {
        throw new Error("Error updating task")
    }

    revalidatePath("/todos")
}