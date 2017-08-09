export default{
    app : {
    	inputValue: '',
        searchValue: '',
        etag: '',
    	data: [],
    	playing: false,
        player: null,
    	id: '',
    	windowHeight2x: window.innerHeight * 4,
        playerCenterTop: (window.innerHeight * 4) / 2.665,
        difference: 0,
        videos: {
        	search: [],
        	grid: [] 
        },
        pageToken: {
            search: '',
            grid: ''
        },
    }    
}