<script lang="ts">
	let filtersList = [
		'1977',
		'aden',
		'amaro',
		'ashby',
		'brannan',
		'brooklyn',
		'charmes',
		'clarendon',
		'crema',
		'dogpatch',
		'earlybird',
		'gingham',
		'ginza',
		'hefe',
		'helena',
		'hudson',
		'inkwell',
		'juno',
		'kelvin',
		'lark',
		'lofi',
		'ludwig',
		'maven',
		'mayfair',
		'moon',
		'nashville',
		'perpetua',
		'poprocket',
		'reyes',
		'rise',
		'sierra',
		'skyline',
		'slumber',
		'stinson',
		'sutro',
		'toaster',
		'valencia',
		'vesper',
		'walden',
		'willow',
		'xpro-ii',
	]
	export let value = ''
</script>

<select bind:value>
	{#each filtersList as filter}
		<option value={filter}>
			<span>{filter}</span>
		</option>
	{/each}
</select>
