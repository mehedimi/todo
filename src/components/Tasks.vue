<template>
    <div class="card">
        <div class="card-header">Tasks</div>
        <div class="card-body">
            <ul class="list-group" v-if="tasks.length">
                <Task :task="task" :index="index" v-for="(task, index) in tasks" :key="index"/>
            </ul>
            <p class="text-center" v-else>No task found!</p>
        </div>
    </div>

</template>

<script>
import Task from './Task'
export default {
    props:[
        'tasks'
    ],
    components: {
        Task
    }
}
</script>

<style>
    .custom-checkbox{
        display: inline-block !important;
    }
    .delete-task{
        cursor: pointer;
    }

</style>
