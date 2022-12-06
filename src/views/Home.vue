<script setup lang="ts">
import { ref, computed } from 'vue';

interface ITodo {
    description: string;
    done: boolean;
}

const todos = ref<ITodo[]>([]);
const inputDescription = ref('');

const todosAsc = computed(() => {
    return todos.value;
});

const addTodo = () => {
    todos.value.push({
        description: inputDescription.value,
        done: false,
    });

    inputDescription.value = "";
}

</script>

<template>
    <div class="page">
        <div class="container">
            <h1 class="title">Todo App</h1>

            <form @submit.prevent="addTodo">
                <input type="text" v-model="inputDescription" placeholder="Todo description"
                    class="input-description" />
            </form>

            <div>
                <h2 class="subtitle">Todos</h2>

                <div v-for="todo in todosAsc" class="todo">
                    <label>
                        <input type="checkbox" v-model="todo.done">
                        <span>{{ todo.description }}</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.page {
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    margin: 8px;
    width: calc(100% / 12 * 6);
}

@media screen and (max-width: 800px) {
    .container {
        margin: 8px;
        width: calc(100% / 12 * 12);
    }
}

.title {
    margin: 0;
    margin-bottom: 8px;
}

.subtitle {
    margin: 0;
    margin-bottom: 8px;
}

.input-description {
    border: 2px solid gainsboro;
    border-radius: 8px;
    margin-bottom: 8px;
    padding: 8px;
    outline: 0;
}

.input-description:focus {
    border: 2px solid #FFAA00;
}

.todo {
    margin-bottom: 16px;
    padding: 8px;
    border-radius: 8px;
    box-shadow: 0px 0px 8px #33333330;
}

.todo label {
    display: flex;
    gap: 8px;
}

.todo input[type=checkbox] {
    accent-color: #FFAA00;
}
</style>