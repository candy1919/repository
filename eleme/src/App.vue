<template>
  <div id="app">
    <vHeader :seller="seller"></vHeader>
    <vContent></vContent>
  </div>
</template>

<script>
export default {
	name: 'app',
	data(){
		return {
			seller:{}
		}
	},
	created(){
		// GET /someUrl
	  this.$http.get('/api/seller').then(response => {

	    // get body data
	    this.someData = response.body;
	    if(this.someData.errno==0){
	    	this.seller=this.someData.data;
	    }
	  }, response => {
	    // error callback
	  });
	}
}
</script>

<style>
</style>
