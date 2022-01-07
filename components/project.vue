<template>
    <section class="section container">
        <div class="columns is-centered">
            <div class="column is-8">
                <div v-if="loading" class="columns is-multiline">
                    <div v-for="i in 8" :key="i" class="column is-half">
                        <div class="card">
                            <div class="card-content">
                                <skeleton width="50%" />
                                <skeleton class="mt-5" />
                                <skeleton class="mt-2" />
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="repos.length === 0" class="card card-content">
                    No data to display
                </div>
                <div v-else class="columns is-multiline">
                    <a
                        v-for="repo in repos"
                        :href="repo.html_url"
                        :key="repo.id"
                        class="column is-half"
                        target="_blank"
                    >
                        <div class="card">
                            <div class="card-content">
                                <p class="subtitle">{{ repo.name }}</p>
                                <p>{{ repo.description }}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import skeleton from "./skeleton.vue";
export default {
    components: { skeleton },
    data() {
        return {
            repos: [],
            loading: true,
        };
    },
    methods: {
        fetchRepo() {
            this.$axios
                .get("https://api.github.com/users/cicacode/repos")
                .then((response) => {
                    this.repos = response.data;
                    this.loading = false;
                })
                .catch((error) => {
                    this.repos = [];
                    this.loading = false;
                });
        },
    },
    created() {
        this.fetchRepo();
    },
};
</script>
