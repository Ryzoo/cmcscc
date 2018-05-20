<template>
    <div class="row-6 p-x-5">
        <div class="col-6 col-sm-12">
            <h3>Siatka strukturalna</h3>
            <hr/>
            <p>Siatka oparta jest na wierszach i kolumnach. Każdy wiersz może być podzielony na maksymalnie <b>12</b> sekcji. Przy definicji kolumny podajemy jaką ma mieć długość na jakich rozdzielczościach.</p>
            <ul>
                <li><code>row-x</code> Definiuje dany element jako wiersz o x sekcjach (maks 12)</li>
                <li><code>col-x</code> Definiuje dany element jako kolumnę o rozmiarze x (maks 12). Dla wszystkich szerokości ekranu.</li>
            </ul>
            <p>Przykład wiersza 12 elementowego z 12 kolumnami o szerokości 1:</p>
            <div class="row-12 bck-primary p-2">
                <div class="col-1 text-a-c bck-second-d text-third-l" v-for="index in [1,2,3,4,5,6,7,8,9,10,11,12]" :key="index">{{index}}</div>
            </div>
            <p>Siatkę możemy definiować odpowiednio na różne urządzenia za pomocą kolumn o różnej szerekości.</p>
            <ul>
                <li><code>col-sm-x</code> Definiuje dany element jako kolumnę o rozmiarze x (maks 12) dla szerokości ekranu: <b>0px-768px</b></li>
                <li><code>col-md-x</code> Definiuje dany element jako kolumnę o rozmiarze x (maks 12) dla szerokości ekranu: <b>768px-1080px</b></li>
                <li><code>col-lg-x</code> Definiuje dany element jako kolumnę o rozmiarze x (maks 12) dla szerokości ekranu: <b>1080px-1440px</b></li>
            </ul>
            <p>Przykład wiersza 12 elementowego z 6 kolumnami o różnej szerokości w zależności od rozdzielczości:</p>
            <div class="row-12 bck-primary p-2">
                <div class="col-2 col-sm-12 col-md-6 col-lg-4 text-a-c bck-second-d text-third-l" v-for="index in [1,2,3,4,5,6]" :key="index">{{index}}</div>
            </div>
            <h3>Klasy powiązane</h3>
            <hr/>
            <p>Klasy te użyte w odpowiednich miejsach pomagają otrzymać zadowalający efekt.</p>
            <ul>
                <li><code>center-flex</code>Ustawia elementy centralnie w konterze.</li>
                <li><code>main-container</code>Tworzy główny element strony. Kontener z tą klasą powinień zawierać tylko 3 elementy. nav - main - footer</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Grid"
    }
</script>

<style scoped>

</style>