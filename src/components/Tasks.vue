<template>
    <div class="card">
        <div class="card-header">Tasks</div>
        <div class="card-body">
            <ul class="list-group" v-if="tasks.length">
                <Task v-for="(task, index) in tasks" :task="task" :key="index + 1" :index="index"/>
            </ul>
            <p v-else class="text-center">No task found!</p>
        </div>
    </div>

</template>

<script>
import Task from './Task'
import { mapGetters } from 'vuex'

export default {
    components: {
        Task
    },
    computed: {
        ...mapGetters(['tasks'])
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
