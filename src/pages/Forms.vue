<template>
    <div class="row-6 p-x-5">
        <!-- Przykład formularza -->
        <div class="col-6">
            <h3>Formularze i elementy</h3>
            <hr>
            <p>Podstawowe elementy formularza działają automatycznie. Masz jednak kilka opcji</p>
            <ul>
                <li><code>form-darkner</code> - uzywa ciemniejszego motywu</li>
                <li><code>form-align-left</code> - elementy w formularzu przesuniete w lewo</li>
                <li><code>form-align-center</code> - elementy w formularzu wysrodkowane</li>
                <li><code>form-align-right</code> - elementy w formularzu przesuniete w prawo</li>
                <li><code>form-shadow</code> - form ma pod soba lekki cien</li>
                <li><code>form-no-border</code> - usuwa border z forma</li>
                <li><code>input-with-icon</code> - kontener ktory posiada w sobie input oraz ikone</li>
                <li><code>input-with-icon-close</code> - kontener ktory posiada w sobie input oraz 2 ikony zmienne w zaleznosci od stanu inputa</li>
            </ul>
            <div class="row-6">
                <div class="col-3 p-5">
                    <p>Jaśniejszy motyw</p>
                    <form class="form-align-right" action="">
                        <label for="email">Email</label>
                        <div class="w-100 input-with-icon-close">
                            <input type="email" id="email" value="" placeholder="Adres email">
                            <i class="i-calendar"></i>
                            <i class="i-cross"></i>
                        </div>
                        <label for="nazwisko">Nazwisko</label>
                        <textarea id="nazwisko" placeholder="Podaj nazwisko"></textarea>
                        <label >Checbox</label>
                        <label class="checkbox-label">
                            <input type="checkbox"> Potwierdzam 100%
                        </label>
                        <label >Range</label>
                        <div class="w-100 range-with-label">
                            <input type="range" placeholder="Obciążenie" />
                            <span>100</span>
                        </div>
                        <label >Radio</label>
                        <label class="radio-label"><input type="radio" name="food"> Frytki</label>
                        <label class="radio-label"><input type="radio" name="food"> Ziemniaki</label>
                        <label class="radio-label"><input type="radio" name="food"> Ryż <i class="i-download"></i></label>
                        <button class="button-outline-p" type="submit">anuluj</button>
                        <button class="button-p" type="submit">wyslij</button>
                    </form>
                </div>
                <div class="col-3 p-5">
                    <p>Ciemniejszy motyw</p>
                    <form class="form-align-left form-darkner" action="">
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