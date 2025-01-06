<script lang="ts">
	import { filtersList } from '$lib/utils'

	export let value = ''
</script>

<select bind:value>
	{#each filtersList as filter}
		<option value={filter}>{filter}</option>
	{/each}
</select>
