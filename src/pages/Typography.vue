<template>
    <div class="row-12 p-x-5">
        <div class="col-6 col-sm-12">
            <h3>Tagi związane z tekstem</h3>
            <hr/>
            <h1>H1  - Tytuł główny</h1>
            <h2>H2  - Podtytuł</h2>
            <h3>H3  - Tytuł zawartości</h3>
            <h4>H4  - Podtytuł zawartości</h4>
            <p><b>Tekst w tagu b</b></p>
            <p><small>Tekst w tagu small</small></p>
            <p><code>Tekst w tagu code</code></p>
            <p>Tutaj przykładowy tekst w tagu p <a href="">tutaj przykłądowy link</a>. Kontynuacja przykładowego tekstu.</p>
        </div>
        <!-- Lista -->
        <div class="col-6 col-sm-12">
            <h3>Lista</h3>
            <hr/>
            <ul>
                <li>To jest domyślna lista</li>
                <li><code>inline-list</code> Tworzy listę w lini.</li>
            </ul>
            <ul class="inline-list">
                <li>Lista</li>
                <li>Bardzo</li>
                <li>Płaska</li>
            </ul>
            <h3>Klasy pomocnicze</h3>
            <hr/>
            <ul>
                <li class="text-a-l" ><code>text-a-l</code>Do lewej</li>
                <li class="text-a-c" ><code>text-a-c</code>Wyśrodkowanie</li>
                <li class="text-a-r" ><code>text-a-r</code>Do prawej</li>
                <li class="text-sm" ><code>text-sm</code>Zmiana rozmiaru tekstu.</li>
                <li class="text-md" ><code>text-md</code>Zmiana rozmiaru tekstu.</li>
                <li class="text-lg" ><code>text-lg</code>Zmiana rozmiaru tekstu.</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Typography"
    }
</script>

<style scoped>

</style>