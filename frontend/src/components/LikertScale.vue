<template>
  <div>
    <h3>{{ question.text }}</h3>
    <div class="likert-scale">
      <label v-for="n in 5" :key="n">
        <input
          type="radio"
          :value="n"
          :checked="modelValue === n"
          @input="$emit('update:modelValue', n)"
        /> {{ n }}
      </label>
      <label>
        <input
          type="radio"
          value="N/A"
          :checked="modelValue === 'N/A'"
          @input="$emit('update:modelValue', 'N/A')"
        /> Not Applicable
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true,
    },
    modelValue: {
      type: [Number, String],
      default: null,
    },
  },
};
</script>

<style scoped>
.likert-scale {
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
}
</style>
