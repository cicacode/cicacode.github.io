<template>
    <section class="section container pt-0">
        <div class="columns is-centered">
            <div class="column is-8">
                &copy; {{ year }} All rights reserved. All content and assets is copyright and protected by law.
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear(),
        };
    },
};
</script>