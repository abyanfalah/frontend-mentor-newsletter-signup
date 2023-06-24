const { createApp, ref } = Vue;

createApp({
	setup() {
		const updateTopics = ref([
			"Product discovery and building what matters",
			"Measuring to ensure updates are a success",
			"And much more!",
		]);

		const validEmail = ref(true);

		const signupSuccess = ref(true);

		function handleSubmit() {
			signupSuccess.value = true;
		}

		return {
			updateTopics,
			signupSuccess,
			handleSubmit,
			validEmail,
		};
	},
}).mount('#app');