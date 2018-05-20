<template>
    <div class="row-12 p-x-5">
        <!-- Przykład formularza -->
        <div class="col-4 col-sm-12">
            <form  class="form-align-left bck-second-d text-third-l" action="">
                <label >Przyciski wolne</label>
                <button class="button-free-s" type="submit">secondary</button>
                <button class="button-free-p" type="submit">primary</button>
                <button class="button-free-l" type="submit">light</button>
                <label >Przyciski z obwodem</label>
                <button class="button-outline-s" type="submit">secondary</button>
                <button class="button-outline-p" type="submit">primary</button>
                <button class="button-outline-l" type="submit">light</button>
                <label >Przyciski zwykłe</label>
                <button class="button-s button-sm" type="submit">secondary</button>
                <button class="button-p" type="submit">primary</button>
                <button class="button-l button-sm" type="submit">light</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Buttons"
    }
</script>

<style scoped>

</style>