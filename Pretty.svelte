<script>
  import Tree from 'svelte-json-tree';
	
	export let value = "";

	function onClick(e) {
    const fnNode = e.path.find(a => a.classList && a.classList.contains('Function'));
    
    if (fnNode) {
     	fnNode.classList.toggle('show'); 
    }
  }
</script>

<style>
  :global(#md) .tree :global(ul) {
    padding: 0;
  }
  
  :global(#md) .tree :global(.Function:before) {
    content: "[Function]";
    font-size: 12px;
    color: black;
    letter-spacing: normal;
    font-style: normal;
  }

	:global(.mode-dark) :global(#md) .tree :global(.Function:before) {
    color: white;
  }
  
  :global(#md) .tree :global(.Function) {
    font-size: 1px;
    letter-spacing: -1px;
    color: transparent;
  }

	:global(#md) .tree :global(.Function:hover) {
    cursor: pointer;
  }

	:global(#md) .tree :global(.Function.show:before) {
    content: "";
  }

	:global(#md) .tree :global(.Function.show) {
    font-size: inherit;
    letter-spacing: inherit;
    color: inherit;
  }
</style>

<div on:click={onClick} class="tree" style="--json-tree-font-family: monaco, monospace;">
	<Tree {value} />
</div>
  