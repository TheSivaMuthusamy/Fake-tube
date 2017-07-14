function fetchVideo(url) {
	return fetch(url)
	.then((response) => response.json())
	.then(function(data) {
		return data.items[0]
	})
}
