<template>
    <div class="row-12 p-x-5">
        <div class="col-6 col-sm-12">
            <h3>Opis oraz ogólne informacje</h3>
            <hr/>
            <p>Framework oparty jest na 3 kolorach głównych do zdefiniowania w style.scss.</p>
            <ul>
                <li><b>Primary</b> - jest to kolor główny używany jednak jako akcentowy.</li>
                <li><b>Second</b> - jest to kolor wiekszości elementów wyświetlanych. ( preferowany kolor ciemny )</li>
                <li><b>Third</b> - jest to kolor kontrastowy ( preferowany kolor jasny )</li>
            </ul>
            <p>Używana jest siatka oparta display:grid. Każdy wiersz posiada 12 wierszy.<br/>Pełne wsparcie dla responywności.</p>
            <p>W celu nauki oraz testów. Polecamy zakładkę <b>"Przykłady"</b>. Każdy stworzny przez nas element jest tam dokładnie opisany, a zamieszczone przykłady z kodem na pewno pomogą w implementacji.</p>
            <h3>Wymagania</h3>
            <hr/>
            <p>Do poprawnego działania biblioteka potrzebuje:</p>
            <ul>
                <li><b>jQuery</b> - do obsługi interaktywnych akcji.</li>
                <li><b>Hammer.js</b> - aby umożliwić kilka funkcjonalności na urządzeniach moblinych</li>
            </ul>
           </div>
    </div>
</template>

<script>
    export default {
        name: "opis"
    }
</script>

<style scoped>

</style>