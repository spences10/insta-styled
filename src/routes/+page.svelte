<script lang="ts">
	import Filters from '$lib/components/filters.svelte'
	import { filtersList } from '$lib/utils'
	import '../instagram.css'

	let optionValue = ''
</script>

<figure class={`filter-${optionValue}`}>
	<img
		src="https://picsum.photos/400/400"
		alt="random picsum asset"
	/>
</figure>

<Filters bind:value={optionValue} />

<div class="figure-group">
	{#each filtersList as item}
		<figure class={`styled-fugure filter-${item}`}>
			<img
				src="https://picsum.photos/400/400"
				alt="random picsum asset"
			/>
			<p>{item}</p>
		</figure>
	{/each}
</div>

<style>
	.styled-fugure {
		height: 100%;
	}
	.figure-group {
		margin: 0 auto;
		display: grid;
		gap: 0.5rem;
	}

	@media (min-width: 1000px) {
		.figure-group {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (min-width: 1450px) {
		.figure-group {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
