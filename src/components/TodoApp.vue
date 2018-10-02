<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <CreateTask @taskCreated="addTask"/>
            <br>
            <Tasks :tasks="tasks"/>
        </div>
    </div>
</template>

<script>
import CreateTask from './CreateTask'
import Tasks from './Tasks'
export default {
    data(){
        return {
            tasks: []
        }
    },
    mounted(){
        this.$on('deleteTask', (index) => {
            this.tasks.splice(index, 1)
        })
    },
    components: {
        CreateTask, Tasks
    },
    methods: {
        addTask(task){
            this.tasks.push({
                text: task,
                isDone: false
            })
        }
    }
}
</script>

<style>

</style>
