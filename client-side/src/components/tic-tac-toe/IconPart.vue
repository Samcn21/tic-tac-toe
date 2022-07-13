<template>
    <div class="icon">
        {{ icon }}
    </div>   
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'IconPart',
    props: {
        icon: {
            type: String,
            default: ''
        }
    }
})
</script>

<style scoped>

.icon {
    font-size: 6rem;
    font-weight: 600;
    color:#18384f;
    padding-top: 20%;
}

</style>