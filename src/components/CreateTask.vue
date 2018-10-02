<template>
    <div class="card">
        <div class="card-header">
            Create Task
        </div>
        <div class="card-body">
            <form @submit.prevent="createTask">
                <div class="form-group">
                    <textarea v-model="body" rows="4" class="form-control"></textarea>
                </div>
                <button class="btn btn-primary">Create Task</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            body: ''
        }
    },
    methods: {
        createTask(){
            if(!this.body){
                return
            }
            this.$emit('taskCreated', this.body)
            this.body = ''
        }
    }
}
</script>

<style>

</style>
