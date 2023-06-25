const { createApp, ref } = Vue;

createApp({
	setup() {
		const updateTopics = ref([
			"Product discovery and building what matters",
			"Measuring to ensure updates are a success",
			"And much more!",
		]);
		const emailAddress = ref('');
		const validEmail = ref(true);
		const signupSuccess = ref(true);


		const validateEmail = (email) => {
			return String(email)
				.toLowerCase()
				.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				);
		};

		function handleSubmit() {
			validEmail.value = validateEmail(emailAddress.value);
			if (validEmail.value) {
				signupSuccess.value = true;
			}

		}

		return {
			updateTopics,
			signupSuccess,
			handleSubmit,
			validEmail,
			emailAddress,
		};
	},
}).mount('#app');