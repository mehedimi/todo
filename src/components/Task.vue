<template>
    <li class="list-group-item">
        <div class="custom-control custom-checkbox">
            <input v-model="task.isDone" type="checkbox" class="custom-control-input" :id="`customCheck-${index}`">
            <label class="custom-control-label" :for="`customCheck-${index}`">
                <del v-if="task.isDone">{{ task.text }}</del>
                <span v-else>{{ task.text }}</span>
            </label>
        </div>
        <span class="float-right delete-task" @click="deleteTask(index)">x</span>
    </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: [
        'task',
        'index'
    ],
    methods: {
        ...mapActions(['deleteTask'])
    }
}
</script>

<style>

</style>
