<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['result'],
    methods: {
        sendResult() {
        this.$emit('end', this.result)
        }
    }
})
</script>
