<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <CreateTask/>
            <br>
            <Tasks/>
        </div>
    </div>
</template>

<script>
import CreateTask from './CreateTask'
import Tasks from './Tasks'
export default {
    components: {
        CreateTask, Tasks
    }
}
</script>

<style>

</style>
