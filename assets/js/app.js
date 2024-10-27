new Vue({
    el: '#skills',
    data: {
        selected: ''
    }
});

new Vue({
    el: '#projects',
    data: {
        selectedCategory: '',
        projects: [
            { id: 1, title: 'Exabler - ML for Global Trade', description: 'Developed algorithms for global trade efficiency.', category: 'ML' },
            { id: 2, title: 'GreenWave Electronics', description: 'Sustainable electronics recycling and refurbishment.', category: 'Sustainability' },
            { id: 3, title: 'Humor Genome Project', description: 'Developed humor classifiers using NLP.', category: 'ML' },
            { id: 4, title: 'HyTech Racing', description: 'Composite materials for student racing team.', category: 'Sustainability' },
            { id: 5, title: 'Explainable AI for Skin Cancer Diagnosis', description: 'Research thesis on explainable medical AI.', category: 'Health' }
        ]
    },
    computed: {
        filteredProjects() {
            if (this.selectedCategory) {
                return this.projects.filter(project => project.category === this.selectedCategory);
            }
            return this.projects;
        }
    }
});
