<template>
    <div class="row-12 p-x-5">
        <!-- Przykład formularza -->
        <div class="col-4 col-sm-12">
            <form class="form-align-right" action="">
                <label for="email">Email</label>
                <input type="email" id="email" value="" placeholder="Adres email">
                <label for="nazwisko">Nazwisko</label>
                <textarea id="nazwisko" placeholder="Podaj nazwisko"></textarea>
                <label >Checbox</label>
                <label class="checkbox-label">
                    <input type="checkbox"> Potwierdzam 100%
                </label>
                <label >Radio</label>
                <label class="radio-label"><input type="radio" name="food"> Frytki</label>
                <label class="radio-label"><input type="radio" name="food"> Ziemniaki</label>
                <label class="radio-label"><input type="radio" name="food"> Ryż <i class="i-download"></i></label>
                <button class="button-outline-p" type="submit">anuluj</button>
                <button class="button-p" type="submit">wyslij</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Forms"
    }
</script>

<style scoped>

</style>