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
		'xpro-ii'
	];
  export let value=''
</script>

<div class="mb-8">
  <select
    data-choose-theme
    class="select select-bordered select-primary w-full max-w-3xl text-xl"
    bind:value={value}
  >
    <option disabled selected>
      Choose a theme
      </option>
      {#each filtersList as filter}
         
         <option value={filter}>
          <span style="text-transform:capitalize;">{filter}</span>
        </option>
      {/each}
  </select>
</div>